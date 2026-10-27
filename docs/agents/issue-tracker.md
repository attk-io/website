# Issue tracker: GitHub

Issues and specs live in GitHub Issues for attk-io/website.
Use the gh CLI from this repo.

## Operations

- Before creating issues, verify the target with `gh repo view --json nameWithOwner`.
- Create: `gh issue create --title "..." --body-file <file>`.
- Read: `gh issue view <number> --json number,title,body,labels,comments`.
- List: `gh issue list --state open`, with appropriate filters.
- Comment: `gh issue comment <number> --body-file <file>`.
- Labels: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`.
- Close: post the explanation as a comment, then run `gh issue close <number>`.

Use native GitHub sub-issues and issue dependencies when available.
Otherwise, record `Part of #<parent>` and `Blocked by: #<number>`
at the top of the child issue body. Work is unblocked when all blockers
are closed.

“Publish to the issue tracker” means create a GitHub issue.
“Fetch the relevant ticket” means read the GitHub issue.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## Wayfinding

The map is one issue labelled `wayfinder:map`, containing Notes,
Decisions-so-far, and Fog. Link child tickets as sub-issues, or use a
task list in the map and `Part of #<map>` in each child.

Label children `wayfinder:<type>`: research, prototype, grilling, or task.
The frontier is the first open child in map order with no open blockers
and no assignee. Claim it by assigning yourself. Resolve it by commenting
with the answer, closing it, and adding a gist and link to the map's
Decisions-so-far.
