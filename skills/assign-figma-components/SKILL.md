---
name: assign-figma-components
description: "Link the right Figma component to every design system component and documentation page. Use when the user wants Figma components connected to components or docs pages across the system."
license: MIT
metadata:
  title: "Assign Figma components"
  category: maintain
  personas: "Designer"
  access: write
  prompt: "Link each component in our design system to its Figma component."
  tools: "sn_get_component_list, sn_get_figma_component_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Assign Figma components

Link the right Figma component to every design system component and documentation page.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=assign-figma-components) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_list`
- `sn_get_figma_component_list`
- `sn_admin_write`

## Workflow

1. Pair components with Figma components by name and structure.
2. Show matches and unsure pairs.
3. Write links after approval.
