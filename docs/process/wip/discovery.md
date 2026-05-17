# Discovery

This document captures how the first paid engagement runs — the two-to-three working days that turn a "go" decision from the Fit Check into a granular v1 scope and a signed contract. Plain wording — no brand voice applied. Internal planning doc.

Discovery is the only stage where the client and I do nothing but think and talk and write. No code is shipped, no platform is stood up. The output is the spine that every later milestone hangs from: a roadmap granular enough to commit money to, and a contract that names what we're agreeing to.

## Format

- Two to three consecutive working days, treated as a single intensive engagement rather than spread across calendar weeks.
- Remote by default — a shared doc, a shared whiteboard tool, and several long video calls per day. On-site is available if the client is in the same city, or if travel is justified by the project.
- Day boundaries are soft. Between sessions I'm writing up what we've covered and preparing the questions that need the next session's attention. The client is usually doing the same on their side.
- A short async window before Day 1 — the client sends whatever they already have (deck, notes, prototype, existing site, market research) so I show up oriented rather than starting cold.

## Time commitment

- Client: roughly two full working days of focused attention across the engagement window — heavier on the front half, lighter on the back. Plus a few hours of prep reading and async review on whatever I send between sessions.
- Me: the full two-to-three days, plus a day or so afterward to finalize the v1 scope document and contract.
- Total elapsed time from Day 1 to signed contract: typically under two weeks.

## How the days run

The split below is the typical shape. Real engagements drift — a complicated domain may need longer in the broad pass; a client who's done the homework may push into the granular pass faster. The shape is a default, not a schedule.

**Day 1 — context and the broad pass.**

- Client walks me through the vision, the market, the users, and the constraints in depth. I ask questions, I push on assumptions, I take a lot of notes.
- We sketch the territory: what the product is, who it's for, what the v1 has to do for the v1 release to mean anything.
- First pass at the roadmap — feature areas, not feature lists. What categories of capability does v1 need? What can wait for v2 or later? What's clearly out of scope?
- Honest read at the end of the day: what the build is going to take, where the risks are, where the assumptions are weakest. Better to surface a mismatch on Day 1 than Day 3.

**Day 2 — the granular pass.**

- The broad map gets turned into specific pieces of work, each one small enough to scope and build through a single development cycle (see `development-cycle.md`).
- Each piece of work gets enough detail to commit to: what it does, who it's for, what "done" looks like from the client's side.
- Known work gets high-level estimates first — the parts where the solution is off-the-shelf or pattern-matched from previous projects. Unique work gets called out for closer inspection rather than estimated optimistically.
- Sequencing: what comes first, what depends on what, where the v1-beta cut lands.

**Day 3 — pressure-testing and write-up (or contract day).**

- We pressure-test the granular roadmap against the original Fit Check goals — does this v1 actually do the job the client hired the project to do?
- Open questions get closed or explicitly parked. Anything that can't be settled in Discovery becomes a named unknown that we'll resolve through a spike, a user conversation, or a deferred decision later in the arc.
- I write up the v1 scope document and draft the contract.
- If the engagement runs in two days rather than three, the write-up happens after Day 2 rather than during a third in-room day.

## The two-pass scope (broad → granular)

The roadmap is built in two passes because the broad pass and the granular pass need different mental modes, and trying to do both at once produces a worse roadmap than doing them in sequence.

**Broad pass — map the territory.**

- Feature _areas_, not feature lists. "Account management" rather than "magic-link sign-in plus password reset plus 2FA."
- Right level of abstraction for big trade-offs to be legible. Is v1 single-tenant or multi-tenant? Does it have payments at all? Are there integrations that change the architecture?
- Discards happen here. The cheapest time to cut a feature area is before it's been scoped in detail.

**Granular pass — define what gets committed to.**

- Individual pieces of work, each one scoped at the level the development cycle can run against (see `development-cycle.md`).
- Each piece of work is small enough that scoping, building, review, and shipping fit inside one cycle — typically a working week or two of build time.
- Acceptance criteria framed from the client's side: what they should be able to see and do when the build ships.
- Estimates attached, with confidence noted — high-confidence for known work, range-with-caveats for novel work.

## What the client brings, and what I bring

**Client brings:**

- Full attention for the engagement window. Discovery doesn't survive being interleaved with other deep work.
- Domain knowledge — the client usually knows things about their market, users, and product that I won't learn in three days unless they tell me explicitly.
- Decisiveness. Scope is bounded by what the client is willing to commit to, and Discovery requires real calls, not "we'll figure that out later." Sets that can't be committed to in Discovery don't go in v1.
- Whatever artifacts already exist — deck, doc, sketches, prototype, prior research, competitor analysis. Even rough drafts are useful.

**I bring:**

- Technical judgement on what's easy, what's hard, what's risky, and where the assumptions need pressure.
- Pattern-matching from previous projects — what the Base Platform covers (see `base-platform.md`), what's been built before, what's likely to surprise us.
- The discipline of the two-pass scope — keeping the broad pass broad and the granular pass granular, rather than letting them collapse into each other.
- A bias toward writing things down. By the end of Discovery the client owns a document, not a memory of a conversation.

## Deliverables

The client owns these artifacts regardless of whether we keep working together past the contract.

- **v1 scope document.** Defines the MVP at the feature level: what each piece of work is, what it does, what "done" looks like, rough estimate and confidence. Includes the named unknowns parked for later resolution, and an explicit out-of-scope list (the things v1 deliberately doesn't do).
- **Contract.** Names the engagement model (Discovery → Base Platform → Custom Work), the billing structure for what follows, the cadence the development cycle runs at, and the coordination approach — written scope shared before each build, client review before each ship.
- **Risk and assumption register.** The places the v1 scope is most likely to move — domain unknowns, technical spikes, dependencies on external decisions — captured so they're worked on early in the cycle rather than discovered late.
- **Short written summary.** What we decided, what we deferred, what we deliberately said no to. Sent within a day or two of the last session.

Pricing of Discovery itself, and the structure of how Custom Work is billed afterward, are covered in the pricing & contracts doc _[planned — see issue #27]_.

## Dependencies and what follows

- **Depends on:** the Fit Check (see `fit-check.md`) — a "go" decision, an agreed time budget, two-way fit confirmation, and a broad sense of the project.
- **Feeds into:** every milestone after this point. The v1 scope shapes the v0 marketing site (what we say the product is), the Base Platform inventory (what the foundation needs to support), the v1-beta Custom Work breakdown, and the v1 release scope. The contract governs the whole engagement from here forward.
