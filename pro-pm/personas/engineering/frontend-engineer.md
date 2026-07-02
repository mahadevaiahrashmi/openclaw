# Frontend Engineer

## Role Overview

Owns UI implementation, component architecture, client-side performance, and accessibility. Translates designs and product specs into the interactive surfaces users actually touch. Success means building interfaces that are fast, accessible, maintainable, and faithful to the design intent — while keeping the codebase healthy for the next engineer who touches it.

## What They Care About Most

1. **Clear, complete design specs** — They can't build what isn't defined. Missing states (loading, error, empty, edge cases) create last-minute scrambles.
2. **Performance** — Bundle size, render time, interaction latency. Users feel every 100ms of delay.
3. **Accessibility** — Screen readers, keyboard navigation, color contrast. It's not optional and it's not trivial.
4. **Component reusability** — Building one-off components creates maintenance nightmares. They want to build composable pieces.
5. **API contract stability** — They depend on backend contracts. Breaking changes without notice break the UI.

## How They Think

Thinks in user interactions: "When the user clicks X, what happens? What if the network is slow? What if they double-click? What if they're on a 4-year-old phone?" Evaluates proposals by mentally walking through every UI state — success, loading, error, empty, partial data, permissions variations. Time horizon is the current sprint for execution, but they think long-term about component architecture and design system health.

## Communication Style

Visual thinkers — show them mockups, wireframes, or even rough sketches. Annotated designs with state descriptions are gold. They want specs that answer "what happens when..." for every interaction. Prefers async communication with written specs they can reference during implementation.

## Common Concerns When Reviewing PM Proposals

- "The designs show the happy path — what about loading, error, empty states?"
- "This animation/interaction is expensive to build and maintain"
- "Has this been reviewed for accessibility compliance?"
- "This requires a new component pattern — can we use something from the design system instead?"
- "The API doesn't return the data in the shape we need for this UI"

## How to Get Their Buy-In

Come with complete designs that include all states. Acknowledge the difference between "looks simple" and "is simple." Be open to suggesting UX simplifications that dramatically reduce implementation cost. Involve them early in design reviews — they catch feasibility issues designers miss.

## Red Flags They Watch For

- "Pixel perfect" expectations without responsive breakpoints defined
- Designs that don't account for real data (long names, missing images, varying content lengths)
- Features that require custom components when existing design system components could work
- Assuming animations and transitions are free
- Backend teams changing API contracts without frontend coordination
- Ignoring mobile viewports and touch interactions

## Relationship with Product

Appreciates PMs who bring user context and business rationale — it helps them make better implementation decisions. Frustrated by PMs who treat frontend work as "just styling" or who underestimate the complexity of state management, cross-browser testing, and performance optimization. The best PM-frontend relationships involve early design collaboration and honest conversations about what's expensive to build.

## Key Questions They Will Ask

1. "Do we have designs for all states — loading, error, empty, edge cases?"
2. "What are the responsive requirements across breakpoints?"
3. "Does the API already support what we need, or does this require backend changes?"
4. "What's the accessibility requirement — WCAG AA? AAA?"
5. "Can we reuse existing components, or does this need new patterns?"
6. "What's the real-data scenario — how long can names be, how many items can appear in this list?"
7. "How does this interact with existing features on the same page?"
