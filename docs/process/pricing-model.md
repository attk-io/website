# Pricing Model

The pricing model covers complimentary Discovery, paid Planning & Design, a variable-price Base Platform, and quoted Custom Work priced per scoped feature, aiming to create transparent and predictable pricing for the client.

## Pricing principles

- **The client should know what they are committing to before build work begins.** No feature starts from a vague "we'll see what it takes" understanding.
- **Detailed scoping is paid work.** Complimentary Discovery establishes product direction and an initial roadmap. Planning & Design turns that direction into build-ready scope and a build estimate.
- **Known work can be priced directly.** Base Platform modules are pre-built and menu-priced.
- **Custom work is quoted after scope is known.** The internal basis is expected hours at the senior hourly rate, but the client sees a feature quote tied to a written scope.
- **Changed direction gets re-scoped before it gets built.** If a new requirement changes the work, the new work is estimated before build continues.
- **The client pays third-party costs directly.** The client owns all accounts, infrastructure, and service relationships. I provision and configure services on their behalf — costs are billed to the client, and the product lives in their source control and infrastructure, not mine.

## Engagement entry pricing

### Fit Check

The Fit Check decides whether there is enough two-way fit to continue into complimentary [Discovery](./discovery.md). It does not produce a full scope, a quote, or a commitment to build.

- Fixed price: **Free**
- Output: A decision on whether to continue to Discovery, with a short written follow-up.

See [Fit Check](./fit-check.md).

### Discovery

Discovery is complimentary. It is a focused working session where the client and I establish the business goals, product audiences, product type, feature list, release targets, and scope for [Planning & Design](./planning-and-design.md). It produces an initial roadmap, rather than a detailed build scope or quote. Discovery is standalone — if the client stops here, they keep the output.

- Price: **Free**
- Output: Initial roadmap, supported by business goals, product audiences, product type, high-level feature list, release targets, and Planning & Design scope.

See [Discovery](./discovery.md).

### Planning & Design

Planning & Design is the first paid phase, with its own agreed budget. It turns the [Discovery](./discovery.md) output into build-ready detail. It is the bridge between product direction and build commitment — the client sees the full picture of what is being built and what it will cost before any build work begins.

- Variable price: **~$10,000**
- Output: Defined scope, build estimate, Project Arc document, prioritized backlog of scoped issues, and any additional deliverables agreed during Discovery.

See [Planning & Design](./planning-and-design.md).

## Base Platform pricing

The Base Platform is fixed-price because it is built from pre-built modules. The price is not an hourly estimate — the work is known, pre-built, and configured for the client's product. If a major platform need is discovered after the initial inventory is set, it is re-scoped before work begins and handled as either another Base Platform add-on or Custom Work.

- Variable price: **$15,000–$35,000**
- Output: A production-ready platform foundation, configured for the client's product and deployed to production.

See [Base Platform](./base-platform.md).

## Custom Work pricing

Custom Work is product-specific work: the business logic, workflows, interfaces, and differentiated features that make the product what it is. The client commits to a scoped feature and a price; I keep the hourly rate as the internal basis for estimating. If my estimate is wrong and the agreed scope takes longer than expected, I absorb that difference. If the scope changes, the changed work is re-scoped before build continues — not absorbed silently.

- Variable price: **quoted per feature** (internal basis: $125/hour)
- Output: Each scoped feature, delivered to production against a written scope.

## Invoicing and payment

Planning & Design fees are payable up front. The Fit Check and Discovery are free.

Build work is invoiced monthly based on what was delivered that month. For Custom Work, quoted features are invoiced against completed work. If a feature spans more than one month, partial progress billing can be used so the invoice reflects meaningful delivered progress rather than waiting for the entire feature to close.

Line items on each invoice are categorized by [Domain Labels](./domain-labels.md) so the client can see at a glance how costs are distributed across the development process.

Invoices are net 30.

- A heads-up is sent the day before an invoice becomes overdue.
- Work pauses on day 31 if payment has not arrived.
- Work resumes once the overdue invoice is paid.

There is no minimum commitment. The client can stop at any time. Work completed to that point is already delivered through source control as it happens, so stopping does not create a handoff gap.

## Advisory pricing

Advisory work after stepping back is optional and client-directed. There is no required retainer or standing arrangement unless the client wants one. Availability is business hours; emergencies are handled based on capacity, not through a separate guaranteed tier.

- Hourly rate: **$125/hour**
- Output: Architecture review, code review, pairing, strategic input, or incident support — as directed by the client.
