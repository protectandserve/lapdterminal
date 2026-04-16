var currentMissionFilter = "ALL";

function populateMissionContent(mission) {
  var systemEl = document.getElementById("detailSystemLine");
  var titleEl = document.getElementById("detailMainTitle");
  var subEl = document.getElementById("detailSub");

  var clearanceEl = document.getElementById("detailClearance");
  var theatreEl = document.getElementById("detailTheatre");
  var riskEl = document.getElementById("detailRisk");

  var contextEl = document.getElementById("detailContext");
  var outcomeEl = document.getElementById("detailOutcome");
  var timelineEl = document.getElementById("detailTimeline");

  var arrestEl = document.getElementById("detailArrest");
  var civilianEl = document.getElementById("detailCivilian");
  var evidenceEl = document.getElementById("detailEvidence");
  var reviewEl = document.getElementById("detailReview");

  var dispatchEl = document.getElementById("detailDispatch");
  var witnessEl = document.getElementById("detailWitness");
  var attachmentEl = document.getElementById("detailAttachment");
  var noteEl = document.getElementById("detailNote");

  var dispatchBoxEl = document.getElementById("detailDispatchBox");
  var witnessBoxEl = document.getElementById("detailWitnessBox");
  var attachmentBoxEl = document.getElementById("detailAttachmentBox");
  var noteBoxEl = document.getElementById("detailNoteBox");

  if (systemEl) systemEl.textContent = mission.system || "INCIDENT FILE // LOADED";
  if (titleEl) titleEl.textContent = mission.title || "INCIDENT";
  if (subEl) subEl.textContent = mission.sub || "";

  if (clearanceEl) clearanceEl.textContent = mission.clearance || "—";
  if (theatreEl) theatreEl.textContent = mission.theatre || "—";
  if (riskEl) riskEl.textContent = mission.risk || "—";

  if (contextEl) contextEl.textContent = mission.context || "";
  if (outcomeEl) outcomeEl.textContent = mission.outcome || "";

  if (timelineEl) {
    timelineEl.innerHTML = "";
    if (mission.timeline && mission.timeline.length) {
      for (var i = 0; i < mission.timeline.length; i++) {
        var li = document.createElement("li");
        li.textContent = mission.timeline[i];
        timelineEl.appendChild(li);
      }
    }
  }

  if (arrestEl) arrestEl.textContent = mission.arrest || "—";
  if (civilianEl) civilianEl.textContent = mission.civilian || "—";
  if (evidenceEl) evidenceEl.textContent = mission.evidence || "—";
  if (reviewEl) reviewEl.textContent = mission.review || "—";

  if (dispatchEl) dispatchEl.textContent = mission.dispatch || "";
  if (witnessEl) witnessEl.textContent = mission.witness || "";
  if (attachmentEl) attachmentEl.textContent = mission.attachment || "";
  if (noteEl) noteEl.textContent = mission.note || "";

  if (dispatchBoxEl) dispatchBoxEl.style.display = mission.dispatch ? "" : "none";
  if (witnessBoxEl) witnessBoxEl.style.display = mission.witness ? "" : "none";
  if (attachmentBoxEl) attachmentBoxEl.style.display = mission.attachment ? "" : "none";
  if (noteBoxEl) noteBoxEl.style.display = mission.note ? "" : "none";
}

function openMission(key) {
  if (terminalLocked) return;

  var mission = missions[key];
  if (!mission) return;

  populateMissionContent(mission);
  scrollScreenTop(3);
  bootTo(3, getMissionPresetName(key), { revealVersion: true });
}

function updateMissionCounts() {
  var files = document.querySelectorAll(".mission-file");
  var counts = {
    ALL: 0,
    CLOSED: 0,
    ARCHIVED: 0,
    RESTRICTED: 0
  };

  for (var i = 0; i < files.length; i++) {
    var state = files[i].getAttribute("data-state");
    counts.ALL += 1;
    if (counts[state] !== undefined) {
      counts[state] += 1;
    }
  }

  var allEl = document.getElementById("countAll");
  var closedEl = document.getElementById("countClosed");
  var archivedEl = document.getElementById("countArchived");
  var restrictedEl = document.getElementById("countRestricted");

  if (allEl) allEl.textContent = counts.ALL;
  if (closedEl) closedEl.textContent = counts.CLOSED;
  if (archivedEl) archivedEl.textContent = counts.ARCHIVED;
  if (restrictedEl) restrictedEl.textContent = counts.RESTRICTED;
}

function updateMissionStatusLine(filter) {
  var line = document.getElementById("archiveStatusLine");
  if (!line) return;

  if (filter === "ALL") {
    line.textContent = "FILTER // ALL VISIBLE";
    return;
  }

  line.textContent = "FILTER // " + filter + " ONLY";
}

function updateFilterChips(filter) {
  var chips = document.querySelectorAll(".filter-chip");
  for (var i = 0; i < chips.length; i++) {
    var chip = chips[i];
    if (chip.getAttribute("data-filter") === filter) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  }
}

function setMissionFilter(filter) {
  currentMissionFilter = filter;

  var groups = document.querySelectorAll(".mission-group");
  var dividers = document.querySelectorAll(".mission-divider");
  var files = document.querySelectorAll(".mission-file");

  for (var i = 0; i < files.length; i++) {
    files[i].classList.add("is-fading");
  }

  setTimeout(function () {
    for (var j = 0; j < groups.length; j++) {
      var groupState = groups[j].getAttribute("data-state-group");
      var shouldShowGroup = filter === "ALL" || groupState === filter;
      groups[j].classList.toggle("is-hidden", !shouldShowGroup);
    }

    for (var k = 0; k < dividers.length; k++) {
      var dividerState = dividers[k].getAttribute("data-state-group");
      var shouldShowDivider = filter === "ALL" || dividerState === filter;
      dividers[k].classList.toggle("is-hidden", !shouldShowDivider);
    }

    for (var m = 0; m < files.length; m++) {
      var state = files[m].getAttribute("data-state");
      var shouldShowFile = filter === "ALL" || state === filter;
      files[m].classList.toggle("is-hidden", !shouldShowFile);
      files[m].classList.remove("is-fading");
    }

    updateFilterChips(filter);
    updateMissionStatusLine(filter);
    scrollScreenTop(2);
  }, 90);
}

function initMissionArchive() {
  updateMissionCounts();
  setMissionFilter("ALL");
}