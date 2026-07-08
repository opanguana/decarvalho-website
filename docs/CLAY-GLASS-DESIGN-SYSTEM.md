# Sistema Claymorphism + Glassmorphism

## Princípio

- **Glass (cenário)**: estrutura que organiza a página — vidro fosco, borda branca fina
- **Clay (personagem)**: elementos de destaque — volume "massinha", convida ao clique

---

## Elementos Glass (cenário)

| Elemento      | Descrição                                  |
|---------------|--------------------------------------------|
| `.header`     | Navbar com `backdrop-filter`, borda reflexo |
| `.o-header`   | Header layout Omnia                        |
| `.o-hero-inner` | Painel do hero                           |
| `.o-sol-card` | Cards de soluções (Amparo, Cuidar+, Baile) |
| `.o-dropdown` | Menus suspensos                            |
| FAQ items     | Painéis de pergunta                        |

**Características**: `backdrop-filter: blur()`, borda `rgba(255,255,255,0.8+)`, sombra externa suave.

---

## Elementos Clay (personagem)

| Elemento         | Descrição                         |
|------------------|-----------------------------------|
| `.o-hero-cta`    | Botão principal do hero           |
| `.o-btn-primary` | Botões primários                  |
| `.o-float-cta-btn` | Botão flutuante «Fale connosco» |
| `.btn-primary`   | Botões gerais                     |
| `.btn-cta`       | Botão Contacto no nav             |

**Características**: `inset` shadows (volume), gradiente, `border-radius` maior (14–16px).

---

## Fundo Aurora UI

O fundo usa gradientes vibrantes (azul, amarelo) para:
- O vidro ter algo para borrar
- A argila ter contraste para se destacar

---

## Tipografia

Mantém `Outfit` (sans-serif geométrica) para legibilidade com os estilos visuais.
