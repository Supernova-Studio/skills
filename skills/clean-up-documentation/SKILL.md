---
name: clean-up-documentation
description: "Rename, remove dead content and fix formatting across every page in one pass. Use when the user wants to tidy documentation, rename a term everywhere, remove outdated content, or fix formatting across pages."
license: MIT
metadata:
  title: "Clean up your documentation"
  category: maintain
  personas: "Design system manager"
  access: write
  prompt: "Rename \"Primary button\" to \"Button\" across all documentation and remove empty blocks."
  tools: "sn_get_documentation_page_list, sn_get_documentation_page_content, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Clean up your documentation

Rename, remove dead content and fix formatting across every page in one pass.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=clean-up-documentation) and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_documentation_page_list`
- `sn_get_documentation_page_content`
- `sn_admin_write`

## Workflow

1. Read all pages in scope.
2. List every change it will make, per page.
3. Apply after approval and report what changed.
