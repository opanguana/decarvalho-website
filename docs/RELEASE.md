# Release, versioning and rollback

## Standards

- Commit standard: Conventional Commits.
- Version standard: Semantic Versioning (`MAJOR.MINOR.PATCH`).
- Release tag standard: annotated tags named `vX.Y.Z`.
- Changelog standard: `CHANGELOG.md`, grouped by `Added`, `Changed`, `Fixed`, `Security`, `Deprecated`, `Removed`.

## Commit format

```text
type(scope optional): short imperative summary

What changed: concrete summary.
Why: best-practice or product reason.
Rollback: exact rollback path.
```

Accepted types:

- `feat:` user-visible feature
- `fix:` bug fix
- `docs:` documentation only
- `chore:` tooling, maintenance, metadata
- `ci:` CI/CD changes
- `refactor:` behaviour-preserving code restructuring

## SemVer mapping

- `fix:` -> patch release (`1.0.1`)
- `feat:` -> minor release (`1.1.0`)
- `BREAKING CHANGE:` -> major release (`2.0.0`)
- `docs:`, `chore:` and `ci:` do not require a release unless they affect deployment or operations

## Changelog generation

Before tagging, generate the candidate notes from commits since the previous tag:

```bash
git describe --tags --abbrev=0
git log --pretty=format:'- %s (%h)' vX.Y.Z..HEAD
```

Then update `CHANGELOG.md` manually into the standard groups. Manual grouping is intentional here because this is a small static site and does not justify a heavy release framework.

## Release checklist

```bash
git switch main
git pull --ff-only
npm ci
npm run lint
npm test
npm run build
git status --short
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main --tags
```

Only tag from a clean working tree after validation passes.

## Rollback strategy

### Bad commit before release

```bash
git revert <commit-sha>
```

Open a PR with the revert commit and run the normal validation commands.

### Bad release after tag/deploy

Preferred approach:

1. Revert the bad commit with `git revert <commit-sha>`.
2. Update `CHANGELOG.md`.
3. Create a new patch version.
4. Deploy the patch release.

This preserves audit history and avoids rewriting public tags.

### Incorrect tag before anyone consumes it

```bash
git tag -d vX.Y.Z
git push origin :refs/tags/vX.Y.Z
```

Only delete remote tags after confirming the tag was not used by deployment, clients, or another developer.

## Configuration backup

- Commit safe examples such as `.env.example`.
- Never commit real `.env` files.
- Keep production secrets in the deployment provider, not in git.
- Before changing provider settings, record the previous value name, owner, and reason in the PR.
- For critical manual settings, export or screenshot provider configuration and store it in the approved team vault.
