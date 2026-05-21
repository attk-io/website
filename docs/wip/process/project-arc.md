# Example project arc: greenfield SaaS

This document captures one common engagement shape: a typical greenfield SaaS project, from first conversation to long-term development ownership. Plain wording — no brand voice applied. Internal planning doc; marketing-facing names will be developed during the brand-voice pass.

This is an example, not the canonical shape every engagement must follow. Existing-product rebuilds, internal tools, marketplaces, service businesses, and non-SaaS products may skip, rename, rearrange, or add checkpoints. The reusable process pieces live in the other process docs; this file shows how those pieces often compose in one common case.

The example arc is organized around **checkpoints** — named points that mark project progression and reflect project goals. A checkpoint can be a release, but can also mark other forms of progress such as Discovery or Planning & Design. Engineering work happens _between_ checkpoints, shaped by the [development cycle](../../process/development-cycle.md).

The typical greenfield SaaS arc:

- Fit Check
- Discovery
- Planning & Design
- Early Marketing Release
- Private Beta Release
- Public MVP Release
- Development Transition Phase

The general release model is defined in [Product Releases](../../process/product-releases.md). Release Target names are uncovered during Discovery. Semantic-style names (`v0`, `v1-beta`, `v1`, etc.) are common examples, but the actual names should reflect the project's audience and access-boundary progression.

## Fit Check (free)

The free entry point. Its job is to decide whether a paid Discovery engagement makes sense.

**Dependencies:**

- None — this is the entry point.

**Workload:**

- Client shares the product idea, current stage, timeline, budget shape, and any existing materials.
- Short call or async exchange tests project fit, client fit, and engagement-model fit.
- I give a clear read on whether this is a good use of Discovery.

**Objectives:**

- Clear go / no-go decision.
- If go: agreed Discovery start window and rough time budget.
- If no-go: useful direction toward a better next step.

---

## Discovery

The first paid engagement. It turns the Fit Check into an MVP scope and a commercial commitment.

**Dependencies:**

- Fit Check produced a go decision.
- Client is available for the Discovery window.
- Existing notes, decks, sketches, research, or prototypes are shared before the work starts.

**Workload:**

- Map the vision, market, users, business goals, and constraints.
- Identify the feature areas the MVP must cover and what can wait.
- Separate known work from risky, novel, or assumption-heavy work.
- Draft the MVP scope, estimates, named unknowns, and contract.

**Objectives:**

- MVP scope is clear enough to price and commit to.
- Business goals and core principles are captured.
- Contract exists for the paid build engagement.

---

## Planning & Design

The second paid engagement. It turns the MVP scope into build-ready detail.

**Dependencies:**

- Discovery is complete.
- MVP scope and contract are in place.

**Workload:**

- Break feature areas into concrete behavior, edge cases, states, and constraints.
- Wireframe the key user flows.
- Create representative hi-fi UI examples.
- Write GitHub issues and organize the project backlog.

**Objectives:**

- Full MVP backlog is ready for development.
- UI direction is anchored enough to build consistently.
- Ambiguous flows are resolved before implementation.

---

## Early Marketing Release

Optional. A public marketing presence goes live before the product itself is usable; in greenfield SaaS projects, this is often labeled `v0`.

**Dependencies:**

- Discovery has clarified what the product is and who it is for.
- Brand framing and messaging direction are good enough for an early public page.

**Workload:**

- Build a small marketing site.
- Wire interest capture into the chosen audience tool.
- Set up basic analytics.
- Publish any early signup offer that was scoped.

**Objectives:**

- Product has a public surface for early interest.
- Audience growth and engagement become measurable.
- Early signup signals and conversations inform build priority.

---

## Private Beta Release

Optional. The product, or a meaningful first slice of it, is deployed to production with access limited to vetted users; in greenfield SaaS projects, this is often labeled `v1-beta`.

**Dependencies:**

- Planning & Design is complete.
- Enough Base Platform and Custom Work exists for real users to exercise core flows.
- Warm-channel users are available through the Early Marketing Release or direct outreach.

**Workload:**

- Ship the Base Platform and enough Custom Work for a meaningful beta.
- Gate access with invite codes, allowlists, or manual approval.
- Configure production monitoring, support, telemetry, and smoke tests.
- Recruit a small group of vetted users.

**Objectives:**

- Real users exercise core flows in production.
- Critical issues and onboarding gaps surface before public launch.
- Client and product team learn the operational load while stakes are low.

---

## Public MVP Release

The product opens to its intended public audience and accepts payment, or the business model's equivalent exchange; in greenfield SaaS projects, this is often labeled `v1`.

**Dependencies:**

- Planning & Design is complete.
- Private beta signal exists, or internal testing and user interviews stand in.
- Core flows, support plan, public exchange, and launch materials are ready.

**Workload:**

- Finish launch-critical Custom Work and fixes.
- Bring the payment, transaction, or equivalent exchange flow live.
- Tune capacity, monitoring, legal content, help content, and marketing assets.
- Move beta users onto the public MVP footing and announce the launch.

**Objectives:**

- Public access opens to the intended audience.
- Revenue, or the equivalent exchange, is live.
- Real production signal becomes the main input to the roadmap.

---

## Development Transition Phase

The final checkpoint in this example arc. My role shifts from primary builder to the person hardening the development process, tooling, and documentation so someone else can run day-to-day product development.

**Dependencies:**

- Product has matured through later release cycles.
- The core development cycle is working in practice.
- The client is ready to bring in a new or internal developer.

**Workload:**

- Harden development practices, tooling, and release routines.
- Document architecture, conventions, setup, operations, and decision history.
- Source, vet, or prepare the developer who will own day-to-day work.
- Pair on real work until the handoff path is proven.

**Objectives:**

- New or internal developers can run the development process without guessing.
- The client has a durable operating model for continued product work.
- My ongoing role, if any, is limited to review, escalation, and senior judgment calls.
