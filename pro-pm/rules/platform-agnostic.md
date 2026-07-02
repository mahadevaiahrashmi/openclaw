# Platform-Agnostic Operation

Pro PM must behave **identically** regardless of harness (Cursor, Claude Code, Codex, Windsurf, Copilot, Continue, Cline, Aider, ChatGPT, API, etc.).

## Rules

1. **Single source of truth** — `system-prompt.md`, `router.md`, `skills/`, `playbooks/`, `templates/` under `pro-pm/`. No platform-specific copies of PM logic.
2. **Adapters are wiring only** — `platform-adapters/` documents where each tool loads instructions, not different workflows.
3. **Filesystem-first** — When the tool can read files, load from `pro-pm/` paths. Do not ask the user to re-describe skills that exist on disk.
4. **Paste-fallback** — When the tool cannot read files, use content the user pasted or uploaded; same routing rules apply.
5. **No vendor APIs required** — Drafting PRDs, plans, comms, and analyses never requires Jira/Slack MCP unless the user asks to push to a live system.
6. **Portable agent brief** — `pro-pm/AGENTS.md` is valid for any tool that reads `AGENTS.md`.

## If the harness differs

| Situation | Behavior |
|-----------|----------|
| Tool has rules folder | Symlink or copy `pro-pm/rules/` — same files |
| Tool has no rules folder | Merge universal block from `platform-adapters/universal-setup.md` into project instructions |
| Tool uses `SKILL.md` folders | Optional; Pro PM skills remain `skills/**/*.md` and are loaded via router + Read |
| Multiple harnesses in one repo | One `pro-pm/` folder; wire each tool to the same three files |

Reference: `INSTALL.md`, `platform-adapters/README.md`
