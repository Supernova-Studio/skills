---
name: cross-link-components
description: "Add related-component links and inline links between pages so readers and agents can move through the system. Use when the user wants related components linked, or says docs pages are isolated."
license: MIT
metadata:
  title: "Cross-link components"
  category: maintain
  personas: "Design system manager"
  access: write
  prompt: "Add a \"Related components\" section to every component page and link component names where they are mentioned."
  tools: "sn_get_component_list, sn_get_documentation_page_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Cross-link components

Add related-component links and inline links between pages so readers and agents can move through the system.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=cross-link-components) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_list`
- `sn_get_documentation_page_list`
- `sn_admin_write`

## Workflow

1. Find relationships from mentions, composition and categories.
2. Propose links per page.
3. Write them after approval.
