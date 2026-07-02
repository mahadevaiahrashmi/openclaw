# Pro PM → Other Harnesses (Cline, Continue, Aider, Copilot, etc.)

Any agent that can read your repository (or accept pasted instructions) can run Pro PM using the **same files**.

**Prerequisite:** [`universal-setup.md`](universal-setup.md)

## Pattern that always works

1. Put `pro-pm/` in your project (clone or copy).
2. Add the **universal instruction block** (from `universal-setup.md`) to whatever your tool calls project rules:
   - `AGENTS.md` (Codex, many agents)
   - `CLAUDE.md` (Claude Code)
   - `.cursorrules` / `.cursor/rules/` (Cursor)
   - `.windsurfrules` (Windsurf)
   - `.github/copilot-instructions.md` (GitHub Copilot)
   - `.continuerules` or Continue config (Continue)
   - Cline custom instructions / `.clinerules`
   - Aider `CONVENTIONS.md` or `--read` files
3. Ask in plain language — no skill names.

## Tool-specific notes

| Tool | Where to put Pro PM |
|------|---------------------|
| **GitHub Copilot** | `.github/copilot-instructions.md` — paste universal block + link to `pro-pm/` |
| **Continue** | Workspace rules; `@pro-pm/system-prompt.md` in chat |
| **Cline** | Custom instructions field; reference `pro-pm/router.md` |
| **Aider** | Add to repo map: `pro-pm/system-prompt.md`, `pro-pm/router.md` |
| **Amazon Q / Q Developer** | Project context / instruction files (same 3-file minimum) |
| **JetBrains AI** | Project-level AI instructions |
| **Zed / AI assistants** | Project prompt including universal block |
| **Custom internal agents** | `system` prompt = contents of `system-prompt.md` + `router.md` |

## @-mention / file reference

If your harness supports file references:

```text
@pro-pm/system-prompt.md
@pro-pm/router.md
```

Then ask your PM question.

## No filesystem access

Use [`generic-llm.md`](generic-llm.md): paste system prompt + playbook/template.

## Do not duplicate Pro PM per tool

| Wrong | Right |
|-------|--------|
| Maintain separate PRD logic for Cursor vs Codex | One `pro-pm/skills/define/write-prd.md` |
| Different routers per IDE | One `pro-pm/router.md` |
| Tool-specific playbooks | One `pro-pm/playbooks/` |

Adapters only change **how instructions attach**, not **what Pro PM is**.

## Verification

Same three prompts as `universal-setup.md` — PRD, quarterly planning, weekly update.
