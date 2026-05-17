# Micro view: the development cycle

This document captures what happens inside a single cycle of build-and-review work — the repeating loop where the actual building happens. Plain wording — no brand voice applied.

A cycle is one self-contained piece of functionality with a tangible outcome the client can see and use. The whole loop below runs once per cycle, then repeats.

The cycle runs across every work period in the macro arc — building toward each milestone (v0, v1-beta, v1, v2, vN...) and continuing as Stepping Back gradually overtakes the work. Different work periods have different categories of cycles (marketing-site work before v0, Base Platform and Custom Work before v1-beta, post-MVP expansion between v1 and v2, etc.), but the loop itself is constant. What changes is the source of signal feeding scoping — pre-release guesses, then gated-user feedback, then real-user behavior at scale.

## 1. Scoping

- Pull the next piece of work off the roadmap agreed during the Discovery milestone.
- Translate it into concrete user stories: who does what, when, and why.
- Define acceptance criteria — what does "done" actually look like, observable from the client's side.
- Surface unknowns: anything where I need a decision from the client, a clarification from a user, or a spike before committing to an approach.
- Estimate effort and confirm this is still the right next thing to build (priorities may have shifted since the original roadmap).
- Output: a short, written scope shared with the client before any code is written.

## 2. Implementation

- Focused build against the agreed scope.
- Internal milestones are small and frequent — the working state of the system should be demonstrable at any point.
- Decisions that affect the scope get raised back to the client rather than absorbed silently.
- Tests, types, and observability are written alongside the feature, not bolted on after.

## 3. QA / review

- The client reviews the working feature in their hands, in an environment that mirrors production.
- This is not a demo — it's the client using the thing the way a real user would.
- Issues, friction, and "actually, can it do X instead" get captured.
- Small fixes happen immediately. Anything that materially changes scope gets re-scoped explicitly rather than smuggled into the build.

## 4. Ship

- Once the QA pass is clear and any issues raised during review are resolved, the build ships to production.
- Deploys are routine and reversible — shipping is not a ceremony.
- Monitoring catches anything the QA pass missed; rollback is available if needed.
- The build is now real. The client, and once the product is released, real users, start producing evidence about it.

## 5. Reflect → next cycle

- Brief check before starting the next loop: did anything in this cycle change our view of what should come next?
- If yes, the roadmap is updated before the next scoping step.
- If no, pull the next cycle and start again.

## Key properties of the development cycle

- **One loop, repeated** — the same four phases regardless of whether the product is pre-release or in production. Only the inputs change.
- **Every loop produces something real** — not a slide, not a demo, a working feature the client can react to.
- **Course corrections happen early, while they're cheap** — small cycles and frequent client review mean we find out we're going the wrong way after one cycle, not after six.
- **Scope changes are explicit** — anything that grows the scope is re-scoped, not silently absorbed. The client always knows what they're paying for.
- **No assumptions** — scope is shared in writing before the build starts, and the client reviews the working feature before it ships.
