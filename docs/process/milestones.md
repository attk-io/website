# Macro view: the full project arc

This document captures the shape of a complete engagement, from first conversation to long-term handoff. Plain wording — no brand voice applied. Internal planning doc; marketing-facing names will be developed during the brand-voice pass.

The arc is organized around **milestones** — concrete checkpoints that exist or have happened. Engineering work happens _between_ milestones, shaped by the development cycle (see `development-cycle.md`). The work between milestones is categorized by what's being built (marketing assets, Base Platform, Custom Work, release prep), not by phase.

Releases use semantic version naming (`v0`, `v1-beta`, `v1`, `v2`, etc.) to reflect the technical reality of what each release is.

## Entry point

### Fit Check (free)

- Founder reaches out.
- Short call (or async exchange) to understand what they're building, what stage they're at, and what they think they need.
- Two-way fit check: is this a product I can do good work on, and am I the right person for it?
- We discuss goals (perhaps setting some explicitly), the high-level shape of the project, and the rough constraints.
- If it's not a fit, I say so and try to point them somewhere useful.
- If it might be a fit, we agree to a paid Discovery engagement.
- No money changes hands. This is the only stage of the engagement that's free.

---

## Milestone 1: Discovery (paid)

The first paid engagement. Produces the artifacts that everything that follows depends on.

- Two to three working days at the start of every engagement.
- Founder walks me through the vision, market, and constraints in depth.
- I ask the questions that matter and give an honest read: what the build will take, what the risks are, where the assumptions are weakest.
- We work on the roadmap, separating what's easy (known solutions, off-the-shelf patterns) from what's hard or unique to this product. High-level estimates are produced for the known work first; the unique work gets called out for closer inspection.
- The scope is developed in two passes: a **broad** pass that maps the territory, then a **granular** pass that defines each feature set in enough detail to commit to.

**Deliverables:**

- A granular **v1 scope document** — defines the MVP.
- A contract.

The founder owns these regardless of whether we keep working together. All work from here on out is paid against this contract.

---

## Milestone 2: v0 (if needed)

Optional. A public marketing presence goes live before the product itself is usable. "v0" refers to the version of the deployed _system_ at this point — there's real code in production (marketing site, email capture, analytics, telemetry pipeline) but none of the product features exist yet.

**Work before this milestone:**

- One-page (or small) marketing site describing what the product is and roughly when it'll be ready.
- Email capture wired up to a mailing list provider.
- Optional: drip content sequence for new subscribers.
- Optional: promotional pricing structure for early signups.
- Basic analytics.
- Domain registration and DNS configuration.

**The milestone itself:**

- Marketing site live on the final domain name.
- Email capture working.
- Analytics reporting.

See `release-types.md` for the detailed prep / cut / post breakdown.

---

## Milestone 3: v1-beta (if needed)

Optional. The product (or a meaningful first slice of it) is real and deployed to production, with access gated to vetted users. "Beta" reflects that v1 hasn't been declared yet — what's deployed is a candidate that needs real-world validation before it's called complete. The deployment runs on the same production stack v1 will run on, so operational rehearsal counts.

**Work before this milestone:**

- **Base Platform** — the foundation every product needs: authentication, billing plumbing, hosting, deploys, monitoring, error tracking, basic admin tooling. Mostly pre-built and battle-tested. Ships fast (about two weeks) for a fixed cost. Deployed to staging during build.
- **Custom Work** — the features that make the product specifically itself, scoped during Discovery and built one set at a time through the development cycle. Deployed to staging during build.
- **Release prep** — feature flags, telemetry tuned for production, support channel, smoke tests, production environment baseline.

**The milestone itself:**

- The product is deployed to production with access restricted via invite codes, allowlists, or a manual approval workflow.
- First real users — recruited from warm channels (friends, family, advisors, v0 email-list signups, direct outreach to ideal-fit users) — are vetted in.
- Operational rehearsal begins.

See `release-types.md` for the detailed prep / cut / post breakdown.

---

## Milestone 4: v1

Public release of the MVP. Access is opened to anyone in the target audience and the product accepts payments — or, depending on the business model, the equivalent exchange of time, attention, or contribution.

**Work before this milestone:**

- Continued Custom Work shaped by v1-beta learnings — what real gated usage revealed about priorities, defects, and product fit.
- Public-readiness prep: capacity and performance review, monitoring tuned for scale, billing flow live, legal / compliance, public help content, marketing assets.
- Conversion path designed for existing v1-beta users to become paying customers, honouring any promises made earlier in the arc.

**The milestone itself:**

- Public access is opened.
- Primary domain points at the production server.
- Payment processing is live.
- Initial announcement activity happens (launch post, mailing list send to v0 audience, social, any pre-arranged community posts).
- v1-beta users are converted to paying customers.

**After the milestone:**

- v1 is not the end of the project — it's roughly the midpoint, and the start of the most valuable phase of the engagement (see Milestone 5).
- The development cycle continues, now fed by real-user signal — signups, conversions, churn, support tickets, telemetry from public traffic.
- Sustained operational rigour: the on-call discipline established in v1-beta becomes routine.

See `release-types.md` for the detailed prep / cut / post breakdown.

---

## Milestone 5: v2 Planning

The post-MVP analog of Discovery. After v1 has stabilized and real users have produced enough signal, we plan the next major version.

- A focused planning engagement that produces a v2 scope document.
- Inputs are radically different from Discovery: real user behaviour, conversion data, support tickets, and patterns surfaced from production usage replace pre-launch guesses.
- The original v1 backlog gets reassessed — some items become more important, some become irrelevant, some new directions get added.
- Architecture considerations for v2 are surfaced early (new modules need to fit the foundation rather than work around it).
- Senior judgment earns its keep here: pruning noise from signal, protecting architecture from short-term hacks, deciding which calls compound well over years.

**Deliverables:**

- A v2 scope document.
- A contract update (typically — depending on the engagement model).

---

## Milestone 6: v2

The next major version of the product is released to all users.

**Work before this milestone:**

- Development cycle running against the v2 scope, set by set.
- Feature flags continue to gate risky or in-progress work.
- v2 features may roll out gradually behind flags before the v2 release itself, so the v2 milestone is often more of a _declaration_ (we're calling this the v2 release) than a hard cutover.

**The milestone itself:**

- v2 is declared released. Marketing or comms (if appropriate) acknowledge the next major version.
- Documentation, help content, and onboarding are updated to reflect the new shape of the product.

---

## Subsequent vN cycles

After v2, the same pattern continues: vN Planning → vN release → vN+1 Planning → vN+1 release. The engagement is iterative for as long as I'm still day-to-day on the product.

At some point in this cycle, Stepping Back overtakes the work.

---

## Milestone 7: Stepping Back

A transitional milestone, not an exit. Overlaps with continued vN cycles rather than following them cleanly.

- The earliest months are where my involvement matters most: architecture, foundational decisions, the calls that are expensive to undo later.
- Once those decisions have settled and the codebase has matured through v1 and into v2+, my role naturally shifts.
- Day-to-day development transitions to a more junior developer working under the structure I've established. The senior judgment that drove early versions becomes review and advisory rather than implementation.
- I stay on in an advisory capacity — protecting the technical foundation, available for the calls that still need senior judgment, but not billing for work that no longer needs me.
- The model is designed to step back when it should. The business should not depend on me indefinitely.

---

## Key properties of the macro arc

- **Milestones are the structure** — concrete checkpoints that exist or have happened. The work between milestones is engineering activity, shaped by the development cycle.
- **Releases follow semantic versioning** — v0 (teaser), v1-beta (private), v1 (public), v2+ (iterative growth). Marketing-facing names will be developed in the brand-voice pass.
- **The development cycle runs continuously** — Scoping → Build → QA → Ship → Reflect happens between every milestone, regardless of which one is next.
- **Fit Check is the only free stage** — everything from Discovery onward is paid against the contract produced in Discovery (and updated at v2 Planning and subsequent vN Planning events).
- **Two milestones are optional** — v0 and v1-beta may be skipped depending on the project. Discovery, v1, v2 Planning, v2, and Stepping Back are essentially always in play.
- **v1 is roughly the midpoint, not the end** — the v2+ phase that follows is where the product compounds past MVP and where senior judgment earns the most leverage.
- **vN cycles and Stepping Back overlap** — the model is designed to transition out gradually, not to cut off cleanly.
- **My involvement is front-loaded by design** — and Stepping Back is part of the plan, not an exit.
- **Honest fit-checking happens at the entry point** — including the possibility that we shouldn't work together.
