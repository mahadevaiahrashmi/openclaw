# Pro PM → OpenAI Codex Adapter

Codex (CLI and IDE integrations) runs as a coding agent with repository access. Pro PM uses the same **universal 3-file setup** as every other harness.

**Prerequisite:** [`universal-setup.md`](universal-setup.md)

## 1. Project `AGENTS.md` (recommended)

Many Codex workflows read **`AGENTS.md`** at the repo root. Point it at Pro PM:

**Option A — Include block** (add to your existing `AGENTS.md`):

```markdown
## Pro PM

This repo uses [Pro PM](pro-pm/) as the product management operating system.

- Follow `pro-pm/system-prompt.md` for PM identity and behavior.
- Follow `pro-pm/router.md` to route every PM request (Agent > Playbook > Skill).
- Use `pro-pm/context/_defaults.md` when context files are empty.
- Read skill files under `pro-pm/skills/` when executing a task; use `pro-pm/skills/_ROUTER-ALIASES.md` for legacy names.
```

**Option B — Symlink** (if your tool supports it):

```bash
# From repo root — merge manually if you already have AGENTS.md
cat pro-pm/AGENTS.md >> AGENTS.md
```

Or copy the contents of `pro-pm/AGENTS.md` into your root `AGENTS.md`, or use [`repo-root-AGENTS.snippet.md`](repo-root-AGENTS.snippet.md).

## 2. Codex-specific: `pro-pm/AGENTS.md`

The file `pro-pm/AGENTS.md` is a **portable** agent brief. Codex can read it directly when you say:

> Use instructions in `pro-pm/AGENTS.md` and `pro-pm/system-prompt.md` for all PM work.

## 3. Full system prompt (optional)

For maximum fidelity, also reference:

```text
pro-pm/system-prompt.md
pro-pm/router.md
pro-pm/rules/zero-friction.md
```

Codex will load these from disk when tasked with PM work.

## 4. No Codex-only skills format

Pro PM skills are **`pro-pm/skills/**/*.md`** with **Auto-Trigger Patterns** — not a separate Codex package. Codex discovers them via `router.md` and file reads.

## 5. MCP and tools

If Codex exposes MCP in your environment, configure Jira/GitHub/etc. per your org. Pro PM **does not require** MCP to draft PRDs, plans, or comms.

## 6. File layout

```
repo-root/
├── AGENTS.md              # Your repo agent brief (include Pro PM block)
├── pro-pm/
│   ├── AGENTS.md          # Portable Pro PM agent brief
│   ├── system-prompt.md
│   ├── router.md
│   ├── skills/
│   ├── playbooks/
│   └── ...
└── ...
```

## 7. Verification

In Codex:

- *"Write a PRD for SSO for enterprise admins"* → reads `skills/define/write-prd.md`, `templates/documents/prd.md`
- *"Guide me through quarterly planning"* → reads `playbooks/quarterly-planning.md`
- *"What agents does Pro PM have?"* → reads `agents/README.md`

## 8. Codex in Cursor vs standalone

| Environment | Wiring |
|-------------|--------|
| Codex extension in Cursor | Use **both** `platform-adapters/cursor.md` (IDE rules) and this file (AGENTS.md) |
| Codex CLI / Cloud | This file + root `AGENTS.md` |

Same `pro-pm/` folder — no duplicate content.
