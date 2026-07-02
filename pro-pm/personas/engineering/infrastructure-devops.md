# Infrastructure / DevOps Engineer

## Role Overview

Owns deployment pipelines, infrastructure reliability, monitoring, incident response, and cloud cost management. Responsible for keeping production running and making deployments safe, fast, and reversible. Success means high uptime, fast incident recovery, predictable costs, and developers who can ship without worrying about infrastructure.

## What They Care About Most

1. **Production reliability** — SLOs, uptime, mean time to recovery. They carry the pager. Every new feature is a potential incident.
2. **Operational readiness** — Does this feature have monitoring, alerting, runbooks, and rollback procedures before it ships?
3. **Infrastructure cost** — Cloud spend grows invisibly. Every new service, database, and compute instance has ongoing cost.
4. **Deployment safety** — Canary deploys, feature flags, rollback capability. "Just push it" is not a deployment strategy.
5. **Automation** — Toil is the enemy. If a human does it twice, it should be automated.

## How They Think

Thinks in failure scenarios: "What happens when this crashes at 3 AM? Who gets paged? What's the blast radius? Can we roll back in under 5 minutes?" Evaluates proposals by assessing operational surface area — every new service means new monitoring, alerting, capacity planning, and on-call burden. Weighs total cost of ownership, not just build cost.

## Communication Style

Prefers runbooks, architecture diagrams with infrastructure components, and clear SLO/SLA requirements. Wants to know about new services, databases, and external dependencies before they appear in production. Appreciates early involvement in design — not being told after the fact that a new service needs to be deployed.

## Common Concerns When Reviewing PM Proposals

- "Who's on-call for this new service? Is the team ready to support it in production?"
- "What's the monitoring and alerting plan? How will we know if this is broken?"
- "What's the estimated infrastructure cost? Has anyone modeled the cloud spend?"
- "This requires a new database/queue/cache — do we really need another stateful dependency?"
- "What's the rollback plan if this deployment goes wrong?"

## How to Get Their Buy-In

Include operational requirements in the spec — SLOs, monitoring needs, cost estimates, rollback strategy. Acknowledge that "launching" is not the end; operating is ongoing. Be open to phased rollouts (canary, percentage-based) rather than big-bang launches. Treat infrastructure work (monitoring, alerting, scaling) as first-class scope, not afterthought.

## Red Flags They Watch For

- Features shipped without monitoring or alerting
- New stateful services without capacity planning
- Cost-ignorant designs (unbounded queues, unindexed queries, chatty microservices)
- "We'll add monitoring later" — later never comes
- Proposals that assume infinite infrastructure elasticity
- External service dependencies without fallback strategies

## Relationship with Product

Appreciates PMs who understand that reliability is a feature. Frustrated when ops readiness is treated as a checkbox rather than a design requirement. Values PMs who include SLOs and operational requirements in PRDs and who advocate for infrastructure investment alongside feature work.

## Key Questions They Will Ask

1. "What SLO does this feature need to meet?"
2. "What monitoring and alerting will be in place before launch?"
3. "What's the estimated monthly infrastructure cost?"
4. "How does this deploy — feature flag, canary, blue-green?"
5. "What's the rollback plan and how fast can we execute it?"
6. "Does this create new on-call burden, and which team owns it?"
7. "What external dependencies does this introduce, and what happens when they're down?"
