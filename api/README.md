# API / Backend

Pasta reservada para lógica de backend e endpoints de API.

## Uso futuro

- **Formulário de contacto** — endpoint para receber e processar submissões (ex.: POST `/api/contact`)
- **Newsletter** — subscrição e integração com serviço de email
- **Exit-intent popup** — captura de emails para CRM ou lista
- **Serverless** — funções serverless (Vercel, Netlify, AWS Lambda) para formulários sem servidor dedicado

## Estrutura sugerida (quando implementar)

```
api/
├── contact.js      # Handler do formulário de contacto
├── newsletter.js   # Subscrição newsletter
└── README.md       # Este ficheiro
```

Até lá, os formulários estão em modo mockup (ver [docs/MOCKUP.md](../docs/MOCKUP.md)).
