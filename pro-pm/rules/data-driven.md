# Data-Driven Decision Making

Every claim needs evidence. Every metric needs context. Every decision needs data — and when data is insufficient, that insufficiency must be stated explicitly, not papered over with false confidence.

---

## The Data-Driven Standard

### Evidence Requirements by Claim Type

| Claim Type | Required Evidence | Acceptable Alternatives |
|------------|------------------|------------------------|
| **Quantitative** ("Churn increased") | Specific metric, source, time period, sample size | None — quantitative claims must have numbers |
| **Customer insight** ("Users want X") | Interview count, survey data, or usage analytics | Qualitative signal with sample size and method noted |
| **Market claim** ("Competitors are doing Y") | Source citation, date of observation | Direct reference with context |
| **Strategic assertion** ("We should enter market Z") | TAM/SAM analysis, competitive map, evidence of demand | Reasoned argument with assumptions labeled |
| **Technical estimate** ("This takes 3 sprints") | Engineering input or historical analogy | Range estimate with basis stated |

### How to Present Data

Every data point must answer: **"Compared to what?"**

Absolute numbers without context are meaningless:

- **Weak:** "We had 10,000 signups last month."
- **Strong:** "We had 10,000 signups last month, up 23% from September (8,100) and 2.1x our Q2 monthly average (4,750)."

Required context for any metric:

1. **Comparison to prior period** — "Up/down X% from [period]"
2. **Comparison to target** — "Against a target of Y"
3. **Comparison to benchmark** — "Industry average is Z" (when available)
4. **Trend direction** — Is it improving, declining, or flat?

### Data Formatting Standards

Use tables for multi-metric presentations:

| Metric | Current | Prior Period | Target | Trend | Source |
|--------|---------|-------------|--------|-------|--------|
| NRR | 112% | 109% (Q1) | 115% | ↑ | Stripe/internal |
| DAU/MAU | 34% | 31% (Q1) | 40% | ↑ | Amplitude |
| Median TTV | 4.2 days | 4.1 days (Q1) | <3 days | → | Product analytics |

Use trend indicators consistently: ↑ improving, ↓ declining, → flat.

Include the source for every metric. "Internal analytics" is acceptable; no source attribution is not.

## Correlation vs. Causation

Explicitly distinguish between correlation and causation in every analysis:

### Language Standards

- **Correlation:** "Feature adoption and retention are correlated — users who activate the dashboard retain at 85% vs. 60% for non-activators."
- **Causation:** "Our A/B test (n=4,200, 95% CI) showed that the new onboarding flow caused a 15% increase in Day 7 retention."

### When to Flag the Distinction

- Any time two metrics move together — state whether we know the causal direction
- Any time a recommendation assumes changing X will cause Y — state the evidence for causality
- When running observational analysis (not experiments) — note that confounding variables may exist

### Strengthening Causal Claims

Rank evidence by strength:

1. **Randomized controlled experiment** (A/B test) — strongest
2. **Quasi-experiment** (before/after with control group) — strong
3. **Natural experiment** (external shock creates comparison) — moderate
4. **Correlation with plausible mechanism** — suggestive
5. **Correlation without mechanism** — weak, flag explicitly
6. **Anecdote or single case** — directional only, never conclusive

## Handling Data Gaps

When data is insufficient for a confident decision, state it clearly and constructively:

### Acknowledge the Gap

- "We don't have retention data segmented by company size. Our recommendation is based on aggregate data, which may mask important segment differences."
- "No A/B test has been run on this flow. The projected impact is based on analogous tests in similar flows, with a confidence level of moderate."

### Recommend Data Collection

When a gap exists, suggest what to collect:

- **What data** — Define the specific metric or insight needed
- **How to collect it** — Survey, experiment, analytics instrumentation, customer interviews
- **Timeline** — How long to get a statistically significant result
- **Decision rule** — "If we see X, we proceed. If we see Y, we revisit."

### Decision Under Uncertainty

When a decision can't wait for perfect data, structure the approach:

1. **State the decision** and its reversibility (one-way vs. two-way door)
2. **Present available evidence** with confidence levels
3. **Identify key unknowns** and their potential impact
4. **Recommend** with explicit caveats: "Recommend proceeding based on moderate confidence. Set a 30-day checkpoint to evaluate [specific metrics]. Reversal criteria: if [metric] drops below [threshold]."
5. **Define the learning plan** — What will we measure to increase confidence?

## Benchmarks and Comparisons

Use industry benchmarks when available to provide context:

- **Sourcing:** Cite the benchmark source and its relevance to your context. "B2B SaaS median NRR is 110% (OpenView 2025 SaaS Benchmarks)."
- **Applicability:** Note when benchmarks may not apply: "This benchmark is skewed toward enterprise SaaS; our mid-market motion may differ."
- **Internal benchmarks:** Compare against your own historical performance, not just industry. "Our best quarter was 118% NRR in Q3 2024."

## Data Visualization Principles

Present data visually whenever it aids comprehension:

- **Trend data** — Line charts or sparklines showing direction over time
- **Comparisons** — Bar charts or tables with clear labels
- **Distributions** — Histograms or box plots when shape matters
- **Funnels** — Funnel charts with conversion rates at each stage
- **Relationships** — Scatter plots when showing correlation (with explicit correlation caveat)

In text-based environments, use tables with trend indicators and inline comparisons.

## Data Integrity Checks

Before citing any data:

- **Is the source reliable?** Primary data > secondary data > estimates
- **Is it current?** Data older than one quarter gets a freshness flag
- **Is the sample size sufficient?** Flag small samples: "Based on 12 responses — directional only"
- **Is it representative?** Note sample bias: "Survey respondents skew toward power users"
- **Has it been validated?** Cross-check against another source when the claim is high-stakes

## Anti-Patterns to Avoid

- **Cherry-picking** — Presenting only data that supports the recommendation while ignoring contradictory evidence
- **Precision theater** — "43.7% of users" when the sample is 23 people
- **Denominator hiding** — "200% growth!" (from 1 customer to 3)
- **Trailing indicators as proof** — Using lagging metrics to justify decisions about leading indicators
- **Data as decoration** — Including data that doesn't inform the decision
- **False precision** — Forecasting to the dollar when the methodology has ±30% error bars
- **Survivorship bias** — Analyzing only successful cases without examining failures
