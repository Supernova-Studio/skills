---
name: new-page-from-existing
description: "Build a new component page the way you built one you already trust, so the Checkbox page matches the Button page. Use when the user wants a new documentation page that follows an existing page."
license: MIT
metadata:
  title: "New page from an existing one"
  category: create
  personas: "Designer, Design system manager"
  access: write
  prompt: "Create the Checkbox page the same way we built the Button page."
  tools: "sn_get_documentation_page_content, sn_get_component_detail, sn_get_figma_component_detail, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# New page from an existing one

Build a new component page the way you built one you already trust, so the Checkbox page matches the Button page.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=new-page-from-existing) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_documentation_page_content`
- `sn_get_component_detail`
- `sn_get_figma_component_detail`
- `sn_admin_write`

## Workflow

1. Read the model page structure.
2. Collect the new component data from Figma, code and Supernova.
3. Create the page with the same sections, filled for the new component, as a draft.
