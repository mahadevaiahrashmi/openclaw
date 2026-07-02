# Universal Setup (Any Harness)

Pro PM is **plain markdown on disk**. It does not depend on Cursor, Claude Code, Codex, or any vendor SDK. If your tool can read project files (or you can paste content), Pro PM works.

## The 3-file minimum (every platform)

Wire these into your tool’s **system / project / agent instructions** (names vary by product):

| Priority | File | Purpose |
|----------|------|---------|
| 1 | `pro-pm/system-prompt.md` | Who Pro PM is, how to behave |
| 2 | `pro-pm/router.md` | Auto-route to agents, playbooks, skills |
| 3 | `pro-pm/context/_defaults.md` | Assumptions when context is empty |

**Instruction block to add anywhere** (copy into CLAUDE.md, AGENTS.md, .cursorrules, etc.):

```markdown
This workspace includes Pro PM at `pro-pm/`.
- Read `pro-pm/system-prompt.md` and follow it.
- Read `pro-pm/router.md` for every PM request; route Agent > Playbook > Skill.
- If context files are empty, use `pro-pm/context/_defaults.md`.
- Never require setup forms; deliver a complete draft first.
- Resolve skill paths via `pro-pm/skills/_ROUTER-ALIASES.md` if needed.
```

That is enough for **full behavior** on any file-aware agent.

## Capability tiers

| Tier | What you need | What works |
|------|----------------|------------|
| **A — Filesystem** | Tool reads repo files | Full Pro PM: routing, skills, playbooks, templates, context |
| **B — Paste / upload** | No file access | Paste playbook/template + system prompt; manual copy-out |
| **C — API** | `system` message + file contents in prompt | Same as B, automated in your pipeline |

MCP (Jira, Slack, etc.) is **optional** on every tier.

## Optional enhancements (any platform)

| Enhancement | Path | Benefit |
|-------------|------|---------|
| Rules | `pro-pm/rules/` | Zero-friction, security, frameworks |
| Personalization | `pro-pm/context/` | Sharper tone and facts over time |
| Agent index | `pro-pm/agents/README.md` | Quick agent lookup |
| Integration map | `pro-pm/HARNESS.md` | How components connect |

## Platform-specific wiring

Use only **after** the 3-file minimum:

| Platform | Adapter |
|----------|---------|
| **Any (start here)** | This file |
| Cursor | `cursor.md` |
| Claude Code | `claude-code.md` |
| OpenAI Codex | `codex.md` |
| Windsurf | `windsurf.md` |
| ChatGPT / Gemini / web LLMs | `generic-llm.md` |
| Cline, Continue, Aider, Copilot, etc. | `other-harnesses.md` |

## Verification (all platforms)

Ask once:

1. *"Write a PRD for bulk export for enterprise admins"* → uses `define/write-prd` + PRD template  
2. *"Run quarterly planning"* → uses `playbooks/quarterly-planning.md`  
3. *"Draft a weekly update for leadership"* → uses `communicate/weekly-update`

If the model asks you to fill ten context files first, it is **not** following Pro PM — re-attach `system-prompt.md` and `router.md`.

## Design principles

1. **No proprietary runtime** — no npm install required to use Pro PM.  
2. **No skill names for users** — plain language in; router decides.  
3. **Same brain everywhere** — `system-prompt.md` + `router.md` are the single source of truth.  
4. **Adapters are thin** — only explain *where* each tool loads instructions, not different PM logic per tool.
