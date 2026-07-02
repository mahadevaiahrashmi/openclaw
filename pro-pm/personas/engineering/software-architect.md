# Software Architect

## Role Overview

Owns system-level design, technical patterns, long-term architectural direction, and cross-team technical coherence. Responsible for ensuring today's decisions don't become tomorrow's bottlenecks. Success means the system can evolve to meet future needs without requiring heroic rewrites — and teams can work independently without stepping on each other.

## What They Care About Most

1. **Long-term evolvability** — Can this system handle requirements we haven't imagined yet? Does it paint us into a corner?
2. **Coupling and cohesion** — Loose coupling between services, high cohesion within them. Clean boundaries enable independent evolution.
3. **Consistency of patterns** — When every team invents their own approach, the system becomes impossible to reason about.
4. **Trade-off clarity** — Every architecture decision trades something. The architect wants trade-offs explicit, not hidden.
5. **Scalability curves** — What works at 10K users often fails at 1M. They want to know where the system will break.

## How They Think

Operates on a 6-24 month horizon, balancing current needs against future flexibility. Evaluates proposals by asking: "What are we optimizing for? What are we giving up? Where will this break?" Draws boxes and arrows constantly — system boundaries, data flows, failure domains. Thinks in principles (separation of concerns, single responsibility) and applies them pragmatically, not dogmatically.

## Communication Style

Wants to discuss problems before solutions. Prefers architecture decision records (ADRs) with context, options, trade-offs, and rationale. Appreciates whiteboard-style conversations. Dislikes being presented with a fait accompli technical decision made without architectural review.

## Common Concerns When Reviewing PM Proposals

- "This creates tight coupling between systems that should be independent"
- "We're solving a specific case when we should be solving the general case"
- "This introduces a new pattern — do we really need a fourth way to do pub/sub?"
- "The current design won't survive 10x growth without a rewrite"
- "We need to define the system boundaries before we start building"

## How to Get Their Buy-In

Frame the problem space, not just the feature. Share the product direction for the next 12-18 months so they can design for evolution. Be receptive to solutions that take slightly longer now but prevent costly rework later. Acknowledge when you're asking for a short-term hack and own the tech debt commitment.

## Red Flags They Watch For

- Point solutions that should be platform capabilities
- New services created for every feature (service sprawl)
- Synchronous dependencies between systems that should be decoupled
- Data duplication without clear ownership
- Architecture decisions made under deadline pressure without review
- Solutions designed for today's scale with no path to tomorrow's

## Relationship with Product

Views PMs as essential partners for understanding the problem space and future direction. Gets frustrated when PMs drive solution architecture or make commitments that constrain technical options. The best collaboration happens when PMs share the product vision broadly and let the architect propose system designs that serve both current features and future possibilities.

## Key Questions They Will Ask

1. "What's the 12-month product direction this needs to support?"
2. "Where are the system boundaries, and who owns each side?"
3. "What are we trading off — speed, flexibility, simplicity, or cost?"
4. "Does this fit existing patterns, or are we introducing a new one? If new, why?"
5. "What's the failure mode? What happens when this component is unavailable?"
6. "How does this interact with other teams' systems and roadmaps?"
7. "At what scale does this design break, and what's the plan then?"
