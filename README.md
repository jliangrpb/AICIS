# Deltamine AI-Enabled Client Intake System

## Project Overview

Deltamine currently lacks a structured and intelligent process for
prospective clients to initiate contact. This project explores an
AI-enabled client intake system that provides prospective clients with
a professional intake experience while providing Deltamine's Practice
Lead with structured information for reviewing and prioritizing
incoming inquiries.

## Project Goals

- Create a multi-step client intake form.
- Process intake submissions through a backend API.
- Use AI to generate a structured triage briefing.
- Categorize inquiries using priority levels.
- Notify the Practice Lead when a submission is received.
- Provide a dashboard for reviewing submissions and triage results.

## Users

### Prospective Client
Completes and submits the client intake form.

### Practice Lead
Reviews AI-assisted intake briefings and determines the appropriate
next action.

## Proposed System

Prospective Client
        ↓
Client Intake Form
        ↓
Backend API
        ↓
AI Triage
        ↓
Structured Briefing
        ↓
Storage + Email + Dashboard

## Planned Technology Stack

### Frontend
- React
- JavaScript

### Backend
- Node.js
- Express

### AI
- Anthropic API

### Notifications
- Resend

### Data Storage
- JSON flat-file storage for initial prototype
- Persistent database planned for later development

### Development
- Git
- GitHub
- Client/server monorepo

## Current Project Status

The project is currently in the initial design and development stage.

Current work includes:
- Defining project requirements
- Designing the system architecture
- Designing the intake and triage workflow
- Setting up the frontend and backend project structure

Implementation details may change as the project develops.

## Planned Development Phases

1. Project setup and architecture
2. Client intake form
3. Backend API and AI triage
4. Data storage
5. Email notification
6. Practice Lead dashboard
7. Integration testing
8. Documentation and final capstone deliverable

## Future / Production Considerations

The initial project is intended to demonstrate the complete workflow
as a proof of concept. Production considerations currently include:

- Dashboard authentication
- Persistent database storage
- Rate limiting
- Spam/CAPTCHA protection
- Responsive dashboard design
- Hosted deployment
- Integration with Deltamine's broader technology stack