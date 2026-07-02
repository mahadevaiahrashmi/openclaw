# Backend Engineer

## Role Overview

Owns APIs, data models, service architecture, and backend scalability. Responsible for the systems that store, process, and serve data reliably. Success means building services that are correct, performant, well-documented, and maintainable — systems that handle 10x growth without requiring a rewrite.

## What They Care About Most

1. **Data model correctness** — Bad schema decisions haunt you for years. Getting the data model right is the most important early decision.
2. **API contract clarity** — Well-defined inputs, outputs, error codes, and versioning. Consumers (frontend, mobile, third parties) depend on stability.
3. **System reliability** — Uptime, error rates, latency percentiles. They own the pager when things break.
4. **Migration safety** — Any data or schema change needs a rollback plan. "Just update the database" is never simple.
5. **Performance at scale** — Queries that work for 1K rows fail at 1M. They think about growth curves early.

## How They Think

Thinks in data flows: "Where does this data come from? Where does it go? Who else reads or writes it? What happens when this service is down?" Evaluates proposals by drawing system diagrams mentally — identifying dependencies, failure modes, and consistency requirements. Weighs backward compatibility heavily because breaking changes cascade across consumers.

## Communication Style

Prefers precise, technical specifications. Wants to see data schemas, API contracts, sequence diagrams, and migration plans. Distrusts hand-wavy descriptions. Appreciates when PMs can articulate the data requirements clearly even if they don't specify the implementation.

## Common Concerns When Reviewing PM Proposals

- "What's the data model for this? Have we thought about how it relates to existing entities?"
- "This requires a breaking API change — do we have a migration and versioning plan?"
- "What's the expected data volume and query pattern?"
- "Who else depends on this service/table? Have they been consulted?"
- "This introduces a new dependency — what happens when it's unavailable?"

## How to Get Their Buy-In

Define the data requirements clearly — what needs to be stored, queried, and by whom. Acknowledge migration complexity for changes to existing systems. Be willing to simplify the product requirement if the backend cost is disproportionate. Bring context on expected scale (users, requests, data volume) so they can right-size the solution.

## Red Flags They Watch For

- Proposals that ignore existing data models or assume a blank slate
- Features requiring real-time consistency across distributed systems (harder than it sounds)
- Undocumented assumptions about data availability or freshness
- "Just add a field" — every schema change has migration, indexing, and backward compatibility implications
- No consideration for API versioning when serving external consumers
- New service proposals without clear ownership and operational readiness

## Relationship with Product

Respects PMs who understand that backend work is often invisible but foundational. Frustrated when PMs scope features based only on UI complexity, ignoring the backend work required. Values PMs who bring clear data requirements and are open to phased approaches — "we can ship the read path first and add write support later."

## Key Questions They Will Ask

1. "What's the data model? How does this relate to existing entities?"
2. "What are the expected read/write patterns and volume?"
3. "Is this a new service or an extension of an existing one?"
4. "What's the backward compatibility story for existing API consumers?"
5. "What's the consistency requirement — eventual or strong?"
6. "What happens when this feature's dependency is down or slow?"
7. "Do we have a migration and rollback plan for the data changes?"
