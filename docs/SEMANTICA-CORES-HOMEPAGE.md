# Semântica de cores e tipografia — Homepage DeCarvalho

Regras de uso das **três cores** do logo e **tipografia** na landing page: **Azul**, **Preto**, **Amarelo**; fontes alinhadas entre secções.

---

## Tipografia (alinhamento entre secções)

- **Chapéus** (labels em maiúsculas, ex.: «IMPACTO», «EXPERIÊNCIA COMPROVADA»): `--font-body` (Outfit), bold, uppercase.
- **Títulos de secção** (H2, ex.: «Parceiros e Clientes», «Resultados que falam por si», «Onde actuamos»): `--font-display` (DM Serif Display).
- **Números de destaque** (+15, +500, +10): `--font-display`.
- **Etiquetas de cards** (projetos, capacitados, instituições) e texto de corpo: `--font-body`.

---

## Azul (`--brand` #2B4B9A)

**Uso:** Ação principal, confiança, estrutura.

- Botão «Fale connosco» e outros CTAs primários (exceto «Ver todas as consultorias», que é amarelo)
- Links de conteúdo («Saber mais», «Quem somos →»)
- Chapéus em pill: **fundo azul** para texto amarelo (Impact, Consultorias, Diferenciais, Testimonials, FAQ)
- Borda inferior do header
- Ícones e barras em cards de diferenciais (cards pares 2.º e 4.º)
- Linhas decorativas entre secções (gradiente azul + amarelo suave)

---

## Preto (`--text` #1C1917)

**Uso:** Hierarquia e leitura.

- Títulos principais (H1, H2, H3)
- Texto de corpo e descrições
- Nomes de cards e etiquetas de conteúdo
- Subtítulos e meta (período, cliente, etc.)

**Cinza** (`--text-muted`) para texto secundário e legendas.

---

## Amarelo (`--brand-yellow` #FFD400)

**Uso:** Destaque e energia (cor da DeCarvalho ao lado do azul).

- **Hero:** rótulo — texto amarelo em fundo azul (pill)
- **Header:** hover nos links do menu (fundo amarelo suave, texto azul para leitura)
- **Impact:** chapéu «IMPACTO» em pill (amarelo sobre azul); ícones e números dos cards; barra superior dos cards ao hover
- **Consultorias:** chapéu «EXPERIÊNCIA COMPROVADA» em pill (amarelo sobre azul); botão CTA «Ver todas as consultorias e detalhes» (fundo amarelo, texto escuro)
- **Diferenciais:** chapéu em pill (amarelo sobre azul); cards ímpares (1.º e 3.º): ícones e barra ao hover em amarelo
- **Áreas de atuação:** usa azul (chapéu, ícones, barra ao hover, link «Ver todas as áreas») para não concentrar amarelo numa única secção
- **Testimonials e FAQ:** chapéus em pill (amarelo sobre azul)
- **Brief:** borda esquerda amarela do bloco «Soluções que transformam»
- **Linhas decorativas:** gradientes das secções incluem amarelo suave (`--brand-yellow-soft`) junto ao azul

**Contraste:** Amarelo sobre azul ou sobre fundo escuro; ou fundo amarelo com texto preto. Evitar amarelo sobre fundo branco/claro.

---

## Resumo rápido

| Elemento              | Cor     | Variável           |
|-----------------------|---------|--------------------|
| Títulos (H1, H2, H3)  | Preto   | `--text`           |
| Chapéus em pill       | Amarelo sobre azul | `--home-highlight` + `--home-primary` |
| Botão «Fale connosco» | Azul    | `--brand`          |
| Botão «Ver todas as consultorias» | Amarelo | `--home-highlight` |
| Links de conteúdo     | Azul    | `--brand`          |
| Hover do menu         | Fundo amarelo suave, texto azul | `--home-highlight-soft` + `--home-primary` |
| Hero label            | Amarelo em azul (pill) | `--brand-yellow` + `--brand` |
| Impact / Consultorias / Diferenciais / Testimonials / FAQ | Chapéu pill amarelo | `--home-highlight` |
| Ícones e barras (Impact, Diferenciais ímpares) | Amarelo | `--home-highlight` |
| Áreas de atuação (chapéu, ícones, link) | Azul | `--home-primary` |
| Linhas decorativas    | Gradiente azul + amarelo suave | `--accent-soft` + `--brand-yellow-soft` |
