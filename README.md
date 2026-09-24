# COMP 523 — Library Navigator

Project website for **Library Navigator**, an AI-assisted library chatbot for rural
North Carolina communities.

UNC-Chapel Hill · COMP 523 Software Engineering Laboratory · Fall 2026

## About the project

Public libraries across North Carolina subscribe to far more than most people ever
use: health databases, e-book and audiobook services, tutoring, job tools, and local
programs. The problem is not access. The problem is that almost nobody knows any of
it exists. Librarians themselves often cannot name the full catalog their system
carries.

Library Navigator closes that gap. A patron enters a ZIP code and a plain-English
question, and the assistant answers with the specific resources their own library
system offers, ranked by proximity, then walks them through getting in one step at a
time. Librarians get an admin panel to correct, extend, and govern the data behind
it.

The semester deliverable is a functioning proof of concept with working code.

## Site structure

Static HTML. No build step, no framework, no dependencies. One page per section,
with all navigation in the site header.

| Page | Contents |
| --- | --- |
| `index.html` | Project introduction and concept |
| `team.html` | Roster, roles, contact, team rules, client and faculty |
| `meetings.html` | Schedule of regular meetings, journal of meetings and decisions |
| `specification.html` | Requirements, personas, user stories, workflows, error handling |
| `deliverables.html` | Every deliverable with due date and status |
| `timeline.html` | Dated milestones, decisions, deployments, pivots |
| `resources.html` | Related external links |

| Asset | Purpose |
| --- | --- |
| `assets/data.js` | **All site content that changes week to week.** Edit this. |
| `assets/site.js` | Rendering and navigation. No edits needed for a content update. |
| `assets/site.css` | Shared stylesheet. |

## Posting a weekly update

Open `assets/data.js`. You should not need to touch a single `.html` file.

- `TEAM` — names, roles, responsibilities, emails. The one-click "email the whole
  team" link on the Team page is built automatically from this array.
- `CLIENT`, `FACULTY` — client and course contacts.
- `SCHEDULE` — regular meetings.
- `DELIVERABLES` — `status` is one of `done`, `wip`, or `todo`.
- `TIMELINE` — milestones, decisions, deployments, pivots.
- `JOURNAL` — meeting entries, each with what was discussed, decided, and assigned.
- `LINKS` — related external resources.
- `LAST_UPDATED` — bump this whenever you post a change.

Timeline and journal entries sort themselves into reverse-chronological order, so
you can add a new entry anywhere in the array.

Two things live in the HTML rather than in the data file, because they rarely
change: the header navigation and the brand text in the top left. Both are repeated
in all seven pages, so changing either means editing all seven.

## Viewing locally

No server required. Open the file directly:

```
open index.html
```

## Conventions

Work happens on feature branches; `main` is protected by convention. Every pull
request needs review from at least one teammate before merge. No credentials, API
keys, or dataset exports belong in this repository. Anything the client marks
confidential stays off the public site.
