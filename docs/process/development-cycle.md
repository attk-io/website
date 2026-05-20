# Micro view: the development cycle

This document captures what happens inside a single cycle of build-and-review work — the repeating loop where the actual building happens.

A cycle is one self-contained piece of functionality with a tangible outcome the client can see and use, such as a feature, bug fix, or enhancement. The whole loop below runs once per cycle, then repeats.

Whenever product work is happening, the cycle is running — one loop, then the next.

## 1. Planning

Planning is not a full scoping session — that work happens during [Discovery](./discovery.md) and [Planning & Design](./project-arc.md). This step is about reviewing the upcoming work, making any adjustments in light of recent context, and confirming the scope is clear before the build starts.

For simple, well-understood work this can take as little as 15 minutes. For more complex features, or when there have been significant contextual changes — new client direction, unexpected discoveries in the last cycle, shifted priorities — it can take up to half a day or more.

- Review the current roadmap against recent context: any meetings, new information, or shifted priorities since the last cycle. Confirm the right next piece of work, or adjust accordingly.
- Review and refine the scope: user stories, acceptance criteria, and any open unknowns that need a decision before the build starts.
- Estimate effort.
- Output: a GitHub issue capturing the current scope, shared with the client before any code is written.

## 2. Implementation

- Plan the build in a set of discrete steps: small, verifiable chunks of meaningful work which can be completed in under 30 minutes.
- Large or complex features are broken into sub-issues — see [Large or Complex Features](#large-or-complex-features) below.
- New insights or decisions that affect the scope get raised back to the client rather than absorbed silently.
- Tests, types, and observability are written alongside the feature, not bolted on after.

## 3. Staging Deployment

The automated steps that move local changes into a shared environment, building confidence that the work will behave correctly in production.

- A draft PR is opened so CI runs on every push.
- CI runs the full automated check suite: unit tests, integration tests, type checks, linting, and build steps that can't run reasonably in a local pre-commit hook.
- On passing checks, changes deploy to staging.

## 4. QA / review

- The client reviews the working feature in their hands, on staging.
- This is not a demo — it's the client using the thing the way a real user would.
- Issues, friction, and "actually, can it do X instead" get captured.
- Small fixes happen immediately. Anything that materially changes scope gets re-scoped explicitly.

## 5. Release

- Once the client clears the QA pass and any issues raised during review are resolved, the build releases to production.
- Releases are routine and reversible — releasing is not a ceremony, it's a development step.
- Monitoring catches anything the QA pass missed; rollback is available if needed.
- The build is now real. The client, and once the product is released, real users, start producing evidence about it.

## 6. Reflect

A moment at the end of each cycle to record what happened. The artifacts produced here build up the project's history — context that prevents waste by making past decisions and outcomes easy to look up. See [Recording History](./recording-history.md) for what to record and how.

- Note what changed from the original scope, and why.
- Record any decisions made and the context that shaped them.
- Update the roadmap if anything in this cycle shifted what comes next.

---

## Large or Complex Features

Some features touch multiple domains in the codebase — UI, backend, database, integrations — or are simply too large for a single cycle. Breaking these into sub-issues keeps the work manageable and makes it clear when the full feature is complete.

**When to break up a large workload:**

- The work touches multiple domains (UI, backend, database, integrations, etc.).
- The estimated scope is too large to complete and review in one cycle.

**Structure:**

- A **parent issue** represents the full feature from the client's perspective — the unit of "this feature is complete." The parent follows the full development cycle once all sub-issues are done.
- **Sub-issues** handle the individual units of work. Each sub-issue runs through: **Planning**, **Implementation**, **Staging Deployment**, and **Reflect**.

Sub-issues do not include QA/review or Release. A draft PR is opened against `main` early in the feature branch's life; sub-issues are closed via commit message (e.g., `Fixes #321`). Code accumulates on the feature branch until the parent is ready to release.

---

## Key properties of the development cycle

- **One loop, repeated** — the same six steps regardless of where the product is in the arc. The inputs change; the loop doesn't.
- **Every cycle releases something real** — not a slide, not a demo. A working feature the client clears and releases to production.
- **Automated checks before human review** — CI and a staging deployment run before client QA, so reviews start from a known baseline.
- **Course corrections happen early, while they're cheap** — small cycles and frequent client review mean problems surface after one cycle, not after six.
- **Scope changes are explicit** — anything that grows the scope is re-scoped, not silently absorbed. The client always knows what they're getting.
- **History is built deliberately** — every Reflect step produces artifacts. The project's context accumulates rather than evaporating.
