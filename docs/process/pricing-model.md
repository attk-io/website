# Pricing Model

The pricing model covers fixed-fee discovery and design work, a variable-price Base Platform, and quoted Custom Work priced per scoped feature, aiming to create transparent and predictable pricing for the client.

## Pricing principles

- **The client should know what they are committing to before build work begins.** No feature starts from a vague "we'll see what it takes" understanding.
- **Scoping is paid work.** Turning an idea into something buildable is part of the value, not a free prelude to the value.
- **Known work can be priced directly.** Base Platform modules are pre-built and menu-priced.
- **Custom work is quoted after scope is known.** The internal basis is expected hours at the senior hourly rate, but the client sees a feature quote tied to a written scope.
- **Changed direction gets re-scoped before it gets built.** If a new requirement changes the work, the new work is estimated before build continues.
- **The client pays third-party costs directly.** The client owns all accounts, infrastructure, and service relationships. I provision and configure services on their behalf — costs are billed to the client, and the product lives in their source control and infrastructure, not mine.

## Engagement entry pricing

### Fit Check

The Fit Check decides whether there is enough two-way fit to start paid discovery work. It does not produce a full scope, a quote, or a commitment to build.

- Fixed price: **Free**
- Output: A decision on whether to continue to Discovery, with a short written follow-up.

See [Fit Check](./fit-check.md).

### Discovery

Discovery is the first paid step. It is a focused working session where the client and I establish the business goals, product audiences, product type, feature list, release targets, and scope for Planning & Design. Discovery is standalone — if the client stops here, they keep the output.

- Fixed price: **$500**
- Output: Business goals, product audiences, product type, feature list, release targets, and Planning & Design scope.

See [Discovery](./discovery.md).

### Planning & Design

Planning & Design turns the Discovery output into build-ready detail. It is the bridge between product direction and build commitment — the client sees the full picture of what is being built and what it will cost before any build work begins.

- Variable price: **~$10,000**
- Output: Project Arc document, prioritized backlog of scoped issues, and any additional deliverables agreed during Discovery.

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

Discovery and Planning & Design fees are payable up front.

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
