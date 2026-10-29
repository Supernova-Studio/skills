---
name: audit-design-system
description: "One report across tokens, components and documentation: what is inconsistent, missing or drifting, ranked by what to fix first. Use when the user asks for a design system audit, health check, review of the whole system, or wants to know what to fix first."
license: MIT
metadata:
  title: "Audit your design system"
  category: audit
  personas: "Design system manager"
  access: read
  prompt: "Audit our design system and give me the ten things to fix first."
  tools: "sn_get_token_list, sn_get_component_list, sn_get_documentation_page_list, sn_get_figma_component_list, sn_get_code_component_list, sn_get_token_usage"
  version: "0.1.0"
  status: draft
---

# Audit your design system

One report across tokens, components and documentation: what is inconsistent, missing or drifting, ranked by what to fix first.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=audit-design-system) and stop.

## Tools

- `sn_get_token_list`
- `sn_get_component_list`
- `sn_get_documentation_page_list`
- `sn_get_figma_component_list`
- `sn_get_code_component_list`
- `sn_get_token_usage`

## Workflow

1. Collect tokens, components, documentation pages and Figma and code sources.
2. Check naming, coverage, duplicates, missing docs and source parity.
3. Score each area and rank findings by impact.
4. Return a short report with the top fixes and which skill can do each one.
