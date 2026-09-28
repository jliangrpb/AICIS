# Deltamine AI-Enabled Client Intake System

## Project Overview

The Deltamine AI-Enabled Client Intake System is a web-based application intended to improve the first interaction between prospective clients and Deltamine.

Currently, Deltamine does not have a structured, intelligent process for collecting and triaging prospective-client inquiries. The proposed system will provide prospective clients with a guided intake experience and transform submitted information into a structured, AI-assisted briefing for Deltamine's Practice Lead.

The project is being developed as a proof of concept (PoC) during the Fall 2026 semester. The architecture, requirements, and implementation described in this document represent the current project direction and may evolve as development, testing, and stakeholder feedback continue.

---

## Project Vision

> An AI-enabled front door to Deltamine, where every prospective client is met with intelligence and professionalism, and where the systems that power that experience are built and owned by the practitioners who understand the work.

The project explores whether a well-designed AI-assisted workflow can transform a primarily manual intake process into a more structured client experience while giving the Practice Lead useful information for deciding how to respond.

---

## Project Goals

The current project goals are to:

1. Develop a professional, easy-to-use intake experience for prospective Deltamine clients.
2. Collect client information in a structured and consistent format.
3. Develop a backend API capable of receiving and validating intake submissions.
4. Use an AI model to transform intake information into a structured triage briefing.
5. Provide the Practice Lead with a concise summary, priority level, and information useful for determining the next action.
6. Notify the Practice Lead when a new intake has been successfully processed.
7. Provide an internal dashboard for reviewing submitted inquiries and AI-generated triage results.
8. Test the AI triage process using realistic sample submissions and evaluate the consistency of its outputs.
9. Produce a working proof of concept demonstrating the complete intake-to-review workflow.

These goals are intentionally iterative. Requirements, implementation decisions, and individual features may be modified based on development findings, testing results, and feedback from Deltamine.

---

# Users and Stakeholders

## Stakeholder — Practice Lead

**Allen Ureta — Practice Lead, Deltamine**

The Practice Lead receives, reviews, and acts on prospective-client submissions. The goal is not simply to provide raw form data, but to provide a structured briefing that allows the Practice Lead to quickly understand:

- What the prospective client needs
- The nature of the inquiry
- Its estimated priority
- Relevant information from the original submission
- A potential next step

The target experience is for the Practice Lead to obtain the important information from a submission quickly without first having to manually interpret an unstructured inquiry.

## Student Developer

**Jeremy — CISC 4900 Student Developer**

Current responsibilities include:

- Requirements analysis
- System architecture
- Frontend development
- Backend/API development
- AI integration and prompt development
- Data storage implementation
- Email notification integration
- Practice Lead dashboard development
- Integration testing
- Technical documentation

---

# User Personas

The initial system is being designed around two primary user types.

## Persona 1 — Prospective Client

**Goal:** Contact Deltamine and clearly communicate their organization's needs without needing prior knowledge of Deltamine's internal processes.

### Needs

The prospective client should be able to:

- Understand what information is being requested.
- Complete the intake process without unnecessary complexity.
- Review information before submission.
- Know whether the submission was successfully received.
- Receive a professional first impression of Deltamine.

### Expected Interaction

The client navigates to the intake page and completes a multi-step form:

1. Contact Information
2. Service Interest
3. Review and Submit

After a successful submission, the client receives a confirmation message indicating that the submission has been received.

---

## Persona 2 — Practice Lead

**User:** Allen Ureta

**Goal:** Understand and act on prospective-client inquiries efficiently.

### Needs

The Practice Lead should be able to:

- Receive notification of new inquiries.
- Quickly determine what the prospective client needs.
- See an AI-generated summary of the inquiry.
- See the proposed priority of the inquiry.
- Review the original information submitted by the client.
- Access submissions from a central dashboard.
- Update the status of an inquiry.

The system is intended to reduce the amount of manual interpretation required before the Practice Lead can decide what to do with an incoming inquiry.

---

# Core Features

## 1. Multi-Step Client Intake Form

### What it does

Provides prospective clients with a guided interface for submitting an inquiry to Deltamine.

### Current Design

The form is planned around three steps:

1. Contact Information
2. Service Interest
3. Review and Submit

Only one step will be displayed at a time, with a progress indicator showing the client's current position.

### User Need Addressed

Prospective clients need a clear and structured method of communicating why they are contacting Deltamine.

### Expected Output

A structured intake submission that can be sent to the backend for validation and processing.

---

## 2. Backend Intake API

### What it does

Receives intake submissions from the client application and coordinates the processing workflow.

### Planned Endpoint

`POST /api/intake`

### Responsibilities

The backend will:

- Receive the form payload.
- Validate required fields.
- Reject invalid or incomplete requests.
- Pass valid submissions to the AI triage process.
- Process the AI response.
- Store the resulting record.
- Trigger the notification process.

### User Need Addressed

Both users need submitted information to be processed reliably and consistently.

---

## 3. AI-Assisted Triage

### What it does

Transforms client intake information into a structured briefing intended to help the Practice Lead review the inquiry.

### Preliminary Outputs

The triage result is expected to contain information such as:

- **Priority:** High, Medium, or Low
- **Engagement Summary:** Concise description of the prospective client's needs
- **Recommended Next Step:** Information intended to assist the Practice Lead in deciding how to respond

### User Need Addressed

The Practice Lead needs to understand the important details of an inquiry quickly instead of beginning with only raw form responses.

### Important Constraint

AI output is intended to support triage and information synthesis. The Practice Lead remains responsible for reviewing the inquiry and determining the actual business response.

---

## 4. Submission Storage

### Prototype Implementation

During the initial proof of concept, processed submissions are planned to be stored in:

`data/submissions.json`

Each stored record may contain:

- Original intake information
- Submission date/time
- AI-generated priority
- AI-generated summary
- Recommended next step
- Current status

### Rationale

Flat-file storage keeps the initial prototype simple while the complete workflow is being developed and tested.

### Production Consideration

A persistent database is expected to replace JSON storage before production use. The database technology has not yet been finalized.

---

## 5. Email Notification

### What it does

After successful intake processing and triage, the backend will send a briefing to the Practice Lead.

### Current Planned Service

Resend

### Expected Information

The notification may include:

- Prospect information
- Service interest
- Priority
- AI-generated summary
- Recommended next step
- Link to the Practice Lead dashboard

### User Need Addressed

The Practice Lead should know when a new prospective-client inquiry requires attention without continuously checking the dashboard.

---

## 6. Practice Lead Dashboard

### What it does

Provides an internal view of intake submissions and their associated AI-generated triage results.

### Preliminary Behavior

The dashboard is planned to display submissions sorted by priority and recency.

The Practice Lead should be able to:

- Review submissions
- Compare the original submission with the AI-generated briefing
- Review priority
- Review the recommended next step
- Update submission status

### Prototype Constraint

The initial prototype may make `/dashboard` accessible directly by URL without authentication.

Authentication is considered a requirement before production deployment.

---

# Functional Requirements

| ID | User Need | System Function | Input | Expected Output |
|---|---|---|---|---|
| FR-01 | Client needs to submit an inquiry | Intake Form | Contact and service information | Structured intake payload |
| FR-02 | Client needs to know whether submission succeeded | Submission Confirmation | Successful API response | Confirmation screen |
| FR-03 | System needs valid information | Input Validation | Intake payload | Accepted submission or validation error |
| FR-04 | Practice Lead needs a concise understanding of an inquiry | AI Triage | Validated intake information | Priority, summary, recommended next step |
| FR-05 | Practice Lead needs notification of new inquiries | Email Notification | Successful triage result | Intake briefing delivered by email |
| FR-06 | Practice Lead needs access to previous inquiries | Dashboard | Stored submissions | Organized list of submissions |
| FR-07 | Practice Lead needs original context | Submission Detail | Selected submission | Original intake data + AI triage result |
| FR-08 | Practice Lead needs to track inquiry progress | Status Update | New status | Updated submission record |

These requirements are preliminary and may change as implementation and stakeholder feedback continue.

---

# Preliminary Use Cases

## Use Case 1 — Expected Client Submission

### Scenario

A prospective client completes all required fields correctly and submits an inquiry.

### Input

- Valid contact information
- Selected service interest
- Description of organizational needs
- Other required intake information

### Expected System Behavior

1. Frontend collects the information.
2. Client reviews and submits the form.
3. Backend receives the submission.
4. Backend validates required fields.
5. Valid submission is passed to AI triage.
6. AI generates a structured briefing.
7. Submission and briefing are stored.
8. Email notification is sent to the Practice Lead.
9. Client receives confirmation.
10. Submission becomes available through the dashboard.

### Expected Output

A stored intake record containing the original submission and associated triage information.

---

## Use Case 2 — High-Priority Inquiry

### Scenario

A prospective client submits information that meets the project's eventual criteria for a high-priority inquiry.

### Expected System Behavior

1. Submission follows the standard intake workflow.
2. AI analyzes the submitted information using the defined triage instructions.
3. The resulting priority is evaluated against the project's priority rubric.
4. The generated briefing is stored with the original submission.
5. The Practice Lead receives the briefing.
6. The submission appears appropriately within the dashboard's priority ordering.

### Testing Purpose

This scenario will help evaluate whether the AI triage process behaves consistently with the defined priority criteria.

---

## Use Case 3 — Unexpected / Invalid Input

### Scenario

A prospective client attempts to submit the form without providing one or more required fields.

### Input Example

Required contact information or required service information is missing.

### Expected System Behavior

1. System detects missing required information.
2. Invalid submission is not sent through the normal AI triage workflow.
3. User receives an appropriate validation message.
4. User can correct the missing information.
5. Form can then be resubmitted.

### Expected Output

A validation error rather than a completed intake record.

---

# Preliminary System Architecture

The current planned workflow is:

```text
Prospective Client
        |
        v
React Client Application
        |
        v
POST /api/intake
        |
        v
Node.js / Express Backend
        |
        +----> Input Validation
        |
        +----> AI Triage Service
        |          |
        |          v
        |    Structured Briefing
        |
        +----> Submission Storage
        |
        +----> Email Notification
        |
        v
Practice Lead Dashboard
        |
        v
Practice Lead
```

The architecture is preliminary and may change as the system is implemented and evaluated.

---

# Preliminary Technology Stack

| Area | Current Plan | Purpose |
|---|---|---|
| Frontend | React / JavaScript | Intake form and Practice Lead dashboard |
| Backend | Node.js / Express | API and application logic |
| AI | Anthropic API | Intake analysis and triage |
| Storage | JSON flat file | Prototype submission storage |
| Email | Resend | Transactional email notifications |
| Version Control | Git / GitHub | Source control and collaboration |
| Configuration | Environment variables | API keys and application configuration |
| Production Database | TBD | Persistent production storage |
| Deployment | TBD | Hosting the completed prototype |

Technology selections may change based on implementation requirements and testing.

---

# Assumptions and Constraints

## Current Assumptions

- Prospective clients will access the intake system through a web browser.
- The Practice Lead will be the primary internal user during the initial prototype.
- Client submissions can be represented as structured form data.
- AI-generated triage information will be reviewed by a human rather than treated as a final business decision.
- The prototype will initially run locally before hosted deployment is considered.

## Current Constraints

### Prototype Scope

The semester project is a proof of concept rather than a complete production client-management platform.

### Security

The initial dashboard may not include authentication. Authentication is required before production use.

### Data Storage

JSON flat-file storage is intended only for prototype development and testing.

### AI Reliability

AI-generated results may not always be consistent or correct. Testing and prompt refinement are therefore part of the project.

### Deployment

The final production hosting environment has not yet been selected.

### Time

Development must fit within the CISC 4900 semester timeline, requiring prioritization of the core end-to-end workflow before optional functionality.

---

# AI Triage Testing Plan

The current plan is to generate approximately ten realistic test submissions representing different expected priority levels.

Initial target distribution:

- 2 High-priority examples
- 4 Medium-priority examples
- 4 Low-priority examples

Each submission will be processed through the complete system.

The generated triage output will be compared with the intended priority criteria. If results are inconsistent, the system prompt and/or triage process will be reviewed and refined.

Testing will also verify that the complete workflow operates correctly:

`Form → API → Validation → AI Triage → Storage → Email → Dashboard`

---

# Current Project Status

**Current Stage:** Initial architecture and development setup

Completed or in progress:

- [x] Initial project concept
- [x] Identification of primary users
- [x] Preliminary project goals
- [x] Preliminary system architecture
- [x] Preliminary intake/triage workflow
- [x] Initial presentation slides
- [ ] GitHub project structure
- [ ] Frontend initialization
- [ ] Backend initialization
- [ ] Intake form implementation
- [ ] Intake API implementation
- [ ] AI integration
- [ ] Data storage implementation
- [ ] Email integration
- [ ] Practice Lead dashboard
- [ ] Integration testing
- [ ] Deployment

---

# Development Roadmap

## Phase 1 — Project Setup and Architecture

Establish the project repository and separate client/server application structure.

## Phase 2 — Intake Form

Develop the three-step prospective-client intake experience.

## Phase 3 — Backend API and AI Triage

Implement intake validation, backend processing, AI integration, and structured triage output.

## Phase 4 — Data Storage

Implement prototype submission storage.

## Phase 5 — Email Notification

Integrate transactional email notifications.

## Phase 6 — Practice Lead Dashboard

Develop the internal interface for reviewing submissions and triage results.

## Phase 7 — Integration Testing

Create realistic test submissions and evaluate the complete workflow and AI triage consistency.

## Phase 8 — Documentation and Capstone Deliverable

Document setup, architecture, prompt development, known production gaps, testing results, and the final application.

---

# Scope and Requirement Changes

Project scope and requirements will be tracked throughout development.

Because the project is currently in its initial stage, no major scope changes have yet been documented.

Future changes should be recorded with:

- **Date**
- **Original plan**
- **Change**
- **Reason**
- **Impact on project**

Example format:

| Date | Original Plan | Change | Reason | Impact |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

This section will be updated as development progresses rather than retroactively treating preliminary ideas as finalized requirements.

---

# Core vs. Stretch Features

## Core / Proof-of-Concept Features

The current core scope includes:

- Multi-step client intake form
- Backend intake API
- Input validation
- AI-assisted triage
- Structured priority and summary
- Prototype submission storage
- Email notification
- Practice Lead dashboard
- Status updates
- Integration testing

## Production Enhancements

Features currently considered necessary when moving beyond the initial prototype include:

- Dashboard authentication
- Persistent database
- Rate limiting
- Spam/CAPTCHA protection
- Improved HTML email templates
- Mobile-responsive dashboard
- Hosted deployment

## Optional / Stretch Features

If time and project progress permit, potential enhancements include:

- Follow-up action logging
- CSV export for reporting
- Real-time dashboard updates
- Advanced filtering/search
- Integration with Deltamine's broader technology environment
- Microsoft 365 integration

These are not required for demonstrating the initial proof of concept.

---

# Maintenance and Future Support

The project is being designed so that the initial proof of concept can provide a foundation for future development rather than functioning only as a semester demonstration.

At the end of the semester, project documentation is planned to include:

- Application setup instructions
- Environment-variable reference
- System architecture description
- Versioned AI system prompt
- Prompt change log
- Known production gaps
- Deployment considerations

A planned `PROMPT.md` will document the AI prompt and changes made during testing.

A planned `PRODUCTION_GAP.md` will document work required to move the proof of concept toward production, including:

- Authentication
- Persistent database migration
- Rate limiting
- Spam protection
- Production deployment
- Email improvements
- Security considerations

Potential long-term development could expand the system into a broader foundation for Deltamine's client relationship workflow.

---

# Iterative Development Approach

This project is intentionally being developed iteratively.

The current requirements represent the best understanding of the system at this stage rather than a permanent specification.

The development cycle will generally follow:

**Design → Implement → Test → Gather Feedback → Refine**

Feedback from the Practice Lead, peer evaluation, technical testing, and observations made during implementation may result in changes to:

- User experience
- System architecture
- AI prompts
- Functional requirements
- Technology selections
- Feature priority
- Project scope

Significant changes will be documented in the **Scope and Requirement Changes** section.

---

# Documentation

Project documentation will be maintained alongside the source code.

Planned documentation includes:

- `README.md` — Project overview and requirements
- `PROMPT.md` — AI prompt documentation and version history
- `PRODUCTION_GAP.md` — Known gaps between prototype and production
- `docs/intake-responses.md` — Initial project intake survey
- `docs/` — Architecture diagrams and other project documentation

---

## Current Proof-of-Concept Success Criteria

The initial proof of concept will be considered successful if it demonstrates that:

1. A prospective client can complete and submit the intake form.
2. The backend can receive and validate the submission.
3. The AI system can return a structured triage result.
4. The submission and triage result can be stored.
5. The Practice Lead can receive an email briefing.
6. The Practice Lead can access the submission through the dashboard.
7. The complete sequence can operate as a connected workflow without developer intervention.

The goal of the first implementation is to prove this end-to-end workflow before expanding the system toward production-level capabilities.