# Microsoft 365 Integration (Umbrella)

Use this file when a skill references **Microsoft 365** or **microsoft365**. Fill the specific apps you use below.

## Connection Details

**Microsoft 365 Tenant:** <!-- tenant ID or domain -->
**Azure AD App (if API):** <!-- Client ID — secret in vault only -->
**Auth Method:** <!-- OAuth 2.0 delegated / Application permissions -->
**Token Location:** <!-- MICROSOFT_GRAPH_* env vars -->

## App-Specific Configuration Files

| App | Integration file | Skills |
|-----|------------------|--------|
| Outlook (email) | [outlook.md](outlook.md) | outlook-template, email-composer |
| Microsoft Teams | [microsoft-teams.md](microsoft-teams.md) | teams-announcement, teams-channel-setup, teams-meeting-prep |
| Microsoft Word | [microsoft-word.md](microsoft-word.md) | Word-formatted documents |
| Microsoft Excel | [microsoft-excel.md](microsoft-excel.md) | excel-model, spreadsheet-dashboard |
| Microsoft PowerPoint | [microsoft-powerpoint.md](microsoft-powerpoint.md) | powerpoint-builder |
| Power BI | [power-bi.md](power-bi.md) | power-bi-dashboard-spec |
| SharePoint | [sharepoint.md](sharepoint.md) | sharepoint-page-builder |
| Calendar | [calendar.md](calendar.md) | calendar-audit |

## Graph API Permissions (Reference)

<!-- Work with IT on least-privilege:
     Mail.ReadWrite, Mail.Send
     ChannelMessage.Send, Team.ReadBasic.All
     Calendars.ReadWrite, OnlineMeetings.ReadWrite
     Files.ReadWrite.All (SharePoint/OneDrive)
-->

## Permissions Needed by PM

Member of product Teams; edit access to SharePoint doc libraries; Outlook send-as for exec comms if applicable.

## Common PM Operations

- Email via Outlook; announce in Teams
- Store PRDs on SharePoint; models in Excel; decks in PowerPoint
- Schedule Teams meetings with calendar integration
