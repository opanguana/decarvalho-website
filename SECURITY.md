# Security and secrets

## Current posture

- This is a static HTML/CSS/JavaScript site.
- No runtime secrets are required today.
- Production-only values must live in the deployment provider or the approved team vault, not in git.
- `.env` and `.env.*` are ignored; `.env.example` is committed as the safe template.

## Secret handling rules

- Never commit API keys, tokens, passwords, private keys, service account JSON, or production `.env` files.
- Add only placeholder values to `.env.example`.
- Rotate any secret immediately if it is accidentally committed.
- Prefer provider-managed environment variables for production configuration.
- Document critical provider setting changes in the PR description, including previous value name, new value name, owner, and rollback path.

## Local secret scanning

Run this before committing sensitive changes:

```bash
rg -n --hidden -g '!node_modules' -g '!.git' -i "(api[_-]?key|secret|token|password|passwd|private[_-]?key|BEGIN (RSA|OPENSSH|PRIVATE)|client_secret|access[_-]?token|auth[_-]?token|AKIA[0-9A-Z]{16})" .
```

If `gitleaks` is available locally, run:

```bash
gitleaks detect --source .
```

Treat secret scanner output as a blocker until reviewed.

## Dependency hygiene

- Use `npm ci` for reproducible installs.
- Run `npm audit --audit-level=moderate` before releases when network access is available.
- Review dependency update PRs in small batches.
- Avoid adding runtime JavaScript dependencies unless they are clearly justified.

## Vulnerability response

1. Create a private issue or restricted ticket with reproduction details.
2. Patch on a short-lived branch.
3. Run `npm run lint`, `npm test`, and `npm run build`.
4. Release a patch version.
5. Document the fix in `CHANGELOG.md` under `Security`.
