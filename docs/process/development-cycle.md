# Micro view: the development cycle

This document captures what happens inside a single set of engineering work — the repeating loop where the actual building happens. Plain wording — no brand voice applied.

A "set" is one self-contained piece of functionality with a tangible outcome the founder can see and use. The whole cycle below runs once per set, then repeats with the next set.

The cycle runs across every work period in the macro arc — building toward each milestone (v0, v1-beta, v1, v2, vN...) and continuing as Stepping Back gradually overtakes the work. Different work periods have different categories of sets (marketing-site sets before v0, Base Platform and Custom Work sets before v1-beta, post-MVP expansion sets between v1 and v2, etc.), but the loop itself is constant. What changes is the source of signal feeding scoping — pre-release guesses, then gated-user feedback, then real-user behavior at scale.

## 1. Scoping (per set)

- Pull the next set off the roadmap agreed during the Discovery milestone.
- Translate it into concrete user stories: who does what, when, and why.
- Define acceptance criteria — what does "done" actually look like, observable from the founder's side.
- Surface unknowns: anything where I need a decision from the founder, a clarification from a user, or a spike before committing to an approach.
- Estimate effort and confirm the set is still the right next thing to build (priorities may have shifted since the original roadmap).
- Output: a short, written scope the founder signs off on before any code is written.

## 2. Implementation

- Focused build against the agreed scope.
- Internal milestones are small and frequent — the working state of the system should be demonstrable at any point.
- Decisions that affect the scope get raised back to the founder rather than absorbed silently.
- Tests, types, and observability are written alongside the feature, not bolted on after.

## 3. QA / review

- The founder reviews the working feature in their hands, in an environment that mirrors production.
- This is not a demo — it's the founder using the thing the way a real user would.
- Issues, friction, and "actually, can it do X instead" get captured.
- Small fixes happen immediately. Anything that materially changes scope gets re-scoped explicitly rather than smuggled into the set.

## 4. Ship

- Once the founder signs off on the QA pass, the set ships to production.
- Deploys are routine and reversible — shipping is not a ceremony.
- Monitoring catches anything the QA pass missed; rollback is available if needed.
- The set is now real. The founder, and once the product is released, real users, start producing evidence about it.

## 5. Reflect → next set

- Brief check before starting the next loop: did anything in this set change our view of what should come next?
- If yes, the roadmap is updated before the next scoping step.
- If no, pull the next set and start again.

## Key properties of the development cycle

- **One loop, repeated** — the same four phases regardless of whether the product is pre-release or in production. Only the inputs change.
- **Every loop produces something real** — not a slide, not a demo, a working feature the founder can react to.
- **Course corrections happen early, while they're cheap** — small sets and frequent founder review mean we find out we're going the wrong way after one set, not after six.
- **Scope changes are explicit** — anything that grows the set is re-scoped, not silently absorbed. The founder always knows what they're paying for.
- **Sign-off gates** — written scope before build, founder QA before ship. Nothing moves forward on assumption.
