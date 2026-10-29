---
name: update-block-everywhere
description: "Update one block or block property on every page where it appears, such as a shortcut block or a banner. Use when the user wants to change, add or remove the same block across many pages."
license: MIT
metadata:
  title: "Change a block everywhere"
  category: maintain
  personas: "Design system manager"
  access: write
  prompt: "Change the shortcut block on every component page to link to Storybook instead of GitHub."
  tools: "sn_get_documentation_page_list, sn_admin_get_documentation_block_schema, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Change a block everywhere

Update one block or block property on every page where it appears, such as a shortcut block or a banner.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=update-block-everywhere) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_documentation_page_list`
- `sn_admin_get_documentation_block_schema`
- `sn_admin_write`

## Workflow

1. Find pages that contain the block.
2. Show the change for one page as a preview.
3. Apply to all pages after approval.
