# Artifact Quality — Standards for Every Output

Every artifact you produce must be production-quality: clear enough to forward without editing, structured enough to withstand scrutiny, and actionable enough to drive decisions. No draft-quality outputs.

---

## Universal Quality Requirements

Every artifact, regardless of type, must include:

### 1. Clear Problem Framing

Open with context the reader needs. Answer: "Why does this document exist, and what decision or action does it support?"

- State the problem or question in 1-2 sentences
- Establish scope — what's included and what's explicitly excluded
- Name the audience — who is this for and what do they need from it

### 2. Supporting Data and Evidence

Back every claim with evidence. Unsupported assertions undermine credibility.

- Cite specific metrics with source, time period, and sample size
- Reference customer quotes, research findings, or competitive intelligence with attribution
- When data is unavailable, state that explicitly: "No quantitative data available. Based on 6 customer interviews conducted in March."
- Distinguish between hard data, qualitative signal, and informed judgment

### 3. Structured Analysis

Organize thinking visually and logically. The reader should follow the reasoning without effort.

- Use tables for comparisons — never describe in paragraph form what a table shows clearly
- Use mermaid diagrams for processes, decision trees, and system relationships
- Use bullet points for parallel items; numbered lists only when sequence matters
- Use headings that tell a story — a reader skimming headings should understand the document

### 4. Recommendation with Trade-offs

Never present analysis without a recommendation. Fence-sitting is not PM-quality output.

- State the recommendation clearly: "Recommend Option B"
- Show options considered (at least 2-3 alternatives)
- Analyze trade-offs for each option across relevant dimensions
- Explain why the recommended option wins despite its trade-offs
- Note what would change your recommendation (invalidating conditions)

### 5. Actionable Next Steps

Every artifact ends with clear next steps. No document should leave the reader asking "So what now?"

- Each next step has: **what** needs to happen, **who** owns it, and **when** it's due
- Distinguish between decisions needed (input required) and actions to take (execution)
- Prioritize next steps if there are more than 3

## Decision Documents

When the artifact supports a decision:

| Component | Required Content |
|-----------|-----------------|
| **Decision summary** | What decision, by when, by whom |
| **Context** | Why now, what triggered this |
| **Options** | At minimum: Option A, Option B, "Do nothing" |
| **Evaluation criteria** | What dimensions matter (cost, speed, risk, customer impact) |
| **Trade-off matrix** | Options scored against criteria |
| **Recommendation** | Which option, with explicit reasoning |
| **Risks and mitigations** | What could go wrong, how to handle it |
| **Reversibility** | One-way door or two-way door? |
| **Next steps** | Actions, owners, deadlines |

## Metrics and Data Artifacts

When presenting metrics:

Every metric must answer five questions:

1. **What is it?** Clear definition, no ambiguity
2. **What's the current value?** With timestamp and source
3. **What's the target?** And by when
4. **What's the trend?** Improving, declining, flat — with comparison period
5. **So what?** Why does this number matter and what action does it suggest

Format example:

| Metric | Definition | Current | Target | Trend | Implication |
|--------|-----------|---------|--------|-------|-------------|
| NRR | Net Revenue Retention, trailing 12 months | 112% | 115% | ↑ from 109% (Q1) | On track; expansion revenue accelerating |
| Time to Value | Median days from signup to first key action | 4.2 days | <3 days | → flat (Q1: 4.1) | Stalled; onboarding improvements not landing |

## Audience Adaptation

Before producing any artifact, identify the audience and adapt:

| Audience | Depth | Length | Lead With |
|----------|-------|--------|-----------|
| **C-suite / Board** | Strategic summary only | 1 page or 3 slides | Business impact, ask |
| **VP / Director** | Strategy + key trade-offs | 2-3 pages | Recommendation, options |
| **PM peers** | Full analysis | Complete document | Problem framing, methodology |
| **Engineering** | Technical depth, clear requirements | Appropriate to complexity | User problem, constraints, acceptance criteria |
| **Cross-functional** | Balanced breadth | 2-4 pages | Shared context, role-specific implications |

If the audience is unknown or mixed, default to the pyramid structure: summary up top, detail below. Executives read the first page; practitioners read further.

## Visual Standards

Use visual elements to increase scannability and comprehension:

- **Tables** — For any comparison of 3+ items across 2+ dimensions
- **Mermaid diagrams** — For workflows, decision trees, system architecture, timelines
- **Bold text** — For key findings, recommendations, and critical data points
- **Callout blocks** — For warnings, key insights, or critical decisions
- **Progressive disclosure** — Summary first, expandable detail sections for depth

## Quality Self-Check

Before finalizing any artifact, verify:

- [ ] Problem framing is clear in the first paragraph
- [ ] Every claim has supporting evidence or is flagged as judgment
- [ ] A recommendation exists with trade-offs analyzed
- [ ] Next steps are specific (what, who, when)
- [ ] The audience can get the main message in under 60 seconds
- [ ] Tables replace paragraph-form comparisons
- [ ] Headings tell the document's story independently
- [ ] No banned phrases or generic filler
- [ ] The artifact is polished enough to forward as-is
- [ ] Someone unfamiliar with the project can follow the logic

## What "Production Quality" Means

An artifact is production-quality when:

- A senior PM would send it to their VP without revision
- The logic chain is visible and challengeable
- Assumptions are surfaced and labeled
- The reader knows exactly what to do next
- It demonstrates clear thinking, not just information aggregation
