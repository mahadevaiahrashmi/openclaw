# Pro PM Harness — How Everything Connects

This document describes how the harness components work together as one system.

## Request flow

```
User message
    → system-prompt.md (identity + context loading rules)
    → router.md (Agent > Playbook > Skill)
    → skills/_ROUTER-ALIASES.md (if legacy path)
    → context/_defaults.md (if context empty)
    → rules/* + skills/_GLOBAL-BEHAVIOR.md
    → Execute: agent file | playbook phases | skill process
    → templates/ + frameworks/ + personas/ as needed
    → Artifact + optional sharpen footer
```

## Core files (always load)

| File | Role |
|------|------|
| `system-prompt.md` | PM co-pilot identity |
| `router.md` | Auto-routing |
| `context/_defaults.md` | Zero-setup assumptions |
| `rules/zero-friction.md` | No interrogation gates |
| `skills/_GLOBAL-BEHAVIOR.md` | Every skill execution contract |

## Directories

| Directory | Count | Role |
|-----------|------:|------|
| `skills/` | 328 | Single-task artifacts |
| `agents/` | 20 | Multi-step reasoning |
| `playbooks/` | 23 | Phased workflows |
| `frameworks/` | 107 | Analysis lenses |
| `personas/` | 42 | Cross-functional perspectives |
| `templates/` | 62 | Document scaffolds |
| `context/` | Optional personalization |
| `platform-adapters/` | Thin wiring guides only — same brain on every harness |
| `INSTALL.md` | Entry point for any platform |
| `AGENTS.md` | Portable brief for Codex / root `AGENTS.md` |
| `agents/README.md` | Human-readable catalog of 20 agents |

## Context (optional, progressive)

See `context/START-HERE.md` and `context/CONTEXT-MAP.md`. Nothing required day one.

## Integrity checks (maintainers)

```bash
# Skills exist for router table entries (sample)
grep -oE '`[a-z-]+/[a-z0-9/-]+`' router.md | tr -d '`' | while read p; do
  test -f "skills/$p.md" || echo "MISSING: skills/$p.md"
done

# Playbook agents are real
grep -ohE '`[a-z-]+-[a-z-]+`' playbooks/*.md | sort -u
ls agents/*.md
```

## Platform layer

Pro PM logic lives in **`system-prompt.md` + `router.md`** — never forked per IDE.

```
INSTALL.md → platform-adapters/universal-setup.md → (optional) cursor | claude-code | codex | windsurf | generic-llm | other-harnesses
```

| Harness | How instructions attach |
|---------|-------------------------|
| Cursor | `.cursorrules`, `.cursor/rules/` |
| Claude Code | `CLAUDE.md`, `.claude/` |
| Codex | `AGENTS.md`, `pro-pm/AGENTS.md` |
| Windsurf | `.windsurfrules`, `.windsurf/rules/` |
| Web LLM | Paste / upload / API system message |
| Other | `AGENTS.md` or tool-specific rules file |

## User promise

- **No setup gate** — first message produces a draft
- **No skill names** — plain language only
- **No invented metrics** — placeholders when data missing
- **Sharpen later** — context files improve personalization over time
