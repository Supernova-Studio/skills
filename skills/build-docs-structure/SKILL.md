---
name: build-docs-structure
description: "Turn the components, tokens and assets you already have into a documentation page tree, instead of starting from an empty site. Use when the user has data in Supernova but no documentation structure, or asks to set up or reorganise their docs."
license: MIT
metadata:
  title: "Build your documentation structure"
  category: setup
  personas: "Design system manager"
  access: write
  prompt: "Look at our components, tokens and assets and propose a documentation structure. Create it once I approve."
  tools: "sn_get_component_list, sn_get_token_group_list, sn_get_asset_group_list, sn_get_documentation_page_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Build your documentation structure

Turn the components, tokens and assets you already have into a documentation page tree, instead of starting from an empty site.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=build-docs-structure) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_list`
- `sn_get_token_group_list`
- `sn_get_asset_group_list`
- `sn_get_documentation_page_list`
- `sn_admin_write`

## Workflow

1. Read components, token groups and assets.
2. Propose a page tree (foundations, components, patterns, resources) and show it.
3. After approval, create groups and empty pages with the right blocks.
