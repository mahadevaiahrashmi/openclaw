# Codebase Integration

<!-- ═══════════════════════════════════════════════════════════════════════════
     CODEBASE CONTEXT FOR PMs
     You don't need to be an engineer, but knowing how to navigate the codebase
     helps you write better requirements, estimate feasibility, and communicate
     with engineering. Configure this so AI can reference code context.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Tool Name

<!-- Your source code platform.
     Examples: GitHub, GitLab, Bitbucket, Azure DevOps -->

## Connection Details

**Base URL:** <!-- Example: https://github.com/acme -->
**Auth Method:** <!-- PAT / SSH / OAuth / GitHub App -->
**Token Location:** <!-- e.g., "Environment variable GITHUB_TOKEN" -->

## Key Configuration

### Repositories

<!-- List the repos relevant to your product.
     Example:
       | Repo Name          | URL                              | Language    | Purpose              |
       |--------------------|----------------------------------|-------------|----------------------|
       | threat-shield      | github.com/acme/threat-shield    | Monorepo    | Main product         |
       | marketing-site     | github.com/acme/marketing-site   | TypeScript  | Public website       |
       | docs               | github.com/acme/docs             | Markdown    | API & user docs      |
       | infra              | github.com/acme/infra            | Terraform   | Infrastructure       |
       | data-pipeline      | github.com/acme/data-pipeline    | Python      | ML & data processing |
-->


### Key Modules / Directory Structure

<!-- Help a PM navigate the codebase.
     Example:
       threat-shield/ (monorepo)
       ├── apps/
       │   ├── web/              — React frontend (what users see)
       │   ├── api/              — Express API server (REST endpoints)
       │   └── worker/           — Background job processing
       ├── services/
       │   ├── detection/        — ML-powered threat detection (Python)
       │   ├── notification/     — Alert delivery (email, Slack, webhook)
       │   └── reporting/        — Report generation service
       ├── packages/
       │   ├── types/            — Shared TypeScript types
       │   ├── ui/               — Shared React component library
       │   └── config/           — Shared configuration
       ├── infra/                — Terraform infrastructure code
       └── docs/                 — Internal documentation
-->


### How to Navigate as a PM

<!-- Practical tips for PMs working with the codebase.
     Example:
       - **Find a feature's code:** Search for the feature flag name in the codebase
         (e.g., search for "FF_AUTO_TRIAGE" to find auto-triage feature code)
       - **Understand an API endpoint:** Look in apps/api/routes/ — each file
         corresponds to an API resource
       - **See the data model:** Check packages/types/ for TypeScript interfaces
         that define the data structures
       - **Find UI components:** Look in packages/ui/src/components/ for the
         shared component library
       - **Read feature flags:** Check apps/web/src/flags.ts for all feature flags
-->


### Architectural Notes

<!-- Key architectural patterns and decisions.
     Example:
       - **Monorepo:** All code in one repo; managed with Turborepo
       - **API versioning:** URL-based (v1, v2); both active
       - **Feature flags:** LaunchDarkly; all new features behind flags
       - **Database:** PostgreSQL with Prisma ORM; migrations in prisma/
       - **Auth:** Auth0 for user auth; API keys for machine auth
       - **Deployment:** Containerized; deployed to AWS ECS via GitHub Actions
       - **Testing:** Jest for unit tests, Playwright for E2E
-->


## Permissions Needed by PM

<!-- Example:
       - Read access to all product repos
       - Ability to browse code, PRs, and issues
       - Access to CI/CD status (build results, deploy status)
       - No write/merge access needed (engineering handles code changes)
       - Access to feature flag dashboard (LaunchDarkly)
-->


## Common PM Operations

<!-- Example:
       - Browse PRs to understand what's shipping this sprint
       - Check CI status before sprint demos
       - Search codebase for feature flag references
       - Review API documentation in docs repo
       - Check release notes / changelog
       - Look at open issues tagged with your product area
       - Reference data model when writing PRD technical sections
-->
