---
name: release-notes
description: "Turn the changes since the last version into a changelog and a short announcement. Use when the user asks for release notes, a changelog or an announcement for a design system release."
license: MIT
metadata:
  title: "Write release notes"
  category: improve
  personas: "Design system manager"
  access: read
  prompt: "Write release notes for everything that changed since version 3.2."
  tools: "sn_get_version_list, sn_get_component_list, sn_get_token_list"
  version: "0.1.0"
  status: draft
---

# Write release notes

Turn the changes since the last version into a changelog and a short announcement.

## Before you start

This skill works through the Supernova MCP server, which reads your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to connect Supernova first (https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=release-notes) and stop.

## Tools

- `sn_get_version_list`
- `sn_get_component_list`
- `sn_get_token_list`

## Workflow

1. Compare the current state with the previous version.
2. Group changes: new, changed, deprecated, fixed.
3. Write the changelog and a short announcement.
