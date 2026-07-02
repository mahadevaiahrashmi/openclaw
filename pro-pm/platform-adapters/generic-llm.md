# Pro PM → Generic LLM Adapter

**Prerequisite:** [`universal-setup.md`](universal-setup.md) (Tier B/C — paste or API, no repo access)

Guide for using Pro PM with any LLM that doesn't have native file-system integration (ChatGPT, Gemini, Claude web, Perplexity, Copilot chat, etc.).

**Same PM logic** as Cursor/Codex — only the **delivery mechanism** differs (paste/upload vs file read).

## 1. System Prompt

Copy the contents of `pro-pm/system-prompt.md` and paste it as the system message or custom instructions for your LLM:

- **ChatGPT:** Settings → Personalization → Custom Instructions → paste into "How would you like ChatGPT to respond?"
- **Claude (web):** Project Knowledge → Add to project instructions
- **Gemini:** Use as the first message in a conversation or add to Gems instructions
- **Any API:** Set as the `system` message in your API call

## 2. Using Playbooks

Since generic LLMs can't read your filesystem, paste playbook content when needed:

1. Open the relevant playbook from `pro-pm/playbooks/`
2. Copy its contents
3. Paste into the chat: "Here's the playbook I want to follow: [paste]"
4. Ask the LLM to guide you through it step by step

**Power user tip:** Create a "Pro PM playbook index" message you can paste that lists all 23 playbooks with one-line descriptions, then tell the LLM which one to run.

## 3. Using Templates

Templates work the same way — paste and fill:

1. Open the relevant template from `pro-pm/templates/`
2. Copy its contents
3. Paste into the chat: "Help me fill in this template: [paste]"
4. Provide your context and the LLM will populate the template

**Power user tip:** For LLMs with file upload (ChatGPT, Claude), upload the template file directly instead of pasting.

## 4. Creating a Playbook Index

Paste this index into your LLM to make playbooks discoverable:

```
Pro PM Playbooks Available:
1. new-feature-lifecycle — Idea through launch and measurement
2. quarterly-planning — Review, OKRs, roadmap, alignment, commit
3. annual-planning — Strategy, bets, resources, roadmap
4. customer-escalation — Triage through systemic fix
5. competitive-response — Detect, analyze, decide, execute
6. product-launch — Readiness through post-launch
7. new-pm-onboarding — First 90 days structured ramp
8. strategic-pivot — Signal through transition
9. product-sunset — Decision through shutdown
10. incident-response — Detect through retrospective
11. board-review-prep — Metrics through presentation
12. pricing-packaging-change — Signal through monitoring
13. market-expansion — Research through scale
14. ai-feature-development — Opportunity through iteration
15. cross-functional-alignment — Identify gaps through sustain
16. product-market-fit-search — Hypothesize through validate
17. enterprise-deal-support — Discovery through close
18. platform-api-launch — Design through ecosystem
19. acquisition-integration — Evaluate through optimize
20. pm-team-scaling — Assess through scale
21. stakeholder-onboarding — Gather through nurture
22. new-market-pricing — Research through launch
23. customer-advisory-board — Design through evolve
```

## 5. File Upload Approach (Recommended)

For LLMs that support file uploads:

1. Upload the entire `pro-pm/` folder as a zip, or individual files as needed
2. Tell the LLM: "I've uploaded my Pro PM. When I ask for PM help, reference these files."
3. The LLM will search uploaded files for relevant playbooks and templates

## 6. API Integration

For programmatic use with LLM APIs, include Pro PM content in your prompts:

```python
system_prompt = open("pro-pm/system-prompt.md").read()
playbook = open("pro-pm/playbooks/quarterly-planning.md").read()

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": f"Guide me through this playbook:\n\n{playbook}"}
]
```

## 7. Limitations

Without filesystem access, generic LLMs cannot:
- Automatically discover which playbook or template to use
- Write outputs directly to files
- Access MCP tools (Jira, GitHub, etc.)
- Maintain context across sessions (unless the LLM has memory)

**Workaround:** Explicitly tell the LLM which playbook or template to use, and copy outputs from the chat into your files manually.

## 8. Tips

- Save commonly-used playbooks as "favorites" or "snippets" in your LLM for quick access
- Use ChatGPT GPTs or Claude Projects to create a persistent Pro PM context
- For multi-step playbooks, use the LLM's conversation history to maintain state
- Ask the LLM to "output the completed template in markdown" for easy copy-paste
