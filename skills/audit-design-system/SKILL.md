---
name: audit-design-system
description: "One report across tokens, components and documentation: what is inconsistent, missing or drifting, ranked by what to fix first. Use when the user asks for a design system audit, health check, review of the whole system, or wants to know what to fix first."
license: MIT
metadata:
  title: "Audit your design system"
  category: audit
  personas: "Design system manager"
  access: read
  prompt: "Audit our design system and give me the ten things to fix first."
  tools: "sn_get_design_system_list, sn_get_brand_list, sn_get_token_group_list, sn_get_token_list, sn_get_token_usage, sn_get_component_list, sn_get_figma_component_list, sn_get_code_component_list, sn_get_documentation_page_list, sn_get_documentation_page_content, sn_get_feedback"
  version: "0.2.0"
  status: draft
---

# Audit your design system

One report across tokens, components and documentation: what is inconsistent, missing or drifting, ranked by what to fix first.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=audit-design-system) first and stop.

This skill only reads. It never changes the design system.

## Rules

- Copy IDs from tool responses. Never guess an ID from a name.
- Follow `nextCursor` until a list is complete before you say "all", "none" or give a total.
- Matching by name (a component to its page, its Figma component or its code) is a heuristic. Call those findings "likely" and show the names you matched.
- Give each finding a count and at most five examples. Do not paste whole lists.
- If a tool is missing or returns an error, skip that check, and say in the report which check was skipped and why.
- Token lists are large, roughly 300 characters per token. Read token groups first, then page through tokens with `tokenTypes` when you only need some types. Once a structural finding is clear, you can stop paging and say so.

## 1. Set the scope

1. Call `sn_get_design_system_list` once to get the design system's name for the report title.
2. Call `sn_get_brand_list`. Supernova calls a dataset a "brand" in tool names. Pass a brand's `id` (not `idInVersion`) as `brandId` in later calls.
   - One dataset: audit it.
   - Several datasets: ask the user which one to audit, or offer to audit all and compare them. If the user already said "audit everything", audit all of them.
3. Audit the shared draft (omit `versionId`) unless the user names a version.
4. Tell the user the scope in one line before you start, for example "Auditing the Default dataset of Acme DS, shared draft."

## 2. Run the checks

Run the checks in order. Note what you find as you go. You will rank everything in step 3.

### Tokens

Read `sn_get_token_group_list` and `sn_get_token_list` for the dataset.

**How to spot an alias.** Token lists have no alias field. A token is an alias when its `value` ends with a reference in parentheses, for example `#A0AEC0 (gray/500)`. The semantic layer is the aliases plus groups named like Semantic, Background, Foreground, Border, Text, `fg`, `bg` or `accent`. If a dataset has semantic-looking groups but no aliases, report that as a finding of its own: the semantic layer repeats hex codes instead of aliasing, so a palette change will not reach it.

| Check | What counts as an issue |
|---|---|
| Naming style | Sibling groups or tokens that mix case styles (`gray` beside `Blue`, `primary-menu` beside `Page Header`). |
| Spelling variants | The same idea named twice: `gray` / `grey`, `bg` / `background`, `fg` / `foreground`. |
| Parallel structures | Two or more groups that hold the same kind of values, such as `Palette`, `Base` and `colors` all holding the colour ramp. |
| Duplicate values | Two or more non-alias tokens of the same type with the same value. Aliases that point to one token are fine. |
| Missing descriptions | Semantic tokens with no description. Primitive ramps can go without one. |
| Names that contradict values | Names that state a value the token does not have, such as `16 Bold` with a 14px font size. These give wrong guidance. |
| Unused tokens | First call `sn_get_token_usage` on up to 10 primitives that semantic tokens alias. If none of them shows any usage, usage is not tracked in this system: say so and skip this check. Otherwise check the semantic layer (or every token, when the dataset has fewer than 300) in batches of up to 100 IDs, and count unused tokens per dataset. |

### Components

Read `sn_get_component_list`, `sn_get_figma_component_list` and `sn_get_code_component_list` (pass `query: null, packageName: null`). An empty `components` array means no code is connected: skip the code checks and say so.

| Check | What counts as an issue |
|---|---|
| Missing description | Component with an empty description. |
| No documentation page | No documentation page whose title matches the component name and that sits in a components section (its group path mentions components). Ignore matches in release notes or product help. |
| Not in Figma | Component with no likely Figma component of the same name. |
| Not in code | Component with no likely code component of the same name. |
| Orphans | Figma or code components with no matching component record. Figma components with `variantCount` 0 and `propertyCount` 0 are usually icons or layout helpers: list them separately as "possibly assets" and do not count them as orphans. |
| Imported twice | The same Figma component name more than once in a dataset, especially when one copy has no variants. |
| Near duplicates | Names that look like variants of one component: `Button Primary`, `Button Secondary`, `CTA Button`. Suggest whether they should be one component with a variant property. |

### Documentation

Read `sn_get_documentation_page_list`. It returns pages and groups. Editors also get `isPublished` and `approvalState`. Documentation is shared by all datasets, so audit it once, not per dataset.

| Check | What counts as an issue |
|---|---|
| Unpublished pages | Pages with `isPublished: false`. |
| Stuck in review | Pages in `ChangesRequested` or `ReadyForReview`. |
| Thin pages | Read up to 15 pages with `sn_get_documentation_page_content` (pass up to five page IDs at a time in `pageIds`, with `format: markdown`), starting with component pages. A page with fewer than about 80 words of content, or only a heading and an embed, is thin. Say how many pages you sampled. |
| Missing descriptions | Pages with no description. Search results and agents use it. |
| Copied descriptions | Several pages sharing the same description. |
| Likely stale | Pages about components that no longer exist, or about features the release notes say are retired. Nothing links pages to components, so call these "likely". |

### Feedback

Call `sn_get_feedback` with `state: Unresolved`. Count the items in all four categories: `MissingInformation`, `Incorrect`, `Output` and `WrongSource`. Feedback covers the whole design system, not one dataset. `MissingInformation` and `Incorrect` show where people and agents got stuck. Quote the most common themes, not individual messages.

### Datasets (only when you audit more than one)

Compare the datasets. Flag components or token groups that exist in one dataset and not in another, unless the difference is clearly on purpose.

## 3. Score and rank

Score each area by the share of its items with no issue. Items are tokens, components and documentation pages. Count only checks you ran on the full set; report sampled checks in Details, outside the score. Feedback gets a count, not a score.

- **Good**: 90% or more.
- **Needs work**: 70 to 89%.
- **At risk**: below 70%.

Rank findings by impact. Put first the ones that:

1. confuse everyone downstream: parallel token structures, near-duplicate components, wrong or missing guidance;
2. block agents and new people: components with no docs or no description, and unresolved `Incorrect` feedback;
3. cost time: unused tokens, thin pages, pages stuck in review;
4. are cosmetic: naming style and missing descriptions on primitives.

## 4. Write the report

Use this structure. Keep it to one screen before the details.

```markdown
# Design system audit: <design system>, <dataset>

<One sentence: overall state and the single biggest problem.>

| Area | Score | Issues |
|---|---|---|
| Tokens | Needs work (78%) | 41 flagged tokens |
| Components | At risk (52%) | 12 |
| Documentation | Good (93%) | 4 |
| Feedback | 6 unresolved | |

## Fix these first

1. **<Finding>.** <Why it matters in one sentence.> <Count and up to five examples.> → <Skill that fixes it>
2. …

## Details

### Tokens
…

## What this audit did not cover

<Checks skipped and samples taken, for example "Read 15 of 64 pages for thin content.">
```

End each "Fix these first" item with the skill that fixes it, when one fits:

| Finding | Skill |
|---|---|
| Components without documentation, thin pages | `find-documentation-gaps`, then `component-page-from-prompt` |
| Pages with inconsistent structure | `standardise-component-pages` |
| Naming and spelling variants | `clean-up-documentation`, `bulk-edit-tokens` |
| Duplicate and unused tokens | `token-hygiene` |
| Figma and code drift | `figma-code-parity`, `figma-docs-parity` |
| Components that should be retired | `bulk-deprecate-components` |

Finish by offering the user one next step: fix the top item now, or save the report as a documentation page.
