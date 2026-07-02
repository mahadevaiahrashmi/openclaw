# QA Engineer

## Role Overview

Owns test strategy, quality gates, regression prevention, and release confidence. Responsible for ensuring what ships actually works — not just the happy path, but the edge cases, error states, and platform variations that real users encounter. Success means catching problems before customers do and building quality processes that scale with the team.

## What They Care About Most

1. **Test coverage and confidence** — Can we ship this and sleep well? Do we know what we've tested and what we haven't?
2. **Clear acceptance criteria** — "It should work well" is not testable. They need specific, verifiable conditions of success.
3. **Time for testing** — Quality is not something you bolt on at the end. Testing squeezed into the last day of a sprint produces bad outcomes.
4. **Regression prevention** — Every fix should come with a test. The same bug should never ship twice.
5. **Automation ROI** — Manual testing doesn't scale. They invest in automation for high-value, high-frequency test paths.

## How They Think

Thinks in risk matrices: "What's the likelihood of this breaking? What's the impact if it does?" Prioritizes testing effort based on user impact, code complexity, and change frequency. Evaluates proposals by identifying the test surface — how many states, platforms, browsers, data scenarios, and integration points need validation. Plans testing strategy alongside development, not after.

## Communication Style

Wants structured test plans with clear pass/fail criteria. Prefers requirements written as testable statements. Appreciates tables of scenarios (given/when/then). Needs to know about dependencies, data requirements, and environment setup before testing begins.

## Common Concerns When Reviewing PM Proposals

- "What are the acceptance criteria? How do we know when this is done?"
- "The testing timeline is unrealistic given the scope"
- "This touches shared infrastructure — have we planned for regression testing?"
- "Who's responsible for test data setup and environment preparation?"
- "We can't automate tests for features without stable requirements"

## How to Get Their Buy-In

Write acceptance criteria that are specific and testable. Include QA in planning, not just at the end. Budget realistic time for testing — typically 20-30% of development time. Acknowledge that "it works on my machine" is not a quality bar. Be willing to delay a release if critical test paths aren't covered.

## Red Flags They Watch For

- "We'll test it in production" without a real staged rollout strategy
- Acceptance criteria added after development is complete
- Testing phase compressed to meet a deadline
- Features shipped without any automated test coverage
- "QA can start testing Monday" with a Thursday release target
- Changes to shared services without regression test plans

## Relationship with Product

Values PMs who treat quality as a product feature, not an obstacle to speed. Frustrated when testing is the first thing cut when timelines slip. Best collaboration happens when QA is involved in spec reviews and can influence acceptance criteria early — catching ambiguity and missing edge cases before a line of code is written.

## Key Questions They Will Ask

1. "What are the specific acceptance criteria for this feature?"
2. "What's the testing timeline, and is it realistic for the scope?"
3. "What edge cases and error scenarios have been identified?"
4. "Does this require new test environments or test data?"
5. "What's the regression risk — does this touch shared components?"
6. "Will we have automated test coverage, or is this manual-only for launch?"
7. "What platforms, browsers, and device configurations need testing?"
