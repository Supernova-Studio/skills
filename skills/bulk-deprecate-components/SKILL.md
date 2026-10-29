---
name: bulk-deprecate-components
description: "Mark components as deprecated, add a notice to their pages and point to the replacement. Use when the user wants to deprecate one or more components, or retire part of the system."
license: MIT
metadata:
  title: "Deprecate components in bulk"
  category: maintain
  personas: "Design system manager, Engineer"
  access: write
  prompt: "Mark all legacy button components as deprecated and point their pages to the new Button."
  tools: "sn_get_component_list, sn_get_component_detail, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Deprecate components in bulk

Mark components as deprecated, add a notice to their pages and point to the replacement.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=bulk-deprecate-components) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_list`
- `sn_get_component_detail`
- `sn_admin_write`

## Workflow

1. Find the components in scope.
2. Set their status and add a deprecation notice with the replacement.
3. List where they are still used, if usage data is available.
