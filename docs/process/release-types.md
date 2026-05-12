# Release milestones

This document zooms into the three release milestones in the macro arc: v0 (teaser), v1-beta (private), and v1 (public). Each is a first-class milestone — a concrete checkpoint with prep before it, a cutover event, and follow-through after. Plain wording — no brand voice applied. Internal planning doc; marketing-facing names will be developed during the brand-voice pass.

## A note on business model

The milestones below are framed in the lens of a SaaS product because that's the most prevalent shape. "Paying customer" at v1 means the user is exchanging money for the service. For other business models, the analog is whatever the user gives up to participate — time, attention, data, content, social capital. The structure of the milestones stays roughly the same; the thing being exchanged at v1 is what varies.

## Continuous deployment as a baseline

Continuous deployment is a core principle at every milestone. From the day there's anything in production — a single marketing page, a gated webapp, or a public product — code reaches production in small, frequent, reversible increments. Releases of _code_ are not events we hold our breath for; they're a constant background hum. The release _milestones_ below are about widening audience and surface area, not about whether or how we ship code.

## Which milestones apply

- **v0 (teaser)** is optional. Some projects skip it.
- **v1-beta (private)** is optional. Some projects go directly from staging-validated builds to v1 if there's no need for a closed cohort.
- **v1 (public)** is essentially always in play — it's the milestone where the product becomes available to its real audience.

When a project uses all three, they happen in order.

This document covers the first three releases in detail. Subsequent vN releases (v2, v3, ...) follow the patterns established in `milestones.md` (vN Planning → vN release) and reuse the prep / cut / post discipline established here.

---

## v0 (if needed) — teaser release

The product isn't ready, but a public presence is. "v0" refers to the version of the deployed _system_ — real code in production (marketing site, email capture, analytics, telemetry pipeline) — even though none of the product features exist yet. The point of this milestone is to plant a flag, start building an audience, and validate interest signals before the product itself exists.

### Prep

- **Domain registration** and basic DNS / SSL.
- **One-page marketing site** (or small static site) describing what the product is, who it's for, and roughly when it'll be ready. Honest about its stage.
- **Email capture** — a form wired up to a mailing list provider so interested visitors can leave their address.
- **Optional: drip content** — a planned sequence of emails for new subscribers. Builds the relationship, keeps the audience warm, and starts to surface which framings resonate.
- **Optional: promotional pricing structure** — an offer for people who sign up now (founding member rate, lifetime discount, early access tier). The promise has to be one the business can actually honour later.
- **Basic analytics** — enough to see where traffic comes from and what people do on the page. No more than that.

### Cut

- Point the final domain at the marketing site.
- Confirm SSL, email capture, and analytics are all working end-to-end.

### Post

- Whatever outreach surfaces the page to its intended audience — founder's network, target communities, content, ads, partnerships, etc.
- Track the list and the engagement with any drip content.
- Conversations sparked by v0 feed straight into product discovery. The interest signals from this milestone shape what gets built first.

---

## v1-beta (if needed) — private release

The product (or a meaningful first slice) is real and deployed to production, with access gated to vetted users. "Beta" reflects that v1 hasn't been declared yet — what's deployed is a candidate that needs real-world validation. The deployment runs on the same production stack v1 will run on, so operational rehearsal counts. Signups are manually vetted, typically pulled from warm channels: friends, family, advisors, v0 email-list signups, and direct outreach to ideal-fit users.

### Prep

- **Monitoring & telemetry** — uptime, error rates, latency, key user actions, payment events (even if payments aren't live yet, the plumbing is in place). We need to know within minutes when something is wrong.
- **Feature flag system** — every risky or in-progress feature lives behind a flag. Flags let us deploy code without releasing the feature, ship to a subset of users, and kill a feature quickly if it misbehaves.
- **Configure for gated access** — invite codes, allowlists, or a manual approval workflow. The v0 email list is the natural pool to draw from.
- **Production environment baseline** — backups configured and tested, secrets managed properly, deploy pipeline reliable, rollback path verified.
- **Support channel** — a simple way for vetted users to report issues and ask questions. Email, a shared Slack/Discord, or a basic in-app form — whatever the founder will actually monitor.
- **Smoke tests on production** — exercise the critical paths end-to-end against the real production environment before anyone else touches it.

### Cut

- Deploy the product to production with access restricted to vetted users.
- Verify DNS, SSL, and CDN configuration.
- Run smoke tests against the live URL.
- Confirm monitoring is reporting real data.

### Post

- **Recruit and vet users** — warm contacts, advisors, target-persona reach-outs, and signups from the v0 email list. Each one is approved manually. Small group on purpose — large enough to surface real issues, small enough to talk to each one.
- **Structured feedback collection** — regular check-ins (calls, surveys, or both), plus passive signal from telemetry. The goal is to learn what real usage looks like before scale obscures it.
- **Tight iteration loop** — findings feed directly into the next development cycle. Many sets shipped during this period are responses to what vetted users hit.
- **Operational rehearsal** — the founder and I learn what running this product in production actually demands while the stakes are still low.

### Exit criteria for moving to v1

- Core flows are stable under real usage (not just internal testing).
- Known critical bugs are fixed.
- Onboarding works for users who weren't hand-held in.
- Founder is confident in the support load and has a plan for it.
- Billing / payment flow (or its non-SaaS equivalent) is tested.
- Marketing assets for v1 are ready.

---

## v1 — public release

Access is opened to anyone in the target audience and the product accepts payments — or, depending on the business model, the equivalent exchange. Existing v1-beta users are the first cohort with a path to becoming paying customers.

### Prep

- **Open access configuration** — remove invite gates, open public signup, ensure auth, billing, and onboarding flows work for cold users with no prior context.
- **Billing live** — payment processing, invoicing, subscription management, refund handling (or the equivalents for non-SaaS models).
- **Conversion path for v1-beta users** — a deliberate flow that takes the existing cohort from free access to paying status, honouring any promises made during v0 or v1-beta.
- **Capacity & performance review** — confirm the system can handle a credible spike in traffic. Stress test the hot paths. Confirm autoscaling, rate limits, and database headroom.
- **Monitoring tuned for scale** — alert thresholds calibrated for public traffic levels rather than gated levels. On-call posture defined for the first days/weeks.
- **Legal & compliance** — terms of service, privacy policy, cookie/consent handling, any industry-specific requirements all in place and accurate.
- **Documentation & help content** — public-facing help, FAQ, and onboarding content for users who don't have a direct line to the founder.
- **Marketing assets ready** — landing page final, announcement copy, social posts, mailing list send, any paid acquisition setup.

### Cut

- Flip the configuration that opens public access.
- Point the primary domain (e.g. `www.product.com`) at the production server if it wasn't already.
- Final smoke tests under the public-facing configuration.
- Heightened monitoring posture for the first hours and days.

### Post

- **Announcement** — initial v1 release activity: launch post, mailing list send to the v0 audience, social announcement, Product Hunt or similar if appropriate, any pre-arranged press or community posts.
- **Convert v1-beta users** — execute the path from free to paid for the existing cohort.
- **Drip campaigns** — sustained marketing rather than a single splash: ongoing content, SEO, partnerships, paid acquisition if it's part of the strategy.
- **Sustained operational rigour** — public traffic is higher and less forgiving than gated. Issues get triaged and addressed faster. The on-call discipline established in v1-beta becomes routine.
- **Development cycles continue** — the cycle from `development-cycle.md` keeps running. v1 signal (signups, conversions, churn, support tickets) shapes the roadmap going into v2 Planning. The inputs are richer and noisier; the cycle is unchanged.

---

## Key properties of the release milestones

- **Three sequential milestones for the initial release, vN cycles thereafter** — each is a first-class checkpoint in the macro arc with its own prep, cut, and post.
- **Continuous deployment underlies all milestones** — code ships to production constantly from day one. The release milestones widen the audience, not the cadence.
- **Each milestone has a job** — v0 validates interest and builds an audience; v1-beta confirms the product works and rehearses operations; v1 earns revenue (or its analog) and scales reach.
- **Feature flags and monitoring are not optional** — they're the safety net that makes continuous deployment survivable through every milestone.
- **Most release activity happens after the cutover** — pointing a domain is the cheapest part. The real work is what comes before (prep) and after (operating it).
- **The development cycle never stops** — release milestones overlay the cycle; they don't replace or pause it.
