# Curadoria: Omnia (omnia.co.mz) → DeCarvalho

> **Nota:** O site DeCarvalho não deve parecer com a Omnia. Para **propostas de melhoria que diferenciem** a DeCarvalho, use **[CURATORIA-MELHORIAS-DECARVALHO.md](CURATORIA-MELHORIAS-DECARVALHO.md)**. Este ficheiro descreve a estrutura da Omnia apenas como referência do que *evitar* ou *diferenciar*.

Análise do site da [Omnia Consultoria](https://www.omnia.co.mz/) (referência do que não repetir).

---

## 1. Estrutura e tendências do site Omnia

Com base na estrutura e no conteúdo do site da Omnia:

| Secção (Omnia) | Conteúdo / padrão | Tendência |
|----------------|-------------------|-----------|
| **Hero** | Label "Soluções que Transformam" + H1 em duas linhas ("Consultoria em" / "salvaguardas sociais"), sublinha curta, CTA "Contacte-nos" | Headline em duas linhas; CTA único e claro |
| **Badges sob o hero** | "Consulting", "ISO 30415", "ISO 1002", "MGQRS Project" — pequenos selos/pills em linha | **Trust badges** imediatamente abaixo do hero (credenciais/certificados) |
| **Stats + impacto** | "4+ Projectos Activos", "Community Activities", "Impact" / "Impacto Real" — números e rótulos curtos | Faixa de **métricas** compacta com rótulo de “impacto” |
| **Parceiros** | "Parceiros e Financiadores" — marquee horizontal de logos (Banco Mundial, ANE, EDM, etc.) | Marquee de logos (DeCarvalho já tem equivalente) |
| **Sobre nós** | "Soluções que transformam desafios em resultados" + metáfora (bússola) + Missão, Visão, Valores + 4 números (Anos, Projetos, Conformidade, Províncias) | Bloco **Sobre** com narrativa (missão/visão/valores) e **números** no mesmo bloco |
| **Diferenciais** | "Por que escolher a Omnia?" + "Diferenciais Competitivos" + 6 cards (incl. card CTA "Seu Projeto Aqui – Fale com nossos especialistas") | Título em pergunta + subtítulo; **um card CTA** no grid de diferenciais |
| **Áreas de atuação** | 4 blocos grandes com ícone, lista de bullets e **badge** (ex.: "Normas IFC", "Status", "Sistema Ativo") | Áreas como **cards com lista + pequeno badge** de estado/norma |
| **Soluções especializadas** | 4 cards numerados (01–04), hover “Passe o rato para explorar”, “Saber mais detalhes” | **Numeração** (01, 02…) + interação hover + CTA “Saber mais” |
| **Equipa** | "Capital Humano" / "Equipa Multidisciplinar" — cards com foto, nome, cargo, “Ver Perfil Completo” | Secção **equipa** com fotos e link para perfil |
| **Portfólio** | "Track Record" / "Experiência Comprovada" — grid de projetos (sector, local, título, “Ver Detalhes”) | **Portfólio** como grid de projetos com “Ver Detalhes” (DeCarvalho tem consultorias + “Ver ficha”) |
| **Parcerias estratégicas** | Lista de tipos de parceiros (Banco Mundial, MCC, AFD, etc.) + texto de credibilidade | Texto de **parcerias** além dos logos |
| **Produtos / conhecimento** | "Intellectual Capital" — cards (Relatório, Manual GRM, Dashboard, Módulo) com “Ler / Visualizar / Acessar” | Secção **recursos** (PDFs, links) com CTAs por recurso |
| **CTA final** | "Pronto para começar?" + "Guiamos o seu negócio no caminho certo." + **dois botões**: "Fale Connosco" + "Ver Projetos" | CTA com **dois botões** (contacto + portfólio/projetos) |
| **Footer** | Logo, tagline, Contactos (morada, tel, email), Serviços, Links Rápidos, copyright, Política, Termos | Footer em **colunas** (contactos, serviços, links) |
| **Flutuante** | Botão "Fale Connosco" fixo | CTA flutuante (DeCarvalho já tem) |

---

## 2. DeCarvalho hoje vs Omnia (resumo)

| Aspecto | DeCarvalho (atual) | Omnia | Aplicável? |
|---------|--------------------|--------|------------|
| Hero duas linhas + CTA | Sim (Consultoria em / resposta à VBG…) | Sim | Já alinhado |
| Trust badges sob o hero | Não | Sim (ISO, Consulting…) | **Sim** — adicionar badges (ex.: normas, anos) |
| Stats após hero | Sim (após parceiros: +15, +500, +10) | Sim (antes/depois parceiros) | Ordem pode aproximar (stats mais perto do hero) |
| Parceiros marquee | Sim | Sim | Já alinhado |
| Sobre: missão/visão/valores + números | Parcial (brief curto + link Quem somos) | Bloco dedicado com 4 números | **Sim** — reforçar “Sobre” na home ou link claro para Quem somos com números |
| Diferenciais + card CTA | 4 cards + 1 link “Descobrir todos” | 6 cards incluindo 1 card “Fale connosco” | **Sim** — adicionar card CTA “Fale connosco” no grid |
| Áreas com badges | Tags (VBG, Género…) + link | 4 blocos com lista + badge (Normas IFC, Status) | **Sim** — evoluir áreas para cards com lista + badge opcional |
| Soluções numeradas + hover | 3 cards (Amparo, Cuidar+, Baile), sem numeração | 4 cards 01–04, hover “explorar” | **Sim** — numerar (01, 02, 03) e texto tipo “Saber mais” |
| Equipa na home | Não | Sim (fotos, Ver Perfil) | Opcional — link “Equipa” ou bloco curto na home |
| Portfólio / projetos | Consultorias com “Ver ficha” | “Ver Detalhes” por projeto | Já próximo; manter “Ver ficha” |
| CTA final dois botões | “Solicitar proposta” + “Ver casos de sucesso” | “Fale Connosco” + “Ver Projetos” | **Já alinhado** — manter dois botões |
| Footer em colunas | Sim (brand, contactos, serviços, links) | Sim | Já alinhado |

---

## 3. Tendências que se aplicam à DeCarvalho (prioridade)

### Prioridade alta (impacto visual e apresentação, baixo risco)

1. **Trust badges logo abaixo do hero**  
   - Omnia: pills “Consulting”, “ISO 30415”, etc.  
   - DeCarvalho: adicionar uma linha de 3–4 badges, por exemplo: “Consultoria”, “VBG & Género”, “+9 anos”, “UNDP · SNV · Oxfam” (ou normas/projetos que aplicam).  
   - Implementação: nova faixa `.o-hero-badges` com pills/capsulas entre o hero e o marquee de parceiros.

2. **Diferenciais: card CTA no grid**  
   - Omnia: um dos cards é “Seu Projeto Aqui? Fale com nossos especialistas”.  
   - DeCarvalho: adicionar um 5.º card no grid de diferenciais com título “Tem um desafio?” e CTA “Fale connosco” ou “Solicitar proposta”, ligado a `contacto.html`.

3. **Soluções (Amparo, Cuidar+, Baile) com numeração**  
   - Omnia: 01, 02, 03, 04 + “Saber mais detalhes”.  
   - DeCarvalho: numerar os 3 cards (01, 02, 03) e manter “Saber mais →”.  
   - Opcional: pequeno texto no hover (“Saiba mais sobre [nome]”) para aproximar do “Passe o rato para explorar”.

### Prioridade média (apresentação mais parecida com Omnia)

4. **Secção “Sobre” na home mais explícita**  
   - Omnia: “Soluções que transformam desafios em resultados” + Missão, Visão, Valores + 4 números.  
   - DeCarvalho: no bloco `.o-brief` pode-se acrescentar uma linha de 3–4 números (ex.: +9 anos, +15 projetos, +500 profissionais, X províncias) e/ou um subtexto tipo “Missão / Visão” com link “Quem somos” para manter a página curta.

5. **Áreas de atuação com cards e badges**  
   - Omnia: 4 blocos com listas e badge (Normas IFC, Status, etc.).  
   - DeCarvalho: evoluir `.o-areas-compact` para 3–4 mini-cards (VBG, Género, Capacitação, Projetos) com 2–3 bullets cada e um badge opcional (ex.: “OMS/UNFPA”, “Em curso”).

6. **Títulos de secção no estilo Omnia**  
   - Omnia: muitas secções com pergunta ou frase curta (“Por que escolher a Omnia?”, “O que oferecemos”, “Pronto para começar?”).  
   - DeCarvalho: já tem “Por que escolher a DeCarvalho?”; pode alinhar outras secções com perguntas ou frases curtas (ex.: “O que fazemos”, “Quer saber mais?”).

### Prioridade baixa (opcional)

7. **Secção “Produtos / Recursos”**  
   - Omnia: “Produtos e Conhecimento” com Relatório, Manual, Dashboard, Módulo.  
   - DeCarvalho: se existir PDF (ex.: apresentação) ou recursos, uma secção “Recursos” com 2–3 cards e “Ver PDF” / “Ler mais” aproxima a apresentação.

8. **Equipa na home**  
   - Omnia: secção “Capital Humano” com fotos e “Ver Perfil Completo”.  
   - DeCarvalho: se a página Quem somos tiver equipa, pode-se colocar na home 2–3 fotos + “Conhecer equipa” ou manter só link no menu.

---

## 4. O que não copiar (identidade DeCarvalho)

- **Conteúdo e posicionamento:** Manter foco em VBG, inovação institucional, Amparo, Cuidar+, Baile da Saudade; não adoptar o foco em salvaguardas/IFC/MCC da Omnia.
- **Cores e marca:** Manter identidade visual DeCarvalho (azul, amarelo, logos); apenas adoptar **padrões** de layout e componentes (badges, numeração, card CTA, dois botões no CTA).
- **Glass e estilo:** Manter o estilo actual da DeCarvalho (glass, gradientes) se quiser; as mudanças acima são de **estrutura e apresentação**, não obrigatoriamente de “tudo sólido” como no redesign anterior.

---

## 5. Checklist de implementação sugerida

| # | Alteração | Onde | Esforço |
|---|-----------|------|--------|
| 1 | Faixa de trust badges sob o hero (3–4 pills) | `index.html` + `layout-omnia.css` | Baixo |
| 2 | Card CTA “Fale connosco” no grid de diferenciais | `index.html` + CSS | Baixo |
| 3 | Numeração 01, 02, 03 nos cards Soluções | `index.html` + CSS | Baixo |
| 4 | Números no bloco “Sobre” (brief) ou reforço do link Quem somos | `index.html` | Baixo |
| 5 | Áreas como mini-cards com lista + badge opcional | `index.html` + CSS | Médio |
| 6 | Títulos de secção alinhados a perguntas/frases curtas | Texto em `index.html` | Baixo |
| 7 | Secção “Recursos” (PDFs, links) — se houver conteúdo | Nova secção | Médio |
| 8 | Bloco equipa na home (opcional) | Nova secção ou link | Médio |

---

## 6. Referência

- **Omnia Consultoria:** [https://www.omnia.co.mz/](https://www.omnia.co.mz/)  
- **DeCarvalho:** site actual em `index.html` com layout Omnia (`layout-omnia.css`).

Esta curadoria serve de base para aplicar, de forma incremental, a **aparência e a apresentação** inspiradas na Omnia, sem alterar a identidade nem o conteúdo central da DeCarvalho.
