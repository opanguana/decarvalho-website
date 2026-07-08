# Dados de consultorias e política de divulgação

Especificação para **`js/consultorias-fichas.js`** e interfaces que consomem `window.CONSULTORIAS_FICHAS` e **`window.consultoriaLocalized`**.

---

## 1. Objectivos

- **Credibilidade** — Mostrar contexto, tipo de trabalho, resultados visíveis e impacto.
- **Discrição** — Não expor no site o detalhe contratual completo (metodologia passo-a-passo, listas técnicas internas).
- **Bilingue** — Conteúdo público em PT e EN alinhado com o selector de idioma do site.

---

## 2. Onde os dados aparecem

| Superfície | Ficheiro | Comportamento |
|------------|----------|---------------|
| Modal «Ver detalhes» | `index.html` + `script-omnia.js` | Secções: Contexto → Actividades → Resultados → Impacto |
| Página Impacto | `impacto.html` (script inline) | Mesma ordem em cada cartão |
| Pré-visualização | Reutiliza o mesmo array por índice (`data-consultoria="0"`…) |

---

## 3. Estrutura de cada entrada no array

### 3.1 Identificação e período (público)

- `titulo`, `tituloEn` — Título longo da consultoria.
- `periodo`, `periodoEn` — Intervalo ou referência temporal.

### 3.2 Cliente e visibilidade

- `cliente`, `clienteEn` — Nome ou designação completa **usada quando o nome pode ser público**.
- **`clienteNomePublico`** (opcional, default `true`):
  - `true` — Exibir `cliente` / `clienteEn` no rótulo «Cliente / Client».
  - `false` — Não citar o nome legal completo no site; usar rótulo «Parceiro institucional» e texto agregado.
- **`clienteResumo`** (obrigatório se `clienteNomePublico === false`):
  - Forma: `{ pt: '...', en: '...' }` — Descrição do tipo de actor (ex.: agência das NU + ministério) **sem** nome próprio se assim se pretender.

Quando `clienteNomePublico === false`, a UI mostra uma **nota**: nome completo disponível sob pedido (proposta / contacto).

### 3.3 Conteúdo técnico detalhado (arquivo / referência interna)

Mantido no mesmo objecto para não perder histórico e permitir relatórios ou CMS futuro:

- `problema`, `problemaEn`
- `estrategia`, `estrategiaEn` (arrays)
- `entregaveis`, `entregaveisEn` (arrays)

**Estes campos não devem ser mostrados nas secções públicas** quando existir `divulgacao` (ver abaixo). A função `consultoriaLocalized` usa-os apenas como **fallback** se `divulgacao` estiver ausente.

### 3.4 Divulgação pública — `divulgacao`

Objecto com três chaves, cada uma com **`pt`** e **`en`**:

| Campo | Tipo | Uso na UI |
|-------|------|-----------|
| `contexto` | `{ pt: string, en: string }` | Parágrafo(s) de enquadramento (problema sectorial / mandato, sem pormenor confidencial). |
| `atividades` | `{ pt: string[], en: string[] }` | Lista de **tipos** de actividade (ex.: revisão de evidências, consultas, apoio ao plano). Evitar checklist contractual. |
| `resultados` | `{ pt: string[], en: string[] }` | Resultados **observáveis** ao nível institucional (entregas de alto nível, não necessariamente cada linha do relatório). |

### 3.5 Impacto (mensagem final)

- `resultado: { pt, en }` — Texto corrido destacado na secção **Impacto** (tom orientado a valor / mudança).

---

## 4. API em runtime — `consultoriaLocalized(c, lang)`

Definida no final de `consultorias-fichas.js`.

**Parâmetros:** `c` = entrada do array, `lang` = `'pt'` | `'en'`.

**Retorno (campos relevantes para UI pública):**

- `titulo`, `periodo`, `cliente` (já processado conforme visibilidade)
- `clienteNomePublico`, `clienteNotaSobPedido`
- `contexto`, `atividades`, `resultados` (arrays/lista derivada de `divulgacao` ou fallback)
- Mantém também `problema`, `estrategia`, `entregaveis` para compatibilidade / tooling

---

## 5. Como adicionar uma nova consultoria

1. Duplicar um bloco `{}` dentro do array em `consultorias-fichas.js`.
2. Preencher `titulo`, `tituloEn`, `periodo`, `periodoEn`, `cliente`, `clienteEn`.
3. Definir **`divulgacao`** completa (contexto, atividades, resultados) em PT e EN.
4. Definir **`resultado`** (impacto) em PT e EN.
5. Opcional: preencher `problema` / `estrategia` / `entregaveis` para arquivo interno.
6. Se o nome do cliente **não** for público: `clienteNomePublico: false` + `clienteResumo`.
7. Se aparecer na homepage aos primeiros quatro índices, actualizar também os **tiles** em `index.html` (`data-consultoria`, texto curto do cliente e título) ou automatizar essa grelha no futuro.

8. Testar **PT e EN** em `impacto.html` e o modal na homepage.

---

## 6. Como reverter ou simplificar

- **Só conteúdo:** remover ou comentar blocos `divulgacao` — a UI volta ao fallback (`problema`, `estrategia`, `entregaveis`).
- **Secções da UI:** alterar `index.html`, `script-omnia.js` e o script de `impacto.html` (procure por labels `contexto`, `atividades`, `resultados`, `impacto`).

---

## 7. Relação com i18n global

Rótulos fixos do modal (Period, Client, Context, …) vêm de **`consultoriaPreviewLabels()`** em `script-omnia.js` e de **`cardLabels()`** em `impacto.html`. Novas secções devem duplicar PT/EN nesses dois sítios ou passar a chaves em `script.js` (refactor futuro).

---

*Última revisão: março 2026.*
