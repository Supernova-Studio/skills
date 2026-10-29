---
name: import-from-figma
description: "Bring Figma components, variables and styles into Supernova and draft the first documentation for each component. Use when the user wants to start a design system in Supernova from an existing Figma library, or asks to import or document Figma components."
license: MIT
metadata:
  title: "Import from Figma"
  category: setup
  personas: "Designer, Design system manager"
  access: write
  prompt: "Import our design system from this Figma file and draft documentation for every component: [Figma link]"
  tools: "sn_get_design_source_list, sn_get_figma_component_list, sn_get_figma_component_detail, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Import from Figma

Bring Figma components, variables and styles into Supernova and draft the first documentation for each component.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=import-from-figma) and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_design_source_list`
- `sn_get_figma_component_list`
- `sn_get_figma_component_detail`
- `sn_admin_write`

## Workflow

1. Confirm the Figma file and the target design system.
2. Create the design source and run the import.
3. List imported components and tokens and report what came in.
4. Draft one documentation page per component and leave them unpublished for review.
