import { access, readdir, readFile, stat } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const args = new Set(process.argv.slice(2).map((arg) => arg.replace(/^--/, '')));
const runAll = args.size === 0;
const issues = [];

const ignoredDirs = new Set(['.git', 'node_modules', 'dist', '.vercel']);
const requiredRootFiles = [
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
  'robots.txt',
  'sitemap.xml',
  'package.json',
  'package-lock.json',
  'vercel.json',
];

function fail(message) {
  issues.push(message);
}

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function getFilesByExtension(extension) {
  const files = await walk(root);
  return files.filter((file) => path.extname(file) === extension);
}

async function checkFormat() {
  if (!await exists(path.join(root, '.editorconfig'))) {
    fail('Missing .editorconfig.');
  }

  for (const file of ['.editorconfig', '.gitignore', 'package.json', 'vercel.json']) {
    const filePath = path.join(root, file);
    if (!await exists(filePath)) {
      fail(`Missing ${file}.`);
      continue;
    }

    const content = await readFile(filePath, 'utf8');
    if (!content.endsWith('\n')) {
      fail(`${file} must end with a newline.`);
    }
  }
}

async function checkSmoke() {
  for (const file of requiredRootFiles) {
    if (!await exists(path.join(root, file))) {
      fail(`Missing required file: ${file}.`);
    }
  }

  const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  for (const scriptName of ['dev', 'preview', 'lint', 'test', 'build']) {
    if (!packageJson.scripts?.[scriptName]) {
      fail(`Missing npm script: ${scriptName}.`);
    }
  }
}

async function checkJsonSyntax() {
  const jsonFiles = await getFilesByExtension('.json');
  for (const file of jsonFiles) {
    try {
      JSON.parse(await readFile(file, 'utf8'));
    } catch (error) {
      fail(`Invalid JSON in ${path.relative(root, file)}: ${error.message}`);
    }
  }
}

async function checkJavaScriptSyntax() {
  const jsFiles = await getFilesByExtension('.js');
  const mjsFiles = await getFilesByExtension('.mjs');

  for (const file of [...jsFiles, ...mjsFiles]) {
    const result = spawnSync(process.execPath, ['--check', file], {
      cwd: root,
      encoding: 'utf8',
    });

    if (result.status !== 0) {
      fail(`JavaScript syntax check failed for ${path.relative(root, file)}:\n${result.stderr || result.stdout}`);
    }
  }
}

function isExternalOrSpecialReference(reference) {
  return /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(reference);
}

async function checkHtmlReferences() {
  const htmlFiles = await getFilesByExtension('.html');

  for (const file of htmlFiles) {
    const relativeFile = path.relative(root, file);
    const content = await readFile(file, 'utf8');

    if (!/<!doctype html>/i.test(content)) {
      fail(`${relativeFile} is missing <!doctype html>.`);
    }

    if (!/<title>[^<]+<\/title>/i.test(content)) {
      fail(`${relativeFile} is missing a non-empty <title>.`);
    }

    const blankTargets = content.match(/<a\b[^>]*target=["']_blank["'][^>]*>/gi) || [];
    for (const tag of blankTargets) {
      const rel = tag.match(/\brel=["']([^"']+)["']/i)?.[1] || '';
      if (!/\bnoopener\b/i.test(rel) || !/\bnoreferrer\b/i.test(rel)) {
        fail(`${relativeFile} has target="_blank" without rel="noopener noreferrer": ${tag}`);
      }
    }

    const references = content.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi);
    for (const match of references) {
      const rawReference = match[1];
      if (isExternalOrSpecialReference(rawReference)) continue;

      const cleanReference = rawReference.split('#')[0].split('?')[0];
      if (!cleanReference || cleanReference.startsWith('//')) continue;

      const referencePath = cleanReference.startsWith('/')
        ? path.join(root, cleanReference)
        : path.resolve(path.dirname(file), cleanReference);

      if (!await exists(referencePath)) {
        fail(`${relativeFile} references missing file: ${rawReference}`);
      }
    }
  }
}

async function checkLint() {
  await checkJsonSyntax();
  await checkJavaScriptSyntax();
  await checkHtmlReferences();
}

if (runAll || args.has('format')) {
  await checkFormat();
}

if (runAll || args.has('smoke')) {
  await checkSmoke();
}

if (runAll || args.has('lint')) {
  await checkLint();
}

if (issues.length > 0) {
  console.error(`Project checks failed with ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log('Project checks passed.');
