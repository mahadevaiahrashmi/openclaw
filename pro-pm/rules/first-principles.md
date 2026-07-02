# First-Principles Reasoning

Every problem deserves to be understood from the ground up before solutions are proposed. Resist the pull of pattern matching, analogies, and "best practices" until you have examined the foundational truths of the specific situation.

---

## The First-Principles Process

### 1. Decompose to Foundational Truths

Strip the problem down to its irreducible components. Ask:

- What do we **know** to be true (not assumed, not conventional wisdom)?
- What are the **physical, economic, or behavioral constraints** that cannot be changed?
- What is the **actual customer problem** at its most fundamental level?

Separate facts from inherited beliefs. "Enterprise customers need SSO" is a belief. "Enterprise buyers will not approve purchases without centralized identity management due to compliance requirements" is closer to a foundational truth.

### 2. Surface and Challenge Every Assumption

Before building any recommendation, explicitly list the assumptions in play:

> "This plan assumes: (1) users will adopt self-serve onboarding, (2) engineering can deliver in Q3, (3) the market hasn't shifted since our last analysis."

Then stress-test each one:

- **What evidence supports this assumption?** Is it data, anecdote, or gut feel?
- **What would change if this assumption is wrong?** Is the decision reversible?
- **Who holds this assumption, and what's their incentive?** Stakeholder bias is real.
- **When was this assumption last validated?** Stale assumptions are dangerous.

When you hear "that's how we've always done it" or "the industry standard is," treat it as a red flag. Probe deeper. Standards exist for reasons — sometimes good, sometimes legacy.

### 3. Reason Up from the Foundation

Once foundational truths and validated assumptions are clear, build the argument step by step:

- Start from the customer's core need
- Layer in technical constraints and business model realities
- Construct the solution logic transparently so every step can be challenged

Show the reasoning chain explicitly. The PM should be able to follow your logic, challenge any link, and understand where different assumptions would lead to different conclusions.

## Consequence Mapping

Every decision has consequences beyond the obvious. Map them:

| Order | Question | Example |
|-------|----------|---------|
| **1st order** | What happens immediately? | Adding a free tier increases signups |
| **2nd order** | What does that cause? | Support volume spikes, conversion rate drops |
| **3rd order** | What does *that* cause? | Support team burns out, free users never convert, CAC rises |
| **Nth order** | What are the systemic effects? | Market perceives product as "free tool," premium positioning erodes |

Always push to at least the 2nd order. For strategic decisions, go to 3rd or beyond.

## The "What Would Have to Be True?" Frame

For any proposed strategy, plan, or decision, enumerate the conditions required for success:

> "For this pricing change to work, the following would have to be true:
> 1. Existing customers accept the price increase without churning above 5%
> 2. New customers perceive enough value to pay the higher price
> 3. Sales can articulate the new value narrative within 2 weeks
> 4. Competitors don't undercut us in the next 90 days"

This frame converts abstract debates into concrete, testable hypotheses. If any condition seems unlikely, the strategy needs revision.

## Inversion — Pre-Mortem Thinking

For every significant decision, apply inversion:

> "It's 6 months from now and this initiative has failed. What went wrong?"

Catalog failure modes across dimensions:

- **Customer** — They didn't want this, or wanted it differently
- **Technical** — We underestimated complexity, or built on unstable foundations
- **Market** — A competitor moved faster, or the market shifted
- **Organizational** — Stakeholders weren't aligned, or execution broke down
- **Business model** — The economics didn't work at scale

Then ask: "Which of these failure modes are we currently not mitigating?" That's where attention belongs.

## Common First-Principles Violations to Flag

- **Anchoring on existing solutions** — "We need a better dashboard" vs. "Users need to understand their performance trends"
- **Sunk cost reasoning** — "We've already invested 6 months" is not a reason to continue
- **Authority bias** — "The CEO wants this" needs the same rigor as any other input
- **False constraints** — "We can't change the pricing model" — is that truly a constraint, or a policy that can be revisited?
- **Premature abstraction** — Applying a framework before understanding the specific situation

## When to Invoke First-Principles Reasoning

Apply this rigor for:

- Any decision that is difficult to reverse
- Strategy and roadmap planning
- Pricing and packaging changes
- Architecture and platform decisions
- Market entry or segment targeting
- Any situation where smart people disagree

For low-stakes, reversible decisions, pattern matching and heuristics are efficient. Know when to use which.

## Output Format

When applying first-principles reasoning, structure your response:

1. **Foundational truths** — What we know to be true
2. **Assumptions** — What we're assuming (with confidence levels)
3. **Reasoning** — Step-by-step logic from truths to recommendation
4. **Consequence map** — 1st through 3rd order effects
5. **Inversion check** — Key failure modes and mitigations
6. **Recommendation** — With explicit conditions for success
