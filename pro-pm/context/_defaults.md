# Built-In Defaults (Zero Setup)

When context files are empty, Pro PM uses these assumptions **silently** and labels them in output as `[Assumption]`. Do not block the user or run a setup questionnaire.

## How to Override

Fill the matching file under `context/` — only what you have time for. Even one line in `context/me/profile.md` or `context/company/overview.md` improves output.

---

## PM Profile Defaults

| Field | Default when empty |
|-------|-------------------|
| Level | Senior Product Manager |
| Domain | B2B SaaS (adjust if user mentions industry) |
| Style | Direct, data-informed, BLUF |
| Audience | Cross-functional stakeholders (eng, design, GTM, leadership) |

## Company Defaults

| Field | Default when empty |
|-------|-------------------|
| Stage | Growth-stage B2B SaaS |
| Model | Subscription SaaS (tiered packaging) |
| GTM | Product-led with sales assist for enterprise |
| Priorities | Retention, expansion revenue, differentiated UX |
| Metrics | Use placeholders: `[Metric — add your number]` |

## Product Defaults

| Field | Default when empty |
|-------|-------------------|
| Stage | Growth (1→10) |
| Users | Business users + admins; segment from user’s query |
| North star | Activation or retention (pick what fits the task) |
| Competitors | `[Competitor A/B]` placeholders unless user names them |

## People / Stakeholders

| Field | Default when empty |
|-------|-------------------|
| Recipient | Professional peer; lead with outcome and ask |
| Eng | Cares about scope, quality, timeline, tech debt |
| Design | Cares about UX consistency and research evidence |
| Sales | Cares about deal impact and competitive wins |
| Exec | Cares about metrics, risk, decision needed |

Use `personas/` for perspective; use `context/people/` only when populated.

## Team / Planning

| Field | Default when empty |
|-------|-------------------|
| Team size | Small cross-functional squad (~6–12 eng+design) |
| Sprint | 2 weeks |
| Capacity | `[Capacity]` placeholder; ask user only if planning depends on it |
| Allocation | ~70% features, ~20% quality/debt, ~10% unplanned |

Use `context/team/` when filled; never block planning skills on empty team files.

## Integrations / Tools

| Field | Default when empty |
|-------|-------------------|
| Output format | Markdown artifact ready to paste into any tool |
| Jira | Standard epic/story template from `templates/tools/` |
| Confluence | H1–H3 hierarchy, TOC, tables |
| Slack | Short message + bullets + clear CTA |
| Email | BLUF, 3 short paragraphs, bullet ask |
| Slides | Outline + speaker notes (10–15 slides) |
| Sheets | Tab names: Inputs, Model, Outputs |

**Integrations are optional.** Never require API keys or config files to produce a first draft.

## Data & Metrics

- Use clearly labeled placeholders: `[Current value]`, `[Target]`, `[Trend]`
- Never invent specific revenue, MAU, or conversion numbers
- Suggest which metric to pull and from which system

## Minimum Questions Policy

Ask **at most one** clarifying question, and only when:

1. The request is genuinely ambiguous (two very different deliverables), or
2. A single fact would change the recommendation >50% (e.g., B2B vs B2C)

Otherwise: **proceed with defaults**, deliver the artifact, end with **“Optional: tell me X to sharpen this.”**
