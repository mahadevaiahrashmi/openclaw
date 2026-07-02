# Analytics Integration

<!-- ═══════════════════════════════════════════════════════════════════════════
     ANALYTICS CONFIGURATION
     Configure your analytics setup so AI can reference the right dashboards,
     metrics, and event schemas when helping with data-informed decisions.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Tool Name

<!-- Your primary analytics tool.
     Examples: Amplitude, Mixpanel, Heap, Pendo, Google Analytics,
     Segment (CDP), Snowflake/BigQuery (warehouse)
-->

## Connection Details

**Base URL:** <!-- Example: https://analytics.amplitude.com/acme -->
**Auth Method:** <!-- API Key / OAuth / SSO -->
**Token Location:** <!-- e.g., "Environment variable AMPLITUDE_API_KEY" -->

## Key Configuration

### Dashboard URLs

<!-- Links to your most important dashboards.
     Example:
       | Dashboard Name           | URL              | Purpose                    | Updated     |
       |--------------------------|------------------|----------------------------|-------------|
       | Product Health           | [link]           | DAU/WAU/MAU, retention     | Real-time   |
       | Feature Adoption         | [link]           | Per-feature usage rates    | Daily       |
       | Activation Funnel        | [link]           | Signup → value delivery    | Real-time   |
       | Revenue Metrics          | [link]           | ARR, NDR, churn            | Daily       |
       | Experiment Results       | [link]           | A/B test tracker           | Per-experiment|
       | Customer Health          | [link]           | Account-level engagement   | Weekly      |
       | Performance / SLA        | [link]           | Latency, uptime, errors    | Real-time   |
-->


### Key Reports

<!-- Reports you run regularly.
     Example:
       - Weekly Product Metrics Report (auto-generated every Monday)
       - Monthly Business Review deck (manual, pull from Looker)
       - Feature launch impact analysis (template in Amplitude)
       - Cohort retention analysis (quarterly)
       - Funnel analysis by segment (on demand)
-->


### Event Schema

<!-- Key events tracked in your analytics platform.
     Example:
       | Event Name               | Description                    | Key Properties              |
       |--------------------------|--------------------------------|-----------------------------|
       | user.signed_up           | New account created            | source, plan, referrer      |
       | user.activated           | Completed onboarding checklist | days_since_signup           |
       | alert.viewed             | User viewed an alert           | alert_type, severity        |
       | alert.investigated       | User started investigation     | alert_id, time_to_start    |
       | alert.resolved           | User resolved an alert         | resolution_type, time_total |
       | rule.created             | User created detection rule    | rule_type, template_used   |
       | report.generated         | User generated a report        | report_type, format        |
       | subscription.upgraded    | User upgraded plan             | from_plan, to_plan         |
       | subscription.churned     | Subscription cancelled         | reason, tenure_days        |

     Event naming convention: [object].[action] in snake_case
     
     Key user properties:
       - plan_type, company_size, industry, signup_date, activation_date
-->


### Segments & Cohorts

<!-- Pre-defined user segments.
     Example:
       - Free users, Team users, Business users, Enterprise users
       - Activated (completed onboarding) vs Non-activated
       - Power users (daily active, >10 actions/day)
       - At-risk (declining engagement trend)
       - New (signed up <30 days ago)
-->


## Permissions Needed by PM

<!-- Example:
       - Full read access to all dashboards and charts
       - Ability to create custom charts and cohorts
       - Ability to create and view user segments
       - Export data to CSV
       - Access to experiment platform (create/view A/B tests)
       - Self-serve SQL access to data warehouse (if applicable)
-->


## Common PM Operations

<!-- Example:
       - Check daily metrics in Product Health dashboard
       - Build feature adoption charts for new launches
       - Create funnel analysis for conversion optimization
       - Set up A/B tests for feature experiments
       - Pull cohort retention for quarterly reviews
       - Export data for custom analysis in spreadsheets
       - Build ad-hoc charts for stakeholder questions
-->


## Per-Tool Integration Files

Configure your primary analytics stack in dedicated files (see also [integrations/_index.md](_index.md)):

- [amplitude.md](amplitude.md) · [mixpanel.md](mixpanel.md) · [heap.md](heap.md) · [pendo.md](pendo.md)
- [google-analytics.md](google-analytics.md) · [segment.md](segment.md)
- [looker.md](looker.md) · [tableau.md](tableau.md) · [power-bi.md](power-bi.md)
- [fullstory.md](fullstory.md) · [hotjar.md](hotjar.md)

## Skills That Use This Integration

- `skills/measure/metrics-review.md`, `data-question.md`, `experiment-analysis.md`
- All `skills/tools/analytics/*` (load the matching per-tool file above)

## Data Warehouse (If Applicable)

<!-- If PMs have self-serve SQL access.
     Example:
       - Warehouse: Snowflake
       - PM access: Read-only via Looker SQL runner or Mode
       - Key schemas: analytics.events, analytics.users, billing.subscriptions
       - Useful tables: dim_users, fact_events, dim_accounts, fact_revenue
       - Query tool: Mode Analytics (https://app.mode.com/acme)
-->
