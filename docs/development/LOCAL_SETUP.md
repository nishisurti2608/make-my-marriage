# Local setup

Use Node.js 22.16+ and npm. This is a runnable project scaffold, not a feature implementation.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 for the plain starter page.

## Structure

```text
src/
  app/               Root layout, starter page, CSS, and api/health
  components/        Empty shared UI folder
  config/            Zod environment validation
  lib/               Empty shared utility folder
  modules/           Empty domain folders matching the system design
  server/
    auth/            Empty authentication boundary
    db/              Reusable Mongoose connection helper
    providers/       Empty external-provider boundary
  types/             Empty shared type folder
```

No authentication, authorization implementation, database models, feature screens, domain endpoints, email delivery, or file uploads exist. Empty directories use .gitkeep files. No services are contacted by the starter page or health endpoint.

## Environment

MONGODB_URI is optional until using persistence. Keep an Atlas connection string in .env.local, never source control. MONGODB_DB defaults to make_my_marriage. APP_ORIGIN defaults to http://localhost:3000. The optional `npm run db:check` command requires a configured MongoDB instance and permitted network access; live connectivity has not been verified.

## Commands

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Tests cover environment validation only. GET /api/health reports application liveness without database/provider readiness or credentials. Authentication and product APIs in the supplied design documents are future work.

Known tooling issue from the initial dependency audit: five high-severity development-only entries trace to the unpatched braces dependency in Next.js ESLint tooling. The production dependency audit reported zero vulnerabilities. No incompatible lint-tool downgrade was applied.
