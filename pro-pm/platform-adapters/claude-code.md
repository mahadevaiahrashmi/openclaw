# Pro PM → Claude Code (CLI) Adapter

**Prerequisite:** [`universal-setup.md`](universal-setup.md)

Step-by-step guide for wiring Pro PM into Claude Code (Anthropic's CLI agent) so that AI sessions automatically load Pro PM context.

## 1. System Prompt via CLAUDE.md

Claude Code reads `CLAUDE.md` in the project root as persistent instructions. Copy or symlink the Pro PM system prompt:

```bash
cp pro-pm/system-prompt.md CLAUDE.md
```

Add a section at the top of `CLAUDE.md` pointing to the Pro PM structure:

```markdown
# Pro PM Context

This project uses Pro PM — a product management operating system.
- Playbooks: pro-pm/playbooks/ (23 playbooks)
- Templates: pro-pm/templates/ (62 templates)
- Skills: pro-pm/skills/ (skill definitions)
- Rules: pro-pm/rules/ (operating rules)

When asked to perform PM tasks, read the relevant playbook or template
from the pro-pm/ directory before proceeding.
```

## 2. Project Instructions

For team-wide settings, add Pro PM context to `.claude/project-instructions.md`:

```bash
mkdir -p .claude
cp pro-pm/system-prompt.md .claude/project-instructions.md
```

This applies to all team members using Claude Code in this project.

## 3. Memory Management

Claude Code has a memory system for persistent context. After initial setup, tell Claude Code:

```
Remember: This project uses Pro PM. When I ask for PM help, read files
from pro-pm/playbooks/ and pro-pm/templates/ to guide responses.
```

This persists across sessions.

## 4. MCP Tool Configuration

Configure MCP servers in `.claude/mcp.json`:

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-atlassian"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-github"]
    }
  }
}
```

Claude Code will use these for Jira, Confluence, and GitHub operations invoked by Pro PM skills.

## 5. Slash Commands

Create custom slash commands in `.claude/commands/` for frequent Pro PM tasks:

```bash
mkdir -p .claude/commands
echo "Read pro-pm/playbooks/quarterly-planning.md and guide me through quarterly planning." > .claude/commands/quarterly-planning.md
echo "Read pro-pm/templates/documents/prd.md and help me write a PRD." > .claude/commands/write-prd.md
```

Usage: `/quarterly-planning` or `/write-prd` in Claude Code.

## 6. File Structure

Ensure the Pro PM directory is in the project root:

```
project-root/
├── CLAUDE.md                    # System prompt
├── .claude/
│   ├── project-instructions.md  # Team instructions
│   ├── mcp.json                 # MCP config
│   └── commands/                # Custom commands
├── pro-pm/
│   ├── playbooks/
│   ├── templates/
│   ├── skills/
│   ├── rules/
│   └── system-prompt.md
└── ... (other project files)
```

## 7. Verification

Test by running Claude Code and asking:
- "Help me write a PRD" → `skills/define/write-prd.md` + `templates/documents/prd.md`
- "What playbooks are available?" → list from `pro-pm/playbooks/`
- "Draft a weekly update" → `skills/communicate/weekly-update.md`

## 8. Tips

- Claude Code respects `.gitignore` — ensure `pro-pm/` is not gitignored
- Use `@pro-pm/playbooks/` syntax to reference specific files in chat
- For large playbooks, Claude Code will read them automatically when referenced
