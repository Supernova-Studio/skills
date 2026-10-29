---
name: component-page-from-prompt
description: "Write a complete component page from a name, with usage, anatomy, props and do and don't, using Figma and code as sources. Use when the user asks to document a component from scratch."
license: MIT
metadata:
  title: "Component page from a prompt"
  category: create
  personas: "Designer"
  access: write
  prompt: "Write the documentation page for our Tooltip component."
  tools: "sn_get_component_detail, sn_get_figma_component_detail, sn_get_code_component_detail, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Component page from a prompt

Write a complete component page from a name, with usage, anatomy, props and do and don't, using Figma and code as sources.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=component-page-from-prompt) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_detail`
- `sn_get_figma_component_detail`
- `sn_get_code_component_detail`
- `sn_admin_write`

## Workflow

1. Gather data about the component from every source.
2. Draft sections: overview, usage, anatomy, props, accessibility, do and don't.
3. Create the page as a draft for review.
