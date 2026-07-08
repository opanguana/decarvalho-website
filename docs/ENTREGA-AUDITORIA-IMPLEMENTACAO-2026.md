# Entrega — Auditoria técnica e implementação (Tarefas 1–11)

**Data:** Março 2026  
**Scope:** Correções 1–11. Pontos 12 (Analytics) e 13 (DevOps) fora do scope.

---

## 1. Auditoria curta do estado encontrado

- **GA4:** Script placeholder (G-XXXXXXXXXX) e comentário no `index.html`; implementação falsa de analytics.
- **Copy:** Referências a “formulário de contacto” e “preencha o formulário” em FAQ, Schema, contacto e i18n; promessas “resposta em 24 horas” em vários pontos.
- **Submit falso:** Formulário de contacto em `script.js` com “A enviar...” e “Mensagem enviada”; newsletter com “Subscrito”; exit popup com submit que apenas fechava.
- **Cuidar+:** Texto “Envie SMS para o número dedicado (em breve)” em vez do canal real (WhatsApp).
- **Acessibilidade:** Menu mobile sem fechar com Escape nem devolução de foco; dropdown sem Escape.
- **privacidade.html / termos.html:** Não existem; footer com links para `#` (mantido com title “em breve”).
- **Prova social:** Números +15, +500, +10 mantidos (documentados na estratégia); sem alteração.

---

## 2. O que foi corrigido, por ficheiro

| Ficheiro | Correção |
|----------|----------|
| **index.html** | Removido script GA4 e comentário. FAQ e Schema: “formulário” → contacto por email, WhatsApp e página de contacto; “24 horas” → “assim que possível”. CTA badge “Resposta em 24h” → “Contacto direto”. Newsletter: form removido; substituído por CTA (email + página de contacto). Exit popup: form removido; CTA “Ir para contacto”. |
| **contacto.html** | Meta description: “Formulário e contactos” → “Email, WhatsApp, telefone e endereço”. Lead: “Preencha o formulário ou use os contactos” → “Use os contactos abaixo ou envie uma mensagem por email ou WhatsApp”. Trust badge “Resposta em 24h” → “Resposta assim que possível”. Inserida mensagem `#contact-form-channel-msg` (hidden) para direcionar para canais reais. |
| **cuidar.html** | Linha WhatsApp: “Envie SMS para o número dedicado (em breve)” → link WhatsApp +258 840 371 527. CTA “Resposta em até 24 horas” via i18n (alterado em script.js). |
| **js/script.js** | contact.lead e faq.a1 (PT/EN): alinhados a canais reais e sem “24 horas”. amparo.ctaText, cuidar.ctaText, baile.ctaText: “Resposta em até 24 horas” → “Respondemos assim que possível”. Formulário de contacto: removido submit simulado; ao submeter mostra mensagem a direcionar para email/WhatsApp. Removidas chaves i18n mortas: cuidar.contactWhatsAppText (PT e EN). Adicionada newsletter.cta (PT e EN). |
| **js/script-omnia.js** | Removido handler do form da newsletter (form removido do DOM). Exit popup: removido handler do form; popup fecha com botão e backdrop. Menu mobile: Escape fecha e devolve foco ao botão; ao abrir, foco no primeiro link. Dropdown: Escape fecha e devolve foco ao trigger; Escape nos links do dropdown fecha. |
| **css/styles.css** | Adicionados .contact-form-channel-msg e [hidden] para a mensagem do formulário de contacto. |
| **css/layout-home.css** | Adicionados .o-newsletter-cta e estilos do link. Removidos estilos de .o-newsletter-form (form removido). |
| **docs/MOCKUP.md** | Atualizado: estado atual (canais reais, sem GA4, sem submit falso); backlog 12/13 e opcionais. |
| **amparo.html, baile.html, cuidar.html** | Texto de fallback do CTA (data-i18n): "Resposta em até 24 horas" → "Respondemos assim que possível". |
| **docs/SKILL-6-Estado-atual.md** | Novo: Skill 6 documentada — site estático, contacto real, sem backend; sem automação fingida. |

---

## 3. Justificação de cada correção

- **Remover GA4:** Analytics é ponto 12; não deve haver script placeholder que simule implementação.
- **Alinhar copy a canais reais:** O site não envia formulários para servidor; a comunicação deve refletir email, WhatsApp e página de contacto.
- **Remover “24 horas”:** Promessa não validada; substituída por “Respondemos assim que possível” e “Resposta assim que possível”.
- **Formulário de contacto:** Sem backend, o submit não envia; em vez de “Mensagem enviada”, mostra-se mensagem que direciona para email e WhatsApp.
- **Newsletter e exit popup:** Remoção de formulários e de “Subscrito”/submit falso; substituição por CTA para contacto real.
- **Cuidar+ WhatsApp:** Remover “em breve” e usar o número real com link wa.me.
- **Menu mobile/dropdown:** Escape fecha e devolve foco; melhora uso por teclado e leitores de ecrã.
- **CSS órfão:** Remoção de estilos de .o-newsletter-form após remoção do form do HTML.
- **i18n:** Remoção de chaves não usadas; novas chaves para newsletter.cta e textos de contacto/FAQ.

---

## 4. O que foi removido (morto ou enganador)

- Script e comentário GA4 (index.html).
- Formulário da newsletter (index.html) e respetivo JS (script-omnia.js).
- Formulário do exit popup (index.html) e handler de submit (script-omnia.js).
- Lógica de “A enviar...” / “Mensagem enviada” no formulário de contacto (script.js).
- Trust badge “Resposta em 24h” (index, contacto).
- Textos “formulário de contacto” e “24 horas” em FAQ, Schema e i18n (substituídos, não apenas apagados).
- Chaves i18n: cuidar.contactWhatsAppText (PT/EN); newsletter.submit deixou de ser usada (mantida ou removida conforme necessidade).
- CSS .o-newsletter-form (layout-home.css).

---

## 5. O que foi mantido e porquê

- **Barra de urgência:** Mantida; conteúdo (ex.: “Abril 2026”) pode ser atualizado pela equipa; não é implementação falsa.
- **Números +15, +500, +10:** Mantidos como prova social documentada na estratégia; validação interna fica a cargo da equipa.
- **Formulário na página de contacto:** Mantido na UI; ao submeter mostra mensagem honesta em vez de sucesso falso.
- **Links Privacidade/Termos para `#`:** Mantidos com title “em breve”; não existem páginas privacidade.html/termos.html (não criadas no scope).
- **Dropdown “As nossas soluções”:** Mantido apenas na home; subpáginas com nav plana; decisão coerente.
- **Urgency bar e exit popup no DOM:** Mantidos; apenas removidos formulários e comportamentos falsos.

---

## 6. Checklist final por skill (1–11)

| # | Skill | Estado | Nota |
|---|--------|--------|------|
| 1 | Strategist / IA | OK | Nav e footer coerentes; sem páginas privacidade/termos. |
| 2 | Curadoria / Mercado | OK | Sem alterações; sem prova social falsa. |
| 3 | Brand / Copy | OK | Copy alinhada a canais reais e sem promessas não validadas. |
| 4 | UX/UI | OK | Sem alterações de layout. |
| 5 | Front-end | OK | Newsletter e exit popup simplificados; formulário contacto com mensagem honesta. |
| 6 | Back-end / CMS | OK | Documentado em docs/SKILL-6-Estado-atual.md; site estático; sem mock de backend. |
| 7 | SEO técnico | OK | Schema e FAQ atualizados; sem GA4 no código. |
| 8 | Acessibilidade | OK | Escape no menu mobile e dropdown; foco devolvido ao botão/trigger. |
| 9 | Performance | OK | Sem alterações que degradem. |
| 10 | CRO | OK | CTAs e mensagens honestas; sem “24h” não validadas. |
| 11 | QA | OK | Verificação de links, copy e comportamentos; sem placeholders técnicos ativos. |

---

## 7. Itens deixados para depois

- **12. Analytics / Tracking:** Sem script no código; implementar quando for prioridade.
- **13. DevOps / Security / Deployment:** Fora do scope atual.
- Página de política de privacidade e termos (quando houver conteúdo).
- Integração opcional do formulário de contacto com serviço externo ou backend.
- URLs reais das redes sociais no footer (quando confirmadas).
