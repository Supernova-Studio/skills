---
name: find-documentation-gaps
description: "List components with missing, thin or outdated documentation pages. Use when the user asks which components are undocumented, which pages are stale, or where the docs are incomplete."
license: MIT
metadata:
  title: "Find documentation gaps"
  category: audit
  personas: "Design system manager"
  access: read
  prompt: "Which components have no documentation page, and which pages have not been updated since the component changed?"
  tools: "sn_get_component_list, sn_get_documentation_page_list, sn_get_documentation_page_content"
  version: "0.1.0"
  status: draft
---

# Find documentation gaps

List components with missing, thin or outdated documentation pages.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=find-documentation-gaps) and stop.

## Tools

- `sn_get_component_list`
- `sn_get_documentation_page_list`
- `sn_get_documentation_page_content`

## Workflow

1. Match components to documentation pages.
2. Flag missing pages, pages without usage or props, and pages older than the component.
3. Return a table sorted by component usage.
