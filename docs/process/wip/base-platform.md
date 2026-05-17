# Base Platform

This document captures what the Base Platform actually is — the pre-built foundation that ships before Custom Work begins, and what drives the price variance referenced on the public pricing page. Plain wording — no brand voice applied. Internal planning doc.

The Base Platform is everything a software product needs that isn't unique to the product. It's the substrate Custom Work runs on. Building it from scratch on every engagement would waste weeks of client budget on solved problems; instead it's assembled from battle-tested patterns and components, configured to the specifics of the product, and shipped fast.

## What the Base Platform is — and isn't

**It is:**

- The foundation every web product needs regardless of what the product does.
- A set of components — most of them pre-built — wired together and configured for this specific product, deployed to the same production stack v1 will run on.
- Fixed-cost work, scoped during Discovery and quoted before the contract is signed.

**It isn't:**

- A reusable codebase the client is licensing. The Base Platform is configured into the client's own repository; everything in it is theirs to own, modify, and walk away with.
- Custom Work. Anything specific to the product's business logic, workflows, or differentiated features is Custom Work, billed and scoped separately (see `development-cycle.md`).
- A constraint on the product's stack. The components are chosen for fit, not for reuse. If a product needs something the default stack doesn't cover, the inventory is adjusted during Discovery.

## Component inventory

Discovery (see `discovery.md`) determines which of these are included and how each is configured. Not every product needs every component; the inventory below is the menu, not the bill.

**Identity and access.**

- User authentication (sign-up, sign-in, session management).
- Password reset and account recovery.
- Multi-factor authentication where the product or compliance demands it.
- Social or SSO sign-in (Google, Apple, magic-link, SAML, OIDC) where the audience expects it.
- Authorization primitives — roles, permissions, ownership scoping — sized to the product's access model.

**Transaction and exchange.**

- Whatever plumbing the business model needs to make the v1 exchange real. For SaaS this is billing and payments — subscription handling, plan changes, invoices, dunning, tax. For other models it's the equivalent: marketplace payouts, content upload pipelines, contribution flows, attention or social mechanics.
- Webhooks and reconciliation against the upstream provider (Stripe, the chosen processor, the relevant platform API).

**Hosting and deploys.**

- Production hosting environment provisioned and configured.
- Staging environment that mirrors production.
- Deploy pipeline — continuous deployment from main, with feature flags gating in-progress work (see `development-cycle.md`).
- DNS, SSL, CDN, edge caching configured for the final domain.

**Operability.**

- Monitoring and alerting on the production stack — uptime, latency, error rates.
- Error tracking with stack traces, release tagging, and notification routing.
- Application logs aggregated and searchable.
- Basic admin tooling — enough for the client (or me) to find a user, inspect their state, and unblock them without writing one-off scripts.

**Communications.**

- Transactional email (sign-up confirmations, password resets, receipts, the notifications the product depends on).
- Inbound support address routing where the product needs it.
- Notification primitives for whatever channels the product uses — in-app, email, push, SMS — wired to the events that should trigger them.

**Content surfaces.**

- A content layer for whatever the product needs to publish that isn't application data — help pages, terms, marketing pages co-located with the product, client-editable copy on key surfaces.

**Analytics and telemetry.**

- Product analytics wired into the events that matter for the model (sign-up, activation, conversion, churn signals).
- Privacy-respecting defaults; consent management where jurisdiction requires it.

## What drives the price variance

The $15k–$35k range on the public pricing page reflects two distinct axes: **which components are included** and **how complex each included component is** for this specific product. Discovery surfaces both. A quote toward the lower end means a leaner inventory and simpler configuration per component; the upper end means more components, or components that are non-trivial for this product.

**Drivers that push toward the lower end:**

- Single-tenant model — no organizations, no team accounts, no per-tenant data isolation work.
- Email/password auth only, no SSO, no MFA.
- One business-model component (a single subscription tier, or no payments at all in v0/v1-beta).
- Standard transactional email, no multi-channel notifications.
- One production region, no regulated-data handling.
- Off-the-shelf admin tooling rather than custom-built.

**Drivers that push toward the upper end:**

- Multi-tenant model — orgs, team membership, per-tenant data scoping baked into the foundation.
- Social sign-in across multiple providers, SSO via SAML/OIDC, MFA, or compliance-driven access controls.
- More elaborate transaction or exchange model — multiple subscription tiers, marketplace payouts, metered billing, complex tax handling, non-payment exchange flows.
- Multi-channel notifications (email + push + SMS + in-app) with routing rules per event.
- Regulated-data handling (HIPAA, SOC 2 posture, regional data residency).
- Heavier admin tooling — support seats, audit logs, impersonation, bulk operations.
- Integrations with the client's existing stack (CRM, data warehouse, analytics destination) wired in as part of the foundation.

The quote is a single fixed number, not a per-component itemization — the client commits once, and the work ships against that number regardless of which day-of-build surprises emerge inside each component.

## Workload and timeline

- About two weeks of focused build time, in parallel with early Custom Work where it makes sense. The components are mostly pre-built; the work is configuration, wiring, and the project-specific glue.
- Shipped to staging during build, then to production at the v1-beta cut (or the v0 cut if marketing-site components are part of the foundation).
- Client involvement during Base Platform build is light by design — most of the calls were made during Discovery. Decisions that do surface get raised the same way Custom Work decisions are (see `development-cycle.md`).

## Deliverables

- Working production stack on the final domain (or staging, ahead of the v1-beta cut).
- Documented inventory of what's included, how it's configured, and where the controls are — useful when day-to-day eventually transitions to a more junior developer (see Stepping Back in `project-arc.md`).
- Operational baseline: monitoring reporting real data, error tracking capturing real exceptions, admin tooling functional, deploys routine.

## Dependencies and what follows

- **Depends on:** Discovery (see `discovery.md`) — the inventory and configuration are scoped during Discovery, and the price is set against that scope before the contract is signed.
- **Feeds into:** the v1-beta release (see `project-arc.md`). The Base Platform is the production stack v1-beta deploys onto. Custom Work runs on top of it from there forward.

Pricing of the Base Platform — how the fixed quote is set, how the variance is communicated, what happens if the scoped inventory turns out to be wrong — is covered in the pricing & contracts doc _[planned — see issue #27]_.
