<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack snapshot

- Next.js **16.2.6** with the App Router (`app/`), React **19.2.4**, TypeScript 5.
- Tailwind CSS **v4** via the `@tailwindcss/postcss` plugin. Tokens live in `app/globals.css` under `@theme inline` — there is no `tailwind.config.*`.
- Fonts come from `next/font/google` (`Geist`, `Geist_Mono`) wired as CSS variables in `app/layout.tsx`.
- ESLint flat config (`eslint.config.mjs`) extends `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.
- Path alias: `@/*` → repo root (see `tsconfig.json`).

## Package manager

This repo uses **pnpm** (`pnpm-lock.yaml` and `pnpm-workspace.yaml` are committed). Do not introduce `package-lock.json` or `yarn.lock`.

`pnpm-workspace.yaml` only lists `ignoredBuiltDependencies` (`sharp`, `unrs-resolver`) — there is no monorepo packages array yet, so the root is the sole workspace.

## Commands

| Task | Command |
| --- | --- |
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Start built app | `pnpm start` |
| Lint | `pnpm lint` |

There is no test runner configured yet — do not invent test commands; add the runner intentionally if tests are introduced.

## Conventions worth knowing before editing

- **Verify Next.js APIs first.** Before importing from `next/*` or touching routing/metadata/server actions, read the matching page under `node_modules/next/dist/docs/` (per the rule above). Treat any v15-or-earlier muscle memory as suspect.
- **Tailwind v4 is config-less.** Add theme tokens to `app/globals.css` (`@theme inline { ... }`), not a JS config file.
- **`next-env.d.ts` is generated** — listed in `.gitignore` but kept in `tsconfig.json#include`. Don't hand-edit.
- **`.env*` is gitignored.** Never commit secrets; document required env vars in this file if/when they are introduced.
