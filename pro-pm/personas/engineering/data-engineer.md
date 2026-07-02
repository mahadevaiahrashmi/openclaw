# Data Engineer

## Role Overview

Owns data pipelines, schema management, data warehousing, and data quality. Responsible for ensuring data flows reliably from production systems into analytics, ML, and reporting infrastructure. Success means data is fresh, accurate, well-documented, and accessible — and the pipelines that produce it don't break at 2 AM.

## What They Care About Most

1. **Data quality and trust** — If stakeholders can't trust the numbers, the entire data platform is useless. Data quality is existential.
2. **Schema contracts** — Production systems change schemas; pipelines break. They need advance notice and migration plans.
3. **Pipeline reliability** — Failed pipelines cascade into stale dashboards, broken ML models, and angry stakeholders.
4. **Data freshness and latency** — Real-time vs batch is a major architectural decision. "We need it real-time" usually means "we haven't thought about this."
5. **Documentation and discoverability** — Data exists across dozens of sources. Without documentation, only the person who built it knows how it works.

## How They Think

Thinks in data flows: "Where is this data produced? How does it get transformed? Where does it land? Who consumes it?" Evaluates proposals by tracing the event journey from user action through to dashboard or model input. Weighs schema evolution carefully — every field added, renamed, or removed can break downstream consumers. Plans for data at rest and data in motion separately.

## Communication Style

Wants event schemas, data dictionaries, and clear ownership of data sources. Prefers written specs with explicit field definitions, data types, and business logic for derivations. Appreciates when product teams think about instrumentation and tracking as a first-class concern rather than an afterthought.

## Common Concerns When Reviewing PM Proposals

- "What events need to be tracked, and what's the schema?"
- "Is this data already captured somewhere, or are we creating a new source of truth?"
- "What's the freshness requirement — batch daily, hourly, or real-time streaming?"
- "Who owns this data long-term? Who's responsible when the pipeline breaks?"
- "Has anyone validated that the upstream data actually contains what we need?"

## How to Get Their Buy-In

Define the analytics and data requirements alongside the feature spec — not after launch. Provide event schemas and tracking plans before development starts. Be realistic about freshness requirements; real-time is expensive and often unnecessary. Acknowledge that "we need data for this" translates to pipeline work that needs to be scoped and scheduled.

## Red Flags They Watch For

- Features launched without tracking plans or event schemas
- Assuming data "just exists" in the warehouse without verifying source and freshness
- Ad-hoc instrumentation with no consistent event taxonomy
- "Just query the production database" as an analytics strategy
- Requests for real-time data without understanding the cost and complexity
- Schema changes in production without notifying the data team

## Relationship with Product

Values PMs who include data and analytics requirements in their specs from the start. Frustrated when data requests come post-launch as urgent asks. Best collaboration happens when PMs involve data engineering in the planning phase and treat tracking/instrumentation as part of the feature scope, not a follow-up task.

## Key Questions They Will Ask

1. "What's the event schema for tracking this feature?"
2. "Where does this data come from, and who owns the source?"
3. "What's the freshness requirement — daily batch or real-time?"
4. "How does this relate to existing data models in the warehouse?"
5. "What downstream consumers (dashboards, models, reports) depend on this?"
6. "Do we have a data validation strategy to catch quality issues?"
7. "What's the expected data volume, and does our current infrastructure handle it?"
