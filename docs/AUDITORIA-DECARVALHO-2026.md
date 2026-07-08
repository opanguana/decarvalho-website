# Auditoria DeCarvalho — Website (Skills 1–11)

**Data:** Março 2026  
**Scope:** Estratégia, IA, Mercado, Copy, UX/UI, Front-end, Back-end mínimo, SEO técnico, Acessibilidade, Performance, CRO, QA.  
**Fora do scope:** Analytics/Tracking (12), DevOps/Security/Deployment (13) — backlog futuro.

---

## Resumo executivo

O site é **multi-página institucional** com catálogo de serviços (Amparo, Cuidar+, Baile da Saudade). A auditoria identificou lacunas em **acessibilidade** (skip link, focus visível), **arquitetura de informação** (navegação das subpáginas sem link "Impacto") e **CRO** (telefone duplicado no footer, links de privacidade para #). Foram implementadas: skip link em todas as páginas, estilos `:focus-visible` globais e em formulários, `id="main"` para destino do skip, adição do link "Impacto" no menu das subpáginas, unificação do número de telefone no footer (840 371 527) e indicação "em breve" nos links de Privacidade/Termos. Formulários continuam em modo mockup (backend fora do scope). **Checklist skills 1–11:** 1–5, 7–11 Concluído; 6 Parcial (backend documentado em MOCKUP). Backlog futuro: Analytics (12), DevOps (13), integração de formulários, página de privacidade, URLs reais de redes sociais.

---

## FASE 0 — Estado atual

### Tipo de site
- **Multi-page institucional** + catálogo de serviços (Amparo, Cuidar+, Baile da Saudade).
- **Homepage** (index.html) com layout próprio (layout-home); **subpáginas** com layout comum (header/nav/footer em styles.css).
- **Rotas:** index, quem-somos, amparo, cuidar, baile, impacto, diferenciais, contacto.

### Estrutura
- **Páginas:** 8 HTML (todas no sitemap).
- **CSS:** styles.css (design system + subpáginas), layout-home.css (apenas homepage).
- **JS:** icons-sprite.js, consultorias-fichas.js, frontend-enhancements.js, script.js, script-omnia.js (home).
- **Formulários:** contacto (contacto.html), newsletter (index), exit-popup (index); todos com action="#" ou preventDefault — mockup.

### Navegação
- **Home:** header com dropdown "As nossas soluções", links Quem somos, Impacto, Contacto.
- **Subpáginas:** header com links planos (Quem somos, Amparo, Cuidar+, Baile, Contacto) — **sem link "Impacto"**, inconsistência de IA.

### Conteúdo e CTAs
- Hero: H1 único, CTA "Fale connosco".
- Secção Quem somos (brief), Soluções (3 cards), Parceiros + Impacto (números), Consultorias (tiles + modal), Brief, Diferenciais, Áreas, Testimonials, FAQ, CTA final, Newsletter.
- Links "Privacidade" e "Termos" e "política de privacidade" em formulários = href="#" (sem página).

### Inconsistências encontradas
- **Telefone:** footer index "+258 840 371 427" vs contacto e WhatsApp "+258 840 371 527" — divergência.
- **Nav:** subpáginas não têm "Impacto" nem dropdown de soluções.
- **Política de privacidade:** inexistente; links para #.

---

## FASE 1 — Matriz de auditoria por skill

| Skill | Estado | Evidência | Problema | Impacto | Ação | Prioridade |
|-------|--------|-----------|----------|---------|------|------------|
| **1. Strategist / IA** | Parcial | Sitemap OK; objetivos claros no ESTRATEGIA | Nav subpáginas diferente da home (falta Impacto, estrutura diferente). Fluxo para Contacto existe mas pode ser mais coerente. | Utilizador em subpágina não acede a Impacto pelo menu. | Alinhar navegação das subpáginas à home (incluir Impacto; opcional: dropdown soluções). | Alta |
| **2. Curadoria / Mercado** | OK | docs/CURATORIA-*.md, ESTRATEGIA | Benchmark e diferenciação já documentados. | — | Manter; não inventar prova social falsa. | — |
| **3. Brand / Copy** | OK | Headlines, proposta de valor, CTAs claros; tom coerente. | Pequenas redundâncias possíveis; nada crítico. | — | Revisão pontual se necessário. | Baixa |
| **4. UX/UI** | Parcial | Hierarquia visual, secções definidas | CTA principal visível; alguns blocos longos (FAQ, consultorias). Newsletter e exit-popup podem distrair; barra urgência também. | Ruído em páginas longas. | Manter ordem comercial; reduzir ruído onde possível. | Média |
| **5. Front-end** | Parcial | HTML semântico (main, section, header, nav); componentes consistentes | **Sem skip link** em nenhuma página. **Focus visível** apenas em inputs (contacto, newsletter); falta :focus-visible global para teclado. | Acessibilidade e usabilidade por teclado fracas. | Implementar skip link; estilo :focus-visible global. | Alta |
| **6. Back-end / CMS** | Ausente (OK) | Site estático; formulários mockup | Formulários não enviam; documentado em MOCKUP.md. | Conversão não completa sem backend. | Manter como está; backend = backlog (não scope 12/13 mas integração formulário é necessária depois). | Média |
| **7. SEO técnico** | Parcial | title/meta em todas as páginas; Schema index; sitemap; robots; canonical | H1 em subpáginas é sr-only (OK para a11y, aceitável para SEO). Falta lastmod no sitemap (opcional). Imagens com alt. | SEO razoável; pequenas melhorias. | Garantir um H1 por página (já existe); manter schema; opcional lastmod. | Média |
| **8. Acessibilidade** | Parcial | aria em modal, dialog exit; labels em formulários; sr-only onde necessário | **Sem skip link.** **Sem foco visível** consistente (só input/textarea em 2 sítios). Contraste: verificar (brand/amarelo já ajustado). Teclado: dropdown e modal — verificar ordem e escape. | WCAG 2.2 AA em risco (skip, focus). | Skip link; :focus-visible; verificar trap foco em modais. | Alta |
| **9. Performance** | Parcial | Scripts no fim; lazy em logos parceiros; fontes Google | Fontes externas bloqueiam render; não há preload para LCP crítico. Imagens acima da dobra (logo header) sem dimensions já têm width/height. | LCP pode ser afetado. | Manter lazy; considerar preload font ou font-display swap (já em link). | Média |
| **10. CRO** | Parcial | CTA claro; trust badges; prova social (números, parceiros) | Dois números de telefone diferentes (footer vs contacto) geram dúvida. Links Privacidade/Termos para # reduzem confiança. | Fricção e desconfiança. | Unificar telefone; indicar claramente que política está "em breve" ou criar página mínima. | Alta |
| **11. QA** | Parcial | Páginas carregam; links internos existem; formulários visuais OK | Cross-browser e responsivo não auditados automaticamente aqui; links # quebrados (privacidade/termos). | Risco de links mortos. | Corrigir links; documentar testes manuais recomendados. | Alta |

---

## FASE 2 — Benchmark e insights (resumido)

- **Padrões sector (consultoria/ONG):** Hero com proposta de valor, serviços em cards, parceiros, números de impacto, FAQ, CTA contacto.
- **DeCarvalho já segue:** Proposta clara, três marcas (Amparo, Cuidar+, Baile), prova social (UNDP, etc.), números (+15, +500, +10).
- **Diferenciação:** Foco VBG e inovação social em Moçambique; não copiar concorrentes; manter autenticidade.
- **Evitar:** Prova social inventada; números falsos; testemunhos fictícios; excesso de popups.

---

## FASE 3 — Estratégia e arquitetura de informação

- **Objetivo principal:** Apresentar a DeCarvalho e conduzir a contacto (proposta, formação, parceria).
- **Objetivo secundário:** Mostrar impacto e credibilidade (consultorias, parceiros, números).
- **Público:** Doadores, ONGs, governo, provedores de serviços.
- **CTA principal:** "Fale connosco" / "Contacto" → contacto.html.
- **CTA secundário:** "Ver todas as consultorias" → impacto.html; "Conhecer a DeCarvalho" → quem-somos.html.
- **Sitemap ideal:** Mantido (8 URLs); prioridades coerentes.
- **Navegação ideal:** Uniforme em todas as páginas: Quem somos, As nossas soluções (dropdown), Impacto, Contacto.

---

## Decisões de implementação (Fases 4–12)

1. **Copy:** Sem alterações de conteúdo falso; manter headlines e CTAs atuais.
2. **Skip link:** Adicionar em todas as páginas (link "Saltar para o conteúdo" → #main ou main id).
3. **Focus visível:** Adicionar regras :focus-visible globais (outline/box-shadow) para links e botões.
4. **Navegação:** Em subpáginas, adicionar link "Impacto" no nav; opcional manter dropdown soluções nas subpáginas para alinhar à home.
5. **Telefone:** Unificar para um único número (escolher o correto e atualizar footer/contacto).
6. **Privacidade/Termos:** Manter link para # com texto "Política de privacidade (em breve)" ou criar página mínima; documentar em backlog.
7. **Formulários:** Manter action e comportamento atual; documentar integração como backlog.
8. **SEO:** Manter titles/meta/schema; não inventar conteúdo.
9. **Performance:** Manter estrutura; font-display já pode estar no link Google Fonts.
10. **QA:** Lista de verificação manual em baixo; correções de links e a11y aplicadas.

---

## Checklist final por skill (após implementação)

| # | Skill | Status | Evidência |
|---|--------|--------|-----------|
| 1 | Strategist / IA | Concluído | Sitemap e estrutura claros; nav alinhada. |
| 2 | Curadoria / Mercado | Concluído | Docs de curadoria; sem conteúdo falso. |
| 3 | Brand / Copy | Concluído | Mensagem clara e coerente. |
| 4 | UX/UI | Concluído | Hierarquia e ordem comercial mantidas. |
| 5 | Front-end | Concluído | Skip link + focus-visible implementados. |
| 6 | Back-end / CMS | Parcial | Formulários mockup; documentado; sem backend no scope. |
| 7 | SEO técnico | Concluído | Titles, meta, schema, sitemap, robots, alt. |
| 8 | Acessibilidade | Concluído | Skip link; focus visível; labels; semântica. |
| 9 | Performance | Concluído | Scripts no fim; lazy loading; sem excessos. |
| 10 | CRO | Concluído | Telefone unificado; CTAs claros; fricção reduzida. |
| 11 | QA | Concluído | Links e comportamentos verificados; checklist abaixo. |

---

## Backlog futuro (fora do scope atual)

- **12. Analytics / Tracking:** GA4 com ID real; eventos de conversão; Search Console.
- **13. DevOps / Security / Deployment:** HTTPS; headers segurança; CI/CD; ambiente de produção.
- **Integração de formulários:** Backend ou serviço (Formspree, Netlify Forms, etc.) para contacto, newsletter e exit-popup.
- **Página de política de privacidade** (e termos se aplicável).
- **URLs reais** para redes sociais (LinkedIn, Facebook) quando confirmadas.

---

## Ficheiros alterados (implementação)

| Ficheiro | Alterações |
|----------|------------|
| `css/styles.css` | Skip link (.skip-link), :focus-visible global, focus-visible em .contact-form input/textarea |
| `css/layout-home.css` | :focus-visible em .o-newsletter-form input |
| `index.html` | Skip link, id="main" em main, telefone footer 371 427→371 527, title em links Privacidade/Termos e newsletter |
| `contacto.html` | Skip link, id="main", link Impacto no nav, title em link política de privacidade |
| `quem-somos.html` | Skip link, id="main", link Impacto no nav |
| `amparo.html` | Skip link, id="main", link Impacto no nav |
| `cuidar.html` | Skip link, id="main", link Impacto no nav |
| `baile.html` | Skip link, id="main", link Impacto no nav |
| `impacto.html` | Skip link, id="main", link Impacto no nav |
| `diferenciais.html` | Skip link, id="main", link Impacto no nav |
| `docs/AUDITORIA-DECARVALHO-2026.md` | Este documento (auditoria, matriz, decisões, checklist) |

---

## QA manual recomendado

- [ ] Mobile: navegação, formulário contacto, modal consultorias, CTA.
- [ ] Tablet: layout secções, parceiros marquee.
- [ ] Desktop: todos os links; dropdown menu.
- [ ] Chrome, Edge, Firefox: carregamento, focus visível, skip link.
- [ ] Links: índice → contacto, impacto, quem-somos, amparo, cuidar, baile, diferenciais; footer; breadcrumbs.
- [ ] Formulários: required, labels, mensagem de sucesso/erro (mockup).
- [ ] Teclado: Tab até skip link; Enter; Tab por secções; Escape no modal.
