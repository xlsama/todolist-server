# Repository Guidelines

## Project Structure & Module Organization
- `server/api/`: Nitro route handlers. Examples: `server/api/todos.get.ts` (GET `/api/todos`), `server/api/todos/[id].delete.ts` (DELETE `/api/todos/:id`), `server/api/index.ts` (GET `/api`).
- `server/utils/`: Shared helpers (DB/external I/O). Keep fetch/DB logic here for testability.
- `nitro.config.ts`: Nitro config (`srcDir: 'server'`).
- `.env`: Local secrets/config (gitignored).
- Tests: `server/__tests__/` or next to sources as `*.spec.ts`.

## Build, Test, and Development Commands
- `pnpm dev`: Start dev server with HMR at `http://localhost:3000`.
- `pnpm build`: Build to `.output/`.
- `pnpm preview`: Run built server (`node .output/server/index.mjs`).
- `pnpm lint`: Type‑aware Oxlint checks and fixes.
- `pnpm format`: Prettier formatting.
- Verify base endpoint: `curl http://localhost:3000/api`.

## Coding Style & Naming Conventions
- Language: TypeScript + ESM (`"type": "module"`).
- Prettier: tabs, width 2; single quotes; no semicolons; print width 100.
- Lint: Oxlint (+ tsgolint). Prefer `const`, explicit return types; no unused vars.
- Names: camelCase (vars/functions), PascalCase (types), kebab-case (dirs/files).
- Routes: Nitro patterns: `.get.ts`, `.post.ts`, `[param].ts`.

## Testing Guidelines
- Framework: Vitest + c8 (recommended; to be configured).
- Coverage: Aim ≥80%; cover route handlers and utilities.
- Naming: `*.spec.ts` in `server/__tests__/` or alongside sources.
- Run (once added): `pnpm test`; coverage via `c8`.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits. Examples: `feat(server/api): add todos endpoints`, `fix(db): handle null id`, `docs: update API usage in README`, `test(api): add route specs`.
- PRs: Clear description, linked issues, API samples (cURL), manual test steps. Must pass `pnpm lint`/`pnpm format`/build and include/adjust tests.

## Security & Configuration Tips
- Never commit secrets; use `.env` and environment variables.
- Validate input in handlers; avoid logging sensitive data.
- Centralize external I/O (DB, fetch) in `server/utils/` for easier testing/review.

