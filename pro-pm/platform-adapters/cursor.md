# Pro PM → Cursor IDE Adapter

**Prerequisite:** [`universal-setup.md`](universal-setup.md) — same Pro PM brain as every other harness.

Step-by-step guide for wiring Pro PM into Cursor IDE so that AI agents automatically reference playbooks, templates, skills, and system context.

**Also using Codex in Cursor?** Add the block from [`codex.md`](codex.md) to your repo `AGENTS.md`.

## 1. System Prompt

Copy or symlink `pro-pm/system-prompt.md` as your project-level Cursor rules file:

```bash
cp pro-pm/system-prompt.md .cursorrules
```

This ensures every Cursor chat session loads the Pro PM identity and operating instructions.

**No setup required:** Users can chat immediately; empty `context/` files are fine. See [`INSTALL.md`](../INSTALL.md), [`README.md`](../README.md), `context/START-HERE.md`, `context/_defaults.md`.

## 2. Rules

Symlink the Pro PM rules directory into Cursor's rules folder:

```bash
mkdir -p .cursor/rules
ln -s "$(pwd)/pro-pm/rules/"* .cursor/rules/
```

Alternatively, copy individual rule files you want active. Cursor reads all `.md` and `.mdc` files in `.cursor/rules/` as always-applied context.

## 3. Skills

Symlink the Pro PM skills directory into Cursor's skills folder:

```bash
mkdir -p .cursor/skills
ln -s "$(pwd)/pro-pm/skills/"* .cursor/skills/
```

Skills are markdown files under `pro-pm/skills/` (e.g. `define/write-prd.md`) with **Auto-Trigger Patterns** in each file. Cursor loads them via symlink or when the model reads `router.md` + `system-prompt.md`. See `skills/_GLOBAL-BEHAVIOR.md` and `skills/_ROUTER-ALIASES.md`.

## 4. Playbooks & Templates

These live in the project directory and are referenced by skills at runtime. No special Cursor configuration needed — skills will use `Read` to load the appropriate playbook or template when invoked.

Ensure the directory structure is intact:

```
pro-pm/
├── playbooks/          # 23 playbooks
├── templates/          # 62 templates across 7 categories
│   ├── documents/
│   ├── communication/
│   ├── planning/
│   ├── analysis/
│   ├── collateral/
│   ├── presentations/
│   └── tools/
├── skills/
├── rules/
└── system-prompt.md
```

## 5. MCP Integrations

Configure MCP servers in Cursor settings for tools that skills invoke:

- **Jira/Confluence:** Install the Atlassian MCP plugin via Cursor settings
- **GitHub:** Enable the GitHub MCP server for issue and PR management
- **Figma:** Enable the Figma MCP server for design workflows
- **Slack/Linear/Other:** Add via Cursor MCP settings as needed

Skills will call MCP tools using `CallMcpTool` when available.

## 6. Agent Transcripts

Cursor stores agent transcripts automatically. Pro PM skills can reference past conversations for context continuity. No additional setup needed.

## 7. Verification

Test the setup by asking Cursor:
- "Help me write a PRD" → **Spec Writer** agent or `skills/define/write-prd.md` + `templates/documents/prd.md`
- "Run quarterly planning" → `playbooks/quarterly-planning.md`
- "Draft an exec update" → `skills/communicate/exec-summary.md`

## 8. Updating

When Pro PM files are updated, Cursor picks up changes automatically on the next chat session. No restart required for file-based rules and skills.
