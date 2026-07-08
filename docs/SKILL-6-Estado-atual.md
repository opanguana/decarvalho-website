# Skill 6 — Back-end / CMS / Integrations — Estado atual

**Data:** Março 2026

## Decisão

O site DeCarvalho é **institucional e estático**. Para o objetivo atual (apresentar a empresa e conduzir a contacto), **não é necessário backend, CMS nem automação de formulários**.

## O que está implementado (real)

- **Canais de contacto reais:** email (comercial@decarvalhoconsultorias.com), WhatsApp (+258 840 371 527), telefone, endereço.
- **Página de contacto:** exibe os canais; o formulário não envia para servidor — ao submeter, é mostrada uma mensagem que direciona o utilizador para email ou WhatsApp.
- **Newsletter:** não há inscrição automática; a secção convida a contactar por email ou página de contacto para subscrever.
- **Exit popup:** CTA para a página de contacto, sem captura de email.

## O que não existe (e não foi fingido)

- Sem GA4/analytics no código (ponto 12 — backlog).
- Sem backend para formulários.
- Sem CMS.
- Sem mensagem de “Mensagem enviada” ou “Subscrito” falsas.

## Backlog futuro (fora do scope atual)

- **Ponto 12 (Analytics):** implementar GA4 ou equivalente quando for prioridade.
- **Ponto 13 (DevOps/Deployment):** infraestrutura e segurança.
- **Opcional:** integração do formulário de contacto com serviço externo (Formspree, Netlify Forms, etc.) ou backend próprio, se a equipa decidir captar leads por formulário.
