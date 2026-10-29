---
name: token-hygiene
description: "Find unused, duplicate and badly named tokens, and broken aliases. Use when the user asks to clean up tokens, find unused or duplicate tokens, or check naming conventions."
license: MIT
metadata:
  title: "Token hygiene check"
  category: audit
  personas: "Design system manager, Engineer"
  access: read
  prompt: "Find tokens that are unused, duplicated or break our naming convention."
  tools: "sn_get_token_list, sn_get_token_group_list, sn_get_token_usage, sn_get_token_theme_list"
  version: "0.1.0"
  status: draft
---

# Token hygiene check

Find unused, duplicate and badly named tokens, and broken aliases.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=token-hygiene) first and stop.

## Tools

- `sn_get_token_list`
- `sn_get_token_group_list`
- `sn_get_token_usage`
- `sn_get_token_theme_list`

## Workflow

1. Read tokens, groups and themes.
2. Detect duplicates by value, unused tokens by usage, naming outliers and broken references.
3. Return grouped findings with suggested fixes.
