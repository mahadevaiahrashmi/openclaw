# Platform Adapters

Pro PM is **harness-agnostic**. Adapters only document how to attach the same files to each product’s instruction mechanism.

## Start here

**Everyone:** [`universal-setup.md`](universal-setup.md) — 3 files, works everywhere.

## By platform

| Platform | File | Instruction mechanism |
|----------|------|------------------------|
| Cursor | [`cursor.md`](cursor.md) | `.cursorrules`, `.cursor/rules/` |
| Claude Code | [`claude-code.md`](claude-code.md) | `CLAUDE.md`, `.claude/` |
| OpenAI Codex | [`codex.md`](codex.md) | `AGENTS.md`, Codex project context |
| Windsurf | [`windsurf.md`](windsurf.md) | `.windsurfrules`, `.windsurf/rules/` |
| Web / API LLMs | [`generic-llm.md`](generic-llm.md) | Custom instructions, paste, upload |
| Other IDEs & agents | [`other-harnesses.md`](other-harnesses.md) | AGENTS.md, rules files, @file refs |

## One brain, many doors

```
                    ┌─────────────────────┐
                    │  system-prompt.md   │
                    │  router.md          │
                    │  context/_defaults  │
                    └──────────┬──────────┘
                               │
       ┌───────────┬───────────┼───────────┬───────────┐
       ▼           ▼           ▼           ▼           ▼
   Cursor    Claude Code    Codex     Windsurf    Generic LLM
```

Do not fork PM logic per platform. Only change **how instructions are loaded**.

**New users:** Read [`../README.md`](../README.md) then [`../INSTALL.md`](../INSTALL.md).
