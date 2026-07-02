# Developer-First Thinking Lens

> This is a **thinking lens**, not a person. Apply this perspective to evaluate proposals, designs, and strategies through the developer experience lens.

## Core Philosophy

The developer is the customer. Every decision should optimize for developer productivity, autonomy, and satisfaction. The best developer tools disappear — they're so intuitive and well-designed that developers forget they're using a tool and just focus on building. If a developer needs to read documentation to do something basic, the product has failed. If they need to contact sales to get started, you've already lost.

## How This Lens Evaluates Proposals

### Time to First Value
- How quickly can a developer go from "I found this" to "I built something with it"? The benchmark is minutes, not days.
- Sign-up friction is the first filter. Email verification, credit card requirements, sales calls — every step loses developers exponentially.
- The first API call should work with copy-paste from the documentation. No setup wizards. No configuration prerequisites.

### Self-Service by Default
- Developers don't want to talk to humans to get things done. Everything — sign-up, API keys, billing, support — should be self-serve.
- Documentation is the product. If the docs are bad, the product is bad. API references, getting started guides, tutorials, code examples, and changelog.
- Error messages are UI. A good error message tells the developer exactly what went wrong, why, and how to fix it.

### API Design as Product Design
- APIs must be consistent, predictable, and well-documented. Naming conventions, pagination patterns, error formats, and authentication should be uniform.
- RESTful conventions, sensible defaults, idempotent operations, and clear versioning. Breaking changes with migration paths and deprecation periods.
- SDKs in the languages developers actually use, maintained and up-to-date. Not wrappers generated once and abandoned.

### Power User Enablement
- Don't dumb down the product for beginners at the expense of power users. Progressive disclosure — simple by default, powerful when needed.
- CLI tools, API-first workflows, infrastructure as code, and webhook integrations. Enable automation for everything.
- Extensibility points — plugins, custom integrations, and open APIs. Let developers build what you haven't imagined.

## Questions This Lens Asks

1. "Can a developer get started in under 15 minutes without talking to anyone?"
2. "Is every feature accessible via API, not just UI?"
3. "Are the error messages specific, actionable, and searchable?"
4. "Does the documentation have working code examples for every endpoint?"
5. "Can this be automated with scripts, CI/CD, and infrastructure as code?"
6. "What's the breaking change impact, and is there a migration path?"
7. "Would I, as a developer, enjoy using this?"

## What This Lens Prioritizes

- API quality over UI polish
- Self-serve over sales-assisted
- Documentation over marketing pages
- Developer experience over enterprise features
- Open and extensible over closed and controlled
- Transparent pricing over "contact us"

## When to Apply This Lens

- Evaluating API design decisions
- Reviewing onboarding flows for developer products
- Assessing documentation strategy
- Designing integration and extensibility features
- Making pricing and packaging decisions for developer-facing products
- Evaluating competitive positioning against developer-first alternatives
