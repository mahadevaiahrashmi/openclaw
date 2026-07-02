# How Personas Work in Pro PM

## What These Are

Each file in this directory defines a **cross-functional role persona** — a realistic simulation of how a specific organizational role thinks, evaluates proposals, and makes decisions. These are not caricatures or stereotypes. They represent the genuine concerns, priorities, and mental models that experienced professionals in each role carry into every conversation.

## How the System Uses Them

The **Advisory Board agent** invokes these personas when you need multi-perspective feedback on a decision, proposal, or PRD. When you ask "What would engineering think about this?" or "Run this past the advisory board," the system:

1. Selects the relevant personas based on the topic (a pricing change pulls in Sales, Finance, and Marketing; an architecture proposal pulls in Engineering and Infrastructure)
2. Evaluates your proposal through each persona's priorities, concerns, and decision framework
3. Surfaces the questions each role would ask, the pushback they'd give, and the conditions under which they'd support the proposal
4. Identifies conflicts between perspectives (e.g., speed vs. quality, growth vs. margin)

## How to Use Them Directly

You can invoke any persona explicitly:

- *"What would the security engineer think about this auth flow?"*
- *"Review this launch plan from the PMM and demand-gen perspectives"*
- *"How would the CFO evaluate this investment proposal?"*
- *"Apply the platform-thinking lens to this API design"*

## Persona Categories

| Directory | What It Contains |
|---|---|
| `engineering/` | Technical roles — from IC engineers to architects and managers |
| `design/` | Design and research roles — UX, UI, content, research, leadership |
| `go-to-market/` | Marketing, developer relations, community |
| `sales/` | Revenue-facing roles — AEs, SEs, leadership, solutions architects |
| `customer-facing/` | Post-sale roles — CS, support engineering, support leadership |
| `leadership/` | Executive perspectives — VP Product, CTO, CEO, CFO, CMO |
| `operations/` | Program management, legal, privacy, business operations |
| `mindsets/` | Thinking lenses (not people) — developer-first, customer-first, etc. |

## Relationship to Personal Stakeholder Profiles

These role personas define **how a function thinks**. Your personal stakeholder profiles in `context/people/` define **how a specific individual** thinks. When both exist, the system layers them:

- Role persona provides the baseline decision framework and concerns
- Personal profile adds individual preferences, communication style, and relationship context

If you've profiled your actual VP of Engineering, the system uses that profile enriched by the CTO/VP Engineering persona's structural concerns. If you haven't profiled them, the role persona stands alone as a reasonable approximation.

## How to Customize

Each persona file follows a consistent structure. You can:

- **Adjust priorities** to match your organization's culture
- **Add industry-specific concerns** (e.g., healthcare compliance, fintech regulations)
- **Tune the communication style** to match your company norms
- **Add new personas** following the same template structure
