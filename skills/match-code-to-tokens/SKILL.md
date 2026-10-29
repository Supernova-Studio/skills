---
name: match-code-to-tokens
description: "Find every hardcoded colour, spacing and radius value in your repository and match it to the right design token. Use when the user asks to find hardcoded values, magic numbers, raw hex colours or px values, or to check code against design tokens."
license: MIT
metadata:
  title: "Match your code to your tokens"
  category: audit
  personas: "Engineer"
  access: read
  prompt: "Find every hardcoded hex and pixel value in this repo and match each one to a Supernova token, as a table."
  tools: "sn_get_token_list, sn_get_token_detail"
  version: "0.1.0"
  status: draft
---

# Match your code to your tokens

Find every hardcoded colour, spacing and radius value in your repository and match it to the right design token.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=match-code-to-tokens) first and stop.

## Tools

- `sn_get_token_list`
- `sn_get_token_detail`

## Workflow

1. Scan the repository for raw colour, spacing, radius and typography values.
2. Match each value to the closest token and mark exact and near matches.
3. Return a table: file, line, value, suggested token, confidence.
4. Offer to replace exact matches in a branch.
