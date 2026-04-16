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