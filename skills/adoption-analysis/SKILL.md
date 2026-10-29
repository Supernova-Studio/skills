---
name: adoption-analysis
description: "See which teams, repositories and agents use the design system, and where they work around it. Use when the user asks about design system adoption, coverage or usage across teams."
license: MIT
metadata:
  title: "Adoption analysis"
  category: improve
  personas: "Design system manager"
  access: read
  prompt: "Which teams use our design system least, and what do they use instead?"
  tools: "sn_get_token_usage, sn_get_component_list, sn_get_feedback"
  version: "0.1.0"
  status: draft
---

# Adoption analysis

See which teams, repositories and agents use the design system, and where they work around it.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=adoption-analysis) and stop.

## Tools

- `sn_get_token_usage`
- `sn_get_component_list`
- `sn_get_feedback`

## Workflow

1. Collect usage across code, people and agents.
2. Group by team or repository.
3. Explain low adoption with evidence and suggest fixes.
