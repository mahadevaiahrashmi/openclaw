# ML / AI Engineer

## Role Overview

Owns model development, training, evaluation, deployment, and monitoring. Responsible for building AI/ML systems that deliver measurable value while managing the unique challenges of probabilistic systems — data dependency, model drift, evaluation complexity, and inference cost. Success means models that reliably improve user outcomes, are cost-effective to run, and degrade gracefully.

## What They Care About Most

1. **Data quality and availability** — Models are only as good as their training data. Garbage in, garbage out is not a cliche, it's a law.
2. **Clear evaluation metrics** — "Make it smarter" is not an objective. They need specific, measurable definitions of success that can be evaluated offline and online.
3. **Model performance vs. cost trade-offs** — Better models are more expensive to train and serve. The right model balances accuracy with inference cost and latency.
4. **Bias and fairness** — Models can encode and amplify biases in training data. This creates legal, ethical, and reputational risk.
5. **Deployment and monitoring** — ML systems drift over time. Without monitoring, models silently degrade and produce worse results.

## How They Think

Thinks experimentally: "What's the hypothesis? How do we test it? What data do we need? How long will the experiment run? What's the baseline?" Evaluates proposals by asking whether the data exists to train a model, whether the problem is well-defined enough for ML, and whether simpler approaches (rules, heuristics) would work. Deeply skeptical of "just add AI" requirements that lack a clear data strategy.

## Communication Style

Wants problem definitions, not solution prescriptions. Prefers discussions framed around user outcomes and success metrics rather than specific model architectures. Appreciates when PMs understand that ML development is iterative and uncertain — the first model is rarely the best, and timelines are harder to predict than deterministic software.

## Common Concerns When Reviewing PM Proposals

- "Do we have enough high-quality labeled data for this use case?"
- "What's the success metric, and what's the baseline we're improving on?"
- "Have we considered whether a simpler non-ML approach would work?"
- "What's the inference cost budget for this feature?"
- "How do we handle model failures gracefully in the UX?"

## How to Get Their Buy-In

Start with the problem, not "we need AI." Define clear success metrics with baselines. Acknowledge the iterative nature of ML development — commit to a research/evaluation phase before promising a ship date. Ensure the data strategy is in place (collection, labeling, privacy) before expecting model development to begin. Budget for ongoing model monitoring and retraining.

## Red Flags They Watch For

- "Add AI to this" without a clear problem definition or data strategy
- Promising specific ML accuracy to customers before research is complete
- Underestimating the time and cost of data collection, labeling, and cleaning
- Treating ML models as "build once, ship forever" — ignoring drift and retraining
- No plan for handling model errors or confidence thresholds in the UX
- Assuming off-the-shelf models will work without fine-tuning or evaluation

## Relationship with Product

Values PMs who bring well-defined problems and measurable outcomes. Frustrated when PMs promise AI features with specific timelines before feasibility research. Best collaboration happens when PMs treat ML development as a partnership with shared uncertainty — defining the problem together, agreeing on evaluation criteria, and iterating based on results rather than predetermined specs.

## Key Questions They Will Ask

1. "What training data do we have, and how is it labeled?"
2. "What's the success metric, and what's the current baseline?"
3. "Have we validated that ML is the right approach versus rules or heuristics?"
4. "What's the latency and cost budget for model inference?"
5. "How do we handle cases where the model is wrong or uncertain?"
6. "What's the plan for monitoring model performance and retraining?"
7. "Are there bias or fairness concerns with the training data or use case?"
