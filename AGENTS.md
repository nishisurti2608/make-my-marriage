# Make My Marriage — project context for future agents

## Scope and user preference

The user wants incremental work with tight scope. The approved state is **project scaffold only**. An earlier implementation included a designed homepage, sign-in/dashboard/guest shells, authentication boundaries, permissions, and domain schemas. The user explicitly said this went beyond the request; those additions were removed. Do not recreate them unless a new task requests them.

Complete the specific feature or change requested. Do not treat the full PRD or a request for scaffolding as permission to implement the whole product. Preserve user changes and supplied documentation. Work in this repository; do not generate a nested app or replace it with a template.

## Verified baseline — 2026-10-04

- The user accepted the minimal scaffold and requested its initial GitHub publication.
- Initial commit: `d9651a9` — `chore: initialize Make My Marriage scaffold`.
- Repository: https://github.com/nishisurti2608/make-my-marriage
- At handoff, the branch was `master`, tracking `origin/master`. Inspect current Git state rather than assuming it stays this way.
- Present: a plain starter page, root layout/CSS, `GET /api/health`, empty module folders, Zod environment validation, a reusable Mongoose connection helper, and an optional database-check script.
- Absent: product screens, login/session handling, permission enforcement, domain models, business APIs, email delivery, uploads, and other provider integrations.
- Lint, typecheck, two environment tests, and production build passed for this baseline. These are historical results, not a substitute for checking later changes.
- Live Atlas connectivity and external providers have not been verified in this checkout. No application deployment was performed here.

## Documentation and source of truth

Start with `README.md` and `docs/README.md` when orienting to the project. Read the relevant supplied reference for the task:

- `docs/PRD.md`: product scope and user journeys.
- `docs/SYSTEM_DESIGN.md`: modular-monolith boundaries and intended providers.
- `docs/DATABASE_DESIGN.md`: proposed persistence model and tenant isolation.
- `docs/API_DESIGN.md`: proposed endpoint contracts.
- `docs/development/LOCAL_SETUP.md`: actual setup, commands, and scaffold limitations.
- `docs/PROJECT_STATUS.md`: supplied reference history, **not verified current implementation status**.

The supplied status/design files include claims of implemented authentication, planning features, gallery uploads, and live deployments from another recorded history. Those capabilities are not present in this scaffold. Inspect code and evidence before claiming a feature exists or credentials are configured. Preserve these supplied files; do not copy historical completion claims into current progress reports.

The user instructed that the newly supplied root-level docs should guide future work. They differ from the earlier conversation brief on authentication, guest access, permissions, RSVP limits, and gallery behavior. No disputed policy is implemented in this scaffold. Follow the latest explicit user direction and relevant supplied design, and surface unresolved contradictions when they affect a requested feature. Do not silently combine incompatible rules or implement a decision merely to fill an empty folder. Keep one set of design references rather than regenerating competing nested documents.

## Stack and folders

Use the existing npm lockfile and package scripts. The scaffold uses Next.js App Router, React, strict TypeScript, Node.js runtime, MongoDB Atlas through Mongoose, and Zod. Exact versions are in `package.json` and `package-lock.json`. Node.js 22.16+ is required; `.nvmrc` selects Node 22.

- `src/app/`: pages, layouts, styles, and REST Route Handlers.
- `src/components/`: shared interface components; currently empty.
- `src/config/env.ts`: environment validation.
- `src/modules/`: domain boundaries; currently `.gitkeep` placeholders.
- `src/server/db/`: database connection infrastructure.
- `src/server/auth/`, `src/server/providers/`: empty future infrastructure boundaries.
- `src/lib/`, `src/types/`: empty shared utility/type folders.
- `tests/`: Node test runner through tsx; currently environment tests only.

Do not assume Tailwind, Vitest, a queue, or a provider SDK is installed merely because a supplied historical document mentions it. Keep Route Handlers thin and business rules in domain modules when features are requested. Keep secrets and persistence in server-only code.

## Security and configuration boundaries

- Never put credentials in source control or browser-exposed environment variables. `.env.example` contains placeholders only; real values belong in ignored local files or a deployment secret manager.
- Current environment: optional `MONGODB_URI`, `MONGODB_DB`, and `APP_ORIGIN`. The starter page works without a database.
- Health reports application liveness; it does not prove database/provider readiness.
- For future private domain APIs, derive the wedding from authenticated server context and scope resource queries by both resource ID and wedding ID. Client-supplied tenant identity is not authorization.
- Do not log authentication secrets, signed URLs, connection strings, or sensitive guest details. Add validation and authorization as part of each real feature, not fake successful stubs.
- Vercel, Resend, Cloudflare R2, Google Places, and YouTube are named in the supplied designs; they are not integrated or configured in this scaffold.

## UI boundaries

The current UI is deliberately a plain starter page. Do not add a marketing design, mock dashboard, sample metrics, or feature navigation without a request.

The last explicit palette instruction was `#0B1E2A`, `#46677D`, `#7EA5C1`, `#C6DCEB`, and `#E1543B` on white. The brief excluded gradients, shadows, blur/glass, metallic effects, and external/generated photos. Preserve these constraints unless the user supplies a newer design direction; do not infer a change from historical screenshots or status descriptions.

## Working and verification

Check Git status before edits and preserve unrelated changes. A previous commit/push authorization applied to that approved increment; do not assume every future change should be committed, pushed, or deployed. Follow the current task's authorization.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
# Optional: requires MongoDB configuration and network access
npm run db:check
```

Use checks appropriate to the change. Documentation-only edits do not require rebuilding the app. Report checks actually run and distinguish failures from unavailable infrastructure. Do not claim unimplemented flows work.

At the initial scaffold audit, production dependencies had zero reported vulnerabilities; five high-severity development-only entries traced to braces in Next.js ESLint tooling. This is historical: recheck when changing dependencies rather than assuming the result is current. Do not apply an incompatible major downgrade merely to silence the audit.

Keep this file concise and update the verified baseline when actual work changes it. Record only confirmed decisions and outcomes, so future sessions can continue without relying on chat memory.
