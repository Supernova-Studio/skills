---
name: migrate-from-wiki
description: "Turn design system pages from a wiki or a folder of Markdown into structured Supernova documentation. Use when the user wants to move design system docs from Confluence, Notion, Google Docs or Markdown files into Supernova."
license: MIT
metadata:
  title: "Migrate from Confluence, Notion or Markdown"
  category: setup
  personas: "Design system manager"
  access: write
  prompt: "Move our design system docs from these Notion pages into Supernova and match them to our components: [links]"
  tools: "sn_get_component_list, sn_get_documentation_page_list, sn_admin_write"
  version: "0.1.0"
  status: draft
---

# Migrate from Confluence, Notion or Markdown

Turn design system pages from a wiki or a folder of Markdown into structured Supernova documentation.

## Before you start

This skill works through the Supernova MCP server, which reads and writes your design system. Check that Supernova tools (`sn_*`) are available. If they are not, tell the user to [connect Supernova](https://www.supernova.io/mcp?utm_source=skill&utm_medium=agent&utm_campaign=migrate-from-wiki) first and stop.

This skill changes your design system. Show the user every change it plans to make and wait for a clear yes before calling a write tool. Leave new documentation pages unpublished.

## Tools

- `sn_get_component_list`
- `sn_get_documentation_page_list`
- `sn_admin_write`

## Workflow

1. Read the source pages.
2. Match each page to a component, token group or topic.
3. Propose the structure, then create pages with the content split into blocks.
