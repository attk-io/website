# Base Platform

The Base Platform is the pre-built foundation every product gets before custom feature work begins. It covers the capabilities every web product needs regardless of what the product does — auth, hosting, email, observability — configured for the specific product and shipped to production.

---

## Included

### Marketing Website

**Category:** Growth

A single-page public-facing website covering the core surfaces a visitor needs before signing up: the pitch, pricing, and any key supporting content. Built as part of the same codebase and deployed to the same stack as the application.

**Time estimate:** 3–4 days  
**Infrastructure dependencies:** None beyond hosting

---

### User Authentication

**Category:** Identity & Access

Passwordless sign-in via OTP (one-time passcode) and magic link. Handles user registration, session management, and account recovery — all without a stored password.

**Time estimate:** 2–3 days  
**Infrastructure dependencies:** Database (Postgres), transactional email service (Resend / Postmark)

---

### User Account & Profile

**Category:** Identity & Access

Settings page where a user can update their name, email, and any other account-level preferences. Tied into the authentication system.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Database (Postgres)

---

### Transactional Email & Notifications

**Category:** Product

Transactional email for the events the product depends on: confirmations, receipts, and alerts. Notification primitives wired to application events. Optional additions: in-app notifications, push, SMS.

**Time estimate:** 2 days  
**Infrastructure dependencies:** Transactional email service (Resend / Postmark), push notification service if required (Expo / APNs / FCM)

---

### Feature Flags

**Category:** Product

Flags that gate in-progress features so work can merge to `main` without going live. Enables gradual rollouts and per-user or per-environment overrides without a redeploy.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Feature flag service (PostHog / LaunchDarkly) or self-hosted via database

---

### Analytics & Telemetry

**Category:** Growth

Event tracking wired to the key moments in the product funnel: sign-up, activation, conversion, and any churn signals relevant to the model. Privacy-respecting defaults; consent management included where jurisdiction requires it.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Product analytics service (PostHog / Mixpanel / Amplitude)

---

### Error Tracking & Monitoring

**Category:** Product

Error tracking with stack traces and release tagging so exceptions are tied to the deploy that introduced them. Application logs aggregated and searchable. Uptime and latency monitoring with alerting.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Error tracking service (Sentry), log aggregation (Datadog / Logtail), uptime monitoring (Better Uptime / Checkly)

---

### Infrastructure Health & Performance

**Category:** Observability

Server-level monitoring of the underlying infrastructure: CPU, memory, disk, and network. Database query performance and connection pool health. Alerts routed to the right place when something degrades before users notice.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Infrastructure monitoring (Datadog / GCP Cloud Monitoring / DigitalOcean Monitoring)

---

### Hosting & Deploy Pipeline

**Category:** Infrastructure

Production and staging environments provisioned and configured on DigitalOcean or GCP. Continuous deployment from `main`. DNS, SSL, CDN, and edge caching configured for the final domain.

**Time estimate:** 1–2 days  
**Infrastructure dependencies:** Hosting platform (DigitalOcean / GCP), DNS provider, GitHub

---

## Add-ons

### Password Authentication

**Category:** Identity & Access

Traditional email and password login as an alternative or complement to the passwordless baseline. Includes password strength enforcement, hashing, and the full reset flow.

**Time estimate:** 1 day  
**Infrastructure dependencies:** None beyond what User Authentication already requires

---

### Multi-Factor Authentication

**Category:** Identity & Access

A second verification step after sign-in — TOTP via an authenticator app, or SMS OTP. Can be optional per user or enforced at the product or role level.

**Time estimate:** 1–2 days  
**Infrastructure dependencies:** SMS gateway if SMS MFA is required (Twilio)

---

### Social Login

**Category:** Identity & Access

OAuth sign-in via third-party providers. Scoped during Discovery to the providers the product's audience expects: Google, Apple, GitHub, or others.

**Time estimate:** 1 day per provider  
**Infrastructure dependencies:** OAuth credentials from each provider (no paid services required)

---

### Marketing Site Email Capture

**Category:** Growth

A lightweight email capture flow on the marketing site — newsletter sign-up, "get notified when we launch," or similar pre-launch collection. Connects to a mailing list or CRM. No database required; submissions route directly to the configured destination.

**Time estimate:** 1 day  
**Infrastructure dependencies:** Email marketing or CRM service (Mailchimp / ConvertKit / Loops)

---

### Blog

**Category:** Content

A blog driven entirely by markdown files in the repository. No database, no CMS, no admin UI — posts are authored as `.md` files and published via a normal deploy. Supports metadata (title, date, tags, description) via frontmatter.

**Time estimate:** 1 day  
**Infrastructure dependencies:** None

---

### Billing & Subscriptions

**Category:** Transactions

Subscription plans, payment collection, plan upgrades and downgrades, invoices, dunning, and tax handling. Built on Stripe. Includes webhook handling and reconciliation against Stripe's event stream.

**Time estimate:** 3–5 days  
**Infrastructure dependencies:** Stripe, database (Postgres)

---

### Admin Panel

**Category:** Internal Tooling

Internal back-office UI for looking up users, inspecting their state, and handling support requests without writing one-off scripts. Scope varies by product — a simple read-only user lookup is at the low end; a full support console with impersonation, audit logs, and bulk operations is at the high end.

**Time estimate:** 3–5 days  
**Infrastructure dependencies:** Database (Postgres)
