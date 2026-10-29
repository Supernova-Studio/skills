---
name: migrate-from-zeroheight
description: "Move pages, structure and content from a zeroheight styleguide into Supernova documentation. Use when the user is moving from zeroheight to Supernova, or mentions a zeroheight export or styleguide URL."
license: MIT
metadata:
  title: "Migrate from zeroheight"
  category: setup
  personas: "Design system manager"
  access: write
  prompt: "Migrate our zeroheight styleguide into Supernova. Keep the page structure and map content to Supernova blocks: [zeroheight URL or export]"
  tools: "sn_get_documentation_page_list, sn_admin_get_documentation_block_catalog, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Migrate from zeroheight

Move pages, structure and content from a zeroheight styleguide into Supernova documentation.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=migrate-from-zeroheight) and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_documentation_page_list`
- `sn_admin_get_documentation_block_catalog`
- `sn_admin_write`

## Workflow

1. Read the zeroheight export or pages the user provides.
2. Map pages and content types to Supernova groups and blocks.
3. Show the mapping and anything that will not carry over.
4. Create the pages after approval and list what needs a manual pass.
