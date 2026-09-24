/* ==========================================================================
   EDIT THIS FILE.

   Everything the team updates week to week lives here, and every page on the
   site reads from it. You should not need to open any .html file to post an
   update.

   Timeline and journal entries sort themselves into reverse-chronological
   order, so add new entries anywhere in the array.
   ========================================================================== */

var LAST_UPDATED = "2026-09-24";

/* --------------------------------------------------------------- the team
   Fill in full names and @unc.edu addresses. The one-click "email the whole
   team" link on the Team page is built automatically from this list.        */

var TEAM = [
  {
    name:  "Aditya",
    role:  "Project Manager",
    email: "",
    duties: "Runs team meetings and the schedule, tracks action items and blockers, and coordinates the coach meeting. Breaks ties when the team is split on a decision."
  },
  {
    name:  "Kevin",
    role:  "Tech Lead",
    email: "",
    duties: "Owns the architecture, the retrieval and guardrail design, code review standards, and the repository."
  },
  {
    name:  "Will C.",
    role:  "Client Manager",
    email: "",
    duties: "Single point of contact with the client. Sends all client correspondence, gathers requirements, and delivers the weekly written update."
  },
  {
    name:  "Monish Soundarraj",
    role:  "Web & Documentation Lead",
    email: "",
    duties: "Owns this site and the specification document, and keeps the journal, timeline, and deliverables current. Also works on the backend and retrieval layer."
  }
];

/* ------------------------------------------------------- client & faculty */

var CLIENT = {
  name:  "Dr. Fei Yu",
  org:   "School of Information and Library Science, UNC-Chapel Hill",
  email: ""
};

var FACULTY = [
  { role: "Course instructor",   name: "", email: "" },
  { role: "Team coach / manager", name: "", email: "" }
];

/* ------------------------------------------------------- regular meetings */

var SCHEDULE = [
  {
    meeting: "Team working meeting",
    cadence: "Weekly, day and time to be confirmed",
    who:     "All team members",
    where:   "To be confirmed",
    tbd:     true
  },
  {
    meeting: "Coach / manager meeting",
    cadence: "Weekly, time to be confirmed. The current slots conflict with class schedules",
    who:     "All team members and the assigned coach",
    where:   "To be confirmed",
    tbd:     true
  },
  {
    meeting: "Client meeting with Dr. Fei Yu",
    cadence: "Weekly, on Wednesday or Thursday by the client's preference",
    who:     "All team members and the client",
    where:   "Zoom / SILS"
  },
  {
    meeting: "Written client update",
    cadence: "Weekly, including weeks with no live meeting. The client has asked for this explicitly",
    who:     "Sent by the Client Manager on behalf of the team",
    where:   "Email"
  },
  {
    meeting: "COMP 523 class session",
    cadence: "Per the course calendar",
    who:     "All team members",
    where:   "Per the course calendar"
  }
];

/* ----------------------------------------------------------- deliverables
   status is one of: "done", "wip", "todo"                                   */

var DELIVERABLES = [
  { name: "Project website established",                          due: "2026-09-24", status: "done", where: "This site" },
  { name: "Team information posted",                              due: "2026-09-25", status: "done", where: "Meet the Team" },
  { name: "Team rules posted",                                    due: "2026-09-25", status: "done", where: "Meet the Team" },
  { name: "Project specification",                                due: "2026-09-25", status: "done", where: "Specification" },
  { name: "Four user personas",                                   due: "2026-09-25", status: "done", where: "Specification" },
  { name: "Literature review: AI chatbots in library reference", due: "2026-10-02", status: "wip",  where: "In progress" },
  { name: "API cost estimate for the client",                     due: "2026-10-02", status: "wip",  where: "In progress" },
  { name: "Dataset received and reviewed",                        due: "2026-10-02", status: "wip",  where: "Awaiting client" },
  { name: "Architecture and design document",                     due: "",           status: "todo", where: "Not started" },
  { name: "First working version (proof of concept)",             due: "",           status: "todo", where: "Estimated 2 to 5 weeks from kickoff" },
  { name: "Client acceptance testing",                            due: "",           status: "todo", where: "Not started" },
  { name: "Final demo and presentation",                          due: "",           status: "todo", where: "Not started" }
];

/* --------------------------------------------------------------- timeline */

var TIMELINE = [
  {
    date: "2026-09-25",
    kind: "Deliverable",
    title: "Specification and team information published",
    body: "Requirements, four user personas, user stories, workflows, and error-handling behavior posted alongside team roles and contact information."
  },
  {
    date: "2026-09-24",
    kind: "Milestone",
    title: "Project website established",
    body: "Public project site published with navigation in the header and a page for each required section."
  },
  {
    date: "2026-09-18",
    kind: "Decision D-1",
    title: "The MVP is backed by the curated dataset; live fetching is deferred",
    body: "The first iteration uses the client's curated dataset of roughly 467 records. Real time retrieval over live library websites is deferred to a later iteration, contingent on a cost estimate the client has offered to fund."
  },
  {
    date: "2026-09-18",
    kind: "Decision D-2",
    title: "Guided navigation is modeled on the NC DMV AI agent",
    body: "The assistant gives one instruction at a time and waits for confirmation before advancing, rather than handing the user a link and a paragraph of text."
  },
  {
    date: "2026-09-18",
    kind: "Decision D-3",
    title: "Answers are governed by confidence-based guardrails",
    body: "High-confidence answers are served directly. Medium and low confidence answers are flagged, cited, and routed toward a human librarian. The assistant is permitted to say it does not know."
  },
  {
    date: "2026-09-18",
    kind: "Decision D-4",
    title: "The deliverable is a working proof of concept",
    body: "Agreed with the client that the semester produces functioning software with working code, not a prototype or a clickable mockup."
  },
  {
    date: "2026-09-18",
    kind: "Milestone",
    title: "Client kickoff: scope and feature set agreed",
    body: "Core features established: ZIP-based resource discovery ranked by proximity, guided access navigation, local activity information, confidence guardrails, a librarian admin panel, and responsive design."
  }
];

/* -------------------------------------------------- journal of meetings
   Each entry: discussed / decided / actions. Leave an array out if empty.   */

var JOURNAL = [
  {
    date: "2026-09-24",
    kind: "Team meeting",
    title: "Team working session",
    discussed: [
      "Structure and required contents of the project website.",
      "Division of the specification document between team members.",
      "How to show confidence levels in the interface without alarming non-technical patrons."
    ],
    decided: [
      "Give each required section its own page, with all navigation in the site header.",
      "Keep the specification on the site itself as a living document rather than as an attached file."
    ],
    actions: [
      "Publish the site with the specification and team information before Friday (Web & Documentation Lead).",
      "Confirm full names, UNC email addresses, and final role assignments (all members).",
      "Email the site URL to the professor once it is live (Project Manager)."
    ]
  },
  {
    date: "2026-09-18",
    kind: "Client meeting",
    title: "Client kickoff with Dr. Fei Yu",
    discussed: [
      "The core problem: patrons, and often librarians themselves, do not know what digital resources their library already provides.",
      "The dataset: roughly 467 rows across all 100 NC counties, 90 library systems, and 413 outlets, with about 40 columns each. Still being finalized, with corrections in progress.",
      "Whether the first version should fetch data live or run off the curated dataset.",
      "The NC DMV AI agent as the reference model for guided, step-by-step navigation.",
      "Available resources: the client has a high-end laptop with a local LLM configured that the team may use, and is open to funding API costs given a justified estimate."
    ],
    decided: [
      "The deliverable is a functioning proof of concept with working code.",
      "The MVP is backed by the curated dataset; live fetching is a later enhancement.",
      "Required features: ZIP-based resource discovery ranked by proximity, guided navigation, local activity and event information, confidence-based guardrails, a librarian admin panel, and responsive design.",
      "Four personas will guide design: an older adult managing a chronic condition, a homeschooling parent, a rural teenager seeking mental health support, and a librarian administrator."
    ],
    actions: [
      "Submit project specifications by Friday: group-level steps, not individual task assignments.",
      "Research existing library chatbot implementations through Google Scholar, Scopus, and the ACM Digital Library. The client will send relevant scholarly articles.",
      "Draft the four user personas.",
      "Prepare an API cost estimate with justification for the client.",
      "Resolve the coach meeting scheduling conflict by emailing the instructor or exploring section 2 availability (Aditya).",
      "Receive and review the dataset once the client shares the OneDrive link."
    ]
  }
];

/* ---------------------------------------------------------- related links */

var LINKS = [
  {
    group: "North Carolina libraries",
    items: [
      { label: "NC LIVE",                          url: "https://www.nclive.org",           note: "The statewide consortium behind many of the digital subscriptions in our dataset." },
      { label: "State Library of North Carolina",  url: "https://statelibrary.ncdcr.gov",   note: "Directory of public library systems and statewide programs." },
      { label: "Libby",                            url: "https://libbyapp.com",             note: "E-book and audiobook lending; a frequent target of our guided walkthroughs." },
      { label: "Hoopla Digital",                   url: "https://www.hoopladigital.com",    note: "Streaming and digital lending offered by many North Carolina systems." }
    ]
  },
  {
    group: "Reference models and domain",
    items: [
      { label: "NC Division of Motor Vehicles",    url: "https://www.ncdot.gov/dmv",        note: "Its AI agent is our reference model for step-by-step guided navigation." },
      { label: "MedlinePlus",                      url: "https://medlineplus.gov",          note: "Plain-language consumer health reference, and our benchmark for readability." },
      { label: "988 Suicide & Crisis Lifeline",    url: "https://988lifeline.org",          note: "The crisis handoff defined in our error-handling rules." }
    ]
  },
  {
    group: "Research",
    items: [
      { label: "ACM Digital Library",              url: "https://dl.acm.org",               note: "Literature on chatbots in library reference services." },
      { label: "Google Scholar",                   url: "https://scholar.google.com",       note: "General scholarly search for the literature review." },
      { label: "Scopus",                           url: "https://www.scopus.com",           note: "Abstract and citation database, accessed through UNC Libraries." },
      { label: "UNC School of Information and Library Science", url: "https://sils.unc.edu", note: "Our client's home department." }
    ]
  },
  {
    group: "Technology and standards",
    items: [
      { label: "WCAG 2.1",                         url: "https://www.w3.org/TR/WCAG21/",    note: "The accessibility standard our non-functional requirements target." },
      { label: "Firecrawl",                        url: "https://www.firecrawl.dev",        note: "A candidate for live fetching in a later iteration. Deferred, see decision D-1." }
    ]
  }
];
