---
name: standardise-component-pages
description: "Bring component pages that grew on their own into one structure, using a page you pick as the model. Use when the user wants component pages to follow the same structure or template, or says pages are inconsistent."
license: MIT
metadata:
  title: "Standardise component pages"
  category: maintain
  personas: "Designer, Design system manager"
  access: write
  prompt: "Make all component pages follow the same structure as the Button page."
  tools: "sn_get_documentation_page_list, sn_get_documentation_page_content, sn_admin_get_documentation_block_catalog, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Standardise component pages

Bring component pages that grew on their own into one structure, using a page you pick as the model.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=standardise-component-pages) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_documentation_page_list`
- `sn_get_documentation_page_content`
- `sn_admin_get_documentation_block_catalog`
- `sn_admin_write`

## Workflow

1. Read the model page and extract its section structure.
2. Compare every component page with it.
3. Show the planned changes per page, then restructure after approval, keeping existing content.
