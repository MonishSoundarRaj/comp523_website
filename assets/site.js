/* ==========================================================================
   Library Navigator shared rendering and navigation.
   Reads from assets/data.js. No edits needed here for a content update.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------ helpers */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

  function fmtDate(iso) {
    var p = String(iso || "").split("-");
    if (p.length !== 3) { return ""; }
    var m = parseInt(p[1], 10) - 1;
    if (isNaN(m) || !MONTHS[m]) { return String(iso); }
    return MONTHS[m] + " " + parseInt(p[2], 10) + ", " + p[0];
  }

  function byDateDesc(a, b) { return String(b.date).localeCompare(String(a.date)); }

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) { el.innerHTML = html; }
    return el;
  }

  function tbd(text) { return '<span class="tbd">' + esc(text || "To be confirmed") + "</span>"; }

  function mailLink(addr) {
    return addr ? '<a href="mailto:' + esc(addr) + '">' + esc(addr) + "</a>" : tbd();
  }

  function record(label, title, body, meta) {
    return '<div class="record">' +
      (label ? '<div class="record-label">' + label + "</div>" : "") +
      (title ? '<div class="record-title">' + title + "</div>" : "") +
      (body  ? '<div class="record-body">' + body + "</div>" : "") +
      (meta  ? '<div class="record-meta">' + meta + "</div>" : "") +
      "</div>";
  }

  /* --------------------------------------------------------- navigation */

  function initNav() {
    /* mark the current page in the header */
    var here = location.pathname.split("/").pop() || "index.html";
    Array.prototype.forEach.call(document.querySelectorAll("[data-page]"), function (a) {
      if (a.getAttribute("data-page") === here) {
        a.setAttribute("aria-current", "page");
        var menu = a.closest(".menu");
        if (menu) {
          var btn = menu.querySelector(".menubtn");
          if (btn) { btn.setAttribute("aria-current", "page"); }
        }
      }
    });

    /* mobile disclosure */
    var toggle = document.querySelector(".navtoggle");
    var nav = document.getElementById("primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.textContent = open ? "Close" : "Menu";
      });
    }

    /* dropdown */
    var menu = document.querySelector(".menu");
    if (!menu) { return; }
    var btn = menu.querySelector(".menubtn");
    if (!btn) { return; }

    var timer = null;

    function isDesktop() { return window.matchMedia("(min-width: 861px)").matches; }

    function open() {
      window.clearTimeout(timer);
      menu.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }

    function close() {
      window.clearTimeout(timer);
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }

    /* Close on a delay, so that a cursor that slips outside the menu for a
       moment on its way to an item does not dismiss it. */
    function closeSoon() {
      window.clearTimeout(timer);
      timer = window.setTimeout(close, 260);
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (menu.classList.contains("open")) { close(); } else { open(); }
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target)) { close(); }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { close(); btn.focus(); }
    });

    menu.addEventListener("mouseenter", function () { if (isDesktop()) { open(); } });
    menu.addEventListener("mouseleave", function () { if (isDesktop()) { closeSoon(); } });

    /* Keyboard users get the same panel, and it stays open while focus is
       anywhere inside it. */
    menu.addEventListener("focusin", open);
    menu.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!menu.contains(document.activeElement)) { close(); }
      }, 0);
    });
  }

  /* ------------------------------------------------------------ renders */

  function renderTeam() {
    if (typeof TEAM === "undefined") { return; }

    mount("team-list", TEAM.map(function (m) {
      return record(
        esc(m.role),
        '<span class="person-name">' + esc(m.name) + "</span>",
        esc(m.duties),
        mailLink(m.email)
      );
    }).join(""));

    var addrs = TEAM.map(function (m) { return m.email; })
                    .filter(function (e) { return e && e.indexOf("@") > 0; });
    var el = document.getElementById("team-mailto");
    if (!el) { return; }
    if (addrs.length === TEAM.length) {
      el.innerHTML = '<a href="mailto:' + esc(addrs.join(",")) + "?subject=" +
        encodeURIComponent("COMP 523 Library Navigator") +
        '">Email the whole team in one click</a>';
    } else if (addrs.length) {
      el.innerHTML = '<a href="mailto:' + esc(addrs.join(",")) + "?subject=" +
        encodeURIComponent("COMP 523 Library Navigator") +
        '">Email the team (' + addrs.length + " of " + TEAM.length + " addresses added)</a>";
    } else {
      el.innerHTML = tbd("Team email addresses have not been added yet.");
    }
  }

  function renderClient() {
    if (typeof CLIENT !== "undefined") {
      mount("client-name", esc(CLIENT.name));
      mount("client-org", esc(CLIENT.org));
      mount("client-email", CLIENT.email
        ? mailLink(CLIENT.email)
        : tbd("Contact is routed through the Client Manager"));
    }
    if (typeof FACULTY !== "undefined") {
      mount("faculty-list", FACULTY.map(function (f) {
        return record(esc(f.role),
                      f.name ? esc(f.name) : tbd(),
                      "",
                      f.email ? mailLink(f.email) : "");
      }).join(""));
    }
  }

  function renderSchedule() {
    if (typeof SCHEDULE === "undefined") { return; }
    mount("schedule-list", SCHEDULE.map(function (s) {
      return record(
        "",
        esc(s.meeting),
        (s.tbd ? '<span class="tbd">' + esc(s.cadence) + "</span>" : esc(s.cadence)),
        esc(s.who) + " &middot; " + esc(s.where)
      );
    }).join(""));
  }

  function renderDeliverables() {
    if (typeof DELIVERABLES === "undefined") { return; }
    var LABEL = {
      done: '<span class="done">Complete</span>',
      wip:  '<span class="wip">In progress</span>',
      todo: '<span class="muted">Not started</span>'
    };
    mount("deliverables-list", DELIVERABLES.map(function (d) {
      var due = d.due ? fmtDate(d.due) : '<span class="tbd">Date to be confirmed</span>';
      return record(
        (LABEL[d.status] || ""),
        esc(d.name),
        "",
        due + " &middot; " + esc(d.where)
      );
    }).join(""));
  }

  function renderTimeline() {
    if (typeof TIMELINE === "undefined") { return; }
    mount("timeline-list", TIMELINE.slice().sort(byDateDesc).map(function (t) {
      return record(
        esc(fmtDate(t.date)) + (t.kind ? " &nbsp;&middot;&nbsp; " + esc(t.kind) : ""),
        esc(t.title),
        esc(t.body)
      );
    }).join(""));
  }

  function renderJournal() {
    if (typeof JOURNAL === "undefined") { return; }

    function part(heading, items) {
      if (!items || !items.length) { return ""; }
      return "<h4>" + heading + "</h4><ul>" +
        items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
    }

    mount("journal-list", JOURNAL.slice().sort(byDateDesc).map(function (j) {
      return record(
        esc(fmtDate(j.date)) + (j.kind ? " &nbsp;&middot;&nbsp; " + esc(j.kind) : ""),
        esc(j.title),
        part("Discussed", j.discussed) + part("Decided", j.decided) + part("Action items", j.actions)
      );
    }).join(""));
  }

  function renderLinks() {
    if (typeof LINKS === "undefined") { return; }
    mount("links-list", LINKS.map(function (g) {
      return '<div class="section"><div class="col"><h2>' + esc(g.group) + "</h2>" +
        g.items.map(function (i) {
          return record("",
            '<a href="' + esc(i.url) + '" rel="noopener noreferrer">' + esc(i.label) + "</a>",
            esc(i.note));
        }).join("") + "</div></div>";
    }).join(""));
  }

  function renderStamp() {
    if (typeof LAST_UPDATED === "undefined") { return; }
    Array.prototype.forEach.call(document.querySelectorAll(".updated"), function (el) {
      el.textContent = "Page last updated " + fmtDate(LAST_UPDATED) + ".";
    });
  }

  /* --------------------------------------------------------------- boot */

  function boot() {
    initNav();
    renderTeam();
    renderClient();
    renderSchedule();
    renderDeliverables();
    renderTimeline();
    renderJournal();
    renderLinks();
    renderStamp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
