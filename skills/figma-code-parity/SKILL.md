---
name: figma-code-parity
description: "Compare component props, variants and names between Figma and code, and flag where they drift. Use when the user asks if Figma and code components match, or wants a design-to-code parity report."
license: MIT
metadata:
  title: "Check Figma and code parity"
  category: audit
  personas: "Engineer, Designer"
  access: read
  prompt: "Compare our Figma components with the React components and show where props and variants differ."
  tools: "sn_get_figma_component_list, sn_get_code_component_list, sn_get_code_component_detail, sn_get_storybook_story_list"
  version: "0.1.0"
  status: draft
---

# Check Figma and code parity

Compare component props, variants and names between Figma and code, and flag where they drift.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=figma-code-parity) and stop.

## Tools

- `sn_get_figma_component_list`
- `sn_get_code_component_list`
- `sn_get_code_component_detail`
- `sn_get_storybook_story_list`

## Workflow

1. Pair Figma and code components by name.
2. Compare props, variants and defaults.
3. Return mismatches and unpaired components.
