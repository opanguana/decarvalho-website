# Responsive QA checklist

Use this checklist before merging layout, content, navigation, form, modal, CTA, image, or footer changes.

## Automated source checks

```bash
npm run lint
npm test
npm run responsive:check
npm run build
```

`npm run responsive:check` validates source-level guardrails only. It does not render pages, detect pixel overlap, or replace manual browser review.

## Pages in scope

- `index.html`
- `amparo.html`
- `baile.html`
- `contacto.html`
- `cuidar.html`
- `diferenciais.html`
- `impacto.html`
- `privacidade.html`
- `quem-somos.html`
- `termos.html`

## Viewports to test

| Device class | Widths |
|---|---|
| Small mobile | `320`, `375`, `414` |
| Tablet | `768` |
| Laptop | `1024`, `1280` |
| Desktop | `1440` |
| Mobile landscape | `667x375`, `896x414` |

## Manual acceptance criteria

For every page and viewport:

- No horizontal page scroll unless intentionally documented.
- Header and navigation remain usable; no menu item overlaps logo, language switcher, or CTA.
- Hero logos, headings, and CTA buttons fit without clipping.
- Cards and grids stack cleanly and maintain readable spacing.
- Partner logos scale without distortion or escaping their containers.
- Forms keep labels, inputs, privacy text, and buttons readable and tappable.
- Modals/popups fit inside the viewport and scroll internally when content is long.
- Floating CTAs do not cover critical content or escape the viewport.
- Footer links wrap cleanly and remain tappable.
- Long Portuguese/English translated strings wrap inside their containers.

## Browser workflow

1. Run `npm run dev`.
2. Open `http://localhost:5173`.
3. Use browser responsive mode for each viewport listed above.
4. Check both Portuguese and English where language switching changes text length.
5. Test mobile menu open/close and dropdowns.
6. On `index.html`, test partner marquee, consultoria preview modal, floating CTA, FAQ, and footer.
7. On `contacto.html`, test all form fields, privacy checkbox, validation states, email links, and WhatsApp links.

## If an issue is found

- Prefer CSS containment fixes: `min-width: 0`, `max-width: 100%`, `overflow-wrap`, `flex-wrap`, `minmax(min(100%, ...), 1fr)`, and targeted media queries.
- Avoid hiding overflow as the only fix unless the overflowing content is decorative.
- Do not restructure HTML unless CSS cannot solve the issue safely.
- Add or update `npm run responsive:check` guardrails when the issue can be detected from source.
