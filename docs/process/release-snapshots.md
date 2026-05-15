# Release Snapshots

This document defines the release snapshot pattern: a lightweight record of what the product contains at a given release. Plain wording. Internal planning doc.

A release snapshot is not a changelog. A changelog answers, "What changed?" A release snapshot answers, "What does the app include at this release?"

The goal is to preserve a versioned picture of the product's current state so future roadmap, scope, and product decisions can be made with context.

## When to Write One

Write a release snapshot for each named release milestone or meaningful audience change:

- v0 public marketing release
- v1-beta private or gated release
- v1 public release
- v2 and later major releases
- any smaller release where the audience, purpose, or product shape changes enough that future context will matter

## What It Should Capture

Each snapshot should be short, factual, and easy to scan.

Suggested fields:

- **Release:** version name or identifier
- **Date:** release date
- **Audience:** who this release is for
- **Purpose:** what this release is meant to learn, validate, enable, or support
- **Current product state:** what the app/site/product includes at this point
- **Known limitations:** what is intentionally absent, incomplete, rough, gated, or deferred
- **Important signals:** early audience, telemetry, support, or operational signals worth preserving
- **Roadmap effect:** anything this release changes about what should happen next

## Template

```md
# [Release Name]

Date:
Audience:
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

## Example

```md
# v1-beta.3

Date: 2026-05-15
Audience: private beta users
Purpose: validate onboarding and first activation

## Current Product State

- Invite-only account creation
- Email login
- First-run onboarding checklist
- User profile setup
- Admin invite management
- Basic activation telemetry
- Error monitoring and production smoke tests

## Known Limitations

- No self-serve signup
- No billing
- No team accounts
- Profile setup step is easy to miss

## Important Signals

- Several users missed profile setup during first run
- Invite flow completed successfully for all tested users
- No production errors during initial smoke tests

## Roadmap Effect

- Move profile setup earlier in onboarding
- Keep self-serve signup deferred until after beta feedback stabilizes
- Prioritize billing test flow before public v1
```

## How This Fits the Process

Release snapshots support the principle that the past should inform progress. They make it possible to look back and understand what the product actually contained at a given moment, who it was exposed to, what was known to be missing, and how that release shaped the next work.

They can live in the project `docs/` folder, alongside decision records and other process memory.
