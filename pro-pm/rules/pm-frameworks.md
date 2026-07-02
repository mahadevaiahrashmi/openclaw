# PM Frameworks — Intelligent Framework Selection and Application

Apply `skills/_GLOBAL-BEHAVIOR.md` on every skill invocation (zero-setup defaults, one-question max).

Frameworks are thinking tools, not checklists. Never apply a framework mechanically. Select the right framework for the specific situation, explain why it fits, and show the application — not just the name.

---

## Framework Selection Principles

1. **Start with the question, not the framework.** Understand what decision needs to be made or what problem needs to be solved before reaching for a tool.
2. **Explain the fit.** Every time you select a framework, state why it's the right lens for this specific situation: "Using RICE here because the team needs to compare 12 features with limited data, and the scoring model provides a defensible starting point for debate."
3. **Combine when appropriate.** Real problems rarely fit one framework perfectly. Layer frameworks: JTBD for discovery + Kano for categorization + RICE for prioritization.
4. **Show the work.** Apply the framework to the actual problem. Fill in the matrix, score the items, draw the diagram. A framework name-drop without application adds zero value.
5. **Know when to abandon.** If a framework is forcing the problem into a shape that doesn't fit, say so and reason from first principles instead.

## Framework Library Reference

Detailed methodology for each framework lives in `frameworks/`. Reference those files for full instructions. This rule governs when and how to select frameworks.

## Framework Categories and Selection Guide

### Prioritization — "What should we build and in what order?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **RICE** (Reach, Impact, Confidence, Effort) | Comparing a large backlog with mixed signal quality | High-stakes strategic bets where scoring oversimplifies |
| **ICE** (Impact, Confidence, Ease) | Quick prioritization with small teams | Reach varies significantly across features |
| **Value vs. Effort Matrix** | Visual alignment in group sessions | Precise ranking matters |
| **Weighted Scoring** | Multiple criteria with stakeholder-agreed weights | Criteria weights are controversial or political |
| **Cost of Delay / WSJF** | Time-sensitive decisions, capacity allocation | All items have similar urgency |
| **MoSCoW** | Scope negotiation for a fixed release | Long-term roadmap planning |
| **Kano Model** | Categorizing features by customer delight vs. expectation | All features are in the same category |

### Strategy — "Where should we play and how do we win?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Porter's Five Forces** | Industry structure and competitive dynamics | Rapidly shifting markets where forces are unstable |
| **SWOT + TOWS** | Connecting internal capabilities to external opportunities | You need specific action plans, not just categorization |
| **Blue Ocean / Value Curve** | Finding whitespace and differentiation opportunities | Competing in a mature, well-defined category |
| **Wardley Mapping** | Understanding value chain evolution and strategic positioning | The team isn't familiar with the methodology |
| **Three Horizons** | Balancing core, adjacent, and transformative investments | Near-term tactical planning |
| **PESTLE** | Macro-environmental scanning | Product-level decisions |

### Discovery — "What should we build?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Jobs-to-Be-Done (JTBD)** | Understanding underlying customer motivations | You need implementation details, not discovery |
| **Design Thinking** | Ambiguous problems needing creative exploration | The problem is well-defined and execution-ready |
| **Opportunity Solution Tree** | Connecting outcomes to opportunities to solutions | The outcome isn't yet defined |
| **Assumption Mapping** | Identifying what to validate before building | All assumptions are already validated |
| **Story Mapping** | Visualizing user journeys and release planning | Backend/infrastructure work |

### Execution — "How do we deliver?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Sprint Planning / Scrum** | Iterative delivery with regular feedback loops | Long-running, uncertain R&D work |
| **Kanban** | Continuous flow, operational efficiency | Teams that need time-boxed cadence |
| **Shape Up** | 6-week bets with appetite-based scoping | Teams that need sprint-level granularity |
| **RACI** | Clarifying roles for cross-functional initiatives | Small, co-located teams with clear ownership |
| **Pre-mortem** | Risk identification before launch | Low-stakes, reversible decisions |

### Growth — "How do we acquire, retain, and expand?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Pirate Metrics (AARRR)** | Diagnosing funnel health across lifecycle stages | B2B enterprise with complex, non-linear journeys |
| **North Star Metric** | Aligning the team around a single leading indicator | The product serves multiple distinct use cases |
| **Growth Loops** | Designing self-reinforcing growth mechanisms | Early-stage PMF discovery |
| **Cohort Analysis** | Understanding retention and behavior over time | Insufficient data volume |
| **Hook Model** | Habit-forming product design | Utility products without engagement goals |

### Analysis — "What's happening and why?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **5 Whys** | Simple root cause analysis | Complex, systemic problems with multiple causes |
| **Fishbone / Ishikawa** | Multi-causal problem decomposition | Quick triage situations |
| **Impact Analysis** | Understanding downstream effects of a change | The scope of impact is obvious |
| **Decision Matrix** | Structured evaluation of options against weighted criteria | Fewer than 3 options |
| **Monte Carlo / Scenario Planning** | High-uncertainty forecasting | Precise estimates exist |

### Communication — "How do I present this?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Pyramid Principle** | Executive-ready structured argumentation | Informal team discussions |
| **SCQA** (Situation, Complication, Question, Answer) | Framing a problem for stakeholder buy-in | Status updates |
| **Amazon-style 6-pager** | Deep, rigorous proposals requiring group debate | Quick decisions |
| **Minto Pyramid** | Consulting-style structured recommendations | Creative or exploratory discussions |

### Product-Market Fit — "Have we found it?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Sean Ellis Test** (40% "very disappointed") | Measuring PMF intensity for consumer/prosumer | Enterprise B2B with small user bases |
| **Superhuman PMF Engine** | Systematic PMF improvement loop | Pre-MVP stages |
| **Sequoia PMF Indicators** | Multi-signal PMF assessment | Single-product analysis |

### Pricing & Packaging — "How do we capture value?"

| Framework | Best For | Avoid When |
|-----------|----------|------------|
| **Van Westendorp PSM** | Discovering price sensitivity boundaries | B2B enterprise custom pricing |
| **Conjoint Analysis** | Understanding feature-value trade-offs | Small sample sizes |
| **Good-Better-Best** | Tier structure design | Single-product, single-price models |
| **Value Metric Identification** | Aligning price to usage/value | Flat-rate pricing models |

## Combining Frameworks — Powerful Patterns

These combinations address common PM challenges:

- **Feature Prioritization:** JTBD (understand need) → Kano (categorize) → RICE (score and rank)
- **Market Entry:** PESTLE (environment) → Porter's (industry) → Blue Ocean (differentiation)
- **Launch Planning:** Pre-mortem (risks) → RACI (roles) → Sprint Planning (execution)
- **Pricing Decision:** JTBD (value drivers) → Van Westendorp (price sensitivity) → Good-Better-Best (structure)
- **Strategic Planning:** Three Horizons (portfolio) → Wardley Map (positioning) → OKRs (execution)
- **Growth Diagnosis:** AARRR (funnel) → Cohort Analysis (retention) → 5 Whys (root cause)

## Anti-Patterns to Avoid

- **Framework worship** — Using a framework because it's popular, not because it fits
- **Framework tourism** — Name-dropping 5 frameworks without applying any of them
- **Framework paralysis** — Spending more time picking the framework than solving the problem
- **Empty matrices** — Showing a framework template without filling in the actual data
- **Single-framework tunnel vision** — Forcing a complex problem into one framework's shape
