# Advisory Board — Cross-Functional Perspective Surfacing

Before any significant decision or artifact, consider how it looks through the eyes of every relevant function. Surface concerns, objections, and opportunities that the PM might not see from their vantage point.

---

## When to Invoke Advisory Board Thinking

Activate cross-functional perspective checking for:

- Roadmap and prioritization decisions
- Pricing, packaging, or business model changes
- Feature launches or deprecations
- Architecture or platform decisions
- Go-to-market strategy
- Organizational or process changes
- Any decision that touches multiple teams or customer-facing surfaces

For narrowly scoped, single-function decisions, a full advisory check is unnecessary. Use judgment.

## Cross-Functional Perspectives

### Engineering Perspective

Surface concerns around:

- **Feasibility** — "Engineering would flag that this requires refactoring the auth system, which adds 3-4 weeks."
- **Technical debt** — "This approach accumulates more debt in the payment service. The team has been asking to address this for two quarters."
- **Scalability** — "This works for 1K users but the architecture won't hold at 100K without redesign."
- **Maintenance burden** — "Adding this option creates a combinatorial testing surface that slows every future release."
- **Developer experience** — "This deprecation path breaks 40+ third-party integrations. We need a migration plan."
- **Security and compliance** — "Storing this data has PII implications that need legal review."

### Design Perspective

Surface concerns around:

- **User experience coherence** — "This feature adds a fourth navigation pattern. Design would push for consistency."
- **Cognitive load** — "Adding this setting increases the settings page from 12 to 18 options. Users already report confusion."
- **Accessibility** — "This interaction pattern doesn't work with screen readers or keyboard navigation."
- **Design system alignment** — "This requires a new component that doesn't exist in the design system."
- **User research gaps** — "Design would want to validate this interaction with usability testing before committing to development."

### Sales Perspective

Surface concerns around:

- **Sellability** — "Sales needs a clear differentiator story. How does this compare to [competitor's] feature?"
- **Deal impact** — "Three enterprise deals are blocked on this capability. Shipping in Q4 vs. Q3 affects $800K pipeline."
- **Pricing clarity** — "Sales would flag that this packaging change makes the pricing conversation harder, not simpler."
- **Competitive positioning** — "We're losing 30% of competitive deals on this dimension. This helps, but doesn't close the gap."
- **Enablement needs** — "Sales can't position this without a battle card, demo script, and updated pitch deck."

### Customer Success Perspective

Surface concerns around:

- **Customer impact** — "CS would flag that 200+ customers use the workflow we're deprecating. Migration support will be significant."
- **Support volume** — "This UX change will spike support tickets for 2-3 weeks. Does the CS team have capacity?"
- **Churn risk** — "Mid-market customers have been asking for this. Continued delay risks churn in the segment."
- **Onboarding complexity** — "Adding this feature increases time-to-value for new customers unless onboarding is updated."
- **Health score impact** — "This change affects the activation metric used in health scoring. CS needs to recalibrate."

### Marketing Perspective

Surface concerns around:

- **Positioning** — "This moves us closer to the enterprise narrative but may alienate our SMB community."
- **Launch readiness** — "Marketing needs 4-6 weeks lead time for a Tier 1 launch: blog, webinar, social, email, and PR."
- **Messaging** — "The value proposition needs to be sharper. 'Better analytics' isn't a message; 'Cut analysis time from 2 hours to 10 minutes' is."
- **Content and collateral** — "Existing marketing materials reference the old pricing model. All need updates."
- **Market timing** — "Competitor Y announces their annual release next month. Our launch timing should consider this."

### Finance Perspective

Surface concerns around:

- **Revenue model** — "This changes the monetization mechanic. Finance needs a revenue impact model."
- **Unit economics** — "The free tier expansion improves top-of-funnel but increases infrastructure cost per user by 40%."
- **Budget implications** — "This initiative requires headcount we haven't budgeted. Needs trade-off against other investments."
- **Forecasting** — "This pricing change affects revenue recognition timing. Finance needs to update the forecast."
- **Compliance** — "Revenue recognition rules may apply differently to this packaging structure."

### Legal / Security / Compliance

Surface concerns around:

- **Data handling** — "Collecting this data may trigger GDPR obligations we haven't scoped."
- **Terms of service** — "This feature changes what we promise customers. Legal review of ToS updates needed."
- **Contractual obligations** — "Enterprise contracts may have commitments related to this feature. Legal should review."
- **Security posture** — "This increases attack surface. Security review and threat modeling required."

## How to Surface Perspectives

Do not merely list concerns. For each concern:

1. **Name the function and the concern** — "Engineering would flag that..."
2. **Explain why it matters** — Connect to outcomes, timeline, or risk
3. **Propose a mitigation** — "To address this, we could..."
4. **Rate the severity** — Is this a blocker, a risk to manage, or a consideration to note?

### Severity Framework

| Level | Meaning | Response |
|-------|---------|----------|
| **Blocker** | Cannot proceed without resolving | Must address before decision |
| **High risk** | Significant chance of material negative impact | Need mitigation plan |
| **Moderate risk** | Could cause problems, manageable | Acknowledge and monitor |
| **Consideration** | Worth noting, unlikely to derail | Document for awareness |

## Full Advisory Board Invocation

When the PM asks "What would everyone think?" or when a decision is high-stakes enough to warrant it, run a full Advisory Board analysis:

1. **State the decision** in one sentence
2. **For each relevant function**, surface their top 1-3 concerns with severity ratings
3. **Identify conflicts** where functions disagree (e.g., "Sales wants it sooner, Engineering needs more time")
4. **Propose resolution paths** for the top conflicts
5. **Summarize blockers vs. manageable risks**
6. **Recommend** whether to proceed, adjust, or pause — with specific adjustments

## Weighting Perspectives

Not all functions are equally relevant to every decision. Weight perspectives by:

- **Proximity to impact** — Who bears the most direct consequences?
- **Expertise relevance** — Who has the deepest knowledge about the risk?
- **Decision authority** — Who has formal veto or approval power?
- **Implementation dependency** — Who is needed to execute?

State your weighting explicitly: "Engineering and CS perspectives carry the most weight here because the primary risk is implementation complexity and customer migration."
