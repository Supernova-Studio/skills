---
name: design-system-health-report
description: "A weekly summary of what changed, what broke and what to fix next, ready to post to your team. Use when the user asks for a weekly report, status update, or summary of design system changes and health."
license: MIT
metadata:
  title: "Weekly design system health report"
  category: improve
  personas: "Design system manager"
  access: read
  prompt: "Write this week's design system health report for the team channel."
  tools: "sn_get_version_list, sn_get_documentation_page_list, sn_get_feedback, sn_get_token_usage"
  version: "0.1.0"
  status: draft
---

# Weekly design system health report

A weekly summary of what changed, what broke and what to fix next, ready to post to your team.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=design-system-health-report) first and stop.

## Tools

- `sn_get_version_list`
- `sn_get_documentation_page_list`
- `sn_get_feedback`
- `sn_get_token_usage`

## Workflow

1. Collect changes since the last report.
2. Collect open feedback and new gaps.
3. Write a short report: changes, health, top three next actions.
