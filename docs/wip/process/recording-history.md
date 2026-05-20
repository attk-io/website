# Recording history

This document defines the artifacts recorded during Reflect. Plain wording. Internal planning doc.

## Release Manifests

A release manifest is a lightweight record of what the product contains at a given release.

Write a release manifest for each named release milestone or meaningful audience change:

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
