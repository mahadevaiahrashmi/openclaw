# Install & Run Pro PM

Pro PM is **markdown on disk** — no npm install, no API keys in repo files, no vendor lock-in. If your AI can read project files (or you can paste instructions), you can run it.

**Repository:** [github.com/rahulgoyal1001/Pro-PM](https://github.com/rahulgoyal1001/Pro-PM) · **Simple setup:** [`../README.md`](../README.md) · **Overview:** [`README.md`](README.md) · **Wiring:** [`HARNESS.md`](HARNESS.md)

---

## What you are installing

Three files power every harness:

| File | Role |
|------|------|
| `pro-pm/system-prompt.md` | PM identity, quality bar, context rules |
| `pro-pm/router.md` | Auto-route: Agent → Playbook → Skill |
| `pro-pm/context/_defaults.md` | Smart defaults when you have not filled context yet |

Everything else (328 skills, 20 agents, 23 playbooks, templates, frameworks) is loaded **on demand** when you ask for work.

---

## Step 1: Get the folder

```bash
# Clone the full project (includes pro-pm/ and optional pro-pm-console/)
git clone https://github.com/rahulgoyal1001/Pro-PM.git
cd Pro-PM

# Or copy only the harness into another project
cp -r /path/to/Pro-PM/pro-pm ./pro-pm
```

Keep the folder named `pro-pm/` so paths in docs stay valid.

---

## Step 2: Universal wiring (all harnesses)

Add this block to your tool’s **project instructions** (see Step 3 for where each tool stores that):

```markdown
## Pro PM
This workspace includes Pro PM at `pro-pm/`.
- Follow `pro-pm/system-prompt.md` and `pro-pm/router.md` for all product management work.
- Use `pro-pm/context/_defaults.md` when context files are empty.
- Deliver complete drafts first; at most one clarifying question (`pro-pm/rules/zero-friction.md`).
- Agent catalog: `pro-pm/agents/README.md`
```

**Optional:** Copy [`AGENTS.md`](AGENTS.md) into your **repo root** as `AGENTS.md`, or use [`platform-adapters/repo-root-AGENTS.snippet.md`](platform-adapters/repo-root-AGENTS.snippet.md).

---

## Step 3: Wire your harness

### Cursor

1. **System prompt:** `cp pro-pm/system-prompt.md .cursorrules` (repo root)  
   Or: Cursor Settings → Rules → add the universal block + path to `pro-pm/`.
2. **Rules (recommended):**  
   `mkdir -p .cursor/rules && ln -sf "$(pwd)/pro-pm/rules/"*.md .cursor/rules/`
3. **Codex in Cursor:** Also add Pro PM block to root `AGENTS.md` — see [`platform-adapters/codex.md`](platform-adapters/codex.md).

Details: [`platform-adapters/cursor.md`](platform-adapters/cursor.md)

### Claude Code

1. `cp pro-pm/system-prompt.md CLAUDE.md` (merge with existing content if needed).
2. Add the universal block from Step 2.
3. Optional: `.claude/commands/` shortcuts — see adapter.

Details: [`platform-adapters/claude-code.md`](platform-adapters/claude-code.md)

### OpenAI Codex

1. Add Pro PM block to **repo root** `AGENTS.md` (snippet in [`repo-root-AGENTS.snippet.md`](platform-adapters/repo-root-AGENTS.snippet.md)).
2. Reference `pro-pm/AGENTS.md` and `pro-pm/system-prompt.md` in your first Codex task if needed.

Details: [`platform-adapters/codex.md`](platform-adapters/codex.md)

### Windsurf

1. `cp pro-pm/system-prompt.md .windsurfrules` or paste into Windsurf global rules.
2. Optional: `mkdir -p .windsurf/rules && cp pro-pm/rules/*.md .windsurf/rules/`

Details: [`platform-adapters/windsurf.md`](platform-adapters/windsurf.md)

### GitHub Copilot, Continue, Cline, Aider

Use the universal block in the tool’s project rules file. See [`platform-adapters/other-harnesses.md`](platform-adapters/other-harnesses.md).

### ChatGPT, Claude (web), Gemini (no repo access)

1. Paste contents of `pro-pm/system-prompt.md` into custom instructions.
2. Paste `pro-pm/router.md` or upload the `pro-pm/` zip.
3. For playbooks/templates, paste the file you need per task.

Details: [`platform-adapters/generic-llm.md`](platform-adapters/generic-llm.md)

### Any other agent / internal API

- **Filesystem:** universal block + read `pro-pm/` paths.  
- **API:** set `system` = `system-prompt.md` + `router.md` (and `_defaults.md` summary).

Details: [`platform-adapters/universal-setup.md`](platform-adapters/universal-setup.md)

---

## Step 4: Run your first session

Open your harness and ask **in plain language** (no commands, no skill names):

1. `Write a PRD for bulk export for enterprise admins`
2. `Guide me through quarterly planning`
3. `Draft a weekly product update for leadership`

**Expected behavior:** A full draft in the first reply, assumptions labeled `[Assumption: …]`, metrics as `[Metric]` placeholders, short **Optional — sharpen this** footer.

**Wrong behavior:** “Please fill out 10 context files first” → re-attach `system-prompt.md` and `router.md`.

---

## Step 5: Personalize (optional, later)

| Time | Action |
|------|--------|
| 2 min | `context/me/profile.md` — role + domain |
| 2 min | `context/company/overview.md` — company name + stage |
| When ready | Copy `context/products/_template/` → `context/products/your-product/` |

Guide: [`context/START-HERE.md`](context/START-HERE.md)

---

## What you do NOT need

- Filled context before first use  
- API keys in markdown files  
- Learning 328 skill names  
- A different Pro PM copy per IDE  

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Generic AI answers | Attach `system-prompt.md` + `router.md` |
| Asks for setup forms | Ensure `rules/zero-friction.md` is loaded |
| Wrong skill path | Check `skills/_ROUTER-ALIASES.md` |
| Codex ignores Pro PM | Add block to root `AGENTS.md` |

---

## Doc map

| Doc | Purpose |
|-----|---------|
| [`README.md`](README.md) | Product overview, motivation, full reference |
| [`HARNESS.md`](HARNESS.md) | Internal wiring |
| [`platform-adapters/README.md`](platform-adapters/README.md) | All platform guides |
| [`context/CONTEXT-MAP.md`](context/CONTEXT-MAP.md) | Context file paths |
| [`agents/README.md`](agents/README.md) | 20 agents |
