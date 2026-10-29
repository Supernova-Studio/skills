---
name: document-design-tokens
description: "Create token documentation pages with the right token blocks for colour, typography, spacing and more. Use when the user wants pages documenting tokens or foundations."
license: MIT
metadata:
  title: "Document your design tokens"
  category: create
  personas: "Design system manager"
  access: write
  prompt: "Create foundation pages for our colour, typography and spacing tokens."
  tools: "sn_get_token_group_list, sn_admin_get_documentation_block_catalog, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Document your design tokens

Create token documentation pages with the right token blocks for colour, typography, spacing and more.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=document-design-tokens) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_token_group_list`
- `sn_admin_get_documentation_block_catalog`
- `sn_admin_write`

## Workflow

1. Read token groups.
2. Pick the right token block for each group.
3. Create one page per foundation with a short intro and usage guidance.
