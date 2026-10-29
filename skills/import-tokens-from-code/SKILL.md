---
name: import-tokens-from-code
description: "Read CSS variables, a Tailwind config or token JSON in your repository and create matching tokens in Supernova. Use when the user has tokens defined in code and wants them in Supernova, or asks to sync code tokens into the design system."
license: MIT
metadata:
  title: "Import tokens from code"
  category: setup
  personas: "Engineer"
  access: write
  prompt: "Read the tokens in src/styles/tokens.css and create them in Supernova, grouped the same way."
  tools: "sn_get_token_list, sn_get_token_group_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Import tokens from code

Read CSS variables, a Tailwind config or token JSON in your repository and create matching tokens in Supernova.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=import-tokens-from-code) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_token_list`
- `sn_get_token_group_list`
- `sn_admin_write`

## Workflow

1. Find token definitions in the repository.
2. Compare with existing Supernova tokens and flag conflicts.
3. Create new tokens and groups after approval.
