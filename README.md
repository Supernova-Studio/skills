# Supernova skills

Skills that teach your AI assistant how to manage and use your design system with [Supernova](https://www.supernova.io). Each skill is a folder with a `SKILL.md`, in the open [Agent Skills](https://agentskills.io) format, so it works in Claude, ChatGPT, Cursor, Codex and any assistant that reads skills.

Browse them with examples at [supernova.io/mcp/skills](https://www.supernova.io/mcp/skills).

The skills use the [Supernova MCP server](https://www.supernova.io/mcp). Connect it once and every skill can read your tokens, components and documentation, and write back to them.

## Install

**Claude Code** installs every skill and connects the Supernova MCP server:

```
/plugin marketplace add Supernova-Studio/skills
/plugin install supernova@supernova
```

**Cursor, Codex, Copilot and other agents:**

```bash
npx skills add Supernova-Studio/skills
npx skills add Supernova-Studio/skills --skill audit-design-system
```

**Claude and ChatGPT on the web or desktop:** download a skill's zip from [Releases](https://github.com/Supernova-Studio/skills/releases), then upload it on the [Claude skills page](https://claude.ai/customize/skills) or the [ChatGPT skills page](https://chatgpt.com/skills).

## Skills

<!-- skills:start -->
<!-- skills:end -->

## Contributing

See [AGENTS.md](AGENTS.md) for how to add or change a skill.

## License

MIT
