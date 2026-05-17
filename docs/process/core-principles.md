# Core Principles

This document names the principles that make projects successful and client relationships healthy. The process docs describe the mechanics; this doc describes what the mechanics are meant to protect.

## Fit Determines Value

The relationship should fit the need.

A strong fit happens when the client brings the vision, business context, and problem knowledge, and I bring the missing technical shape: product translation, architectural judgment, build leadership, and a dependable path from idea to working software. The relationship works best when those strengths complement each other rather than overlap.

The Fit Check stage exists to make this call before money changes hands: a short, free conversation that ends in a clear go / no-go, and points elsewhere when the answer is no.

## Business Goals Anchor the Work

The work should serve the business goals.

Every decision should be weighed against the goals of the business. The project should not optimize for abstract preferences, technical novelty, or forward motion for its own sake; it should keep returning to what the business is trying to learn, prove, earn, support, or change.

Discovery captures the business goals in writing before the work begins. Scope, roadmap, trade-offs, releases, and priority changes are checked against those goals.

## Clear Scope Creates Focus

Scope should describe the project landscape.

Scope gives the project a clear map: what is being built at a high level, what each feature means when you zoom in, and what assumptions the plan depends on. It keeps the work focused, and any expansion begins with a scoped conversation and a clear decision about whether to build now, backlog it, or choose a different path.

A short written scope is shared before each cycle of build and review. Anything that grows mid-build goes through the scope-change protocol: re-scope it openly, route it to the backlog, or choose a different path.

## Tangible Beats Imaginary

Small real things beat big imagined certainty.

Assumptions should be called out early because the most expensive mistakes are often the ones that make it into the build as if they were facts. The goal is to move uncertainty into contact with reality before it becomes expensive to change.

The discovery process flags the riskiest assumptions up front, and the scope is shaped to test them early through user interviews, mockups, work spikes, prototypes, or narrow releases. Unfamiliar technical work gets a spike or prototype before it gets an estimate.

## History Prevents Waste

Past context should prevent rediscovery.

“How we got here” should be factual and easy to look up. The goal is to make future choices with documented context so we can avoid trying to reconstruct the past from memory.

In practice, project memory comes from lightweight documentation close to the work: decision records, weekly issue recaps, and release manifests.

## Situational Awareness Informs Priority

The current state should be knowable on demand.

A useful snapshot shows what has shipped, what is in progress, what is blocked, what is on deck, and what signals are coming back from users and the product itself. That awareness allows us to compare the plan against market, timing, financial, and operational conditions, then prioritize the next work from where the project actually stands.

In practice, this is a current-state snapshot that can be checked on demand: shipped features, active blockers, active work streams, on-deck work, audience signals, and product health signals like performance, reliability, and error rates.

## Roadmaps Turn Goals Into Actions

The roadmap should give the project shared direction.

A good roadmap turns the business goal into a sequence of work: what matters now, what comes next, what depends on what, and where assumptions still need evidence. It helps the project stay focused, make priority trade-offs, and adapt to new information without losing the thread.

Discovery produces the initial roadmap as a named artifact. A brief reflect step at the end of each cycle re-checks the roadmap against what we just learned and updates the next priorities.

## Technical Health Preserves Agility

The product should remain adaptable.

Readable code, stable architecture, useful tests, reliable deployment, and low technical debt keep things moving. Maintainability matters because it lets the business change direction and keep learning without every adjustment being weighed down because the codebase is resistant to change.

The Base Platform sets the maintainability baseline at the start of the build, and every cycle carries tests, types, observability, and continuous releases as part of the work itself — not as separate phases requiring special scheduling.

## Releases Turn Work Into Evidence

Public software rarely has a final state; it improves through repeated contact with users and business goals.

A release exposes a specific version of the product to the people who can teach us something: public visitors, internal stakeholders, private-beta users, or paying customers. Frequent, incremental releases collect data sooner, keep the codebase production-ready, and make reactions easier to connect to specific changes.

Continuous deployment starts right away. Each release type widens audience deliberately, is shaped around a specific job, and has a pre-release environment available for client review.

## My Role Evolves With the Product

My involvement should align to where it creates the most value.

Early work often needs close senior judgment: translating the vision into product shape, making architecture decisions, reducing uncertainty, and building the first working versions well; as the product matures, the value shifts toward making the system, process, and team easier to operate so the client has the support they need without the project becoming dependent on one person forever.

In practice, the project arc moves from hands-on build work to developing operational routines, developer tooling, and documentation, then providing oversight, training, and support to new team members.
