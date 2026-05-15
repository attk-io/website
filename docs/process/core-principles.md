# Core Principles

This document names the principles that make projects successful and client relationships healthy. Plain wording. Internal planning doc.

The other process docs describe the mechanics: Fit Check, Discovery, the development cycle, the project arc, pricing, and working cadence. This doc should sit underneath those mechanics and answer a different question:

> What has to be true for this kind of engagement to work well?

## Releases Move the Product Toward Reality

The primary failure mode this process is designed to prevent is a product that never reaches real users.

There is no single moment where the project suddenly becomes real. There are releases. v0 exposes the idea and builds an audience. v1-beta puts the working product in front of vetted users and rehearses operations. v1 opens access to public users and brings the product's exchange into reality. v2 and later releases continue the same pattern as the product learns from use.

Continuous deployment is the baseline underneath those milestones. Code reaches production in small, frequent, reversible increments. Release milestones widen audience and surface area; they do not turn shipping into a ceremony.

A product that never reaches users cannot teach, earn, or improve. The work is to keep reducing the distance between the product and reality, with enough discipline to avoid reckless shipping and enough pressure to avoid endless refinement.

When fear or perfectionism starts to take over, my role is to name it gently and make the next release smaller, clearer, and safer. The answer is not to force a big reveal. The answer is to keep releasing in forms that match the product's actual maturity.

This shows up in Fit Check, Discovery, v0, v1-beta, v1, v2+, small sets, continuous deployment, release prep, and the reflect-to-next-set loop.

## The Project State Should Be Plainly Visible

The founder should not have to imagine where the project stands.

Healthy projects make the real state of the work available on demand: what exists, what is in flight, what is blocked, what changed, what still needs a decision, where the roadmap stands, what the budget implications are, what is happening in production, and what audience signals are coming back.

Visibility should be self-serve wherever possible, not broadcast as constant noise. The founder can look when they need to look, and the system should show enough reality that they do not have to depend on reassurance or a prepared status performance.

Openness means surfacing assumptions early, admitting uncertainty, explaining trade-offs, and saying plainly when something is behind or harder than expected. The point is not to make every detail equally important. The point is to keep the project legible enough that both sides can make decisions from the same reality.

This shows up in the working environment, written scopes, roadmap, async channel, weekly summaries, analytics, telemetry, production monitoring, and optional code-health reporting where it is useful.

## Scope Gives the Work a Landscape

Scope names the landscape of the work: the final feature set at a high level, and each feature's building blocks when you zoom in.

Clear scope gives the project focus. It helps us stay on track, avoid distraction, and understand what we are building before work begins. It also creates necessary friction before expanding the work: the new thing has to be described, placed in relation to the existing scope, and backed by an estimate.

When something new comes up, the answer is not automatically no. It may be "yes, but we rescope," "yes, but we backlog it for now," or "I advise against it for these reasons." The important part is that scope changes deliberately instead of drifting.

Scoping happens before work begins. It also happens after scope changes, even if the change only needs a short 15-30 minute scoping session. Small changes still deserve a clear shape before they become work.

This shows up in Discovery, v1 scope, release scope, set-level scoping, acceptance criteria, estimates, backlog decisions, and scope-change handling.

## Small Real Things Beat Big Imagined Certainty

A working product teaches more than a perfect plan.

Planning matters, especially early. But important assumptions should meet reality in the smallest useful form. Sometimes that means a release. Sometimes it means a prototype, a mockup, a waitlist, a user interview, a support conversation, or a narrow slice of functionality that lets someone react to something concrete.

Small real things surface truth: where users get stuck, where the founder changes their mind, where the architecture is under pressure, where the roadmap was wrong, and where the product idea is stronger or weaker than expected.

Assumptions should be made cheap before they become code. Writing code is easy; changing code is hard. It is common for a founder to arrive with a strong picture of what they believe needs to be built before enough outside feedback has shaped it. That is not a failure; it is part of the work. My role is to help the product come into contact with reality early enough that the expensive parts of the build are informed by something more than internal conviction.

This shows up in Discovery, prototypes, mockups, audience capture, user interviews, v0, v1-beta, small sets, continuous deployment, telemetry, QA, and the reflect-to-next-set loop.

## Decisions Should Be Easy to Find

If a decision matters, it should be traceable later.

The project should not depend on someone remembering why something exists or why it was built a certain way. When a future change raises the question, the answer should be easy to look up.

Written decisions reduce ambiguity, wasted effort, and rediscovery. They give the project continuity when the pace gets fast, when the emotional stakes get high, or when someone new needs to understand the history behind the current shape of the product.

The record does not need to be heavy. A formal decision log can be a set of markdown files following a consistent format. The important thing is that decisions are stored somewhere durable and searchable: a `docs/` folder in the codebase, a specialized documentation tool, or a wiki.

This applies to scope decisions, sign-offs, roadmap changes, trade-offs, disagreements, high-impact choices, and material product or technical decisions. It does not mean every estimate or budget detail needs to live in the same record.

This shows up in Fit Check summaries, Discovery outputs, written scopes, sign-offs, roadmap updates, formal decision logs, and records of disagreements.

## Assumptions Belong in the Open Early

Assumptions get more expensive when they stay implicit.

Every project starts with assumptions: market size, user behavior, willingness to pay, operational burden, technical feasibility, integration complexity, data quality, performance needs, and the parts of the product that may be harder than they look.

The founder does not need false certainty. They need a clear read on what is known, what is assumed, what is weakly supported, and what could change the shape of the engagement. Naming assumptions early is not pessimism. It is how the project makes better decisions with the information it actually has.

Assumptions should be discussed during scoping. From there, they can be accepted, mitigated, postponed, or turned into a smaller piece of work that gives us better evidence. The assumptions to reduce first are the ones with the highest feasibility questions and the highest severity if wrong.

This shows up in the Fit Check, Discovery, assumption notes, technical spikes, estimates with confidence levels, release planning, and set-level scoping.

## Health Signals Should Inform Strategy

The project should produce evidence the founder can use to make decisions.

Audience signals matter most. They show whether the product is meeting reality: traffic, acquisition sources, signup and activation, feature usage, retention, conversion, churn, support requests, qualitative feedback, and whatever telemetry best reflects the client's goals. The right signals vary by product, but the purpose stays the same: give the founder evidence that can shape product and company strategy.

Code and system health matter because they can affect audience outcomes. If the app is slow, unreliable, difficult to change, or repeatedly crashing, audience signal can collapse even when the product would otherwise meet a real need.

The useful hierarchy is roughly ten parts audience signal to one part code health, with code health treated as the thing that protects the product's ability to keep learning and serving users. Performance, reliability, readability, test coverage, deployment confidence, error rate, development velocity, and refactor debt should be watched in that order of importance.

The goal is not to measure everything. The goal is to make the right health signals available on demand, whenever possible, so decisions can be made from evidence instead of preference or anxiety.

This shows up in analytics, telemetry, monitoring, error tracking, performance reviews, roadmap reviews, weekly summaries, release retrospectives, and the decision to schedule cleanup or refactor work.

## The Work Serves the Business Goals

Every decision should be weighed against the goals of the business.

I am not there to take over the founder's project. I am there to understand the business goals, see the founder's vision clearly, and respond with sound advice, careful execution, and the judgment that comes from years of experience.

A founder should not have to pretend to be technical to participate meaningfully. My role is to make the technical shape of the work legible enough that decisions can be made against the business goals, not against fear, preference, or hidden technical constraints.

The working relationship is not order-taking, and it is not takeover. It is the founder's vision with my standards. I give expert advice, offer real options, and hold the work to the professional standard I am willing to stand behind. The final decision belongs to the client, except where the request crosses an ethical or moral boundary.

In extreme cases, if a client repeatedly chooses a path that conflicts with my advisory judgment, I may recommend changing my role. That could mean stepping away from an advisory position and moving toward implementation of someone else's decisions instead.

This shows up in decision-making, set scoping, roadmap sequencing, trade-off conversations, QA, disagreements, and role adjustments.

## Expectations Should Be Clear

The working relationship should be built on commitments the process can actually support.

I can promise transparent project status, roadmap visibility, early exposure and feedback, and clear communication about cost before work begins.

Transparent status means sharing what we know, what we do not know, and what we are doing to get to the root of uncertainty. Roadmap visibility means a current best map that changes as evidence comes in, not a frozen prediction.

Clear cost communication means work does not begin until the cost has been discussed. If the scope changes, the cost conversation happens before the work expands.

I should not promise that the product will be a success. I should not promise to rush through work just to get it done without following it with cleanup and refactor work where needed. I should not promise 24/7 availability except for emergencies, such as critical production bugs, payment failures, or server downtime.

Setting expectations clearly is not a way to lower commitment. It is how the work stays honest when the outcome cannot be guaranteed.

This shows up in Fit Check, Discovery, pricing, weekly summaries, roadmap updates, release planning, scope changes, support expectations, and production emergencies.

## The Next Step Should Be Clear

The client should be in the driver's seat, with a clear view of where the project stands and what comes next.

The work feels manageable when the state is visible and the next step is clear: what is being worked on now, what decision is needed, what is blocked, what is ready for review, what changed, and what happens next.

My conduct should support that clarity. The baseline is punctuality, openness, responsiveness, and a consistently level-headed, analytical, thoughtful presence. The client should not have to manage around uncertainty about whether I will show up, respond, think carefully, or say what needs to be said.

The process should keep direction where it belongs: with the client making business and product decisions from a clear view of the work, and me providing the technical advice, execution, and structure needed to make those decisions useful.

This shows up in working cadence, weekly summaries, async responsiveness, roadmap updates, set scoping, QA review, release prep, and day-to-day communication.

## The Relationship Should Fit the Need

A healthy relationship starts with whether I can meaningfully help the founder reach their goals.

The question is not just whether the project needs software. The question is whether my advice, guidance, and experience will make a meaningful impact on the business. A founder who has a clear business goal, deep knowledge of the problem, and real ownership of the vision, but needs technical judgment, product translation, build leadership, and a dependable path from idea to working software may be a strong fit.

If the business already has a project manager, a lead developer, and a founder with deep technical expertise, some of the most valuable things I bring may overlap with people already in place. In that case, a full build partnership may not be in the founder's best interest.

That does not mean there is no way to help. A lighter role may be more useful: periodic code review, project assessments, technical second opinions, roadmap review, or support around a specific decision.

If the fit is not right, saying so early is part of the work. The founder should leave with a clearer sense of what kind of help they actually need, even when the answer is not a full engagement with me.

This shows up in the Fit Check, budget conversations, timeline conversations, model selection, role selection, and the decision to move into Discovery or a lighter advisory engagement.

## My Role Should Evolve With the Product

The goal is not necessarily to leave. The goal is to provide the highest-value version of my involvement at each stage.

Early in a project, senior judgment matters most: architecture, foundations, product translation, hard trade-offs, and the decisions that are expensive to undo later. As the product matures, the work should become less dependent on constant expert intervention and more ready for people who can follow the established direction and do the work well.

That shift is a success state, not abandonment. My role may move from hands-on building to oversight, training, review, or support for another developer, team, or vendor. The business should gain options as the product becomes more stable.

Stable architecture, operational routines, and developer tooling make that possible. They give the product enough shape that other people can contribute without needing to rediscover the reasoning behind every decision.

This shows up in architecture choices, operational discipline, developer tooling, documentation, v2+, hiring support, training, code review, and the Stepping Back milestone.
