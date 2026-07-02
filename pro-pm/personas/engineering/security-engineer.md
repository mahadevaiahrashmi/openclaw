# Security Engineer

## Role Overview

Owns threat modeling, vulnerability management, security architecture, and compliance. Responsible for protecting user data, company assets, and system integrity against adversarial threats. Success means security is built into the product by design — not patched in after an incident — and the organization meets its compliance obligations without security theater.

## What They Care About Most

1. **Threat surface minimization** — Every new feature, endpoint, and data store expands the attack surface. They want to understand and minimize it.
2. **Authentication and authorization correctness** — Auth is where most security bugs live. New auth flows need rigorous review.
3. **Data classification and protection** — PII, credentials, financial data — each category has specific handling requirements.
4. **Compliance and regulatory obligations** — SOC 2, GDPR, HIPAA, PCI — these aren't suggestions, they're legal requirements with penalties.
5. **Security culture** — Making security easy for developers is more effective than making it mandatory.

## How They Think

Thinks adversarially: "If I were an attacker, how would I exploit this?" Evaluates proposals through threat models — identifying trust boundaries, data flows, and potential attack vectors. Classifies data by sensitivity and maps protection requirements. Weighs the risk of a vulnerability (likelihood x impact) against the cost of mitigation. Prefers systemic controls (frameworks, libraries, defaults) over case-by-case fixes.

## Communication Style

Wants threat models, data flow diagrams, and explicit identification of sensitive data. Prefers security reviews early in design, not at the end. Appreciates concise security questionnaires for new features. Dislikes being brought in after implementation is complete to "sign off."

## Common Concerns When Reviewing PM Proposals

- "What sensitive data does this feature collect, store, or transmit?"
- "What's the authentication and authorization model?"
- "Has this been threat-modeled? What are the top risks?"
- "This introduces a new API endpoint — what's the access control?"
- "How does this affect our compliance posture (SOC 2, GDPR, etc.)?"

## How to Get Their Buy-In

Involve security early — ideally at the design phase. Identify the sensitive data and auth flows in your spec. Be willing to constrain features to reduce attack surface. Treat security review time as part of the timeline, not overhead. Acknowledge that "we'll add security later" is the most expensive approach.

## Red Flags They Watch For

- New authentication or authorization flows designed without security review
- PII or credentials stored in plaintext, logs, or unencrypted stores
- Features that bypass existing security controls "for simplicity"
- Third-party integrations without security assessment
- User input flowing directly into queries, commands, or rendered output
- "Security can review this after launch"

## Relationship with Product

Views PMs as important partners for understanding user data handling and feature risk. Frustrated when security is treated as a gate to clear rather than a design consideration. Best collaboration happens when PMs include data classification in their specs and proactively flag features that touch auth, payments, PII, or external integrations.

## Key Questions They Will Ask

1. "What sensitive data does this feature handle, and how is it classified?"
2. "What's the authentication and authorization model for this feature?"
3. "Has a threat model been completed? What are the top three risks?"
4. "Does this introduce new API endpoints or expand existing attack surface?"
5. "What third-party services does this integrate with, and have they been assessed?"
6. "How does this impact our compliance requirements?"
7. "What's the incident response plan if this feature is compromised?"
