# Confluence Integration

<!-- ═══════════════════════════════════════════════════════════════════════════
     CONFLUENCE CONFIGURATION
     Configure your Confluence setup so AI can reference the right spaces,
     templates, and page hierarchies when generating documentation.
     ═══════════════════════════════════════════════════════════════════════════ -->

## Tool Name

Confluence (Cloud / Data Center — specify which)

## Connection Details

**Base URL:** <!-- Example: https://acme.atlassian.net/wiki -->
**Auth Method:** <!-- API Token / OAuth 2.0 / PAT -->
**Token Location:** <!-- e.g., "Same as Jira — shared Atlassian API token" -->

## Key Configuration

### Space Keys

<!-- List your relevant Confluence spaces.
     Example:
       | Space Key | Space Name              | Purpose                    | Access      |
       |-----------|-------------------------|----------------------------|-------------|
       | PROD      | Product                 | PRDs, roadmaps, strategies | Product org |
       | ENG       | Engineering             | Tech specs, ADRs, runbooks | Eng org     |
       | TEAM      | Team Hub                | Team processes, onboarding | All staff   |
       | GTM       | Go-to-Market            | Launch plans, messaging    | GTM team    |
       | CUST      | Customer Intelligence   | Research, personas, feedback| Prod + CS  |
       | KB        | Knowledge Base          | Internal docs, how-tos     | All staff   |
-->


### Page Hierarchies

<!-- How are pages organized within your key spaces?
     Example:
       PROD (Product Space)
       ├── Roadmap
       │   ├── Q3 2026 Roadmap
       │   └── Long-Term Vision
       ├── PRDs
       │   ├── [Year] PRDs
       │   │   ├── PRD: Feature Name
       │   │   └── ...
       │   └── PRD Template
       ├── Strategy
       │   ├── Product Strategy 2026
       │   └── Market Analysis
       ├── Decisions
       │   └── ADR: Decision Title
       └── Retrospectives
           └── Sprint NN Retro
-->


### Templates Used

<!-- What templates does your team use?
     Example:
       | Template Name          | Space | Purpose                         |
       |------------------------|-------|---------------------------------|
       | PRD Template           | PROD  | Standard product requirements   |
       | Problem Brief          | PROD  | 1-pager for discovery proposals |
       | Launch Plan            | GTM   | GTM checklist for launches      |
       | Sprint Retro           | PROD  | Sprint retrospective format     |
       | Architecture Decision  | ENG   | ADR format for tech decisions   |
       | Meeting Notes          | TEAM  | Standard meeting notes format   |
       | Customer Interview     | CUST  | Interview script + notes        |
-->


## Permissions Needed by PM

<!-- Example:
       - Create/edit pages in PROD and CUST spaces
       - View all spaces
       - Create pages from templates
       - Manage page restrictions (for draft PRDs)
       - Export pages as PDF (for stakeholder reviews)
       - Comment on pages in all spaces
-->


## Common PM Operations

<!-- Example:
       - Create PRD from template in PROD/PRDs/2026
       - Share draft PRD with restricted access (PM + EM + Design only)
       - Publish PRD to broader team after approval
       - Create meeting notes with action items
       - Search for past decisions and context
       - Link Confluence pages to Jira epics
-->


## Integrations

<!-- Example:
       - Jira: bi-directional linking (Jira issues embed in Confluence)
       - Slack: page update notifications in #product-docs
       - Google Drive: embedded Google Docs/Sheets in Confluence pages
       - Figma: embedded Figma frames in PRDs
-->
