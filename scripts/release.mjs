#!/usr/bin/env node
// Publishes one GitHub release per skill version, with the skill folder as a zip:
//   <slug>-v<version>/<slug>-v<version>.zip
// Claude and ChatGPT install a skill by uploading that zip. Existing tags are skipped,
// so bump `metadata.version` in SKILL.md to ship a change. Needs the gh CLI.
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const { skills } = JSON.parse(readFileSync(join(root, 'skills.json'), 'utf8'))
const dist = join(root, 'dist')
mkdirSync(dist, { recursive: true })

const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { stdio: 'pipe', ...opts })

for (const skill of skills) {
  const tag = `${skill.slug}-v${skill.version}`
  try {
    run('gh', ['release', 'view', tag])
    continue
  } catch {
    // No release for this version yet.
  }
  const zip = join(dist, `${tag}.zip`)
  run('zip', ['-qr', zip, skill.slug], { cwd: join(root, 'skills') })
  run('gh', ['release', 'create', tag, zip, '--title', `${skill.title} v${skill.version}`, '--notes', skill.description])
  console.log(`released ${tag}`)
}
