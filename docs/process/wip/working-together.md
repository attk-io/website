# Working Together

This document captures what working together actually feels like week to week — the cadence, the channels, who decides what, and how the client sees progress. Plain wording — no brand voice applied. Internal planning doc.

`development-cycle.md` and `project-arc.md` describe the _method_ — the shape of the loop and the shape of the engagement. This doc describes the _experience_ of being inside that method on a given Tuesday afternoon. The two are companions; neither tells the whole story alone.

## Operating principles

A few things hold across every week of the engagement, regardless of which milestone the work is building toward.

- **Writing beats talking.** Every commitment that matters — scope, decisions, deferrals — lands in writing. Calls and async chat are how we get there; the written record is what survives.
- **Decisions get raised, not absorbed.** Anything that changes scope, anything that needs the client's judgement, surfaces explicitly. Silent absorption is how partnerships drift; explicit raising is how trust compounds.
- **Working state stays visible.** The client can see and use the in-progress system at any point in the cycle, not just at QA. Demos are unnecessary because the thing itself is always reachable.
- **Client time is treated as expensive.** Synchronous time is used for what genuinely needs it — context, judgement, hard trade-offs. Everything else moves async.

## Communication cadence

The cadence below is the default rhythm. Individual engagements adjust — a client who's heads-down on fundraising needs lighter sync time; a project at a critical milestone needs heavier. The shape stays consistent.

**Sync time.**

- A standing weekly sync — typically 30–60 minutes — to review where the current build is, surface decisions the client needs to make, and confirm the next cycle is still the right one. Most weeks this is the only scheduled meeting.
- Ad-hoc calls when a decision is faster to make on a call than in writing. These are short and specific — five to fifteen minutes — and a written summary follows.
- QA review sessions happen on the client's own time, not on a call. The client uses the working feature when it suits them and writes back what they found.

**Async channel.**

- A persistent shared channel (chat tool of the client's choice) carries the day-to-day: questions, decisions raised, status of the current build, what's blocked, what just shipped.
- Same-business-day response expectation on both sides during active build. Not minute-to-minute — the work being done requires focus — but no message sits overnight without a reply.
- Anything material to scope or decisions gets repeated in the system of record (issue tracker, scope doc) so it's not buried in chat history.

**Written scope.**

- Each cycle starts from a short written scope shared with the client before any code is written (see `development-cycle.md`).
- The client reviews the working build before it ships; any issues captured during review are resolved first.
- Scope changes mid-cycle are handled by the scope-change protocol _[planned — see issue #27]_ rather than by silent absorption.

**Weekly written summary.**

- A short end-of-week note summarising what shipped, what's in flight, what's next, what decisions are open. Five minutes to write, two minutes to read; survives as the durable record of the project's heartbeat.

## Decision rights

Most decisions are obvious to make — the client owns product, I own technical. The list below names what's less obvious so neither of us hesitates when one of those calls comes up.

**Client decides:**

- Product direction. What the product does, who it's for, what's in scope, what's out, what gets prioritised, what gets cut, and whether a feature is working as they expect.
- Trade-offs the user will feel. UX, copy, brand voice, the shape of flows, the experience of using the thing.
- Anything externally facing — what we say in marketing, in support, on the pricing page, in legal terms.
- The pace of work — go faster, go slower, pause for a runway concern, pause for a fundraise.

**I decide:**

- How something gets built — architecture, language choices, library choices, data model, deployment strategy.
- Internal-quality calls — test coverage, observability depth, refactoring debt, when to spike a risk before estimating.
- The development cycle's mechanics — how a cycle is structured, what an acceptance criterion looks like, when something is QA-ready.
- Anything that affects the maintainability of the codebase over the years the client will own it.

**We decide together:**

- Scope of each cycle — I propose, we discuss at the boundaries until we're working from the same picture.
- Roadmap sequencing — what comes next; I bring technical judgement on dependencies and risk, client brings priority.
- Changes to the engagement model itself — adding a milestone, restructuring a phase, changing the cadence.
- Anything where the right call depends on both product priorities and technical constraints. These are usually the calls that benefit most from a short sync.

**When we disagree.**

- I write down my recommendation and the reasoning. The client writes down theirs.
- We look at the same writing together and figure out which view holds.
- If we still disagree on a product-facing call, the client decides. On a technical call, I do.
- The disagreement and the resolution both land in the written record — useful context for whoever revisits the call later, including either of us six months on.

## Progress surfaces

Several places exist where progress is legible at any moment, without anyone preparing a report.

- **The working environment.** Staging — and, after the v1-beta cut, production — is the canonical source of truth for what exists. The client can open it any time and see the current state of the system.
- **The scope doc.** Each in-flight cycle has its written scope, with acceptance criteria. Progress against those criteria is observable in the working environment.
- **The shared roadmap.** The roadmap from Discovery, updated cycle by cycle: what's shipped, what's in flight, what's next, what's been deferred, what's been added.
- **The async channel.** A scroll-back record of what got decided, what shipped, what was blocked, what got unblocked. Not the system of record, but the running narrative.
- **The weekly summary.** The written heartbeat described above — denser than the channel, lighter than the roadmap, the one place to skim to catch up on a week.

What's deliberately not a progress surface: status reports written for the sake of reporting status, slide decks, "how it's going" calls without a specific question. Reporting overhead trades against build time, and build time is what the client is paying for.

## What a typical week looks like

The cadence below is what an in-build week tends to feel like once the engagement is past Discovery and inside the development cycle.

- **Early in the week:** the current cycle's scope is written and shared. Build starts. Async channel handles questions as they surface; the working environment shows the state of the in-progress build.
- **Mid-week:** focused build. Decisions get raised in the channel; small ones resolve in writing, larger ones get a short ad-hoc call. The build is demonstrable in the working environment by mid-week or earlier.
- **Late in the week:** the build hits a QA-ready state. Client reviews it in their own time in the working environment and captures friction and fixes.
- **Friday:** the build ships if QA is clean. Weekly summary written. Brief reflect-and-scope conversation — usually the weekly sync — sets up the next cycle.

Some weeks deviate. A larger cycle spans multiple weeks; a smaller one ships mid-week. Discovery weeks, release-prep weeks, and post-launch operational weeks all have different shapes. The shape above is the steady-state default, not a fixed contract.

## Client participation expectations

The engagement model assumes the client is genuinely available for the cadence above. This is the part of the model that most often surprises clients coming from agency work or fractional-CTO engagements.

- **A weekly sync, dependably.** Not a calendar invite that drifts; a standing slot that holds.
- **Same-business-day async responsiveness during active build.** Build velocity is bounded by decision velocity. A client who disappears for a week pauses the project for a week.
- **QA reviews in the client's own time, on the cycle's rhythm.** A build sitting in QA for three weeks is time the client is paying interest on.
- **Availability to review.** The client's feedback is what moves work from QA to ship — being available to look at the working build is how the project stays moving.

If a stretch of the engagement is going to be sparse on the client's side — fundraising, an event, a personal commitment — we name it in advance and shape the work around it. The model bends; it just bends explicitly rather than by accident.

## Dependencies and what follows

- **Depends on:** the Fit Check (see `fit-check.md`) — two-way fit confirmation, which is partly about whether the client is suited to this cadence.
- **Feeds into:** the development cycle (see `development-cycle.md`). The cadence above is how the cycle's coordination points — scope sharing, scope changes, and QA reviews — actually happen in practice between two real people.
