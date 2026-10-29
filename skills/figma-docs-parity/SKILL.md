---
name: figma-docs-parity
description: "Find variants and properties that exist in Figma but are missing from the documentation, and the reverse. Use when the user asks whether docs match Figma, or after a Figma library update."
license: MIT
metadata:
  title: "Check Figma and documentation parity"
  category: audit
  personas: "Designer"
  access: read
  prompt: "Compare our Figma components with the documentation and list every variant or property that does not match."
  tools: "sn_get_figma_component_list, sn_get_figma_component_detail, sn_get_documentation_page_content"
  version: "0.1.0"
  status: draft
---

# Check Figma and documentation parity

Find variants and properties that exist in Figma but are missing from the documentation, and the reverse.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=figma-docs-parity) and stop.

## Tools

- `sn_get_figma_component_list`
- `sn_get_figma_component_detail`
- `sn_get_documentation_page_content`

## Workflow

1. Read Figma components and their properties.
2. Read the matching documentation pages.
3. List mismatches per component.
