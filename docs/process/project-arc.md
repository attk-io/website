# The full project arc

This document captures the shape of a complete engagement, from first conversation to long-term handoff. Plain wording — no brand voice applied. Internal planning doc; marketing-facing names will be developed during the brand-voice pass.

The arc is organized around **milestones** — concrete checkpoints that exist or have happened. Engineering work happens _between_ milestones, shaped by the development cycle (see `development-cycle.md`). The work between milestones is categorized by what's being built (marketing assets, Base Platform, Custom Work, release prep), not by phase.

Releases use semantic version naming (`v0`, `v1-beta`, `v1`, `v2`, etc.) to reflect the technical reality of what each release is.

## How releases work

The three release milestones (v0, v1-beta, v1) share a common shape: prep before the cut, a small cut event, and follow-through after. Most of the work lives in prep and post — the cut itself is often as small as pointing a domain or flipping an access flag.

**Continuous deployment is the baseline.** From the day there's anything in production, code reaches it in small, frequent, reversible increments. The release milestones widen audience and surface area; they don't change deployment cadence.

**Business model framing.** The milestones below are framed in SaaS terms because that's the most prevalent shape. "Paying customer" at v1 means money changes hands; for other models, the analog is whatever the user gives up to participate — time, attention, data, content, social capital. The structure stays the same; the thing exchanged at v1 varies.

**Each release has a job.** v0 validates interest and builds an audience; v1-beta confirms the product works and rehearses operations; v1 earns revenue (or its analog) and opens the doors.

## Entry point

### Fit Check (free)

- Client reaches out.
- Short call (or async exchange) to understand what they're building, what stage they're at, and what they think they need.
- Two-way fit check: is this a product I can do good work on, and am I the right person for it?
- We discuss goals (perhaps setting some explicitly), the high-level shape of the project, and the rough constraints.
- If it's not a fit, I say so and try to point them somewhere useful.
- If it might be a fit, we agree to a paid Discovery engagement.
- No money changes hands. This is the only stage of the engagement that's free.

**Dependencies:**

- None — this is the entry point.

**Deliverables:**

- A clear go / no-go decision.
- If go: agreement to begin a paid Discovery engagement.

---

## Milestone 1: Discovery (paid)

The first paid engagement. Produces the artifacts that everything that follows depends on.

**Dependencies:**

- Fit Check (a "go" decision and agreement to begin a paid engagement).

**Planning:**

- Scope set by Fit Check — agreed time budget, two-way fit confirmation, broad shape of the project.
- Identify the key unknowns to surface during the engagement.

**Workload:**

- Two to three working days at the start of every engagement.
- Client walks me through the vision, market, and constraints in depth.
- I ask the questions that matter and give an honest read: what the build will take, what the risks are, where the assumptions are weakest.
- Roadmap work, separating what's easy (known solutions, off-the-shelf patterns) from what's hard or unique to this product. High-level estimates produced for the known work first; the unique work called out for closer inspection.
- Scope developed in two passes: a **broad** pass that maps the territory, then a **granular** pass that defines each feature set in enough detail to commit to.

**Deliverables:**

- A granular **v1 scope document** — defines the MVP.
- A contract.

The client owns these regardless of whether we keep working together. All work from here on out is paid against this contract.

---

## Milestone 2: v0 Release (if needed)

Optional. A public marketing presence goes live before the product itself is usable. "v0" refers to the version of the deployed _system_ at this point — there's real code in production (marketing site, email capture, analytics, telemetry pipeline) but none of the product features exist yet.

**Dependencies:**

- Discovery (v1 scope shapes what we say the product is and roughly when it'll be ready).
- Brand framing / messaging direction — derived from Discovery or developed alongside v0 work.

**Planning:**

- Define what the marketing site needs to communicate and roughly when the product will be ready.
- Pick the tools for audience capture and analytics, and the domain name (mailing list provider, waitlist, application form — whatever fits the model).
- Decide what to offer early signups, if anything — drip content, promotional pricing, founding-member status, early-access slots.

**Workload:**

- Build the marketing site (one page or small).
- Wire up interest capture into the chosen audience tool.
- Implement whatever early-signup offering was scoped in.
- Set up basic analytics.
- Register the domain and configure DNS.

**Deliverables:**

- Marketing site live on the final domain name.
- Working interest capture into the audience tool.
- Analytics reporting on real traffic.

**Cut event:** point the final domain at the marketing site; confirm SSL, interest capture, and analytics work end-to-end.

**After the milestone:**

- Outreach surfaces the page to its intended audience — client's network, target communities, content, ads, partnerships.
- Audience growth and engagement get tracked.
- Conversations sparked by v0 feed straight into product discovery; interest signals shape what gets built first.

---

## Milestone 3: v1-beta Release (if needed)

Optional. The product (or a meaningful first slice of it) is real and deployed to production, with access gated to vetted users. "Beta" reflects that v1 hasn't been declared yet — what's deployed is a candidate that needs real-world validation before it's called complete. The deployment runs on the same production stack v1 will run on, so operational rehearsal counts.

**Dependencies:**

- Discovery (granular v1 scope, Custom Work feature breakdown).
- v0 if shipped (the audience built during v0 as one source of warm-channel users). If v0 was skipped: direct outreach lists from the client.

**Planning:**

- Granular v1 scope from Discovery drives the Custom Work breakdown into feature sets.
- Identify the Base Platform components needed for this product — auth, hosting, monitoring, error tracking, admin tooling, plus whatever transaction or exchange plumbing the model requires.
- Pick the gating mechanism (invite codes, allowlist, manual approval) and identify warm-channel sources for first users.
- Define the release-prep checklist: feature flags, telemetry, support channel, smoke tests, production baseline.

**Workload:**

- **Base Platform** — the foundation every product needs: authentication, hosting, deploys, monitoring, error tracking, basic admin tooling, plus whatever transaction or exchange plumbing the model requires. Mostly pre-built and battle-tested. Ships fast (about two weeks) for a fixed cost. Deployed to staging during build.
- **Custom Work** — the features that make the product specifically itself, built cycle by cycle through the development cycle. Deployed to staging during build.
- **Release prep** — feature flags wired in, telemetry tuned for production, support channel stood up, smoke tests written, production environment baselined.

**Deliverables:**

- Product (or first slice) deployed to production with access gated via invite codes, allowlists, or a manual approval workflow.
- First real users — recruited from warm channels (friends, family, advisors, the v0 audience, direct outreach to ideal-fit users) — vetted in.
- Operational rehearsal underway: support channel, monitoring, smoke tests, on-call discipline.

**Cut event:** deploy to production with access restricted; verify DNS / SSL / CDN; run smoke tests against the live URL; confirm monitoring is reporting real data.

**After the milestone:**

- Recruit and vet users from warm channels — small group on purpose, large enough to surface real issues, small enough to talk to each one.
- Structured feedback collection: regular check-ins (calls, surveys, or both) plus passive signal from telemetry.
- Tight iteration loop — findings feed directly into the next development cycle.
- Operational rehearsal: client and I learn what running this product in production actually demands while the stakes are still low.

**Exit criteria for moving to v1:**

- Core flows are stable under real usage (not just internal testing).
- Known critical bugs are fixed.
- Onboarding works for users who weren't hand-held in.
- Client is confident in the support load and has a plan for it.
- Billing / payment flow (or its non-SaaS equivalent) is tested.
- Marketing assets for v1 are ready.

---

## Milestone 4: v1 Release

Public release of the MVP. Access is opened to anyone in the target audience and the product accepts payments — or, depending on the business model, the equivalent exchange of time, attention, or contribution.

**Dependencies:**

- Discovery (v1 scope).
- v1-beta if shipped (real gated-usage signal — priorities, defects, product fit). If v1-beta was skipped: internal feedback, client testing, and user interviews stand in.
- v0 if shipped (the v0 audience to reach at launch).

**Planning:**

- Review v1-beta learnings — what real gated usage revealed about priorities, defects, and product fit — and let them reshape the remaining Custom Work.
- Build the public-readiness checklist: capacity and performance, monitoring at scale, the v1 transaction or exchange flow, legal / compliance, public help content, marketing assets.
- Design the conversion path that moves v1-beta users onto the v1 footing, honouring any promises made earlier in the arc.
- Plan launch announcement activity across the channels that fit — launch post, send to the v0 audience, social, pre-arranged community posts, partner amplification.

**Workload:**

- Continued Custom Work shaped by v1-beta learnings.
- Capacity and performance review, monitoring tuned for scale, the v1 transaction or exchange flow brought live, legal / compliance work, public help content, marketing assets.
- Implement the conversion path for v1-beta users.

**Deliverables:**

- Public access opened.
- Primary domain pointing at the production server.
- The v1 exchange running live.
- Initial announcement activity (launch post, send to the v0 audience, social, any pre-arranged community posts).
- v1-beta users moved onto the v1 footing.

**Cut event:** flip the configuration that opens public access; point the primary domain at the production server if not already; final smoke tests under the public-facing configuration; heightened monitoring posture for the first hours and days.

**After the milestone:**

- v1 is not the end of the project — it's roughly the midpoint, and the start of the most valuable phase of the engagement (the v2+ cycles).
- The development cycle continues, now fed by real-user signal — signups, conversions, churn, support tickets, telemetry from public traffic.
- Sustained marketing rather than a single splash: ongoing content, SEO, partnerships, paid acquisition if it's part of the strategy.
- Sustained operational rigour: public traffic is higher and less forgiving than gated; the on-call discipline established in v1-beta becomes routine.

---

## Milestone 5: v2

The next major version of the product is released to all users. Planning for v2 happens naturally between milestones, fed by real-user signal accumulated since v1.

**Dependencies:**

- v1 (real production signal: user behaviour, conversion data, churn, support tickets, telemetry from public traffic).
- Enough time post-v1 for the signal to stabilize and patterns to become legible.

**Planning:**

- Reassess the v1 backlog against real production signal — user behaviour, conversion data, support tickets, telemetry — replacing pre-launch guesses with evidence.
- Surface architecture considerations for v2 early so new modules fit the foundation rather than work around it.
- Contract update if the engagement model calls for one.

**Workload:**

- Development cycle running against the evolving v2 scope, cycle by cycle.
- Feature flags continue to gate risky or in-progress work.
- v2 features may roll out gradually behind flags before the v2 release itself, so the v2 milestone is often more of a _declaration_ (we're calling this the v2 release) than a hard cutover.

**Deliverables:**

- v2 declared released, with marketing or comms (if appropriate) acknowledging the next major version.
- Documentation, help content, and onboarding updated to reflect the new shape of the product.

The same pattern continues past v2: each subsequent major version is planned between milestones and released the same way, for as long as I'm still day-to-day on the product.

---

## Milestone 6: Stepping Back

A transitional milestone, not an exit. Overlaps with continued release cycles rather than following them cleanly.

The earliest months are where my involvement matters most: architecture, foundational decisions, the calls that are expensive to undo later. Once those decisions have settled and the codebase has matured through v1 and into v2+, my role naturally shifts. The model is designed to step back when it should — the business should not depend on me indefinitely.

**Dependencies:**

- v2+ (architecture matured, foundational decisions settled, operational discipline routine).
- A suitable junior developer available to take over day-to-day.
- Documentation and conventions in good enough shape for someone else to work from.

**Planning:**

- Identify when foundational decisions have stabilized enough for the role to shift.
- Source and vet the junior developer who'll take over day-to-day.
- Define the scope and cadence of the ongoing advisory arrangement — what calls still need senior judgment, what doesn't.

**Workload:**

- Onboard the junior developer to the codebase, conventions, and operational discipline.
- Document the structures, decisions, and constraints that need to stick.
- Transition day-to-day responsibilities gradually rather than in a hard cutover.
- Establish the advisory cadence in practice — review, escalation paths, response expectations.

**Deliverables:**

- Day-to-day development handed off to a more junior developer working under the established structure.
- An advisory arrangement in place — protecting the technical foundation, available for senior-judgment calls, but not billing for work that no longer needs me.

### What the advisory arrangement actually is

Once the handoff is complete, the engagement continues in a different shape. The advisory arrangement isn't a smaller version of the build engagement — it's a different mode of work, with its own cadence, scope, and pricing.

**Scope of advisory work.**

- Architecture and technical-direction calls — anything that's expensive to undo later, anything where senior judgment changes the outcome.
- Code review on changes that touch the foundation, the data model, security-sensitive surfaces, or anything load-bearing.
- Pairing or unblocking on novel work the junior developer hasn't seen before — a new integration, a tricky migration, a performance problem they don't have the pattern for.
- Strategic technical input — hiring the next engineer, evaluating a vendor, sizing a v3 initiative, deciding whether to rebuild or extend.
- Incident support when the system is degraded or down in ways the day-to-day developer can't resolve alone.

**Not in scope:**

- Day-to-day feature development. That's the junior developer's role; pulling me back into it defeats the purpose of having stepped back.
- Routine code review on non-foundational work. The junior developer owns their own pull requests with appropriate review from peers or seniors hired into the team over time.
- Operational toil — backups, rotations, routine deploys, support escalations that aren't system-level.

**Cadence.**

- A standing monthly or twice-monthly check-in — typically 30–60 minutes — to review what's shipped, what's coming, and what calls are on the horizon. _TODO: confirm the default cadence once a few advisory arrangements have run long enough to surface the right rhythm._
- Async availability through the same channel the build engagement used — questions get raised, answers get written, the record survives.
- Ad-hoc calls for the things that genuinely need them — usually a handful per month, sometimes none.

**Response times.**

- **Non-urgent advisory questions:** within two business days. Async-first; not everything needs a call.
- **Code-review requests on foundational changes:** within one business day during normal weeks.
- **Production incidents the team can't resolve alone:** same business day during business hours; best-effort outside hours, with the understanding that the day-to-day developer is the first line of defence and I'm the escalation, not the on-call. _TODO: decide whether a paid on-call tier exists for products where business-hours-only escalation isn't acceptable._

**Rate model.**

The default shape is a small monthly retainer covering the standing check-in, async availability, and a baseline of advisory hours, with senior hourly billing for anything substantive beyond that baseline.

- **Monthly retainer** covering the standing check-in, async availability, and a baseline of advisory hours per month. _TODO: set the retainer figure and the included hours once enough engagements have reached this stage to calibrate; align with the pricing & contracts doc._
- **Senior hourly rate** for work beyond the retainer baseline — deeper code review, pairing, incident response, strategic projects. _TODO: set the hourly figure; align with the pricing & contracts doc._
- **Project-priced engagements** for advisory work with a clear shape — a v3 scoping pass, a hiring search, an architecture review — quoted as a one-off rather than billed against the retainer.
- Either side can end the arrangement with reasonable notice. The whole point of stepping back is that the business shouldn't depend on me indefinitely; the advisory arrangement should taper naturally as the team matures.

Pricing specifics for the advisory tier are covered in the pricing & contracts doc _[planned — see issue #27]_.
