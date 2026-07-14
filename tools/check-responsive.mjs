import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const issues = [];

const publicPages = [
  'index.html',
  'amparo.html',
  'baile.html',
  'contacto.html',
  'cuidar.html',
  'diferenciais.html',
  'impacto.html',
  'privacidade.html',
  'quem-somos.html',
  'termos.html',
];

const viewportWidths = [320, 375, 414, 768, 1024, 1280, 1440];

function fail(message) {
  issues.push(message);
}

async function readProjectFile(file) {
  return readFile(path.join(root, file), 'utf8');
}

function requirePattern(label, content, pattern) {
  if (!pattern.test(content)) {
    fail(label);
  }
}

function checkPageHead(file, content) {
  requirePattern(`${file} must declare a responsive viewport meta tag.`, content, /<meta\s+name=["']viewport["']\s+content=["'][^"']*width=device-width[^"']*initial-scale=1\.0[^"']*["']/i);
  requirePattern(`${file} must load the global stylesheet.`, content, /<link\s+rel=["']stylesheet["']\s+href=["']css\/styles\.css["']/i);

  if (file === 'index.html') {
    requirePattern('index.html must load homepage responsive stylesheet.', content, /<link\s+rel=["']stylesheet["']\s+href=["']css\/layout-home\.css["']/i);
    requirePattern('index.html must use the layout-home body class.', content, /<body[^>]*class=["'][^"']*\blayout-home\b/i);
  } else {
    requirePattern(`${file} must use the subpage body class.`, content, /<body[^>]*class=["'][^"']*\bsubpage\b/i);
  }
}

function checkCssGuardrails(globalCss, homeCss) {
  const combinedCss = `${globalCss}\n${homeCss}`;

  const requiredBreakpoints = [
    '@media (max-width: 900px)',
    '@media (max-width: 768px)',
    '@media (max-width: 640px)',
    '@media (max-width: 480px)',
    '@media (max-width: 360px)',
  ];

  for (const breakpoint of requiredBreakpoints) {
    if (!combinedCss.includes(breakpoint)) {
      fail(`Missing responsive breakpoint: ${breakpoint}.`);
    }
  }

  requirePattern('CSS must include text wrapping guardrails.', combinedCss, /overflow-wrap:\s*(?:break-word|anywhere)/);
  requirePattern('CSS grids must use capped minimum widths for narrow viewports.', combinedCss, /minmax\(min\(100%,\s*\d+px\),\s*1fr\)/);
  requirePattern('Document root must prevent page-level horizontal scrolling.', globalCss, /html\s*\{[\s\S]*?overflow-x:\s*hidden[\s\S]*?body\s*\{[\s\S]*?overflow-x:\s*hidden[\s\S]*?main\s*\{[\s\S]*?overflow-x:\s*hidden/);
  requirePattern('Supported browsers should clip page-level horizontal overflow.', globalCss, /@supports \(overflow:\s*clip\)\s*\{[\s\S]*?html,[\s\S]*?body,[\s\S]*?main\s*\{[\s\S]*?overflow-x:\s*clip/);
  requirePattern('Subpage mobile navigation must be present.', globalCss, /\.nav-mobile\s*\{/);
  requirePattern('Homepage mobile navigation must be present.', homeCss, /\.o-nav-mobile\s*\{/);
  requirePattern('Fixed CTAs must stay centered on narrow viewports.', homeCss, /body\.layout-home \.o-float-actions\s*\{[\s\S]*?left:\s*50%[\s\S]*?width:\s*auto[\s\S]*?transform:\s*translate3d\(-50%,\s*0,\s*0\)/);
  requirePattern('Homepage floating CTA must reset subpage mobile offsets.', homeCss, /body\.layout-home \.o-float-cta\s*\{[\s\S]*?right:\s*auto[\s\S]*?bottom:\s*auto[\s\S]*?left:\s*auto[\s\S]*?width:\s*auto/);
  requirePattern('Homepage floating CTA must preserve intrinsic button width.', homeCss, /body\.layout-home \.o-float-cta-btn\s*\{[\s\S]*?width:\s*auto/);
  requirePattern('Homepage credentials grid must avoid mobile min-content overflow.', homeCss, /@media \(max-width: 768px\)[\s\S]*?\.o-credentials-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  requirePattern('Consultorias CTA must be centered with block-level flex sizing.', homeCss, /\.o-consultorias-destaque-cta\s*\{[\s\S]*?display:\s*flex[\s\S]*?width:\s*min\(100%,\s*320px\)[\s\S]*?margin-inline:\s*auto/);
  requirePattern('Testimonial carousel overflow must stay scoped to its container.', homeCss, /\.o-testimonials-viewport\s*\{[\s\S]*?overflow:\s*hidden/);
  requirePattern('Partner marquee overflow must stay scoped to its container.', homeCss, /\.o-partners-marquee-wrapper\s*\{[\s\S]*?overflow:\s*hidden/);
  requirePattern('Partner marquee must use compositor-friendly transforms.', homeCss, /\.o-partners-marquee\s*\{[\s\S]*?will-change:\s*transform[\s\S]*?@keyframes o-marquee-scroll[\s\S]*?translate3d/);
  requirePattern('Subpage footer links must stay centered.', globalCss, /\.footer-links\s*\{[\s\S]*?justify-content:\s*center/);
  requirePattern('Subpage footer links must have emphasized link color.', globalCss, /\.footer-links a\s*\{[\s\S]*?color:\s*var\(--brand\)[\s\S]*?font-weight:\s*600/);
  requirePattern('Contact page must offset fixed header on narrow viewports.', globalCss, /\.contact-section\s*\{[\s\S]*?scroll-margin-top:\s*calc\(72px \+ var\(--space-md\)\)[\s\S]*?@media \(max-width: 480px\)[\s\S]*?\.contact-section\s*\{[\s\S]*?padding:\s*calc\(72px \+ 2rem\) 0 2rem/);

  const fixedGridMinimums = combinedCss.match(/minmax\(\s*(\d{3,})px\s*,\s*1fr\s*\)/g) || [];
  if (fixedGridMinimums.length > 0) {
    fail(`Fixed grid minimums can overflow 320px viewports: ${fixedGridMinimums.join(', ')}.`);
  }

  const fullViewportWidths = combinedCss.match(/width:\s*100vw/g) || [];
  if (fullViewportWidths.length > 0) {
    fail('Avoid width: 100vw because it can create horizontal scrollbars on platforms with scrollbar gutters.');
  }
}

for (const page of publicPages) {
  const content = await readProjectFile(page);
  checkPageHead(page, content);
}

const globalCss = await readProjectFile('css/styles.css');
const homeCss = await readProjectFile('css/layout-home.css');
checkCssGuardrails(globalCss, homeCss);

if (issues.length > 0) {
  console.error(`Responsive smoke check failed with ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Responsive source smoke check passed for ${publicPages.length} pages and viewport targets: ${viewportWidths.join(', ')}.`);
console.log('Note: this is a source-level guardrail check, not a rendered browser overlap test.');
