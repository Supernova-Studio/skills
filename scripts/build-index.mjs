#!/usr/bin/env node
// Builds skills.json from skills/*/SKILL.md. The website syncs from this file.
//   node scripts/build-index.mjs          write skills.json
//   node scripts/build-index.mjs --check  fail if a skill is invalid or skills.json is stale
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const CATEGORIES = JSON.parse(readFileSync(join(root, 'categories.json'), 'utf8'))
const REQUIRED = ['title', 'category', 'personas', 'access', 'prompt', 'tools', 'version', 'status']
const errors = []

/** Frontmatter is flat `key: value` plus one nested `metadata:` map. Quoted values are JSON strings. */
function parseFrontmatter(text, file) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    errors.push(`${file}: missing frontmatter`)
    return { data: {}, body: text }
  }
  const data = {}
  let nested = null
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue
    const m = line.match(/^( *)([\w-]+):\s*(.*)$/)
    if (!m) {
      errors.push(`${file}: cannot parse "${line}"`)
      continue
    }
    const [, indent, key, raw] = m
    const value = raw.startsWith('"') ? JSON.parse(raw) : raw
    if (indent) {
      if (nested) nested[key] = value
    } else if (raw === '') {
      nested = data[key] = {}
    } else {
      nested = null
      data[key] = value
    }
  }
  return { data, body: match[2].trim() + '\n' }
}

const skills = readdirSync(join(root, 'skills'), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    const file = `skills/${d.name}/SKILL.md`
    if (!existsSync(join(root, file))) {
      errors.push(`${file}: missing`)
      return null
    }
    const { data, body } = parseFrontmatter(readFileSync(join(root, file), 'utf8'), file)
    const meta = data.metadata ?? {}
    if (data.name !== d.name) errors.push(`${file}: name "${data.name}" must match the folder`)
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.name)) errors.push(`${file}: name must be kebab-case`)
    if (!data.description || data.description.length > 1024)
      errors.push(`${file}: description is required and at most 1024 characters`)
    for (const key of REQUIRED) if (!meta[key]) errors.push(`${file}: metadata.${key} is required`)
    if (!CATEGORIES.some((c) => c.key === meta.category))
      errors.push(`${file}: unknown category "${meta.category}"`)
    if (!['read', 'write'].includes(meta.access)) errors.push(`${file}: access is read or write`)
    if (!/^\d+\.\d+\.\d+$/.test(meta.version ?? '')) errors.push(`${file}: version is semver`)
    return {
      slug: d.name,
      title: meta.title,
      description: data.description,
      category: meta.category,
      personas: (meta.personas ?? '').split(',').map((p) => p.trim()).filter(Boolean),
      access: meta.access,
      prompt: meta.prompt,
      tools: (meta.tools ?? '').split(',').map((t) => t.trim()).filter(Boolean),
      version: meta.version,
      status: meta.status,
      body,
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.slug.localeCompare(b.slug))

const index = JSON.stringify({ categories: CATEGORIES, skills }, null, 2) + '\n'
const out = join(root, 'skills.json')

// The README skill table sits between these markers.
const readmePath = join(root, 'README.md')
const readme = readFileSync(readmePath, 'utf8')
const table = CATEGORIES.map((c) => {
  const rows = skills
    .filter((s) => s.category === c.key)
    .map((s) => `| [${s.title}](skills/${s.slug}/SKILL.md) | ${s.personas.join(', ')} | ${s.access} |`)
  return `### ${c.label}\n\n| Skill | For | MCP |\n|---|---|---|\n${rows.join('\n')}`
}).join('\n\n')
const nextReadme = readme.replace(
  /(<!-- skills:start -->\n)[\s\S]*(\n<!-- skills:end -->)/,
  `$1${table}$2`
)

if (process.argv.includes('--check')) {
  if (!existsSync(out) || readFileSync(out, 'utf8') !== index || readme !== nextReadme)
    errors.push('skills.json or README.md is out of date: run node scripts/build-index.mjs')
} else if (!errors.length) {
  writeFileSync(out, index)
  writeFileSync(readmePath, nextReadme)
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`${skills.length} skills OK`)
