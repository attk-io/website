# Product Releases

This document defines what a release is and how releases relate to audience.

A release intentionally makes code in the production Deployment Environment accessible to its intended audience. It may require a production Deployment, or it may be an access change such as a feature flag. Deployment alone is not a release.

Releases widen audience and surface area; they do not change deployment cadence. A released product state can be application functionality, a public marketing site, or another production surface the audience can access directly.

## Release Targets

Every release should have a release target. Discovery uncovers the release target's name, audience profile, and access boundary.

If the audience profile or access boundary changes materially, that will usually create a new release target rather than revise the existing one.

### Name

The name is the simple label used in planning and roadmap conversation. The labels below are examples only; actual release target names are uncovered during Discovery.

- v0: public visitors with open access to the marketing site
- v1-beta: vetted beta users with allowlist access to the product
- v1: public visitors with open registration to the product and paywall

### Audience Profile

A release target has exactly one audience profile: the operational cohort this release is meant for right now.

An audience profile is not the same as a target audience, customer persona, or JTBD profile. Those describe the product's market and user fit. Audience profiles describe release exposure: which slice of people can encounter this product state now.

Example audience profiles:

- public visitors
- waitlist subscribers
- internal stakeholders
- all users
- subscription (tiered) users

### Access Boundary

Each release target has exactly one access boundary: the practical rule that determines who can actually use the release. It is always stated, even when the boundary is open access.

The access boundary is not the same as the intake or approval process that gets someone inside the boundary. For example, a release might use allowlist access; invite codes, manual approval, or a signed agreement might be ways people get added to that allowlist.

Example access boundaries:

- open access
- open registration
- allowlist access
- internal-only access
- subscription-tier access

## Footnotes

- This document defines the reusable release model. [The full project arc](../wip/process/project-arc.md) describes project milestones, some of which are Releases.
- Release manifest specifications live in [Recording History](./recording-history.md).
