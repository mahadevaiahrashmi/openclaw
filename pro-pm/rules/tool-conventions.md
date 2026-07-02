# Tool Conventions — Output Formatting Per Tool

Format every output for the tool or medium where it will be consumed. A well-structured Jira ticket, Confluence page, or Slack message follows different conventions — apply the right format automatically.

Always check `context/company/tools.md` and `context/integrations/` for tool-specific configurations, naming conventions, and organizational standards before generating output.

---

## Jira Tickets

### Standard Structure

Every Jira ticket must include:

**Summary (Title)**
- Clear, scannable, action-oriented
- Format: `[Component] Verb + Object` — e.g., "Dashboard: Add export-to-CSV for filtered views"
- Under 80 characters; specific enough to understand without opening

**Description**

```
## Context
[Why this work matters. Link to PRD, customer request, or strategic goal. 2-3 sentences.]

## User Story
As a [persona], I want to [action] so that [outcome].

## Acceptance Criteria
- [ ] [Specific, testable condition]
- [ ] [Specific, testable condition]
- [ ] [Edge case or error handling]
- [ ] [Performance requirement, if applicable]

## Technical Notes
[Architecture context, relevant code areas, dependencies, constraints.
Only include when it adds value — don't pad.]

## Out of Scope
[Explicitly state what this ticket does NOT cover, if ambiguity exists.]

## Design
[Link to Figma, mockups, or design specs. Note "No design changes" if applicable.]
```

**Additional Fields**
- **Story Points:** Include guidance based on complexity: 1 (trivial), 2 (small), 3 (medium), 5 (large), 8 (very large, consider splitting)
- **Labels:** Follow team conventions from `context/company/tools.md`
- **Components:** Map to system components per project configuration
- **Priority:** P0 (outage), P1 (high impact, urgent), P2 (important, planned), P3 (nice to have)
- **Epic Link:** Always associate with the relevant epic

### Bug Ticket Format

```
## Bug Summary
[One-sentence description of the unexpected behavior.]

## Steps to Reproduce
1. [Step one]
2. [Step two]
3. [Observe: expected vs. actual behavior]

## Expected Behavior
[What should happen.]

## Actual Behavior
[What actually happens. Include error messages, screenshots, or logs.]

## Environment
[Browser, OS, app version, account type, relevant config]

## Impact
[How many users affected, severity, workaround availability]
```

## Confluence Pages

### Standard Structure

```
# [Page Title — Clear and Descriptive]

| Author | Date | Status | Stakeholders |
|--------|------|--------|-------------|
| [Name] | [Date] | Draft / In Review / Final | [Names or teams] |

---

## TL;DR
[3-5 sentence summary of the entire document. A reader who stops here should get the core message.]

## Table of Contents
[Auto-generated or manual TOC for documents >3 sections]

## [Section 1: Context / Problem]
[Background, data, and motivation]

## [Section 2: Analysis / Options]
[Structured analysis, trade-offs, comparisons — use tables]

## [Section 3: Recommendation]
[Clear recommendation with reasoning]

## [Section 4: Next Steps]
| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Action item] | [Name] | [Date] | Not started |

## Appendix
[Supporting data, detailed calculations, or reference material]
```

### Confluence Formatting Guidelines

- Use **Info panels** for key callouts and important notes
- Use **Warning panels** for risks and blockers
- Use **Expand macros** for detailed sections that not every reader needs
- Use **Status macros** for tracking: `NOT STARTED`, `IN PROGRESS`, `DONE`, `BLOCKED`
- Link related pages — never duplicate content that exists elsewhere
- Use heading hierarchy consistently: H1 for title, H2 for sections, H3 for subsections

## Slack Messages

### Formatting Standards

- **Keep it concise** — If your Slack message exceeds 200 words, it belongs in a document with a Slack link
- **Use threads** — Main channel gets the summary; detail goes in the thread
- **Bold key information** — The reader should catch the critical point while scrolling
- **Use bullet lists** — Not paragraphs
- **Include context links** — Link to tickets, docs, or dashboards rather than explaining them

### Message Patterns

**Decision announcement:**
```
*Decision: [What was decided]*
Context: [1-sentence why]
Impact: [Who this affects and how]
Action needed: [What recipients should do, if anything]
Details: [link to doc]
```

**Status update:**
```
*[Project Name] — Week of [Date]*
✅ Completed: [key items]
🔄 In progress: [key items with owners]
🚫 Blocked: [blockers with needed action]
📅 Next week: [priorities]
```

**Asking for input:**
```
*Need input by [date]: [Topic]*
Context: [1-2 sentences]
Options: [A, B, C with 1-line descriptions]
My recommendation: [X, with brief reasoning]
React 👍 for A, 👎 for B, or thread your thoughts.
```

## Email

### Formatting Standards

- **Subject line:** Action-oriented, specific — "[Decision Needed] Q4 Pricing Change by Oct 15" or "[FYI] Dashboard v2 launches Nov 1"
- **BLUF structure:** Lead with the ask or key message in the first 2 sentences
- **Short paragraphs:** 2-3 sentences maximum per paragraph
- **Clear CTA:** Bold or highlight the specific action requested and deadline
- **Signature block:** Keep it minimal

### Email Template

```
Subject: [Action Type] [Specific Topic] [by Date, if applicable]

Hi [Name],

[BLUF: The key message or request in 1-2 sentences.]

[Supporting context: Why this matters, 2-3 short paragraphs max.]

[The ask, in bold or highlighted]:
- [Specific action 1]
- [Specific action 2, if applicable]

[Deadline: Please respond by [date/time].]

Thanks,
[Name]
```

## Presentations / Slide Decks

### Formatting Standards

- **One idea per slide** — If you're covering two topics, use two slides
- **Title = key takeaway** — Not a topic label ("Q3 Results") but a finding ("Q3 Revenue Exceeded Target by 12%")
- **Visual-first** — Charts, diagrams, and images over bullet walls
- **Speaker notes** — Include detailed talking points and data sources in notes, not on the slide
- **Consistent structure:** Situation → Analysis → Recommendation → Next Steps

### Slide Outline Format

When drafting a deck, present as a structured outline:

```
Slide 1: [Title slide — topic, date, author]
Slide 2: [Executive summary — 3-4 key takeaways]
Slide 3: [Context/Problem — with data visualization]
Slide 4-N: [Analysis sections — one insight per slide]
Slide N+1: [Recommendation — clear, with trade-offs]
Slide N+2: [Next steps — actions, owners, timeline]
Slide N+3: [Appendix — supporting data, if needed]
```

## Spreadsheets

### Formatting Standards

- **Clear headers** — Row 1 is always headers, bold and frozen
- **Documentation** — Include a "README" tab or header row explaining calculations, data sources, and assumptions
- **Summary row/column** — Totals, averages, or key aggregations clearly labeled
- **Formulas documented** — Complex formulas get a note explaining the logic
- **Conditional formatting** — Use color coding sparingly and consistently (green = good, red = needs attention, yellow = watch)
- **Named ranges** — Use descriptive names for frequently referenced data ranges

## General Tool Principles

1. **Respect the medium** — Each tool has conventions; follow them
2. **Link, don't duplicate** — Reference existing content rather than copying it
3. **Check organizational standards** — Review `context/company/tools.md` before generating output for any tool
4. **Test readability** — Would the recipient find this easy to act on in the tool where they'll read it?
5. **Version awareness** — Note when tool features may vary by plan tier or version
