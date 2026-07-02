# Pro PM — Router

This file defines how user queries are mapped to the right agent, playbook, or skill. Pro PM reads this file to auto-route every request.

## Zero-Friction Routing

- **Never** delay routing to ask the user to complete context files.
- If context is empty, apply `context/_defaults.md` and invoke the matched skill/agent immediately.
- **At most one** clarifying question when the query could mean unrelated outcomes.
- See `rules/zero-friction.md` and `skills/_GLOBAL-BEHAVIOR.md`.

---

## Routing Priority

```
Agent > Playbook > Skill
```

- **Agents** handle complex, multi-step work that requires sustained reasoning, cross-domain coordination, or iterative refinement.
- **Playbooks** handle structured, multi-phase processes with a defined sequence of steps.
- **Skills** handle focused, single tasks that produce one artifact or answer one question.

When in doubt, route to the more capable option. It is better to use an agent for a simple task than to use a skill for a complex one.

---

## 1. Agent Routing

Each agent is a specialized co-pilot for a domain of PM work. Route to an agent when the query requires multi-step reasoning, cross-functional coordination, or sustained context.

### Strategy Advisor

**Triggers**: product strategy, strategic direction, vision, mission, company strategy, market positioning, competitive moats, long-term planning, strategic bets, portfolio strategy, where should we invest, what should we build next at a macro level, north star, strategic pivots

**Example queries**:
- "Help me define our product strategy for next year"
- "Should we enter the enterprise market?"
- "What's our competitive moat and how do we strengthen it?"
- "Help me think through our platform vs. point solution strategy"

### Spec Writer

**Triggers**: PRD, product requirements document, spec, specification, feature spec, requirements, user stories, acceptance criteria, write a spec for, define the requirements for, technical requirements, functional requirements

**Example queries**:
- "Write a PRD for our new onboarding flow"
- "Help me spec out the notification system"
- "Create user stories for the admin dashboard"
- "Draft acceptance criteria for the search feature"

### Research Analyst

**Triggers**: market research, user research, research synthesis, customer insights, survey analysis, interview findings, market sizing, TAM SAM SOM, industry analysis, competitive landscape, market trends, research plan, discovery research

**Example queries**:
- "Analyze these user interview transcripts"
- "What's the market size for AI-powered PM tools?"
- "Synthesize our recent customer feedback into themes"
- "Help me design a research plan for the new feature"

### Data Storyteller

**Triggers**: metrics, data analysis, dashboard, KPIs, OKRs, data story, metrics review, performance analysis, funnel analysis, cohort analysis, A/B test results, data narrative, tell the story of, what do the numbers say

**Example queries**:
- "Turn these metrics into a story for the board"
- "Analyze our activation funnel and recommend improvements"
- "Help me define KPIs for the new feature"
- "Create a data narrative for our quarterly review"

### Competitive Intel

**Triggers**: competitor, competitive analysis, competitive intelligence, market comparison, feature comparison, win/loss analysis, competitive positioning, battle card, how does [competitor] compare, what is [competitor] doing

**Example queries**:
- "Create a competitive analysis of our top 3 competitors"
- "Build a battle card for sales against [Competitor]"
- "How does our pricing compare to the market?"
- "What features are competitors shipping that we're missing?"

### Meeting Copilot

**Triggers**: meeting prep, meeting agenda, meeting notes, meeting summary, prepare me for, upcoming meeting with, talking points, discussion guide, facilitation plan, workshop design, offsite planning

**Example queries**:
- "Prepare me for my 1:1 with the VP of Engineering"
- "Create an agenda for the product review meeting"
- "Help me design a prioritization workshop"
- "Draft talking points for the stakeholder alignment meeting"

### Comms Chameleon

**Triggers**: stakeholder communication, email draft, Slack message, announcement, communication plan, how do I tell, how do I communicate, messaging, internal comms, external comms, change communication, bad news, good news, status update message

**Example queries**:
- "Draft an email to the exec team about the launch delay"
- "How do I communicate this scope change to engineering?"
- "Write a Slack message announcing the new feature to the company"
- "Help me craft messaging for the pricing change"

### Launch Coordinator

**Triggers**: product launch, go-to-market launch, launch plan, launch checklist, launch readiness, release planning, rollout plan, GA, general availability, beta launch, phased rollout, launch timeline

**Example queries**:
- "Create a launch plan for the enterprise tier"
- "What's our launch readiness checklist?"
- "Plan a phased rollout for the new billing system"
- "Help me coordinate the Q3 launch across teams"

### Quarterly Planner

**Triggers**: quarterly planning, roadmap, sprint planning, capacity planning, resource allocation, quarterly goals, OKR setting, planning cycle, next quarter, roadmap prioritization, backlog grooming at scale

**Example queries**:
- "Help me plan next quarter's roadmap"
- "Set OKRs for the product team for Q3"
- "How should we allocate engineering capacity across initiatives?"
- "Facilitate our quarterly planning process"

### Content Engine

**Triggers**: blog post, content strategy, thought leadership, product marketing content, documentation strategy, content calendar, write a post about, content for, newsletter, changelog, release notes

**Example queries**:
- "Write a blog post about our approach to AI safety"
- "Create a content calendar for the product blog"
- "Draft release notes for the v2.5 update"
- "Help me write a thought leadership piece on [topic]"

### Initiative Tracker

**Triggers**: initiative status, program tracking, project status, cross-team coordination, dependency tracking, risk tracking, initiative health, portfolio status, what's the status of, track progress on

**Example queries**:
- "What's the status of all our active initiatives?"
- "Help me track dependencies across the platform migration"
- "Create a risk register for the Q3 initiatives"
- "Build a status dashboard for my portfolio"

### Codebase Navigator

**Triggers**: codebase, code architecture, technical debt, engineering context, how does [feature] work technically, code review context, technical feasibility, implementation complexity, API design, system design review

**Example queries**:
- "Help me understand the authentication system architecture"
- "What's the technical complexity of adding multi-tenancy?"
- "Review the API design for the new endpoint"
- "Map out the technical debt in the payments module"

### Document Builder

**Triggers**: document, one-pager, brief, proposal, business case, executive summary, write a document, create a brief, RFC, design doc review, decision document, DACI

**Example queries**:
- "Write a one-pager for the new AI feature"
- "Create a business case for expanding to EMEA"
- "Draft an RFC for the new data pipeline"
- "Build a DACI for the platform migration decision"

### Advisory Board

**Triggers**: simulate perspectives, what would [person/role] think, cross-functional review, devil's advocate, red team this, challenge this, get feedback from, advisory, review from multiple perspectives, pre-mortem

**Example queries**:
- "Red team my product strategy"
- "What would the CFO think about this investment?"
- "Run a pre-mortem on the launch plan"
- "Get cross-functional feedback on this proposal"

### Collateral Producer

**Triggers**: sales collateral, marketing collateral, presentation, pitch deck, case study, whitepaper, analyst briefing, demo script, customer-facing material, sales enablement

**Example queries**:
- "Create a pitch deck for the enterprise product"
- "Write a case study based on [Customer]'s results"
- "Build sales enablement materials for the new tier"
- "Draft an analyst briefing document"

### Customer Lifecycle Manager

**Triggers**: customer journey, onboarding, retention, churn analysis, customer health, NPS, CSAT, customer success, lifecycle, adoption, engagement, customer segments, cohort behavior

**Example queries**:
- "Map the customer journey for our enterprise segment"
- "Analyze churn patterns and recommend interventions"
- "Design an onboarding flow for new users"
- "How do we improve activation for the self-serve tier?"

### GTM Strategist

**Triggers**: go-to-market strategy, GTM, market entry, channel strategy, partnership strategy, distribution, sales strategy, marketing strategy, demand generation, positioning strategy, market expansion

**Example queries**:
- "Define our GTM strategy for the mid-market segment"
- "Should we partner with [Company] for distribution?"
- "How do we enter the European market?"
- "Build a demand generation plan for the new product line"

### PM Coach

**Triggers**: career advice, PM skills, how to improve, feedback on my approach, best practices, how would a great PM handle, mentorship, skill development, PM growth, retrospective on my work

**Example queries**:
- "How can I improve my stakeholder management?"
- "Give me feedback on how I handled the last sprint"
- "What PM skills should I develop for a senior role?"
- "How would a great PM approach this situation differently?"

### People Intelligence

**Triggers**: stakeholder mapping, organizational dynamics, influence strategy, who should I talk to, political landscape, relationship management, stakeholder analysis, power dynamics, consensus building, alignment strategy

**Example queries**:
- "Map the stakeholders for the platform migration decision"
- "How do I build alignment with the skeptical VP of Sales?"
- "Who are the key influencers for this initiative?"
- "Help me navigate the organizational dynamics around this change"

### Pricing & Packaging Advisor

**Triggers**: pricing strategy, pricing model, packaging, tiers, bundles, monetization, willingness to pay, pricing page, freemium, free trial, pricing change, margin analysis, revenue model, unit economics

**Example queries**:
- "Help me redesign our pricing tiers"
- "Should we offer a free trial or freemium model?"
- "Analyze the unit economics of our enterprise plan"
- "How should we price the new add-on feature?"

---

## 2. Skill Routing

Skills live at `skills/{category}/{name}.md` (328 skills). Route to a skill when the query is specific and produces one artifact.

### Resolution rules

1. Match **Auto-Trigger Patterns** in the skill file closest to the user’s words.
2. If this table lists a path, load `skills/{path}.md`.
3. If a path fails, resolve via **`skills/_ROUTER-ALIASES.md`** (legacy short names → canonical files).
4. **Strategy frameworks** (SWOT, Porter’s, etc.) → `frameworks/` — apply framework, then use a `skills/strategy/*` skill for the deliverable.
5. **Collateral / tools umbrellas** → pick the best leaf skill under that folder (e.g. `collateral/presentations/board-deck`).

### Discover

| Query Pattern | Skill |
|---|---|
| Interview prep, discussion guide | `discover/customer-interview-prep` |
| Survey design, questionnaire | `discover/survey-design` |
| Research synthesis, affinity mapping | `discover/user-research-synthesis` |
| Market sizing, TAM/SAM/SOM | `discover/market-sizing` |
| Opportunity assessment | `discover/opportunity-assessment` |
| JTBD analysis | `discover/jobs-to-be-done-analysis` |
| Persona creation | `people/persona-builder` |
| Customer journey map | `discover/customer-journey-mapping` |
| Competitive analysis | `discover/competitive-analysis` |
| Problem framing | `discover/problem-framing` |

### Define

| Query Pattern | Skill |
|---|---|
| PRD, product requirements, feature spec | `define/write-prd` |
| User stories | `define/write-user-stories` |
| Acceptance criteria | `define/acceptance-criteria-writer` |
| One-pager, brief | `define/write-one-pager` |
| Six-pager, narrative spec | `define/write-six-pager` |
| Press release + FAQ | `define/write-press-release-faq` |
| Technical brief | `define/write-technical-brief` |
| API requirements | `define/write-api-requirements` |
| Success metrics | `define/define-success-metrics` |
| Scope negotiation | `define/scope-negotiation` |

### Plan

| Query Pattern | Skill |
|---|---|
| Prioritization, RICE, ICE | `plan/prioritization` |
| Roadmap planning | `plan/roadmap-planning` |
| Quarterly OKRs | `plan/quarterly-okrs` |
| Sprint planning | `plan/sprint-planning` |
| Capacity planning | `plan/capacity-planning` |
| Dependencies | `plan/dependency-mapping` |
| Risk assessment | `plan/risk-assessment` |
| Resource estimation | `plan/resource-estimation` |

### Execute

| Query Pattern | Skill |
|---|---|
| Decision doc, DACI, trade-offs | `execute/decision-doc` |
| Bug triage | `execute/bug-triage` |
| Status update | `execute/initiative-status-update` |
| Meeting prep | `execute/meeting-prep` |
| Meeting notes → actions | `execute/meeting-notes-to-actions` |
| Escalation | `execute/escalation-doc` |
| Retrospective | `measure/retrospective` |

### Launch

| Query Pattern | Skill |
|---|---|
| Launch plan | `launch/launch-plan` |
| Launch checklist | `launch/launch-readiness-checklist` |
| Beta program | `launch/beta-program` |
| Feature announcement | `launch/feature-announcement` |
| Release notes | `launch/release-notes` |
| GTM brief | `launch/go-to-market-brief` |
| Post-launch review | `measure/post-launch-review` |

### Measure

| Query Pattern | Skill |
|---|---|
| Experiment design | `measure/experiment-design` |
| Funnel analysis | `measure/funnel-analysis` |
| Cohort / retention | `measure/cohort-analysis` |
| Metrics review | `measure/metrics-review` |
| Revenue impact | `measure/revenue-impact-analysis` |
| Churn analysis | `measure/churn-analysis` |

### Communicate

| Query Pattern | Skill |
|---|---|
| Stakeholder email | `communicate/stakeholder-email` |
| Slack announcement | `tools/communication/slack-announcement` |
| Exec summary | `communicate/exec-summary` |
| Weekly update | `communicate/weekly-update` |
| Board update | `communicate/board-update` |
| Difficult conversation | `communicate/difficult-conversation-prep` |
| Change comms | `communicate/change-management-comms` |

### Strategy (skills)

| Query Pattern | Skill |
|---|---|
| Product strategy doc | `strategy/product-strategy-doc` |
| Vision narrative | `strategy/vision-narrative` |
| Pricing strategy | `strategy/pricing-strategy` |
| Packaging strategy | `strategy/packaging-strategy` |
| Growth strategy | `strategy/growth-strategy` |
| Build vs buy vs partner | `strategy/build-vs-buy-vs-partner` |
| Market entry | `strategy/market-entry` |

### People

| Query Pattern | Skill |
|---|---|
| Stakeholder mapping | `people/stakeholder-mapping` |
| Influence strategy | `people/influence-strategy` |
| 1:1 prep | `people/one-on-one-prep` |
| Pre-meeting brief | `people/pre-meeting-brief` |
| Feedback prep | `people/feedback-prep` |
| Team health | `people/team-health-check` |

### Tools, Collateral, AI-PM, Operate

| Query Pattern | Skill |
|---|---|
| Jira ticket | `tools/project-management/jira-ticket-writer` |
| Linear issue | `tools/project-management/linear-issue-writer` |
| Excel / Sheets model | `tools/spreadsheets/excel-model` or `google-sheets-model` |
| Slide deck | `tools/presentations/google-slides-builder` |
| Blog post | `collateral/digital-content/blog-post-thought-leadership` |
| Case study | `collateral/marketing-collateral/customer-case-study` |
| AI feature spec | `ai-pm/ai-feature-spec` |
| LLM eval plan | `ai-pm/llm-evaluation-plan` |
| AI cost optimization | `ai-pm/ai-cost-optimization` |
| Process improvement | `operate/process-improvement` |
| Brainstorm, think with me | `brainstorm-partner` |

Full skill list: run `find skills -name '*.md'` or see category folders under `skills/`.

---

## 2.5 Playbook Routing

Playbooks are multi-phase workflows in `playbooks/`. Route when the user describes an end-to-end scenario (launch, quarterly planning, PMF search, incident, etc.).

| Query Pattern | Playbook |
|---|---|
| Product launch, GA, rollout | `playbooks/product-launch.md` |
| New feature end-to-end | `playbooks/new-feature-lifecycle.md` |
| Quarterly planning, OKR cycle | `playbooks/quarterly-planning.md` |
| Annual planning | `playbooks/annual-planning.md` |
| Board review, board prep | `playbooks/board-review-prep.md` |
| Pricing / packaging change | `playbooks/pricing-packaging-change.md` |
| Market expansion, new market | `playbooks/market-expansion.md` |
| Competitive response | `playbooks/competitive-response.md` |
| Strategic pivot | `playbooks/strategic-pivot.md` |
| PMF search | `playbooks/product-market-fit-search.md` |
| AI feature development | `playbooks/ai-feature-development.md` |
| Customer escalation | `playbooks/customer-escalation.md` |
| Incident response (product) | `playbooks/incident-response.md` |
| Product sunset | `playbooks/product-sunset.md` |
| Enterprise deal support | `playbooks/enterprise-deal-support.md` |
| Cross-functional alignment | `playbooks/cross-functional-alignment.md` |
| New PM onboarding (self) | `playbooks/new-pm-onboarding.md` |
| Stakeholder onboarding | `playbooks/stakeholder-onboarding.md` |
| Customer advisory board | `playbooks/customer-advisory-board.md` |
| Platform / API launch | `playbooks/platform-api-launch.md` |
| Acquisition integration | `playbooks/acquisition-integration.md` |
| PM team scaling | `playbooks/pm-team-scaling.md` |
| New market pricing | `playbooks/new-market-pricing.md` |

**Playbook execution:** Read the playbook file, run each phase in order, invoke agents/skills named in each phase (canonical names in `agents/` and `skills/`). Use `skills/_ROUTER-ALIASES.md` if an old agent label appears.

---

## 3. Ambiguity Handling

When a query could map to multiple skills or agents, follow this logic:

### Clear Match

If the query maps cleanly to one agent or skill, proceed immediately. Do not ask for confirmation.

**Example**: "Write a PRD for the notification system" → **Spec Writer** agent. No ambiguity.

### Likely Match with Nuance

If the query maps to one primary route but could benefit from a related capability, route to the primary and incorporate the secondary.

**Example**: "Help me prepare for the pricing discussion with the CFO" → Primary: **Pricing & Packaging Advisor** agent. Also load the CFO's persona from `context/people/` and incorporate **Meeting Copilot** preparation patterns.

### Genuine Ambiguity

If the query could reasonably map to two or more very different routes, ask one clarifying question. Frame it as options, not open-ended.

**Example**: "Help me with the competitor analysis."
- Option A: Deep competitive intelligence report (→ **Competitive Intel** agent)
- Option B: Quick comparison table for a specific feature area (→ `strategy/` skill)
- Option C: Battle card for the sales team (→ **Collateral Producer** agent)

### Broad / Vague Queries

If the query is too broad to route ("Help me with my product"), ask what the PM is trying to accomplish. Offer 2-3 likely interpretations to anchor the conversation.

---

## 4. Skill Chaining

Some tasks require multiple skills executed in sequence. When you detect a chaining pattern, execute the full chain without asking for permission at each step.

### Common Chains

| Trigger | Chain |
|---|---|
| "I need to build and launch a feature" | `discover/problem-framing` → `define/write-prd` → `define/write-user-stories` → `plan/prioritization` → `launch/launch-readiness-checklist` |
| "Analyze this data and present it to execs" | `measure/revenue-impact-analysis` → `communicate/exec-summary` → `collateral/presentations/quarterly-business-review` |
| "Research this market and write a strategy" | `discover/market-sizing` → `discover/opportunity-assessment` → `strategy/product-strategy-doc` → `communicate/exec-summary` |
| "Prepare me for the stakeholder review" | `people/stakeholder-mapping` → `people/one-on-one-prep` → `communicate/presentation-outline` |
| "Set up OKRs and roadmap for next quarter" | `plan/quarterly-okrs` → `plan/prioritization` → `plan/roadmap-planning` → `plan/capacity-planning` |
| "Write and distribute the launch announcement" | `launch/feature-announcement` → `communicate/stakeholder-email` → `tools/communication/slack-announcement` |
| "Triage this bug and communicate the impact" | `execute/bug-triage` → `execute/initiative-status-update` → `communicate/difficult-conversation-prep` |
| "Run discovery and write the spec" | `discover/customer-interview-prep` → `discover/user-research-synthesis` → `discover/problem-framing` → `define/write-prd` |
| "Analyze pricing and prepare the proposal" | `strategy/pricing-strategy` → Pricing & Packaging Advisor agent → `collateral/presentations/sales-pitch-deck` → `communicate/exec-summary` |
| "Post-launch review and next steps" | `measure/post-launch-review` → `measure/revenue-impact-analysis` → `measure/retrospective` → `plan/prioritization` |

### Chaining Rules

1. Execute each step in sequence. Pass the output of one step as context to the next.
2. If a step reveals that the next step in the chain is no longer appropriate, stop and explain why.
3. Present the final combined output, not each intermediate step individually.
4. If the chain is long (4+ steps), provide a brief progress summary at the halfway point.

---

## 5. Framework Auto-Selection

When a task involves analysis or decision-making, automatically select and apply the most appropriate framework from `frameworks/`.

| Situation | Framework Category | Examples |
|---|---|---|
| Understanding customer needs | `discovery` | JTBD, Customer Development, Empathy Mapping |
| Evaluating strategic options | `strategy` | Porter's, SWOT, Blue Ocean, Wardley Mapping |
| Prioritizing work | `prioritization` | RICE, ICE, MoSCoW, Kano, Opportunity Scoring |
| Assessing product-market fit | `product-market-fit` | Sean Ellis, PMF Survey, Superhuman Framework |
| Pricing and packaging | `pricing-packaging` | Van Westendorp, Conjoint, Value-Based Pricing |
| Communicating decisions | `communication` | Pyramid Principle, SCQA, Minto |
| Analyzing data | `analysis` | Hypothesis-Driven, Root Cause, Impact Sizing |
| Planning execution | `execution` | Agile, Shape Up, Now/Next/Later |
| Growth and adoption | `growth` | Pirate Metrics (AARRR), Growth Loops, Hook Model |

---

## 6. Persona Auto-Loading

When a task involves a specific function or audience, automatically load the relevant persona from `personas/` to inform perspective and communication.

| Audience / Context | Persona Directory |
|---|---|
| Engineering discussions, technical trade-offs | `personas/engineering` |
| Design reviews, UX decisions | `personas/design` |
| Sales conversations, deal support | `personas/sales` |
| GTM planning, marketing alignment | `personas/go-to-market` |
| Executive communication, board prep | `personas/leadership` |
| Customer interactions, support escalations | `personas/customer-facing` |
| Finance, legal, operations alignment | `personas/operations` |
| Thinking models, cognitive approaches | `personas/mindsets` |
