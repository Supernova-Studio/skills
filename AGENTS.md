# Working in this repo

This repo is the source for three things at once. Keep them in step:

1. **The skills**: `skills/<slug>/SKILL.md`, in the [Agent Skills](https://agentskills.io/specification) format.
2. **The Claude Code plugin marketplace**: `.claude-plugin/` and `.mcp.json`. Installing the plugin adds every skill and the Supernova MCP server.
3. **The website library** at supernova.io/mcp/skills, built from `skills.json`.

## Add or change a skill

1. Create `skills/<slug>/SKILL.md`. The folder name is the skill's `name`: kebab-case, and it becomes the URL `/mcp/skills/<slug>`.
2. Frontmatter:
   - `name`: same as the folder.
   - `description`: what it does, then "Use when …". At most 1024 characters. Agents read this to decide when to use the skill, and the website uses it as the meta description.
   - `metadata` (all strings):
     - `title`: the name people see.
     - `category`: a key from `categories.json`.
     - `personas`: comma-separated, e.g. `"Designer, Engineer"`.
     - `access`: `read` or `write`, the MCP access the skill needs.
     - `prompt`: an example prompt, shown on the card.
     - `tools`: comma-separated Supernova MCP tools it calls.
     - `version`: semver. Bump it to ship a change: a merge to `main` releases a zip for every new version.
     - `status`: `draft` or `published`.
3. The body is shown on the website. Write it for the agent first, and keep it readable for people.
4. Write skills must show the planned changes and wait for a yes before calling a write tool.
5. Run `node scripts/build-index.mjs` to update `skills.json` and the README table. CI fails if you forget.
6. Open a pull request. Once it merges, update the website with its `scripts/sync-skills.mjs`.
