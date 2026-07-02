# Integrations Index

**All integrations are optional.** Pro PM produces full drafts without any of these files configured. Add them only when you want tool-specific URLs, channel names, or API-backed workflows.

Configure tools here so outputs match your stack. **Never store API keys or passwords in these files** — use environment variables or a secrets manager.

### Umbrella configs (start here if you use a suite)

| File | When to use |
|------|-------------|
| [google-workspace.md](google-workspace.md) | Gmail, Docs, Sheets, Slides, Meet, Calendar |
| [microsoft365.md](microsoft365.md) | Outlook, Teams, Word, Excel, PowerPoint, SharePoint, Power BI |
| [email.md](email.md) | Generic email skills |
| [meeting-tools.md](meeting-tools.md) | Recordings, transcripts, multi-platform meetings |

### All integrations

| Integration file | Used by skills (examples) |
|------------------|---------------------------|
| [jira.md](jira.md) | jira-ticket-writer, jira-backlog-builder, jira-sprint-report |
| [confluence.md](confluence.md) | confluence-page-builder, confluence-space-organizer |
| [slack.md](slack.md) | slack-announcement, slack-workflow-builder |
| [microsoft-teams.md](microsoft-teams.md) | teams-announcement, teams-meeting-prep, teams-channel-setup |
| [gmail.md](gmail.md) | gmail-template, email-composer |
| [outlook.md](outlook.md) | outlook-template, email-composer |
| [google-docs.md](google-docs.md) | google-docs-builder |
| [google-sheets.md](google-sheets.md) | google-sheets-model, spreadsheet-dashboard |
| [google-slides.md](google-slides.md) | google-slides-builder |
| [google-meet.md](google-meet.md) | google-meet-prep |
| [google-sites.md](google-sites.md) | google-sites-builder |
| [microsoft-word.md](microsoft-word.md) | document-builder (Word output) |
| [microsoft-excel.md](microsoft-excel.md) | excel-model, spreadsheet-dashboard |
| [microsoft-powerpoint.md](microsoft-powerpoint.md) | powerpoint-builder |
| [sharepoint.md](sharepoint.md) | sharepoint-page-builder |
| [calendar.md](calendar.md) | calendar-audit, meeting-prep (all) |
| [zoom.md](zoom.md) | zoom-meeting-prep |
| [loom.md](loom.md) | loom-video-script |
| [figma.md](figma.md) | figma-design-feedback, figma-spec-annotation |
| [miro.md](miro.md) | miro-board-builder |
| [mural.md](mural.md) | mural-board-builder |
| [whimsical.md](whimsical.md) | whimsical-flowchart |
| [canva.md](canva.md) | canva-brief |
| [notion.md](notion.md) | notion-page-builder, notion-workspace-setup |
| [coda.md](coda.md) | coda-doc-builder |
| [dropbox-paper.md](dropbox-paper.md) | dropbox-paper-builder |
| [linear.md](linear.md) | linear-issue-writer, linear-project-setup |
| [asana.md](asana.md) | asana-task-builder |
| [aha.md](aha.md) | aha-roadmap-builder, aha-idea-management |
| [monday.md](monday.md) | monday-board-setup |
| [clickup.md](clickup.md) | clickup-task-builder |
| [shortcut.md](shortcut.md) | shortcut-story-writer |
| [productboard.md](productboard.md) | productboard-feature-sync |
| [github.md](github.md) | github-issue-writer, github-project-setup |
| [gitlab.md](gitlab.md) | gitlab-issue-writer |
| [codebase.md](codebase.md) | code-review-context, codebase-navigator |
| [launchdarkly.md](launchdarkly.md) | launchdarkly-flag-plan |
| [postman.md](postman.md) | postman-collection-spec |
| [amplitude.md](amplitude.md) | amplitude-query-builder |
| [mixpanel.md](mixpanel.md) | mixpanel-query-builder |
| [google-analytics.md](google-analytics.md) | google-analytics-review |
| [looker.md](looker.md) | looker-dashboard-spec |
| [tableau.md](tableau.md) | tableau-dashboard-spec |
| [power-bi.md](power-bi.md) | power-bi-dashboard-spec |
| [heap.md](heap.md) | heap-analysis |
| [pendo.md](pendo.md) | pendo-guide-spec |
| [fullstory.md](fullstory.md) | fullstory-session-review |
| [hotjar.md](hotjar.md) | hotjar-heatmap-review |
| [segment.md](segment.md) | segment-event-spec |
| [analytics.md](analytics.md) | metrics-review, data-question (umbrella) |
| [salesforce.md](salesforce.md) | salesforce-dashboard-spec |
| [hubspot.md](hubspot.md) | hubspot-workflow-spec |
| [zendesk.md](zendesk.md) | zendesk-ticket-analysis |
| [intercom.md](intercom.md) | intercom-analysis |
| [gainsight.md](gainsight.md) | gainsight-health-spec |
| [gong.md](gong.md) | gong-call-analysis |
| [dovetail.md](dovetail.md) | dovetail-research-synthesis |
| [typeform.md](typeform.md) | typeform-survey-builder |
| [usertesting.md](usertesting.md) | usertesting-plan |
| [maze.md](maze.md) | maze-test-plan |
| [keynote.md](keynote.md) | keynote-builder |
| [airtable.md](airtable.md) | airtable-base-builder |
| [api-docs.md](api-docs.md) | swagger-api-spec-review |

## Setup order (recommended)

1. Communication: Slack or Teams, Gmail or Outlook, Calendar, Zoom/Meet
2. Docs: Google Workspace **or** Microsoft 365 (fill the suite you use)
3. Project management: Jira or Linear (plus Confluence/Notion)
4. Design: Figma
5. Analytics: primary product analytics tool
6. Code: GitHub/GitLab + codebase.md
