# Changelog

Todas as alterações relevantes deste projecto devem ser documentadas neste ficheiro.

O formato segue [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) e o versionamento segue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Baseline local para `lint`, `test` e `build` sem dependências pesadas.
- Workflow documentado para branches, PRs, releases e rollback.
- Estratégia documentada para segredos, backups de configuração e scanning.

### Fixed

- Referência local do logótipo MWE na homepage.

## Release rules

- Commits seguem Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `ci:`, `refactor:`.
- Antes de uma release, mover itens de `[Unreleased]` para `vX.Y.Z - YYYY-MM-DD`.
- Criar tags anotadas no formato `vX.Y.Z`.
- Preferir rollback por `git revert` e nova release `PATCH` em vez de reescrever histórico publicado.
