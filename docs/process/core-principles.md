# Core Principles

This document names the principles that make projects successful and client relationships healthy. The process docs describe the mechanics; this doc describes what the mechanics are meant to protect.

## Fit Determines Value

The relationship should fit the need.

A healthy relationship starts with whether my advice, guidance, and experience can meaningfully help the client reach their goals. A client with a clear business goal, deep problem knowledge, and real ownership of the vision may be a strong fit when they need technical judgment, product translation, build leadership, or a dependable path from idea to working software.

The Fit Check stage exists to make this call before money changes hands: a short, free conversation that ends in a clear go / no-go, and points elsewhere when the answer is no.

## Business Goals Anchor the Work

The work should serve the business goals.

Every decision should be weighed against the goals of the business. The working relationship is the client's vision with my standards: I make the technical shape of the work legible, offer sound advice, and hold the implementation to a professional standard I am willing to stand behind.

Discovery captures the business goals in writing, and the work that follows is framed against them; a shared understanding of who calls what keeps product decisions with the client and technical decisions with me, so neither gets quietly traded for the other.

## Clear Scope Creates Focus

Scope should depict the project landscape.

Scope gives the project a clear map: what is being built at a high level, what each feature means when you zoom in, and what assumptions the plan depends on. It keeps the work focused, and any expansion begins with a scoped conversation and a clear decision about whether to build now, backlog it, or choose a different path.

A short written scope is shared before each cycle of build and review so we're working from the same picture, and a scope-change protocol surfaces anything that grows mid-build — re-scoped openly or routed to the backlog rather than absorbed in silence.

## Tangible Beats Imaginary

Small real things beat big imagined certainty.

Important assumptions should be called out early and meet reality in the smallest useful form: a prototype, mockup, waitlist, user interview, support conversation, release, or narrow slice of functionality. Writing code is easy; changing code is hard, so the expensive parts of the build should be informed by evidence as early as possible.

Discovery flags the riskiest assumptions up front; the v0 → v1-beta → v1 release ladder is shaped to test them with real audiences early, and unfamiliar technical work gets a spike or prototype before it gets an estimate.

## The Past Informs Progress

Past context should remain available for future decisions.

Current state, roadmap, release history, decisions, trade-offs, deferred work, changed assumptions, and user learnings should be easy to look back on. The goal is to make future choices with context, not to reconstruct the past from memory.

A weekly written summary keeps the running record, and material decisions — scope agreements, deferrals, trade-offs, disagreements and their resolutions — land in the system of record rather than getting buried in chat.

## Current State Makes the Project Steerable

The current state should be easy to see.

A useful project view shows shipped features, active blockers, active work streams, what's on deck, audience signals, and product health signals like performance, reliability, and error rates. Knowing where the project actually stands lets the client compare the plan against changing conditions, adjust priorities, and keep the next work pointed at the business goal.

The working environment, the live roadmap, the async channel, and the weekly summary together act as always-on progress surfaces — readable at any moment without anyone preparing a report, and backed by production observability once the product is live.

## Roadmaps Turn Goals Into Actions

The roadmap should give the project shared direction.

A good roadmap turns the business goal into a sequence of work: what matters now, what comes next, what depends on what, and where assumptions still need evidence. It helps the project stay focused, make priority trade-offs, and adapt to new information without losing the thread.

Discovery produces the initial roadmap as a named artifact, and a brief reflect step at the end of each cycle re-checks it against what we just learned — so the roadmap stays a working document rather than a preserved prediction.

## Technical Health Preserves Agility

The product should remain adaptable.

Readable code, stable architecture, useful tests, reliable deployment, and low technical debt keep things moving. Maintainability matters because it lets the business change direction and keep learning without every adjustment being weighed down because the codebase is resistant to change.

The Base Platform sets the maintainability baseline at the start of the build, and every cycle carries tests, types, observability, and reversible deploys as part of the work itself — not as a separate cleanup phase the client has to commission.

## Releases Create Feedback Loops

Releases put work in front of the right audience.

A release exposes a specific version of the product to the people who can teach us something: public visitors, internal stakeholders, private-beta users, or paying users. Frequent, incremental releases create tighter feedback loops, collect data sooner, keep the codebase production-ready, and make reactions easier to connect to specific changes.

Public software rarely has a final state; it improves through repeated contact with users and business goals.

Continuous deployment runs from the moment anything is in production, and the v0 → v1-beta → v1 release ladder widens audience deliberately — each release shaped around a specific job, with client QA in the working environment standing in for ceremonial demos.

## My Role Evolves With the Product

My role should evolve with the product.

My role should provide the highest-value version of my involvement at each stage. Early work benefits most from senior judgment; mature products benefit from stable architecture, operational routines, developer tooling, oversight, training, and support that let more people contribute well.

The project arc is staged so my involvement shifts deliberately — heavy hands-on build through v1, then architecture, tooling, oversight, and training during the Stepping Back milestone — leaving the client owning a product they can keep evolving without me being the bottleneck.
