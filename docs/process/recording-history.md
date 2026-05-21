# Recording history

This document defines the artifacts recorded during Reflect. Plain wording. Internal planning doc.

## Release Manifests

A release manifest is a lightweight record of what the product contains at a given release.

Write a release manifest for each named release checkpoint or meaningful audience change:

- v0 public marketing release
- v1-beta private or gated release
- v1 public release
- v2 and later major releases
- any smaller release where the audience, purpose, or product shape changes enough that future context will matter

Each manifest should be short, factual, and easy to scan.

Suggested fields:

- **Release:** version name or identifier
- **Date:** release date
- **Release Target:** the named target established for this release
- **Audience Profile:** the named operational cohort this release is for
- **Access Boundary:** the rule or mechanism that controls who can use this release
- **Purpose:** what this release is meant to learn, validate, enable, or support
- **Current product state:** what the app/site/product includes at this point
- **Known limitations:** what is intentionally absent, incomplete, rough, gated, or deferred
- **Important signals:** early audience, telemetry, support, or operational signals worth preserving
- **Roadmap effect:** anything this release changes about what should happen next

```md
# [Release Name]

Date:
Release Target:
Audience Profile:
Access Boundary:
Purpose:

## Current Product State

- ...
- ...
- ...

## Known Limitations

- ...
- ...
- ...

## Important Signals

- ...
- ...
- ...

## Roadmap Effect

- ...
- ...
- ...
```

## Changelogs

A changelog records what changed in a given release — the diff a developer needs to understand what is different from the previous release.

Write one for each release.

Follow the [Keep a Changelog](https://keepachangelog.com) format. Only include sections that have entries — omit empty ones.

- **Added:** new features
- **Changed:** changes to existing features
- **Deprecated:** features that will be removed in a future release
- **Removed:** features removed in this release
- **Fixed:** bug fixes
- **Security:** security fixes or vulnerability patches

```md
# [Release Name] — [Date]

## Added

- ...

## Changed

- ...

## Deprecated

- ...

## Removed

- ...

## Fixed

- ...

## Security

- ...
```

## Decision Records

A decision record captures a significant technical or product decision — the context that made it necessary, what was chosen, and why.

Write a decision record when all three are true:

- The decision is hard to reverse — changing course later carries meaningful cost
- It would surprise a future reader without context — they would wonder why it was done this way
- It was the result of a real trade-off — there were genuine alternatives and one was chosen for specific reasons

If any of the three is missing, skip the record. Each record should be short enough to read in under two minutes.

Suggested fields:

- **Title:** a short description of what was decided
- **Date:** when the decision was made
- **Status:** proposed, accepted, or superseded (with a reference to the superseding record number)
- **Context:** the situation that made the decision necessary
- **Decision:** what was chosen
- **Consequences:** what happens as a result — trade-offs, constraints, implications
- **Alternatives considered:** what else was on the table and why it was not chosen

```md
# [ID] [Decision Title]

Date:
Status: [proposed | accepted | superseded by #NNN]

## Context

## Decision

## Consequences

## Alternatives Considered
```

## Scope Change Records

A scope change record captures what changed when a scoping session was called, and why the change was the right call.

Write one whenever a scoping session happens. A scoping session is called when expected product behavior needs to change — not for bug fixes, minor tweaks, or missed acceptance criteria from the original scope.

Each record should be short and narrative — one or two sentences per change is enough.

Suggested fields:

- **Trigger:** what caused the scoping session to be called, in one sentence
- **Changes:** what was added, removed, or redefined — with enough before/after context for a future reader to understand the delta
- **Rationale:** why this was the right call
- **Linked issues:** the issues added, closed, or modified as a result (optional)
- **Linked decision:** a reference to any decision record written alongside this change (optional)

```md
# [ID] [Short Title]

Date:
Trigger:

## Changes

## Rationale

## Linked Issues

## Linked Decision
```

## Weekly Issue Recaps

A weekly issue recap is a short record of what moved in the issue tracker during a given week.

Write one at the end of each week where there is active build work. Each recap is a flat list of issue names and links, grouped by what happened to them that week.

```md
# Week of [Date]

## Opened

- ...

## Completed

- ...

## Closed

- ...

## Re-prioritized

- ...
```
