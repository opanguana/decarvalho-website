# Arquitectura do projecto — DeCarvalho (website)

Documento de referência para **alojamento**, **manutenção** e **expansão**. Mantê-lo actualizado quando alterar a estrutura de pastas ou o pipeline de deploy.

---

## 1. Stack e modelo de entrega

| Camada | Tecnologia |
|--------|------------|
| Marcação | HTML5 estático (`*.html` na raiz) |
| Estilos | CSS: `css/styles.css` (design system + subpáginas), `css/layout-home.css` (homepage Omnia), `css/layout-subpage.css` onde aplicável |
| Comportamento | JavaScript vanilla em `js/` |
| Dados em página | JSON em memória (`consultorias-fichas.js`, traduções em `script.js`) |
| Backend | Não integrado: `api/` é placeholder; formulários ver `docs/MOCKUP.md` |

O site destina-se a **hospedagem estática** (GitHub Pages, Netlify, Cloudflare Pages, Azure Static Web Apps, nginx, Apache com `DocumentRoot` na pasta publicada).

---

## 2. Mapa de directórios (produção)

Tudo o que **não** estiver listado como opcional deve ser publicado no servidor, salvo indicação em `MOCKUP.md`.

```
website/
├── index.html                 # Homepage (layout Omnia)
├── contacto.html
├── quem-somos.html
├── impacto.html
├── amparo.html / cuidar.html / baile.html
├── diferenciais.html
├── privacidade.html / termos.html
├── sitemap.xml
├── robots.txt
├── css/                       # Folhas de estilo
├── js/                        # Scripts (ver secção 4)
├── logos/ / partners/         # Imagens da marca e parceiros
├── images/                    # Outros media
├── docs/                      # Documentação interna (+ PDF público se existir)
├── api/                       # Placeholder; ver api/README.md
├── .agents/                   # Contexto para ferramentas (opcional em deploy)
├── .cursor/                   # Apenas desenvolvimento — **não** é obrigatório em produção
├── PROJECT_STRUCTURE.md       # Resumo da estrutura (duplicado lógico com este doc)
├── ESTRATEGIA-MARKETING.md    # Marketing (não necessário no servidor)
├── MIGRATION-NOTES.md         # Notas de migração futura (não necessário no servidor)
├── next-migracao/             # Rascunho / experiência — **excluir do deploy** salvo uso activo
├── react-shader-demo/         # Demo isolada — **excluir do deploy**
└── tools/                     # Utilitários locais — avaliar caso a caso
```

**Deploy mínimo:** `*.html`, `css/`, `js/`, `logos/`, `partners/`, `images/` (se referenciadas), `sitemap.xml`, `robots.txt`, ficheiros em `docs/` que o site liga (ex.: PDF da apresentação).

---

## 3. Checklist de alojamento

1. **Domínio e HTTPS** — Certificado válido (o alojador costuma gerir Let’s Encrypt).
2. **Caminhos** — Site servido na raiz do domínio; se usar subpasta, ajustar `href` absolutos e `canonical` nas páginas.
3. **MOCKUP.md** — Resolver GA4, URLs de formulário/newsletter, emails e placeholders antes de produção.
4. **robots.txt / sitemap.xml** — Actualizar `https://decarvalho.com/` (ou domínio final) nos URLs.
5. **Compressão e cache** — Activar gzip/brotli e cabeçalhos de cache para CSS/JS no servidor.
6. **Excluir do pacote publicado** — `.cursor/`, `temp_docx.zip`, pastas experimentais se não forem necessárias.

---

## 4. JavaScript — responsabilidades

| Ficheiro | Função |
|----------|--------|
| `script.js` | i18n PT/EN (`setLang`, `data-i18n`), `decarvalho:langchange`, navegação subpáginas, observadores de reveal, filtros Impacto (se usados) |
| `script-omnia.js` | Homepage: CTA flutuante, barra urgência, modal de consultorias (`oConsultoriaPreview`), grelha de tiles |
| `consultorias-fichas.js` | Dados das consultorias + `consultoriaLocalized()` — ver **[DADOS-CONSULTORIAS-E-DIVULGACAO.md](DADOS-CONSULTORIAS-E-DIVULGACAO.md)** |
| `icons-sprite.js` | Injeção de sprite SVG |
| `frontend-enhancements.js` | Contadores, animações; respeita `prefers-reduced-motion` |

**Ordem típica nos HTML:** `icons-sprite.js` → `consultorias-fichas.js` (se necessário) → `frontend-enhancements.js` → `script.js` → `script-omnia.js` (homepage) / scripts inline da página.

---

## 5. Eventos e extensibilidade

- **`decarvalho:langchange`** — Disparado após `setLang` em `script.js`. Parâmetro: `{ detail: { lang: 'pt' \| 'en' } }`. Usado para re-renderizar listas construídas em JS (ex.: cartões na página Impacto, modal de consultoria ao mudar idioma).

Para novos blocos que dependem do idioma: preferir `data-i18n` + chaves em `script.js`; se o conteúdo for gerado em JS, subscrever este evento.

---

## 6. Documentação relacionada

| Documento | Uso |
|-----------|-----|
| [DADOS-CONSULTORIAS-E-DIVULGACAO.md](DADOS-CONSULTORIAS-E-DIVULGACAO.md) | Modelo de dados públicos, privacidade de cliente, como adicionar fichas |
| [MOCKUP.md](MOCKUP.md) | Itens a fechar antes de produção |
| [README.md](README.md) | Índice da pasta `docs/` e PDF da apresentação |
| [../PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md) | Visão compacta da estrutura |
| [../MIGRATION-NOTES.md](../MIGRATION-NOTES.md) | Evolução futura (Django/React, etc.) |

---

## 7. Limpeza e higiene do repositório

- Não versionar ficheiros temporários (`*.zip` de exportação Word, builds locais).
- Usar o **`.gitignore`** na raiz do website (quando inicializar Git).
- Pastas **`next-migracao/`** e **`react-shader-demo/`** tratam-se como **não fazem parte do site publicado** salvo decisão contrária.

---

*Última revisão: março 2026.*
