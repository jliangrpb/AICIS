# Deltamine AI-Enabled Client Intake System (AICIS)

## Project Overview

AICIS is a web application designed to improve how prospective clients first interact with Deltamine. Clients submit their needs through a structured intake form, and AI converts the submission into a concise briefing for Deltamine's Practice Lead.

The project is being developed as a proof of concept for CISC 4900. Requirements and technical decisions may evolve through development, testing, and stakeholder feedback.

## Project Goals

- Provide a simple, professional client intake experience.
- Collect and validate client information in a consistent format.
- Use AI to generate a priority, summary, and recommended next step.
- Notify the Practice Lead of new inquiries.
- Provide a dashboard for reviewing and managing submissions.
- Test the reliability of the complete intake-to-review workflow.

---

## Users

### Prospective Client
**Goal:** Clearly communicate their needs to Deltamine.

Clients should be able to complete a guided intake form, review their information, submit it, and receive confirmation.

### Practice Lead — Allen Ureta
**Goal:** Quickly understand and act on incoming inquiries.

The Practice Lead should be able to review the original submission, AI-generated briefing, priority, recommended next step, and inquiry status from a central dashboard.

### Student Developer — Jeremy Liang
Responsible for requirements, architecture, development, AI integration, testing, and documentation.

---

## Core Features

### Client Intake Form
Three-step client experience:

1. Contact Information
2. Service Interest
3. Review and Submit

### Backend API
`POST /api/intake` receives submissions, validates required fields, coordinates AI triage, stores results, and triggers notifications.

### AI Triage
Valid submissions are converted into:

- **Priority:** High, Medium, or Low
- **Engagement Summary**
- **Recommended Next Step**

AI assists the Practice Lead but does not make final business decisions.

### Submission Storage
The prototype will initially use `data/submissions.json`. A persistent database is planned for a production version.

### Email Notification
Resend will notify the Practice Lead after a submission is successfully processed.

### Practice Lead Dashboard
The dashboard will display submitted inquiries, AI results, priorities, and statuses.

---

## Functional Requirements

| ID | Requirement | Input | Output |
|---|---|---|---|
| FR-01 | Submit client inquiry | Client information | Structured submission |
| FR-02 | Validate submission | Intake data | Valid request or error |
| FR-03 | Generate AI triage | Valid submission | Priority, summary, next step |
| FR-04 | Store inquiry | Submission + AI result | Stored record |
| FR-05 | Notify Practice Lead | Processed inquiry | Email briefing |
| FR-06 | Review inquiries | Stored records | Dashboard view |
| FR-07 | Track inquiry | Status change | Updated record |

---

## Use Cases

### 1. Valid Submission
A client completes the required fields and submits the form.

**Expected flow:**

`Form → Validation → AI Triage → Storage → Email → Dashboard`

### 2. High-Priority Inquiry
A submission meets the defined high-priority criteria. The AI should classify it according to the triage rubric and provide a structured briefing.

### 3. Invalid Submission
Required information is missing. The system rejects the submission and asks the client to correct the missing fields before continuing.

### Unexpected Cases

| Situation | Expected Behavior |
|---|---|
| Vague client description | Avoid inventing information; preserve original input |
| AI unavailable | Preserve submission and flag for manual review |
| Invalid AI output | Flag result for review |
| Email failure | Keep submission available in dashboard |
| Storage failure | Do not report successful processing |

---

## System Architecture

```text
Prospective Client
        ↓
React Intake Form
        ↓
Node.js / Express API
        ↓
Validation
        ↓
AI Triage
        ↓
Structured Briefing
        ↓
Storage + Email
        ↓
Practice Lead Dashboard
```

---

## Technology Stack

| Area | Technology | Purpose |
|---|---|---|
| Frontend | React / JavaScript | Intake form and dashboard |
| Backend | Node.js / Express | API and application logic |
| AI | Anthropic API | Intake analysis and triage |
| Storage | JSON | Prototype storage |
| Email | Resend | Email notifications |
| Version Control | Git / GitHub | Source control and documentation |
| Production Database | TBD | Persistent storage |
| Deployment | TBD | Application hosting |

React supports the form and dashboard's component-based interfaces. Node.js and Express provide a lightweight API layer, while Anthropic handles AI triage and Resend handles transactional email.

---

## Privacy, Security, and Accessibility

### Privacy
- Prototype testing will use fictional client data.
- Only necessary client information should be collected and sent for AI triage.
- Sensitive information should not be unnecessarily logged.
- Production use will require defined data retention and deletion policies.

### Security
- API credentials will use environment variables and will not be committed to Git.
- The backend will validate incoming submissions.
- Authentication, secure persistent storage, rate limiting, and spam protection are required before production use.
- The prototype should not process real client information without appropriate security controls.

### Accessibility
The interface should use semantic HTML, clear labels and validation messages, keyboard-accessible controls, readable contrast, and responsive layouts. Relevant WCAG guidance will be considered during development.

---

## Responsible AI

AI is used to assist with triage, not to make final business decisions.

Key risks include inaccurate summaries, incorrect priorities, invented information, inconsistent results, and biased prioritization.

AICIS will address these risks through:

- Structured prompts and outputs.
- Human review by the Practice Lead.
- Preservation of the original client submission.
- Testing against predefined expected results.
- Prompt refinement when inconsistencies are found.

AI should communicate uncertainty rather than invent missing information.

---

## Third-Party Tools and Licensing

AICIS uses third-party tools including React, Node.js, Express, Anthropic, and Resend. Dependencies and applicable licenses will be tracked and reviewed before distribution.

The license for AICIS itself has not yet been finalized.

---

## Design Decisions and Tradeoffs

**JSON vs. Database:** JSON reduces prototype complexity while the end-to-end workflow is being developed. A persistent database is required for production.

**AI Assistance vs. Automation:** AI recommends a priority and next step, while the Practice Lead retains final decision-making responsibility.

**Prototype vs. Production Security:** Some production features may be deferred during local development so the core workflow can be completed first. Authentication and other security controls are required before real deployment.

**Core vs. Stretch Features:** Development prioritizes the complete intake-to-review workflow before optional features.

---

## Testing Plan

Approximately 10 fictional submissions will be tested:

- 2 High priority
- 4 Medium priority
- 4 Low priority

AI results will be compared against the expected priority rubric. Testing will also verify the complete:

`Form → API → Validation → AI → Storage → Email → Dashboard`

workflow.

---

## Current Status

- [x] Project concept and goals
- [x] Users and requirements identified
- [x] Preliminary architecture
- [x] Intake and triage workflow
- [x] Initial presentation
- [ ] Frontend and backend setup
- [ ] Intake form
- [ ] AI integration
- [ ] Storage
- [ ] Email integration
- [ ] Dashboard
- [ ] Integration testing
- [ ] Deployment

---

## Scope and Development

AICIS follows an iterative development process:

**Design → Implement → Test → Feedback → Refine**

Major requirement or scope changes will be documented as development progresses.

| Date | Change | Reason | Impact |
|---|---|---|---|
| TBD | No major changes recorded | — | — |

### Core Scope

- Client intake form
- Backend API and validation
- AI triage
- Submission storage
- Email notifications
- Practice Lead dashboard
- Integration testing

### Future / Stretch Features

- Persistent database
- Authentication
- Hosted deployment
- Advanced search and filtering
- CSV export
- Follow-up tracking
- Microsoft 365 integration

---

## Production and Maintenance

The proof of concept is intended to establish a foundation for future development.

Production readiness would require:

- Authentication and authorization
- Persistent database
- Stronger security and privacy controls
- Rate limiting and spam protection
- Production deployment
- Continued AI evaluation

Supporting documentation will include:

- `README.md` — Project overview and requirements
- `PROMPT.md` — AI prompt and change history
- `PRODUCTION_GAP.md` — Remaining production requirements
- `docs/` — Architecture and project documentation

---

## Proof-of-Concept Success Criteria

The prototype is successful if:

1. A client can submit a valid inquiry.
2. Invalid submissions are rejected appropriately.
3. AI produces a structured triage result.
4. The submission and AI result are stored.
5. The Practice Lead receives a notification.
6. The submission is accessible through the dashboard.
7. The complete workflow operates without developer intervention.

The first implementation prioritizes proving this end-to-end workflow before adding production-level functionality.