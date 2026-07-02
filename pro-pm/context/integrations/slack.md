# Slack Integration

<!-- ═══════════════════════════════════════════════════════════════════════════
     SLACK CONFIGURATION
     Map your Slack landscape so AI can suggest the right channels for
     communication and understand where conversations happen.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Tool Name

Slack

## Connection Details

**Workspace URL:** <!-- Example: https://acme.slack.com -->
**Auth Method:** <!-- Bot Token / User Token / OAuth -->
**Token Location:** <!-- e.g., "Environment variable SLACK_BOT_TOKEN" -->

## Key Configuration

### Key Channels

<!-- Map the channels you use most and their purpose.
     
     Example:
       | Channel                  | Purpose                        | Who's In It           | Norms                          |
       |--------------------------|--------------------------------|-----------------------|--------------------------------|
       | #product                 | Product team discussions       | All PMs + leadership  | Announcements + discussion     |
       | #engineering             | Eng-wide announcements         | All engineers         | Announcements only; threads    |
       | #team-core               | Core product squad             | PM + EM + Eng + Design| Daily standup, sprint updates   |
       | #launches                | Launch coordination            | PM + PMM + CS + Sales | Launch announcements + GTM     |
       | #customer-feedback       | Customer voice channel         | PM + CS + Support     | Share verbatims + insights     |
       | #incidents               | Production incidents           | Eng + PM + Support    | P0/P1 real-time coordination   |
       | #proj-alert-triage       | Initiative-specific channel    | Initiative team       | Temporary; archive after launch|
       | #random                  | Social / off-topic             | Everyone              | Fun stuff, no work pressure    |
       | #announcements           | Company-wide announcements     | Everyone              | Leadership posts only          |
       | #cs-product-escalations  | CS → Product escalation path   | PM + CS leads         | Structured escalation format   |
-->


### Channel Naming Conventions

<!-- How are channels named in your org?
     Example:
       #team-[name]      — team-specific channels
       #proj-[name]      — project/initiative channels (temporary)
       #dept-[name]      — department-wide channels
       #ask-[name]       — Q&A channels (ask-engineering, ask-legal)
       #feed-[source]    — automated feed channels (feed-github, feed-datadog)
       #social-[topic]   — interest groups (social-running, social-cooking)
-->


### Bot Integrations

<!-- Bots and apps active in your workspace.
     Example:
       | Bot / App        | Purpose                        | Key Channels              |
       |------------------|--------------------------------|---------------------------|
       | Jira Bot         | Issue notifications            | #team-core, #engineering  |
       | GitHub           | PR/deploy notifications        | #team-core, #deploys      |
       | PagerDuty        | Incident alerts                | #incidents                |
       | Standup Bot      | Async standup collection       | #team-core                |
       | Donut            | Random 1:1 pairing             | #random                   |
       | Polly            | Quick polls and surveys        | Various                   |
-->


### Channel Norms

<!-- General Slack norms at your company.
     Example:
       - Use threads for discussions; keep top-level clean
       - @channel only for truly urgent items
       - Emojis as reactions encouraged (👍 = acknowledged, ✅ = done, 👀 = looking)
       - Status updates: set Slack status during focus time / OOO
       - DMs for personal topics; channels for anything others might benefit from
       - Don't expect responses outside business hours unless it's an incident
-->


## Permissions Needed by PM

<!-- Example:
       - Member of all product and team channels
       - Ability to create project channels
       - Access to customer-facing channels (if any)
       - Ability to install/manage bots in project channels
-->


## Common PM Operations

<!-- Example:
       - Post sprint updates in #team-core
       - Share PRD links for async review
       - Announce launches in #launches
       - Triage customer feedback from #customer-feedback
       - Create temporary #proj-* channels for initiatives
       - Run quick polls for team decisions
-->
