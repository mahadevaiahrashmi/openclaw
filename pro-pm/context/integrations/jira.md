# Jira Integration

<!-- ═══════════════════════════════════════════════════════════════════════════
     JIRA CONFIGURATION
     Configure your Jira connection so AI skills can reference projects, boards,
     and workflows accurately. Never store actual tokens in this file — use
     environment variables or a secrets manager.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Tool Name

Jira (Cloud / Data Center — specify which)

## Connection Details

<!-- Base URL for your Jira instance -->
<!-- Example: https://acme.atlassian.net -->
**Base URL:**

<!-- Authentication method — DO NOT store actual tokens here -->
**Auth Method:** <!-- API Token / OAuth 2.0 / PAT (Personal Access Token) -->
**Token Location:** <!-- e.g., "Stored in 1Password vault 'Engineering'" or
                         "Environment variable JIRA_API_TOKEN" -->

## Key Configuration

### Project Keys

<!-- List your relevant Jira projects with their keys.
     Example:
       | Project Key | Project Name         | Type   | PM Owner    |
       |-------------|----------------------|--------|-------------|
       | CORE        | Core Product         | Scrum  | Jordan      |
       | PLAT        | Platform             | Kanban | Alex        |
       | GROW        | Growth & PLG         | Scrum  | Sam         |
       | INFRA       | Infrastructure       | Kanban | (Eng-owned) |
       | SUP         | Support Escalations  | Kanban | Casey       |
-->


### Board URLs

<!-- Direct links to the boards you use most.
     Example:
       - Core Sprint Board: https://acme.atlassian.net/jira/software/projects/CORE/boards/1
       - Platform Kanban: https://acme.atlassian.net/jira/software/projects/PLAT/boards/3
       - Cross-Team Roadmap: https://acme.atlassian.net/jira/software/projects/CORE/boards/1/roadmap
-->


### Custom Fields

<!-- Non-standard fields your team uses.
     Example:
       | Field Name       | Field ID        | Purpose                    | Values                     |
       |------------------|-----------------|----------------------------|----------------------------|
       | Priority Score   | customfield_10001| RICE score (0-100)        | Numeric                    |
       | T-Shirt Size     | customfield_10002| Effort estimate           | XS, S, M, L, XL           |
       | Customer Impact  | customfield_10003| Affected customer count   | Numeric                    |
       | Product Area     | customfield_10004| Feature categorization    | Core, Platform, Growth     |
       | Launch Tier      | customfield_10005| GTM tier for launches     | Tier 1, Tier 2, Tier 3     |
-->


### Workflow States

<!-- Your project's workflow states (may differ by project).
     Example:
       | State          | Category    | Meaning                              |
       |----------------|-------------|--------------------------------------|
       | Backlog        | To Do       | Prioritized but not scheduled        |
       | Ready for Dev  | To Do       | Groomed, estimated, ready to pull    |
       | In Progress    | In Progress | Actively being worked on             |
       | In Review      | In Progress | PR open, awaiting code review        |
       | QA             | In Progress | Testing in progress                  |
       | Done           | Done        | Merged and deployed                  |
       | Won't Do       | Done        | Decided not to build                 |
-->


### Issue Types

<!-- What issue types does your team use?
     Example:
       - Epic — large initiative (maps to a product initiative)
       - Story — user-facing feature or capability
       - Task — non-user-facing work (tech debt, infra, process)
       - Bug — defect in existing functionality
       - Sub-task — breakdown of a story or task
       - Spike — time-boxed research or investigation
-->


## Permissions Needed by PM

<!-- What Jira permissions does a PM typically need?
     Example:
       - Create/edit issues in product projects
       - Manage sprint backlogs (move, reorder, assign)
       - Create/edit epics and versions
       - View all boards and backlogs
       - Create filters and dashboards
       - Export data (for reporting)
       - Admin: NOT needed (managed by Jira admin team)
-->


## Common PM Operations

<!-- Frequent tasks you do in Jira, for AI reference.
     Example:
       - Create stories with acceptance criteria and link to epic
       - Move items between sprints during grooming
       - Update priority scores based on RICE framework
       - Run sprint velocity reports
       - Create release versions and assign stories
       - Query backlog: JQL examples you use often
         - My open stories: project = CORE AND assignee = currentUser() AND status != Done
         - Sprint scope: project = CORE AND sprint in openSprints()
         - Bugs by priority: project = CORE AND type = Bug ORDER BY priority
-->


## Integrations

<!-- Other tools connected to Jira.
     Example:
       - GitHub: auto-link PRs to Jira issues via branch naming (CORE-123-feature-name)
       - Slack: notifications in #eng-core for status changes
       - Confluence: linked knowledge base pages
       - PagerDuty: P0 incidents auto-create Jira tickets
-->
