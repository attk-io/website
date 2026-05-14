# Pricing Model

This document captures how pricing and billing work across the engagement. Plain wording — no brand voice applied. Internal planning doc.

The pricing model needs to do two things at once:

- Give the founder cost visibility early enough to make real decisions.
- Avoid pretending a custom software product can be priced accurately before the work has been scoped feature by feature.

The model is therefore a hybrid: fixed-fee thinking work up front, fixed-price Base Platform modules where the work is pre-built, quoted Custom Work once features have been scoped, and hourly billing for re-scoping, advisory work, and other open-ended senior judgement.

## Pricing principles

- **The founder should know what they are committing to before build work begins.** No feature starts from a vague "we'll see what it takes" understanding.
- **Scoping is paid work.** Turning an idea into something buildable is part of the value, not a free prelude to the value.
- **Known work can be priced directly.** Base Platform modules are pre-built and menu-priced.
- **Custom work is quoted after scope is known.** The internal basis is expected hours at the senior hourly rate, but the founder sees a feature quote tied to a written scope.
- **Changed direction gets re-scoped before it gets built.** If a new requirement changes the work, the new work is estimated before build continues.

## Engagement entry

### Fit Check

The Fit Check is free. It decides whether there is enough two-way fit to start paid discovery work. It does not produce a full scope, a quote, or a commitment to build.

See `fit-check.md`.

### Feature Discovery

Feature Discovery is the first paid step. It is a high-level conversation where the founder and I name the features the product appears to need.

- Fixed price: **$500**.
- Optional only if the founder already has equivalent output.
- Required input for detailed feature scoping.
- Output: a high-level feature inventory, grouped well enough to decide what needs detailed scoping next.

Feature Discovery is standalone. If the founder stops here, they keep the output.

### Detailed Feature Scoping

Detailed Feature Scoping turns one named feature from the inventory into a buildable scope and price.

- Fixed price: **$500 per feature**.
- Paid before the scoping work begins.
- Output depends on the kind of feature:
  - **Base Platform feature:** fixed menu price and, where useful, a demo of the pre-built module.
  - **Custom feature:** wireframes or flow sketches where needed, written scope, and a feature quote.

Detailed scoping is the bridge between early product thinking and build commitment. It gives the founder the information needed to decide what to buy, defer, cut, or change before build work starts.

## Base Platform pricing

The Base Platform is fixed-price because it is built from pre-built modules.

- Basic setup starts at **$15,000**.
- Add-on modules are selected from a menu.
- The full Base Platform price is set from the selected inventory.
- The range currently communicated publicly is **$15,000–$35,000**.

The Base Platform price is not an hourly estimate. The work is known, pre-built, and configured for the founder's product. If a major platform need is discovered after the initial inventory is set, it is re-scoped before work begins and handled as either:

- another Base Platform add-on, priced from the menu, or
- Custom Work, if the need is product-specific rather than platform foundation.

See `base-platform.md`.

## Custom Work pricing

Custom Work is product-specific work: the business logic, workflows, interfaces, and differentiated features that make the product what it is.

Custom Work is quoted per scoped feature.

- Internal pricing basis: **$125/hour**.
- Client-facing commitment: a feature quote tied to a written scope.
- The quote is based on the expected time required to deliver that scope.
- If my estimate is wrong and the agreed scope takes longer than expected, I absorb that difference.
- If the scope changes, the changed work is not absorbed silently; it is re-scoped before build continues.

This keeps pricing legible for the founder without turning the engagement into open-ended hourly work. The founder commits to a scoped feature and a price. I keep the hourly rate as the internal basis for estimating and as the rate for work that genuinely cannot be quoted as a bounded feature.

## Scope changes and re-scoping

Scope changes do not require signatures, but they do require explicit re-scoping before changed work begins.

When a requested change affects the agreed scope:

- The current change is named in writing.
- Re-scoping is billed hourly at **$125/hour**.
- The output of re-scoping is either:
  - a Base Platform add-on price, if the change maps to a pre-built module, or
  - a revised or new Custom Work quote, if the change is product-specific.

The important boundary is not legal ceremony; it is clarity before work starts. The founder should always know when a request is part of the current scope, when it changes the scope, and what the changed work will cost.

## Invoicing and payment

Discovery and detailed scoping fees are payable up front.

Build work is invoiced monthly based on what was delivered that month. For Custom Work, quoted features are invoiced against completed work. If a feature spans more than one month, partial milestone billing can be used so the invoice reflects meaningful delivered progress rather than waiting for the entire feature to close.

Invoices are net 30.

- A heads-up is sent the day before an invoice becomes overdue.
- Work pauses on day 31 if payment has not arrived.
- Work resumes once the overdue invoice is paid.

There is no minimum commitment. The founder can stop at any time. Work completed to that point is already delivered through source control as it happens, so stopping does not create a handoff gap.

## Third-party costs and ownership

The client owns the product, code, accounts, infrastructure, credentials, and third-party service relationships.

- Third-party costs are paid directly by the client.
- I provision and configure services on the client's behalf.
- The product lives in the client's source control and infrastructure, not in accounts I control.

This keeps ownership clean from the beginning and makes stepping back possible later without a transfer event.

## Advisory pricing

Advisory work after stepping back is optional and client-directed. There is no required retainer or standing arrangement unless the client wants one.

- Advisory rate: **$125/hour**.
- Availability: business hours.
- Emergencies are handled based on my capacity, not through a separate guaranteed emergency tier.

Advisory can include architecture review, code review, pairing, strategic technical input, or incident support where I am useful. The exact shape depends on what the client wants during the stepping-back phase.

See `project-arc.md` and `working-together.md`.
