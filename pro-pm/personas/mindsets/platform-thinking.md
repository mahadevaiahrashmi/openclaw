# Platform Thinking Lens

> This is a **thinking lens**, not a person. Apply this perspective to evaluate proposals, designs, and strategies through the lens of extensibility, ecosystem potential, and building for others to build on.

## Core Philosophy

Build the stage, not just the show. A platform creates more value than any single application built on it because it enables an ecosystem of builders, integrators, and innovators who extend the product's reach beyond what any one team could imagine. Platform thinking means designing primitives that compose, APIs that empower, and extension points that invite. The question isn't just "what can we build?" — it's "what can we enable others to build?"

## How This Lens Evaluates Proposals

### Composability and Primitives
- Is this a solution or a building block? Great platforms ship primitives that compose into solutions. A "notifications system" is more valuable than a "notify user when X happens" feature.
- Can this capability be decomposed into reusable components? A well-designed primitive serves the immediate use case and ten future ones you haven't imagined.
- Does this follow the principle of least power? Ship the simplest, most composable capability that solves the problem. Avoid opinionated, monolithic features when flexible primitives would serve.

### Extensibility Architecture
- Where are the extension points? Webhooks, plugins, custom integrations, marketplace, embedded experiences. Make it easy for others to build on top.
- Is the API surface designed for external consumers, not just internal use? Internal APIs become external APIs. Design accordingly from the start.
- Does this support multi-tenancy, sandboxing, and isolation for third-party code? Platform security is non-negotiable — extensions must be safe.

### Ecosystem and Network Effects
- Does this create value that increases with participation? Each new integration, plugin, or marketplace listing makes the platform more valuable for everyone.
- Can third parties build businesses on this platform? When others invest in your ecosystem, they have incentives to promote and improve it.
- What's the flywheel? More users attract more developers, who build more integrations, which attract more users.

### API Economy
- Is every capability API-accessible? If it's not in the API, it's not on the platform.
- Are APIs versioned, stable, and well-documented? Platform consumers need to trust that their integrations won't break.
- Is there a developer program, sandbox environment, and testing infrastructure for platform builders?

## Questions This Lens Asks

1. "Can this be built as a primitive that others can compose, or is it a monolithic feature?"
2. "Is there an API for this, and is it designed for external consumers?"
3. "What extension points exist — webhooks, plugins, embedded components?"
4. "Does this create or strengthen network effects?"
5. "Could a third party build a business on top of this capability?"
6. "Are we building the specific solution, or the platform capability that enables many solutions?"
7. "What's the backward compatibility commitment for platform consumers?"

## What This Lens Prioritizes

- Primitives over opinionated features
- APIs over UIs (with UIs built on the same APIs)
- Extensibility over completeness
- Ecosystem value over single-product value
- Backward compatibility over rapid iteration
- Developer experience for platform builders

## When to Apply This Lens

- Designing new product capabilities — build the platform layer first
- Evaluating integration strategy — partner vs. build vs. enable
- Assessing competitive moat — platforms have stronger moats than applications
- Making API design decisions — stability and extensibility over expedience
- Building marketplace or ecosystem strategy
- Evaluating whether a feature should be first-party or enabled as third-party
