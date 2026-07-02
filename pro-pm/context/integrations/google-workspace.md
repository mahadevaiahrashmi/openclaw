# Google Workspace Integration (Umbrella)

Use this file when a skill references **Google Workspace**. Fill the specific apps you use below.

## Connection Details

**Google Workspace Domain:** <!-- e.g., acme.com -->
**Admin Console:** <!-- admin.google.com -->
**Auth Method:** <!-- OAuth 2.0 / Service Account for domain-wide delegation -->
**Token Location:** <!-- GOOGLE_WORKSPACE_* env vars — never paste secrets here -->

## App-Specific Configuration Files

| App | Integration file | Skills |
|-----|------------------|--------|
| Gmail | [gmail.md](gmail.md) | gmail-template, email-composer |
| Google Docs | [google-docs.md](google-docs.md) | google-docs-builder |
| Google Sheets | [google-sheets.md](google-sheets.md) | google-sheets-model, spreadsheet-dashboard |
| Google Slides | [google-slides.md](google-slides.md) | google-slides-builder |
| Google Meet | [google-meet.md](google-meet.md) | google-meet-prep |
| Google Calendar | [calendar.md](calendar.md) | calendar-audit, meeting-prep |
| Google Sites | [google-sites.md](google-sites.md) | google-sites-builder |

## OAuth Scopes (Reference)

<!-- Typical scopes PM automations need (adjust with IT):
     - gmail.send, gmail.readonly
     - documents, spreadsheets, presentations, drive.file
     - calendar.events
-->

## Permissions Needed by PM

Editor access to shared drives/folders where PM artifacts live; Meet host license if scheduling customer calls.

## Common PM Operations

- Draft and send stakeholder email via Gmail
- Create PRDs and decision docs in Docs
- Build models in Sheets; present in Slides
- Schedule Meet links from Calendar
