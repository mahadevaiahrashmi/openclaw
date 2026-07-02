# Privacy Officer / Data Protection Officer

## Role Overview

Owns data privacy strategy, privacy impact assessments, user consent management, data retention policies, and regulatory compliance for data protection (GDPR, CCPA, and emerging regulations). Responsible for ensuring the company respects user privacy by design and meets its legal obligations for data handling. Success means privacy is embedded in product design, user trust is maintained, and the company avoids regulatory action.

## What They Care About Most

1. **Data minimization** — Collect only what's necessary, retain only as long as needed, and delete when the purpose is fulfilled. Every data point is a liability.
2. **User consent and transparency** — Users must understand what data is collected, why, and how. Consent must be informed, specific, and revocable.
3. **Privacy by design** — Privacy considerations built into product architecture from the start, not bolted on. Retroactive privacy remediation is expensive and incomplete.
4. **Cross-border data transfers** — Where data is stored and processed matters. EU data processed in the US, or vice versa, has specific legal requirements.
5. **Data subject rights** — Users have rights to access, correct, delete, and port their data. The product must support these workflows.

## How They Think

Thinks in data flows and purpose limitation: "What data are we collecting? Why? Who has access? How long do we keep it? Can the user control it?" Evaluates proposals through privacy impact assessments — mapping data collection to purpose, identifying risks, and ensuring appropriate safeguards. Distinguishes between data that's necessary for the service and data collected for analytics, ML, or marketing purposes. Each has different consent and handling requirements.

## Communication Style

Wants data flow diagrams, data inventories, and clear purpose statements for each data element. Prefers privacy impact assessment templates completed before design finalization. Appreciates when PMs think about privacy proactively and include data handling in their specs. Communicates through PIAs, data processing records, and privacy policy recommendations.

## Common Concerns When Reviewing PM Proposals

- "What personal data does this feature collect, and what's the legal basis for collection?"
- "How long is this data retained, and what triggers deletion?"
- "Can users access, export, and delete their data from this feature?"
- "Is this data shared with third parties, and under what terms?"
- "Does this require updating our privacy policy or consent flows?"

## How to Get Their Buy-In

Include a data inventory in your feature spec — what data is collected, why, and how long it's retained. Conduct a privacy impact assessment during design. Design for data minimization — collect less, retain shorter. Ensure data subject rights (access, deletion, export) work for new data. Involve the privacy officer early, not at launch.

## Red Flags They Watch For

- Features collecting personal data without clear purpose or legal basis
- Data retention without defined expiration or deletion policies
- Third-party data sharing without appropriate agreements and user disclosure
- Analytics or ML training on user data without proper consent
- "We'll figure out privacy later" — privacy must be designed in, not patched on
- New data collection without updating privacy policies and consent mechanisms

## Relationship with Product

Views PM as a critical partner in building privacy-respecting products. Frustrated when privacy is treated as a compliance checkbox rather than a design principle. Best collaboration happens when PMs include data handling in their specs, consult the privacy officer during design, and treat user trust as a product feature.

## Key Questions They Will Ask

1. "What personal data is collected, and what's the purpose and legal basis?"
2. "What's the data retention policy — how long and why?"
3. "How do users exercise their rights (access, deletion, portability)?"
4. "Is data shared with third parties, and do we have appropriate agreements?"
5. "Where is data stored and processed — are there cross-border transfer issues?"
6. "Does this require a privacy impact assessment?"
7. "Do our consent flows and privacy policy cover this new data use?"
