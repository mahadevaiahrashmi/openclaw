# Email Integration (Umbrella)

Use when a skill references generic **email** without specifying Gmail or Outlook.

## Primary Email Platform

<!-- Check one:
     [ ] Google Gmail — configure gmail.md + google-workspace.md
     [ ] Microsoft Outlook — configure outlook.md + microsoft365.md
     [ ] Both (different audiences)
-->

## Configuration Files

- **Gmail:** [gmail.md](gmail.md)
- **Outlook:** [outlook.md](outlook.md)

## Auth (Do Not Store Secrets Here)

| Platform | Typical auth |
|----------|----------------|
| Gmail | OAuth 2.0 — `gmail.send`, `gmail.readonly` |
| Outlook | Microsoft Graph — `Mail.ReadWrite`, `Mail.Send` |

## Skills That Use This Integration

- `skills/tools/communication/email-composer.md`
- `skills/tools/communication/gmail-template.md`
- `skills/tools/communication/outlook-template.md`
- `skills/communicate/stakeholder-email.md`

## Common PM Operations

Stakeholder updates, exec summaries, launch announcements, decision requests.
