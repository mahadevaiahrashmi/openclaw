# Mobile Engineer

## Role Overview

Owns native mobile app development across iOS and/or Android, including platform compliance, app performance, and the unique constraints of mobile environments. Responsible for building experiences that feel native, perform well on constrained hardware, and survive app store review processes. Success means a responsive, reliable app that respects platform conventions and works gracefully offline or on poor networks.

## What They Care About Most

1. **Platform conventions and guidelines** — Apple and Google have specific Human Interface Guidelines and Material Design standards. Violating them risks app store rejection and poor user experience.
2. **App performance** — Startup time, memory usage, battery drain, and frame rates. Mobile users are unforgiving of sluggish apps.
3. **Offline and network resilience** — Mobile networks are unreliable. Features must handle poor connectivity, interrupted requests, and offline states gracefully.
4. **App store review and release cycles** — Unlike web, mobile releases require review approval (1-7 days for iOS). Hotfixes are slow. This changes how you plan rollouts and experiments.
5. **App size and resource management** — Users on constrained storage or metered data care about download size. Every asset and library adds up.

## How They Think

Thinks in mobile constraints: "What happens on a 3-year-old phone with 2GB of RAM on a 3G connection? What if the user backgrounded the app mid-operation? What if the OS killed the process for memory?" Evaluates proposals through the lens of platform capabilities, release constraints, and device diversity. Plans features with update adoption curves in mind — not all users update immediately.

## Communication Style

Wants requirements that account for mobile realities — offline behavior, platform differences, push notification strategies, and deep linking flows. Appreciates when designs include platform-specific variations rather than assuming one-size-fits-all. Prefers specs that address iOS and Android differences explicitly.

## Common Concerns When Reviewing PM Proposals

- "This design doesn't follow platform conventions — it'll feel foreign to users"
- "What's the offline behavior? Mobile users lose connectivity constantly"
- "We can't hotfix this if something goes wrong — the app store review takes days"
- "This web-first design doesn't translate well to mobile interactions"
- "Adding this SDK will increase our app size by X MB and add battery drain"

## How to Get Their Buy-In

Design with mobile constraints in mind from the start — don't adapt a web design after the fact. Account for app store review cycles in your launch timeline. Be open to platform-specific UX when it makes the experience better. Understand that feature flags and server-driven configuration are essential for mobile — they enable changes without app updates.

## Red Flags They Watch For

- Web designs applied directly to mobile without adaptation
- Features that assume always-on connectivity
- Launch timelines that don't account for app store review
- Heavy new dependencies that bloat the app
- Assuming all users are on the latest OS version
- Push notification strategies without considering user permission rates and platform restrictions
- "We'll just use a WebView for this" as a shortcut

## Relationship with Product

Values PMs who understand mobile is not "small web." Frustrated when mobile is treated as a secondary platform that gets a port of the web feature. Best collaboration happens when PMs involve mobile engineering early in design, acknowledge platform constraints, and plan releases that account for the unique rhythms of mobile deployment.

## Key Questions They Will Ask

1. "Does this design follow iOS Human Interface Guidelines / Material Design?"
2. "What's the offline and poor-connectivity behavior?"
3. "Have we accounted for app store review time in the launch timeline?"
4. "What's the minimum supported OS version, and does this feature work there?"
5. "How does this affect app size, startup time, and battery usage?"
6. "Is this feature-flagged so we can control rollout without a new release?"
7. "What are the differences between the iOS and Android implementations?"
