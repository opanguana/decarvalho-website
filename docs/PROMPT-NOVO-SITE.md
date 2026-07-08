# Prompt para criar um website melhor (baseado no atual)

Use este texto como prompt no Cursor (ou noutro assistente) para gerar um novo website, melhor que o atual, mantendo-o como base em termos de beleza, estrutura e conteúdo. Copie e cole o bloco abaixo.

---

## Instruções para o assistente

**Contexto:** Existe um website corporativo (DeCarvalho Consultorias & Serviços) em HTML/CSS/JS puro, multi-página, com design glassmorphism, hero, parceiros, secção de consultorias com preview em modal, soluções (Amparo, Cuidar+, Baile da Saudade), FAQ, newsletter, CTA flutuante, exit-intent popup e barra de urgência. Os formulários e analítica estão em mockup (sem backend real).

**Objetivo:** Criar um **novo website melhor** que use este projeto como **base de referência** (design, conteúdo, estrutura), mas que seja evoluído em **front-end** e **back-end**.

---

### O que manter / usar como inspiração

- **Visual:** Estética limpa, glassmorphism, cores de marca (azul accent), tipografia legível, layout responsivo mobile-first.
- **Estrutura de páginas:** Homepage com hero, parceiros, impacto/consultorias, soluções (cards), FAQ, CTA, newsletter; páginas internas (contacto, quem-somos, impacto, diferenciais, amparo, cuidar, baile).
- **Conteúdo e mensagens:** Posicionamento (transformação institucional, inovação social, VBG, género, capacitação), lista de consultorias, parceiros (UNDP, SNV, Oxfam, etc.), propostas de valor das marcas.
- **Funcionalidades de marketing:** CTA flutuante “Fale connosco”, botões de partilha, trust badges, social proof, exit-intent (opcional), barra de urgência (opcional), newsletter, formulário de contacto.

---

### Melhorias obrigatórias no Front-End

1. **Performance**
   - Reduzir e otimizar CSS (critical CSS inline ou por página; resto async).
   - Lazy-load de imagens (logos, parceiros) com `loading="lazy"` e dimensões explícitas.
   - Minificação de assets em build (ou instruções claras para fazê-lo).
   - Evitar bloqueio de renderização por JS não crítico (carregar scripts no fim do body ou com `defer`).

2. **Acessibilidade (a11y)**
   - Contraste de cores conforme WCAG 2.1 AA.
   - Navegação por teclado funcional (menu, modal, formulários, links).
   - `aria-labels` e roles corretos em botões e regiões; focos visíveis.
   - Textos alternativos em imagens; cabeçalhos hierárquicos (h1 → h2 → h3).

3. **SEO**
   - Meta description e títulos únicos por página.
   - Schema.org (JSON-LD) para Organization, WebSite, FAQPage, ContactPage onde fizer sentido.
   - Sitemap XML e robots.txt; URLs canónicas.
   - Open Graph e Twitter Cards por página.

4. **UX e responsividade**
   - Breakpoints consistentes (mobile, tablet, desktop); toque e gestos considerados em mobile.
   - Modal de preview de consultorias acessível (foco preso, Escape para fechar).
   - Estados de loading/erro nos formulários (envio, sucesso, falha).
   - Opção de preferência de idioma (PT/EN) persistida e refletida no conteúdo.

5. **Código**
   - HTML semântico (header, main, footer, section, article, nav).
   - CSS organizado (variáveis, componentes, páginas); evitar duplicação.
   - JavaScript modular e sem dependências globais desnecessárias; comentários onde útil.

---

### Back-End a implementar

1. **Formulário de contacto**
   - Endpoint (ex.: `POST /api/contact`) que receba nome, email, assunto, mensagem.
   - Validação (campos obrigatórios, formato email).
   - Envio de email (SMTP, SendGrid, Resend, etc.) ou gravação em base de dados.
   - Resposta JSON (sucesso/erro) e mensagem amigável no front-end.

2. **Newsletter**
   - Endpoint (ex.: `POST /api/newsletter`) para subscrição.
   - Validação de email e consentimento (checkbox).
   - Integração com serviço de email marketing (Mailchimp, Sendinblue, Resend, etc.) ou base de dados.
   - Resposta ao utilizador (sucesso já subscrito / erro).

3. **Exit-intent / popup de captura (opcional)**
   - Se mantido: enviar email para o mesmo sistema da newsletter ou endpoint dedicado.
   - Evitar abusar (ex.: uma vez por sessão ou por cookie).

4. **Stack sugerida (escolher uma e documentar)**
   - **Opção A — Serverless:** Vercel / Netlify Functions (Node.js) para `/api/contact` e `/api/newsletter`; variáveis de ambiente para chaves e SMTP.
   - **Opção B — Backend próprio:** Pequena API em Node.js (Express/Fastify) ou Python (FastAPI/Flask) com rotas para contacto e newsletter; deploy em VPS ou PaaS.
   - **Opção C — Serviços externos:** Formspree + Mailchimp (ou similar) com configuração documentada; mínimo de código próprio.

5. **Segurança e boas práticas**
   - Rate limiting nos endpoints de formulários.
   - Sanitização de inputs; não expor erros internos ao cliente.
   - CORS e headers adequados; HTTPS em produção.

---

### Entregáveis esperados

1. **Repositório / pasta do novo projeto**
   - Estrutura clara: front-end (HTML/CSS/JS ou gerado por ferramenta de build) e back-end (api/ ou projeto separado).
   - README com instruções de instalação, variáveis de ambiente e como correr em desenvolvimento e produção.

2. **Front-end**
   - Páginas estáticas (ou geradas) equivalentes às atuais, com melhorias de performance, a11y e SEO.
   - Formulários a chamar os novos endpoints; estados de loading e feedback visual.
   - Documento breve (ex.: FRONTEND.md) descrevendo estrutura de ficheiros, breakpoints e convenções de CSS/JS.

3. **Back-end**
   - Código dos endpoints de contacto e newsletter (e opcionalmente exit-intent).
   - Ficheiro de exemplo de variáveis de ambiente (`.env.example`) com lista de variáveis necessárias.
   - Documentação da API (paths, métodos, body esperado, respostas).

4. **Documentação**
   - Lista do que foi melhorado em relação ao site base (checklist de melhorias).
   - O que continua em mockup ou placeholder (ex.: GA4, URLs de redes sociais) e como configurar.

---

### Restrições e preferências

- **Idioma do código e comentários:** Preferência por português ou inglês; ser consistente.
- **Sem frameworks obrigatórios:** Pode ser HTML/CSS/JS puro ou, se preferir, um gerador estático (Eleventy, Astro) ou framework leve; justificar a escolha.
- **Conteúdo:** Pode reutilizar textos e estrutura do site atual; não inventar dados sensíveis (emails, telefones reais) — usar placeholders onde necessário.
- **Design:** Manter a identidade visual (cores, tipo de letra, sensação “glass”, botões) mas pode refinar (espaçamentos, hierarquia, micro-interações).

---

**Resumo em uma frase:** A partir do website DeCarvalho existente (como base de design e conteúdo), criar um novo site melhorado em performance, acessibilidade, SEO e UX no front-end, e com back-end real para formulário de contacto e newsletter, documentado e pronto para deploy.
