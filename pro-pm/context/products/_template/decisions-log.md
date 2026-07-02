# Product Decisions Log

<!-- ═══════════════════════════════════════════════════════════════════════════
     DECISION MEMORY
     Record significant product decisions. Creates institutional memory —
     future you (and AI) can understand WHY decisions were made.

     When to log: prioritization calls, architecture choices, pricing changes,
     go/no-go launches, scope cuts, policy decisions.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Decisions

<!-- TEMPLATE:
     ### [YYYY-MM-DD] [Short Decision Title]
     **Decision:** [What was decided]
     **Context:** [Why this decision was needed]
     **Options Considered:**
       1. [Option A] — [pros/cons]
       2. [Option B] — [pros/cons]
     **Rationale:** [Why this option won]
     **Outcome:** [Fill in later]
     **Owner:** [Who drove it]
     **Links:** [PRD, RFC, Slack thread]
-->

### 2026-05-15 — Example: Chose REST over GraphQL for API v2

**Decision:** API v2 will use REST with OpenAPI spec, not GraphQL.

**Context:** Evaluating architecture for public developer API. GraphQL requested
by 3 enterprise customers.

**Options Considered:**
1. **GraphQL** — Flexible queries, but higher learning curve for partners
2. **REST with OpenAPI** — Industry standard, excellent tooling, easy to version
3. **Hybrid** — Maximum flexibility, but doubles maintenance burden

**Rationale:** 90% of integration partners use REST; OpenAPI enables auto-generated
SDKs; team has deep REST expertise. Will revisit if partner feedback shifts.

**Outcome:** _[To be filled in after launch]_

**Owner:** Jordan (PM) + Priya (Eng Lead)

**Links:** [API Strategy RFC](#) · [Eng discussion](#)

---

<!-- ADD YOUR DECISIONS BELOW ↓ -->
