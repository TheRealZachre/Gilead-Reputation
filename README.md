# Gilead Sciences Reputation

Employer-brand audit for **Gilead Sciences** covering Glassdoor and Indeed:

- Main issues and fixes per platform
- Competitor benchmarks (AstraZeneca, Amgen, BMS, BeOne)
- Copyable review reply drafts
- **Platform Admin** — create/list/delete user accounts, send password reset links, reset passwords (admin-only)

Data snapshot: July 22, 2026 (public Glassdoor & Indeed pages).

## Develop

```bash
cp .env.example .env.local   # set AUTH_SECRET
npm install
npm run dev
```

Open http://localhost:3000 — you’ll be prompted to sign in.

### Seed admin

| Field | Value |
|-------|-------|
| Username | `admin` |
| Email | `admin@gilead.com` |
| Password | `GileadRep2026!` |

Change this password after first login in production.

## Routes

| Path | Access |
|------|--------|
| `/login` · `/forgot-password` · `/reset-password` | Public |
| `/` Overview | Signed in |
| `/glassdoor` · `/indeed` · `/replies` · `/competitors` | Signed in |
| `/admin` | Admin role only |

## Build

```bash
npm run build
npm start
```

## Deploy (Cloudflare Workers + OpenNext)

```bash
npm run deploy
```

Production URL: https://gileadrep.vibecodeflow.com

Requires Wrangler authenticated (`npx wrangler login`) and `AUTH_SECRET` set as a Worker secret:

```bash
echo "<secret>" | npx wrangler secret put AUTH_SECRET
```
