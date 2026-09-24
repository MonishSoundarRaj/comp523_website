# COMP 523 — Library Navigator

Project website for **Library Navigator**, an AI-assisted library chatbot for rural
North Carolina communities.

UNC-Chapel Hill · COMP 523 Software Engineering Laboratory · Fall 2026

## About the project

Public libraries across North Carolina pay for far more than most people ever use —
health databases, e-book and audiobook services, tutoring, job tools, and local
programs. The problem is not access; it is that almost nobody knows these resources
exist. Librarians themselves often cannot name the full catalog their system carries.

Library Navigator closes that gap. A patron enters a ZIP code and a plain-English
question, and the assistant answers with the specific resources their own library
system offers, ranked by proximity, then walks them through getting in step by step.
Librarians get an admin panel to correct, extend, and govern the data behind it.

The semester deliverable is a functioning proof of concept with working code.

## This repository

| File | Purpose |
| --- | --- |
| `index.html` | The complete project website — a single self-contained file with all CSS and JavaScript inline. No build step, no dependencies. |

## Site contents

All ten sections required by the course, reachable in one click from the header
navigation:

Overview · Team · Team Rules · Schedule · Specification · Deliverables ·
Timeline · Journal · Client & Faculty · Related Links

The specification section carries the functional and non-functional requirements,
the four user personas, user stories with acceptance criteria, the core workflows,
and the error-handling behavior.

## Updating the site

Open `index.html` and edit the block marked `EDIT HERE` at the top of the `<script>`
element. The team roster, schedule, deliverables, timeline, journal, faculty table,
and related links are all rendered from plain JavaScript arrays there — you should
never need to touch the markup to post a weekly update.

- `TEAM` — names, roles, responsibilities, emails. The one-click "email the whole
  team" link is built automatically from this array.
- `SCHEDULE` — regular meetings.
- `DELIVERABLES` — status is one of `done`, `active`, or `todo`.
- `TIMELINE` — milestones, decisions, deployments, pivots.
- `JOURNAL` — meeting entries, each with what was discussed, decided, and assigned.
- `FACULTY`, `CLIENT_EMAIL`, `LINKS`.
- `LAST_UPDATED` — bump this whenever you post a change.

Timeline and journal entries sort themselves into reverse-chronological order, so
add new entries anywhere in the array.

## Viewing locally

No server or build is required. Open the file directly:

```
open index.html
```

## Conventions

Work happens on feature branches; `main` is protected by convention. Every pull
request needs review from at least one teammate before merge. No credentials, API
keys, or dataset exports belong in this repository. Anything the client marks
confidential stays off the public site.
