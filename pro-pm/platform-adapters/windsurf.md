# Pro PM → Windsurf Adapter

**Prerequisite:** [`universal-setup.md`](universal-setup.md)

Step-by-step guide for wiring Pro PM into Windsurf (Codeium's AI IDE) so that Cascade sessions use Pro PM context.

## 1. System Prompt via Global Rules

Windsurf uses a global rules file for persistent AI instructions. Add Pro PM context:

1. Open Windsurf Settings → AI → Rules
2. Paste the contents of `pro-pm/system-prompt.md` into the global rules field
3. Add a reference to the Pro PM file structure

Alternatively, create a `.windsurfrules` file in the project root:

```bash
cp pro-pm/system-prompt.md .windsurfrules
```

## 2. Cascade Rules

For project-specific rules, create `.windsurf/rules/` in the project root:

```bash
mkdir -p .windsurf/rules
cp pro-pm/rules/*.md .windsurf/rules/
```

Windsurf Cascade reads these as context for all sessions in this project.

## 3. Skills as Cascade Flows

Windsurf's Cascade can be guided by structured prompts. Create Cascade-compatible skill references:

```bash
mkdir -p .windsurf/skills
```

For each Pro PM skill, create a reference file that Cascade can read:

```markdown
# Skill: Write PRD
When asked to write a PRD, read pro-pm/skills/define/write-prd.md and
pro-pm/templates/documents/prd.md. Follow pro-pm/router.md for routing.
```

## 4. File References

Windsurf Cascade can read project files. Reference Pro PM files using `@` mentions in chat:

- `@pro-pm/playbooks/quarterly-planning.md` — loads a specific playbook
- `@pro-pm/templates/documents/prd.md` — loads a template

## 5. MCP Configuration

Configure MCP servers in Windsurf settings:

1. Open Settings → MCP Servers
2. Add servers for Jira, GitHub, Figma as needed
3. Windsurf will make these available to Cascade

## 6. Cascade Settings

Optimize Cascade for Pro PM usage:

1. **Context window:** Set to maximum for long playbook processing
2. **Auto-context:** Enable so Cascade discovers Pro PM files automatically
3. **Memory:** Enable conversation memory for multi-session PM workflows

## 7. File Structure

```
project-root/
├── .windsurfrules              # System prompt
├── .windsurf/
│   ├── rules/                  # Pro PM rules
│   └── skills/                 # Skill references
├── pro-pm/
│   ├── playbooks/
│   ├── templates/
│   ├── skills/
│   ├── rules/
│   └── system-prompt.md
└── ... (other project files)
```

## 8. Verification

Test by opening Windsurf Cascade and asking:
- "Help me with quarterly planning" → should reference the playbook
- "Create a competitive brief" → should use the template
- "What PM templates are available?" → should discover and list templates

## 9. Tips

- Windsurf indexes project files automatically — Pro PM files are discoverable
- Use Cascade Flows for multi-step PM workflows that span multiple tools
- Pin frequently used playbooks to Windsurf's context for faster access
