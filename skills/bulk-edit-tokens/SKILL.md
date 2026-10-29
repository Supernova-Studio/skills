---
name: bulk-edit-tokens
description: "Change properties, types or collections for a whole token group in one go. Use when the user wants to change many tokens at once, move a group, or change token types."
license: MIT
metadata:
  title: "Bulk edit tokens"
  category: maintain
  personas: "Engineer, Design system manager"
  access: write
  prompt: "Change every token in the border-radius group to the dimension type."
  tools: "sn_get_token_group_list, sn_get_token_list, sn_get_token_property_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Bulk edit tokens

Change properties, types or collections for a whole token group in one go.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=bulk-edit-tokens) and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_token_group_list`
- `sn_get_token_list`
- `sn_get_token_property_list`
- `sn_admin_write`

## Workflow

1. Read the group and its tokens.
2. Show the before and after for each token.
3. Apply after approval.
