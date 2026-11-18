# Domain docs

This repo uses a single-context layout: `GLOSSARY.md` at the repo root
and ADRs under `docs/adr/`.

Site copy also uses client process terms, such as Discovery and
Development Cycle. The
[handbook glossary](https://github.com/attk-io/handbook/blob/main/GLOSSARY.md)
defines them. The handbook is cloned locally at `../handbook`.

## Before exploring

Read both glossaries and any ADRs relevant to the work.

If any of these is absent, proceed silently. The domain-modeling skill
creates domain documentation when terms or decisions are resolved.

## Vocabulary

Use glossary terms when naming domain concepts in issues, proposals,
hypotheses, and tests. If a needed concept is missing, reconsider the
wording or note the gap for domain-modeling.

Keep glossary entries focused on agreed domain meanings. Record
implementation conventions in agent instructions and decisions in ADRs.

## Decision conflicts

Explicitly identify any proposal that contradicts an existing ADR,
including the reason to reconsider that decision.
