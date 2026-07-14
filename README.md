# DeCarvalho Consultorias & Serviços — Website

> Website institucional da **DeCarvalho Consultorias & Serviços** — consultoria moçambicana especializada em transformação institucional, resposta à violência baseada no género (VBG), inovação social e bem-estar da terceira idade.

---

## Índice

1. [Visão geral](#visão-geral)
2. [Estrutura de ficheiros](#estrutura-de-ficheiros)
3. [Páginas](#páginas)
4. [CSS — Sistema de design](#css--sistema-de-design)
5. [JavaScript](#javascript)
6. [Dados das consultorias](#dados-das-consultorias)
7. [Internacionalização (PT / EN)](#internacionalização-pt--en)
8. [Segurança](#segurança)
9. [SEO e Marketing](#seo-e-marketing)
10. [Responsivo e Mobile](#responsivo-e-mobile)
11. [Logos e parceiros](#logos-e-parceiros)
12. [Ferramentas (tools/)](#ferramentas-tools)
13. [Documentação interna (docs/)](#documentação-interna-docs)
14. [Dependências externas](#dependências-externas)
15. [Deploy na Vercel](#deploy-na-vercel)
16. [Dev workflow](#dev-workflow)
17. [Como actualizar o conteúdo](#como-actualizar-o-conteúdo)
18. [Backlog / Próximos passos](#backlog--próximos-passos)

---

## Visão geral

Site 100% estático — HTML, CSS e JavaScript vanilla sem frameworks nem servidor. Não requer build, npm ou qualquer ferramenta de instalação. Funciona abrindo directamente `index.html` num browser ou publicando os ficheiros num servidor/CDN.

Para desenvolvimento local, executar `npm install` e depois `npm run dev`. Para Vercel, publicar a raiz deste repositório como site estático. Não há comando de build nem pasta de output gerada.

### Marcas presentes no site

| Marca | Página | Descrição |
|---|---|---|
| **DeCarvalho** | Todas | Consultoria-mãe; identidade principal |
| **Amparo** | `amparo.html` | Capacitação técnica e assistência institucional para provedores de VBG |
| **Cuidar+** | `cuidar.html` | Canal directo de escuta, acolhimento e encaminhamento para sobreviventes de VBG |
| **Baile da Saudade** | `baile.html` | Convivência intergeracional, valorização cultural e bem-estar da 3.ª idade |

---

## Estrutura de ficheiros

```
website/
├── index.html                  # Homepage (Omnia shell)
├── amparo.html                 # Subpágina Amparo
├── baile.html                  # Subpágina Baile da Saudade
├── contacto.html               # Formulário de contacto
├── cuidar.html                 # Subpágina Cuidar+
├── diferenciais.html           # Diferenciais competitivos
├── impacto.html                # Portfólio de consultorias
├── privacidade.html            # Política de privacidade
├── quem-somos.html             # Sobre a DeCarvalho
├── termos.html                 # Termos de uso
├── sitemap.xml                 # Sitemap para motores de busca
│
├── css/
│   ├── styles.css              # Estilos globais e todas as subpáginas
│   ├── layout-home.css         # Layout exclusivo da homepage (Omnia)
│   └── layout-subpage.css      # Variante sólida (não carregada actualmente)
│
├── js/
│   ├── script.js               # Lógica principal: i18n, nav, formulário, utilidades
│   ├── script-omnia.js         # Homepage: hero, modal, tiles, float CTA, exit popup
│   ├── consultorias-fichas.js  # Dados de todas as consultorias
│   ├── interactive-widgets.js  # Tabs pathfinder, carrossel, copy URL
│   ├── frontend-enhancements.js# Smooth scroll para âncoras
│   └── icons-sprite.js         # Injector do sprite SVG inline
│
├── logos/
│   ├── README.md               # Guia de uso dos logótipos
│   ├── favicon-decarvalho-symbol-blue.png
│   ├── logo-decarvalho-transparent.png
│   ├── logo-decarvalho.png
│   ├── logo-amparo-sem-fundo.png
│   ├── logo-cuidar-mais-recriado.png
│   ├── logo-baile-saudade.png          # Ícone (usado na landing page)
│   ├── logo-baile-saudade-novo.png     # Wordmark completo (usado no hero de baile.html)
│   └── baile-saudade/
│       └── DOCUMENTACAO-LOGO-BAILE-SAUDADE.md
│
├── partners/
│   ├── README.md               # Como adicionar parceiros
│   ├── LOGOs-COMO-ADICIONAR.md
│   └── [logos dos parceiros].png  # UNDP, SNV, Oxfam, Terre des Hommes, etc.
│
├── tools/
│   ├── fix_world_vision_transparency.py
│   ├── patch_perf.py
│   ├── patch_scripts.py
│   ├── patch_security.py
│   ├── strip_logo_taglines.py
│   └── verify.py
│
├── docs/
│   ├── README.md
│   ├── ARQUITECTURA-PROJETO.md
│   ├── AUDITORIA-DECARVALHO-2026.md
│   ├── CLAY-GLASS-DESIGN-SYSTEM.md
│   ├── CURATORIA-AREAS-ATUACAO.md
│   ├── CURATORIA-MELHORIAS-DECARVALHO.md
│   ├── CURATORIA-OMNIA-DECARVALHO.md
│   ├── DADOS-CONSULTORIAS-E-DIVULGACAO.md
│   ├── ENTREGA-AUDITORIA-IMPLEMENTACAO-2026.md
│   ├── LOGO-VARIANTES-V8-V10.md
│   ├── MOCKUP.md
│   ├── PROMPT-NOVO-SITE.md
│   ├── REDESIGN-CURATORIA.md
│   ├── SEMANTICA-CORES-HOMEPAGE.md
│   ├── SKILL-6-Estado-atual.md
│   └── SLOGANS-MARCAS.md
│
└── api/
    └── README.md               # Placeholder para integração futura de backend
```

---

## Páginas

### `index.html` — Homepage

A página principal usa a "Omnia shell" — o layout mais completo do site.

**Secções:**
- Header fixo com glassmorphism, navegação desktop/mobile, seletor PT/EN
- **Hero** com título animado, label, valores e CTA principal
- **Guia interactivo (Pathfinder)** — 3 tabs (Instituição, Apoio VBG, Cultura) com painéis contextuais
- **Soluções** — cards Cuidar+, Amparo, Baile da Saudade
- **Marquee de parceiros** — logos animados em scroll contínuo
- **Impacto** — 3 números com animação de contagem (+15 projectos, +500 profissionais, +10 instituições)
- **Consultorias em destaque** — tiles com modal de detalhe, filtráveis
- **Diferenciais** — 4 cards com diferenciais competitivos
- **Áreas de actuação** — 5 cards temáticos
- **Credenciais** — 4 badges de confiança
- **Testemunhos** — carrossel com 3 testemunhos
- **FAQ** — perguntas frequentes com accordeon
- **CTA final** — proposta / "Fale connosco"
- **Newsletter** — instruções para subscrição via email
- **Float CTA** — botão flutuante persistente
- **Exit-intent popup** — aparece 1 vez quando cursor sai da janela
- **Footer** completo com links, redes sociais, legal

**Extras técnicos:**
- Schema.org JSON-LD: `Organization`, `ProfessionalService`, `WebSite`, `FAQPage`
- Open Graph + Twitter Card
- Meta `description`, `keywords`, `canonical`, link para `sitemap.xml`

---

### `contacto.html` — Formulário de contacto

**Funcionalidade de contexto automático:** quando o utilizador chega de outra página através de um botão "Fale connosco", a URL contém `?origem=X` e o campo de mensagem é pré-preenchido automaticamente com texto contextual.

| Parâmetro `?origem=` | Mensagem pré-preenchida |
|---|---|
| `cuidar` | "Olá, tenho interesse no serviço Cuidar+…" |
| `amparo` | "Olá, gostaria de saber mais sobre o Amparo…" |
| `baile` | "Olá, tenho interesse no Baile da Saudade…" |
| `solucoes` | "Olá, vi as vossas soluções e gostaria de ajuda…" |
| `proposta` | "Olá, gostaria de receber uma proposta…" |
| `geral` | Campo vazio |

Ao chegar com origem definida, é exibido um **banner contextual** no topo do formulário com animação.

> ⚠️ O formulário não tem backend — ao submeter mostra mensagem a dirigir para email/WhatsApp. Integração com backend está no backlog.

---

### `amparo.html` — Amparo

Subpágina dedicada ao produto Amparo.

**Secções:** Hero com logo; Missão / Visão / Princípios; Produtos e serviços (6 cards); Abordagem; FAQ com 8 perguntas; CTA; Botão flutuante "Solicitar contacto"

---

### `cuidar.html` — Cuidar+

Subpágina dedicada ao produto Cuidar+.

**Secções:** Hero; Missão / Visão / Princípios; Canal de ajuda imediata (Linha Verde 1458, Linha Fala Criança 116); Produtos (7 cards); Equipa (6 perfis); Abordagem; FAQ com 7 perguntas; CTA; Botão flutuante

---

### `baile.html` — Baile da Saudade

Subpágina dedicada ao Baile da Saudade.

**Secções:** Hero com wordmark completo; Missão / Visão; Produtos (4 cards: eventos, workshops, actividades lúdicas, excursões); Abordagem; CTA

---

### `impacto.html` — Impacto

Página de portfólio de consultorias com filtro interactivo.

**Funcionalidades:**
- **3 modos de vista**: Grade / Lista / Outras consultorias
- **Filtro de texto** em tempo real (título, cliente, período)
- **Contador de resultados** dinâmico
- **Cards detalhados** com contexto, actividades e resultados de cada consultoria
- Secção "Outras consultorias do portefólio" (items sem `publicoDestaque`)
- Re-renderiza ao mudar idioma via evento `decarvalho:langchange`

**Consultorias activas** (com `publicoDestaque: true`):
1. Plano Nacional VBG no Sector de Saúde (UNDP/MISAU)
2. Especialista de Género — Programa Brilho (SNV)
3. Avaliação ecossistemas florestais e mangais (Terre des Hommes / Malhalhe)
4. Análise e Policy briefs sobre género e terras (Oxfam / Fórum Mulher)

**Outras consultorias** (visíveis na secção "portefólio"):
- PESOD Massinga — análise de género
- Incidência de benefícios por sexo — Massinga
- Fortalecimento sistema de reclamações (Twigg Exploration & Mining)
- Every Girl Can! Project Final Evaluation (World Vision / HOPEM / ActionAid)

---

### `quem-somos.html` — Quem somos

**Secções:** Hero com logo DeCarvalho; Cards de visão geral (missão, visão, valores); KPIs (+15 projectos, +10 instituições, +500 profissionais); Pills de navegação interna (#valores, #servicos, #areas); Acordeon de valores (6 valores); Lista de serviços (5 itens); Áreas de actuação (7 áreas); CTAs

---

### `diferenciais.html` — Diferenciais

Página simples com grid de 6 diferenciais competitivos e CTA.

---

### `privacidade.html` — Política de privacidade

10 secções detalhadas sobre recolha de dados, finalidades, retenção, cookies, etc. Sem header/footer — página autónoma.

---

### `termos.html` — Termos de uso

5 secções sobre condições de uso do site. Sem header/footer.

---

## CSS — Sistema de design

### Paleta de cores (ALKA)

```css
--cyan:         #00C4E8   /* Decorativo */
--blue:         #0090C0   /* Cor primária */
--blue-deep:    #005F90   /* CTAs, links activos */
--blue-ink:     #003A5C   /* Texto azul escuro */

/* Subprodutos */
--amparo:       #0B5FAE
--cuidar:       #4E9B62
--baile:        #9A6A45

/* Destaque */
--brand-yellow: #F5C400
```

### Tipografia

| Família | Uso |
|---|---|
| `DM Serif Display` | Títulos H1–H3, números de destaque |
| `Outfit` (300–700) | Corpo de texto, nav, botões, labels |

### Breakpoints responsivos

| Media query | Comportamento |
|---|---|
| `max-width: 960px` | Menu hamburger (homepage) |
| `max-width: 900px` | Menu hamburger (subpáginas), grids em coluna |
| `max-width: 768px` | Ajustes de padding, hero, parceiros |
| `max-width: 640px` | Grids em 1 coluna, cards empilhados |
| `max-width: 480px` | Float CTA largura total, CTA em coluna |
| `max-width: 360px` | Ajustes para ecrãs muito pequenos (Galaxy S, iPhone SE) |

### Temas por subpágina

Cada subpágina aplica uma cor de destaque via class no `<body>`:

```html
body.subpage-amparo  →  --accent: #0B5FAE
body.subpage-cuidar  →  --accent: #4E9B62
body.subpage-baile   →  --accent: #9A6A45
body.subpage-impacto →  --accent: #0090C0 (principal)
body.layout-home     →  --accent: #005F90 (principal)
```

---

## JavaScript

### `script.js` — Lógica principal

Responsável por:

- **Internacionalização (i18n)** — objeto com ~250 chaves em PT e EN; aplica via `data-i18n`, `data-i18n-placeholder`, `data-i18n-template`; persiste em `localStorage`; emite evento `decarvalho:langchange`
- **Navegação mobile** (subpáginas) — hamburger, open/close, fecha ao clicar em link
- **Dropdown "As nossas soluções"** — toggle com click fora a fechar
- **Header scroll** — adiciona classe `scrolled` ao scroll
- **Animação de contagem** — `IntersectionObserver` + `requestAnimationFrame`; respeita `prefers-reduced-motion`
- **Pills de navegação** (Quem somos) — spy ao scroll com `IntersectionObserver`
- **FAQ** (subpáginas) — fecha outros `<details>` ao abrir um
- **Barra de progresso de leitura** — percentagem de scroll no topo
- **Protecção de conteúdo** — bloqueia copy/cut/contextmenu/Ctrl+C fora de zonas `.allow-copy`
- **Formulário de contacto** — previne submit, mostra spinner, redirige para email/WhatsApp
- **Pré-preenchimento de formulário** — lê `?origem=` da URL e preenche mensagem + exibe banner contextual

---

### `script-omnia.js` — Homepage

Responsável por (apenas em `index.html`):

- **Header scroll** com `--dc-scroll` CSS custom property
- **Barra de urgência** opcional (`data-urgency-bar`) — pode ser dispensada; usa `localStorage` (`oUrgencyDismissed`)
- **Float CTA** — aparece após scroll de 400px; oculta botão de contacto do header para evitar duplicação
- **Exit-intent popup** — detecta saída do cursor da janela; aparece máximo 1 vez por sessão (`localStorage: oExitShown`)
- **Menu mobile** (`#oMenuBtn` + `#oNavMobile`)
- **Dropdown soluções desktop** (`.o-nav-drop`)
- **`.o-reveal`** — animações de entrada ao scroll via `IntersectionObserver`
- **Tiles de consultorias** — renderização dinâmica a partir de `CONSULTORIAS_FICHAS`; abre modal com detalhes completos
- **Modal de consultoria** — tecla Escape fecha, click fora fecha, foco armadilhado

---

### `interactive-widgets.js`

- **Pathfinder tabs** (`#oPathfinderTablist`) — ARIA `tablist/tab/tabpanel`, keyboard navigation (← →)
- **Carrossel de testemunhos** (`#oTestimonialsSlider`) — auto-play, botões prev/next, dots, touch swipe
- **Copiar URL** (`.o-share-copy`) — usa `navigator.clipboard` com fallback

---

### `consultorias-fichas.js`

Array `window.CONSULTORIAS_FICHAS` com todas as consultorias. Cada entrada tem:

```js
{
  publicoDestaque: true/false,  // Aparece na landing page e em destaque no impacto
  titulo, tituloEn,
  periodo, periodoEn,
  cliente, clienteEn,
  problema, problemaEn,
  estrategia[], estrategiaEn[],
  entregaveis[], entregaveisEn[],
  resultado: { pt, en },
  divulgacao: {
    contexto: { pt, en },
    atividades: { pt[], en[] },
    resultados: { pt[], en[] }
  }
}
```

**Funções utilitárias expostas globalmente:**

| Função | Descrição |
|---|---|
| `consultoriaSortKey(c)` | Calcula chave de ordenação por data |
| `getConsultoriasSortedWithIndex(list)` | Lista ordenada com índice original |
| `getConsultoriasPublicoDestaque(list)` | Apenas `publicoDestaque: true` |
| `getConsultoriasNaoDestaque(list)` | Apenas `publicoDestaque: false` |
| `consultoriaLocalized(c, lang)` | Campos localizados em PT ou EN |

---

## Dados das consultorias

Para **adicionar** uma nova consultoria:
1. Abrir `js/consultorias-fichas.js`
2. Adicionar novo objecto ao array `CONSULTORIAS_FICHAS`
3. Definir `publicoDestaque: true` se deve aparecer na landing page e em destaque no Impacto
4. Preencher todos os campos bilingues (`titulo`/`tituloEn`, `periodo`/`periodoEn`, etc.)
5. A ordenação é automática por data (`consultoriaSortKey`)

Para **remover temporariamente** uma consultoria (sem perder os dados), comentar o objecto com `/* ... */` no ficheiro.

---

## Internacionalização (PT / EN)

O site suporta Português de Portugal e Inglês. A língua activa é guardada em `localStorage` com chave `lang`.

### Como funciona

1. Elementos HTML com `data-i18n="chave"` têm o texto substituído
2. Inputs com `data-i18n-placeholder="chave"` têm o placeholder substituído
3. Textos com variáveis usam `data-i18n-template="chave"` + `data-i18n-vars='{"count":5}'`
4. Ao mudar idioma, o evento `decarvalho:langchange` é emitido para re-renderizar conteúdo dinâmico (ex: cards do Impacto)
5. Cards de consultorias são re-renderizados em EN/PT via `consultoriaLocalized(c, lang)`

### Botões de idioma

Todas as páginas têm:
```html
<button data-lang="pt" class="lang-btn">PT</button>
<button data-lang="en" class="lang-btn">EN</button>
```

Homepage usa classes `o-lang-btn`; subpáginas usam `lang-btn`. Ambas são detectadas por `script.js`.

---

## Segurança

### Headers de segurança (HTML meta)

Todos os ficheiros HTML incluem:

```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta name="permissions-policy" content="camera=(), microphone=(), geolocation=()">
```

> ℹ️ Estes meta tags são apenas indicativos — os headers HTTP reais devem ser configurados no servidor/CDN (Nginx, Apache, Cloudflare, etc.) para terem efeito pleno.

### Recomendação para servidor

Adicionar ao servidor:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'none';
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-XSS-Protection: 1; mode=block
```

### Protecção de conteúdo

O script bloqueia:
- `Ctrl+C` / `Cmd+C` (copy)
- `Ctrl+X` / `Cmd+X` (cut)
- `Ctrl+U` / `Cmd+U` (view source)
- `Ctrl+S` / `Cmd+S` (save)
- Clique direito (contextmenu)

Excepções: zonas `.allow-copy`, links `mailto:`, `tel:`, `wa.me`, e campos de formulário.

### Dados pessoais

- Formulário de contacto **não tem backend** — não armazena dados no servidor
- Dados submetidos são dirigidos para email/WhatsApp
- Cookies: apenas `localStorage` para preferência de idioma (`lang`) e estado de popups (`oUrgencyDismissed`, `oExitShown`)
- Nenhum cookie de tracking ou analytics de terceiros activo

### Política de privacidade

`privacidade.html` — documento completo com 10 secções:
1. Responsável pelo tratamento
2. Dados recolhidos
3. Finalidades do tratamento
4. Base legal
5. Retenção dos dados
6. Partilha com terceiros
7. Cookies e tecnologias similares
8. Direitos do titular
9. Segurança dos dados
10. Contacto do DPO

---

## SEO e Marketing

### Meta tags

Todas as páginas têm:
- `<meta name="description">` personalizada
- `<link rel="canonical">` para URL canónica
- `<link rel="icon">` e `<link rel="apple-touch-icon">`

Homepage adiciona:
- `<meta name="keywords">`
- `<meta name="robots" content="index, follow">`
- `<meta name="author">`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card (`twitter:card`, `twitter:title`, etc.)

### Schema.org (JSON-LD)

`index.html` contém dados estruturados:

```json
{
  "@type": "Organization",
  "name": "DeCarvalho Consultorias & Serviços",
  "url": "https://decarvalho.com",
  "logo": "...",
  "address": { "Matola, Moçambique" },
  "contactPoint": { "telephone", "email" },
  "sameAs": ["linkedin", "facebook"]
}
```

Também inclui: `ProfessionalService`, `WebSite` com `SearchAction`, `FAQPage`.

### Sitemap

`sitemap.xml` com todas as URLs públicas e `lastmod`:
- `/` (homepage)
- `/quem-somos.html`
- `/amparo.html`
- `/cuidar.html`
- `/baile.html`
- `/impacto.html`
- `/diferenciais.html`
- `/contacto.html`

### Funcionalidades de CRO (Conversão)

| Funcionalidade | Onde | Descrição |
|---|---|---|
| **Float CTA** | Todas as páginas | Botão "Fale connosco" aparece ao scroll |
| **Exit-intent popup** | Homepage | Aparece 1x ao mover cursor para fora da janela |
| **Pathfinder interactivo** | Homepage | Guia o utilizador para a solução certa |
| **Pré-preenchimento de formulário** | Contacto | Contexto automático via `?origem=` |
| **Banner de origem** | Contacto | Confirma visualmente de onde o utilizador vem |
| **Testemunhos** | Homepage | Carrossel com 3 testemunhos de parceiros |
| **Credenciais** | Homepage | Badges de confiança |
| **Números animados** | Homepage, Quem somos | Conta-up ao entrar no viewport |
| **FAQ com accordeon** | Homepage, Amparo, Cuidar+ | Reduz fricção informacional |

### Analytics

> ⚠️ Google Analytics 4 (GA4) **não está implementado** — consta no backlog (`docs/MOCKUP.md`). Para adicionar, incluir o snippet GA4 antes de `</head>` em todas as páginas e configurar conversões.

---

## Responsivo e Mobile

### Suporte garantido

- **iPhone SE** (375px) e superiores
- **Galaxy S** (360px) e superiores
- **Tablets** (768px–1024px)
- **Desktop** (1024px+)

### Touch targets

Todos os elementos clicáveis têm `min-width: 44px` e `min-height: 44px` conforme recomendação WCAG 2.2.

### Prevenção de zoom automático no iOS

Todos os inputs têm `font-size: 1rem` (≥16px) para evitar zoom automático no iOS Safari.

### Menu mobile

- **Homepage:** `#oMenuBtn` + `#oNavMobile` (abre até 100vh - 80px, com scroll)
- **Subpáginas:** `#navToggle` + `#nav` (overlay fixo com `bottom: 0`, `overflow-y: auto`)
- Corpo fica com `overflow: hidden` enquanto menu está aberto

---

## Logos e parceiros

### Logos das marcas

| Ficheiro | Uso |
|---|---|
| `logo-decarvalho-transparent.png` | Header e footer de todas as páginas |
| `logo-decarvalho.png` | OG image e schema |
| `favicon-decarvalho-symbol-blue.png` | Favicon e apple-touch-icon |
| `logo-amparo-sem-fundo.png` | Hero de `amparo.html` e card da homepage |
| `logo-cuidar-mais-recriado.png` | Hero de `cuidar.html` e card da homepage |
| `logo-baile-saudade.png` | Card da homepage (ícone) |
| `logo-baile-saudade-novo.png` | Hero de `baile.html` (wordmark completo) |

### Logos dos parceiros

Guardados em `partners/`. Ver `partners/LOGOs-COMO-ADICIONAR.md` para instruções de adição.

Parceiros actuais no marquee: UNDP, SNV, Terre des Hommes, Oxfam, Fórum Mulher, Twigg, World Vision.

---

## Ferramentas (tools/)

Scripts Python utilitários para manutenção de imagens e patches:

| Ficheiro | Descrição |
|---|---|
| `fix_world_vision_transparency.py` | Remove fundo branco do logo World Vision |
| `patch_perf.py` | Optimizações de performance |
| `patch_scripts.py` | Patches de JavaScript |
| `patch_security.py` | Adiciona headers de segurança em HTML |
| `strip_logo_taglines.py` | Remove taglines de logótipos via PIL/Pillow |
| `verify.py` | Verificação de integridade |

**Requisito:** Python 3 + Pillow (`pip install Pillow`)

---

## Documentação interna (docs/)

| Ficheiro | Conteúdo |
|---|---|
| `ARQUITECTURA-PROJETO.md` | Stack, ficheiros JS, eventos, estrutura de deploy |
| `AUDITORIA-DECARVALHO-2026.md` | Auditoria completa do site (2026) |
| `CLAY-GLASS-DESIGN-SYSTEM.md` | Sistema visual glassmorphism |
| `CURATORIA-AREAS-ATUACAO.md` | Definição das áreas temáticas |
| `CURATORIA-MELHORIAS-DECARVALHO.md` | Histórico de melhorias implementadas |
| `CURATORIA-OMNIA-DECARVALHO.md` | Curatorial da homepage Omnia |
| `DADOS-CONSULTORIAS-E-DIVULGACAO.md` | Modelo de dados de consultorias e política de divulgação |
| `ENTREGA-AUDITORIA-IMPLEMENTACAO-2026.md` | Relatório de entrega da auditoria |
| `LOGO-VARIANTES-V8-V10.md` | Variantes dos logos versão 8 a 10 |
| `MOCKUP.md` | Backlog de funcionalidades (GA4, newsletter, formulário backend) |
| `PROMPT-NOVO-SITE.md` | Especificações originais do site |
| `REDESIGN-CURATORIA.md` | Notas do redesign |
| `SEMANTICA-CORES-HOMEPAGE.md` | Semântica de uso das cores na homepage |
| `SKILL-6-Estado-atual.md` | Estado actual da sprint |
| `SLOGANS-MARCAS.md` | Slogans e taglines das marcas |

---

## Dependências externas

| Recurso | URL | Uso |
|---|---|---|
| Google Fonts | `fonts.googleapis.com` | DM Serif Display + Outfit |
| Google Fonts CDN | `fonts.gstatic.com` | Ficheiros de fonte |
| WhatsApp | `wa.me/258840371527` | Link directo de contacto |
| LinkedIn | (link no footer) | Rede social |
| Facebook | (link no footer) | Rede social |

**Zero dependências de JavaScript de terceiros** — sem jQuery, React, Vue, Bootstrap ou qualquer CDN de JS.

---

## Deploy na Vercel

Este projecto está pronto para deploy estático na Vercel.

### Definições do projecto

| Campo | Valor |
|---|---|
| Framework Preset | `Other` |
| Root Directory | `.` |
| Build Command | deixar vazio |
| Output Directory | deixar vazio |
| Install Command | `npm install` |

### Configuração incluída

O ficheiro `vercel.json` configura:
- headers básicos de segurança para todas as rotas;
- cache longo para assets em `css/`, `js/`, `logos/` e `partners/`;
- URLs com `.html` preservadas, alinhadas com os links existentes.

### Deploy por CLI

```bash
vercel
```

Para produção:

```bash
vercel --prod
```

Executar estes comandos apenas depois de autenticar a conta Vercel e confirmar o projecto de destino.

### Desenvolvimento local

```bash
npm install
npm run dev
```

O servidor local fica disponível em `http://localhost:5173`.

---

## Dev workflow

### Requisitos

- Node.js 18 ou superior
- npm 9 ou superior
- Git

### Instalar e executar

```bash
npm ci
npm run dev
```

### Validar antes de abrir PR

```bash
npm run lint
npm test
npm run build
```

O build gera `dist/` apenas como artefacto local/CI. O script recusa sobrescrever um `dist/` que não tenha sido gerado pelo próprio script.

### Branches e PRs

1. Actualizar a branch principal: `git switch main && git pull --ff-only`
2. Criar uma branch curta e descritiva: `git switch -c tipo/descricao-curta`
3. Fazer commits pequenos seguindo Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `ci:`
4. Executar `npm run lint`, `npm test` e `npm run build`
5. Abrir PR com resumo, validação executada e risco/rollback

### Versionamento e releases

Este projecto usa Semantic Versioning (`MAJOR.MINOR.PATCH`) e tags anotadas no formato `vX.Y.Z`.

- `fix:` incrementa `PATCH`
- `feat:` incrementa `MINOR`
- mudanças incompatíveis incrementam `MAJOR` e devem incluir `BREAKING CHANGE:` no corpo do commit
- actualizar `CHANGELOG.md` antes de criar uma tag

Fluxo de release:

```bash
git switch main
git pull --ff-only
npm ci
npm run lint
npm test
npm run build
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main --tags
```

### Rollback

- Commit ruim ainda não lançado: `git revert <sha>`
- Release com bug: reverter o commit problemático, criar nova versão `PATCH`, actualizar `CHANGELOG.md` e publicar nova tag
- Tag criada por engano antes de publicar: `git tag -d vX.Y.Z`
- Tag já enviada por engano: `git push origin :refs/tags/vX.Y.Z` apenas se a equipa confirmar que ninguém consumiu a tag

Mais detalhes: `docs/RELEASE.md`.

---

## Como actualizar o conteúdo

### Alterar textos do site (PT e EN)

Editar `js/script.js` — objeto `i18n`:
- Bloco `pt: { ... }` para Português de Portugal
- Bloco `en: { ... }` para Inglês

### Adicionar/remover uma consultoria

Editar `js/consultorias-fichas.js`:
- **Adicionar:** novo objecto no array `CONSULTORIAS_FICHAS`
- **Remover temporariamente:** comentar com `/* ... */`
- **Remover definitivamente:** apagar o objecto

### Alterar logos dos parceiros

Ver `partners/LOGOs-COMO-ADICIONAR.md`.

### Alterar cores do site

Editar as variáveis CSS em `css/styles.css` na secção `:root { ... }`.

### Adicionar nova página

1. Copiar estrutura HTML de uma subpágina existente (ex: `amparo.html`)
2. Alterar `class="subpage subpage-X"` no `<body>`
3. Adicionar estilos de acento em `css/styles.css` se necessário
4. Adicionar ao `sitemap.xml`
5. Adicionar links de navegação em todas as páginas

### Actualizar FAQ

Editar as chaves `faq.q1`...`faq.a5` (e equivalentes EN) em `js/script.js`. O HTML em `index.html` é apenas estrutura — o texto vem do i18n.

---

## Backlog / Próximos passos

Itens identificados em `docs/MOCKUP.md` e `docs/AUDITORIA-DECARVALHO-2026.md`:

- [ ] **Backend do formulário de contacto** — integrar com serviço de email (EmailJS, Formspree, ou API própria em `api/`)
- [ ] **Google Analytics 4 (GA4)** — implementar tracking de pageviews e eventos (CTA clicks, form submits)
- [ ] **Newsletter** — integrar com Mailchimp, ConvertKit ou similar
- [ ] **Headers HTTP de segurança** — configurar no servidor/CDN (Content-Security-Policy, HSTS, etc.)
- [ ] **robots.txt** — criar ficheiro com regras de crawling
- [ ] **Página de erro 404** — criar `404.html` personalizado
- [ ] **Imagens WebP/AVIF** — converter logos e parceiros para formatos modernos com fallback
- [ ] **Lazy loading** — adicionar `loading="lazy"` a imagens abaixo do fold
- [ ] **PDF institucional** — "Descarregar apresentação da empresa" referenciado em `quem-somos.html` mas sem ficheiro associado
- [ ] **Testes cross-browser** — verificar em Safari iOS, Chrome Android, Edge
- [ ] **Monitorização de uptime** — configurar serviço de monitorização

---

## Contacto técnico

**Email comercial:** comercial@decarvalhoconsultorias.com  
**WhatsApp:** +258 840 371 527  
**Sede:** Cidade da Matola, Sikwama, nº 1016, Moçambique

---

*Última actualização: Abril 2026*
