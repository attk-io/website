# Docs glossary

## Development Cycle

One self-contained piece of functionality with a tangible outcome the client can see and use. Runs the full six-step loop (Planning -> Implementation -> Staging Deployment -> QA / Review -> Release -> Reflect) once, then repeats. Development Cycles are not time-boxed; duration is determined by the scope of the work.

## Checkpoint

A named point in the Project Arc that marks project progression and reflects a project goal. A Checkpoint can be a Release, but can also mark other forms of progress such as Discovery, Planning & Design, or Development Transition.

## Parent issue

The GitHub issue representing a full feature from the client's perspective. Closed when all sub-issues are done and the client has cleared QA. Follows the full development cycle once all sub-issues are shipped.

## Sub-issue

A unit of work within a large or complex feature. Runs a subset of the development cycle — Planning, Implementation, Staging Deployment, and Reflect — without QA/review or Release. Code accumulates on the feature branch until the parent is ready to release.

## Deployment Environment

A target environment where deployed code runs. Every project has staging and production Deployment Environments by default: staging is the pre-production environment for client review, and production is the live environment required for a Release.

## Deployment

The step that moves code into a target Deployment Environment. The target can be staging, production, or another environment if the project needs one.

## Release

The intentional step that makes code in the production Deployment Environment accessible to its intended audience. A Release may require a Deployment, but can also happen through an access change after code is already deployed.

## Release Target

A named target for a Release, uncovered during Discovery and established before the Release happens. A Release Target has a name, exactly one Audience Profile, and one Access Boundary; material changes to the Audience Profile or Access Boundary usually create a new Release Target.

## Audience Profile

A named operational cohort a Release is intended to reach right now. An Audience Profile is distinct from a target audience, customer persona, or JTBD profile; it describes release exposure, not the product's overall market definition.

## Access Boundary

The required rule that determines who can use a Release. An Access Boundary is distinct from the intake or approval process that gets someone inside the boundary.
