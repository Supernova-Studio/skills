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
### Check what you have

| Skill | For | Works with | Access |
|---|---|---|---|
| [Audit your design system](skills/audit-design-system/SKILL.md) | Design system manager | Supernova | read |
| [Review a pull request for design system drift](skills/ds-pr-review/SKILL.md) | Engineer, Design system manager | Supernova, GitHub | read |
| [Audit a Figma design](skills/figma-ds-audit/SKILL.md) | Designer, Design system manager | Supernova, Figma | read |

### Keep docs current

| Skill | For | Works with | Access |
|---|---|---|---|
| [Document new components](skills/document-new-components/SKILL.md) | Design system manager, Designer | Supernova, Figma | write |
| [Fix documentation gaps](skills/fix-documentation/SKILL.md) | Design system manager, Designer | Supernova | write |
| [Migrate documentation into Supernova](skills/migrate-docs/SKILL.md) | Design system manager | Supernova, Notion, Confluence, Figma, zeroheight | write |
| [Write release notes](skills/release-notes/SKILL.md) | Design system manager | Supernova, Slack | write |
| [Sync docs with design and code](skills/sync-docs-with-design-and-code/SKILL.md) | Design system manager, Designer, Engineer | Supernova, Figma, GitHub, Storybook | write |

### Tokens and variables

| Skill | For | Works with | Access |
|---|---|---|---|
| [Clean up tokens](skills/clean-up-tokens/SKILL.md) | Design system manager | Supernova | write |
| [Migrate a Figma file to variables](skills/figma-variable-migration/SKILL.md) | Designer, Design system manager | Supernova, Figma | write |
| [Migrate hardcoded values to tokens](skills/token-migration/SKILL.md) | Engineer | Supernova, GitHub | read |

### Build with the system

| Skill | For | Works with | Access |
|---|---|---|---|
| [Build a design system component](skills/build-ds-component/SKILL.md) | Engineer | Supernova, GitHub, Figma, Storybook | read |
| [Write a handoff spec](skills/figma-handoff-spec/SKILL.md) | Designer, Engineer | Supernova, Figma | read |

### Close the loop

| Skill | For | Works with | Access |
|---|---|---|---|
| [Fix what agents report](skills/fix-from-feedback/SKILL.md) | Design system manager | Supernova | write |
| [Set up an MCP server per team](skills/set-up-team-contexts/SKILL.md) | Design system manager | Supernova | write |
<!-- skills:end -->

## Contributing

See [AGENTS.md](AGENTS.md) for how to add or change a skill.

## License

MIT
