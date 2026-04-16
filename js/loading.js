var bootRunning = false;

var loadingPresets = {
  startup: {
    title: "SYSTEM STARTUP // SECURE NODE INIT",
    lines: [
      "BOOTING TACTICAL TERMINAL...",
      "INITIALIZING DISPLAY LAYERS...",
      "VERIFYING INTERNAL NODE INTEGRITY...",
      "CALIBRATING SECURE RESPONSE CHANNEL...",
      "STANDBY SCREEN READY."
    ],
    lineDelay: 260,
    finalDelay: 520,
    glitchBursts: 2
  },

  login: {
    title: "TERMINAL BOOT // AUTHENTICATION",
    lines: [
      "INITIALIZING SECURE TERMINAL...",
      "VERIFYING BADGE CREDENTIALS...",
      "CONNECTING TO TACTICAL DATABASE...",
      "MOUNTING OFFICER FILE...",
      "SESSION VALIDATED."
    ],
    lineDelay: 210,
    finalDelay: 360,
    glitchBursts: 1
  },

  operations: {
    title: "ARCHIVE ACCESS // SWAT INCIDENT REGISTRY",
    lines: [
      "CLOSING OFFICER PROFILE VIEW...",
      "REQUESTING INCIDENT ARCHIVE ACCESS...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING ARCHIVE INDEX...",
      "ARCHIVE READY."
    ],
    lineDelay: 135,
    finalDelay: 260,
    glitchBursts: 1
  },

  operationsReturn: {
    title: "ARCHIVE ACCESS // SWAT INCIDENT REGISTRY",
    lines: [
      "CLOSING INCIDENT FILE...",
      "RETURNING TO ARCHIVE INDEX...",
      "VERIFYING SESSION INTEGRITY...",
      "RESTORING INCIDENT REGISTRY...",
      "ARCHIVE READY."
    ],
    lineDelay: 125,
    finalDelay: 240,
    glitchBursts: 0
  },

  operator: {
    title: "PROFILE ACCESS // OFFICER RECORD",
    lines: [
      "CLOSING ARCHIVE VIEW...",
      "RESTORING OFFICER FILE...",
      "VERIFYING LOCAL SESSION...",
      "LOADING PERSONNEL RECORD...",
      "OFFICER FILE READY."
    ],
    lineDelay: 125,
    finalDelay: 240,
    glitchBursts: 0
  },

  records: {
    title: "RECORD ACCESS // INTERNAL REVIEW INDEX",
    lines: [
      "REQUESTING ADMINISTRATIVE RECORDS...",
      "VERIFYING TACTICAL SUPERVISION ACCESS...",
      "RESTORING COMMENDATION LOG...",
      "MOUNTING INTERNAL REVIEW INDEX...",
      "RECORDS READY."
    ],
    lineDelay: 145,
    finalDelay: 280,
    glitchBursts: 1
  },

  missionDefault: {
    title: "FILE ACCESS // INCIDENT DOSSIER",
    lines: [
      "REQUESTING INCIDENT FILE...",
      "VERIFYING INTERNAL CLEARANCE...",
      "RESTORING TACTICAL REPORT...",
      "LOADING FIELD TIMELINE...",
      "INCIDENT FILE READY."
    ],
    lineDelay: 120,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_lockdown_12: {
    title: "FILE ACCESS // LOCKDOWN 12",
    lines: [
      "REQUESTING HOSTAGE INCIDENT FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING RESIDENTIAL ENTRY REPORT...",
      "LOADING HOSTAGE RESPONSE TIMELINE...",
      "LOCKDOWN 12 FILE READY."
    ],
    lineDelay: 120,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_harbor_nine: {
    title: "FILE ACCESS // HARBOR NINE",
    lines: [
      "REQUESTING PORT DISTRICT INCIDENT FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING ARMED INTERCEPTION REPORT...",
      "LOADING SEIZURE AND ARREST LOG...",
      "HARBOR NINE FILE READY."
    ],
    lineDelay: 120,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_glass_hall: {
    title: "FILE ACCESS // GLASS HALL",
    lines: [
      "REQUESTING ADMINISTRATIVE SITE FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING BUILDING EVACUATION LOG...",
      "LOADING INTERIOR CONTACT REPORT...",
      "GLASS HALL FILE READY."
    ],
    lineDelay: 120,
    finalDelay: 220,
    glitchBursts: 1
  },

  mission_dead_air: {
    title: "FILE ACCESS // DEAD AIR",
    lines: [
      "REQUESTING ISOLATED SITE FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING COMMUNICATIONS RECOVERY LOG...",
      "LOADING LOW-LIGHT ENTRY TIMELINE...",
      "DEAD AIR FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 1
  },

  mission_ivory_line: {
    title: "FILE ACCESS // IVORY LINE",
    lines: [
      "REQUESTING RESIDENTIAL EXTRACTION FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING ENTRY AND EXTRACTION LOG...",
      "LOADING MINOR PROTECTION REPORT...",
      "IVORY LINE FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_night_warrant: {
    title: "FILE ACCESS // NIGHT WARRANT",
    lines: [
      "REQUESTING WARRANT EXECUTION FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING RESIDENTIAL ENTRY LOG...",
      "LOADING EVIDENCE AND ARREST REPORT...",
      "NIGHT WARRANT FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_redline_yard: {
    title: "FILE ACCESS // REDLINE YARD",
    lines: [
      "REQUESTING INDUSTRIAL SITE FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING YARD CONTROL REPORT...",
      "LOADING SECTOR CLEARANCE TIMELINE...",
      "REDLINE YARD FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_civic_echo: {
    title: "FILE ACCESS // CIVIC ECHO",
    lines: [
      "REQUESTING CIVIC BUILDING FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING EVACUATION LOG...",
      "LOADING FLOOR-BY-FLOOR REPORT...",
      "CIVIC ECHO FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_twin_palms: {
    title: "FILE ACCESS // TWIN PALMS",
    lines: [
      "REQUESTING MOTEL INCIDENT FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING ROOM ENTRY LOG...",
      "LOADING ARREST AND EVIDENCE REPORT...",
      "TWIN PALMS FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_long_march: {
    title: "FILE ACCESS // LONG MARCH",
    lines: [
      "REQUESTING RESIDENTIAL BLOCK FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING STAIRWELL PROGRESSION LOG...",
      "LOADING SUSTAINED SEARCH REPORT...",
      "LONG MARCH FILE READY."
    ],
    lineDelay: 118,
    finalDelay: 220,
    glitchBursts: 0
  },

  mission_static_breach: {
    title: "FILE ACCESS // STATIC BREACH",
    lines: [
      "REQUESTING RESTRICTED INCIDENT FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING COMPLEX ENTRY LOG...",
      "LOADING ENGAGEMENT AND WITHDRAWAL REPORT...",
      "STATIC BREACH FILE READY."
    ],
    lineDelay: 145,
    finalDelay: 260,
    glitchBursts: 2
  },

  mission_blue_room: {
    title: "FILE ACCESS // BLUE ROOM",
    lines: [
      "REQUESTING RESTRICTED MEDICAL SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING CIVILIAN PROTECTION LOG...",
      "LOADING CRITICAL CONTACT REPORT...",
      "BLUE ROOM FILE READY."
    ],
    lineDelay: 145,
    finalDelay: 260,
    glitchBursts: 1
  },

  mission_crosswind: {
    title: "FILE ACCESS // CROSSWIND",
    lines: [
      "REQUESTING HIGHWAY INCIDENT FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING TRAFFIC LOCKDOWN LOG...",
      "LOADING CIVILIAN EXTRACTION REPORT...",
      "CROSSWIND FILE READY."
    ],
    lineDelay: 145,
    finalDelay: 260,
    glitchBursts: 1
  },

  mission_saint_elias: {
    title: "FILE ACCESS // SAINT ELIAS",
    lines: [
      "REQUESTING SENSITIVE SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING STRUCTURE CONTROL REPORT...",
      "LOADING SUSPECT LOCATION TIMELINE...",
      "SAINT ELIAS FILE READY."
    ],
    lineDelay: 145,
    finalDelay: 260,
    glitchBursts: 1
  },

  mission_winter_garden: {
    title: "FILE ACCESS // WINTER GARDEN",
    lines: [
      "REQUESTING SENSITIVE PUBLIC SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING ENVIRONMENTAL MOVEMENT LOG...",
      "LOADING CONTACT AND EXTRACTION REPORT...",
      "WINTER GARDEN FILE READY."
    ],
    lineDelay: 145,
    finalDelay: 260,
    glitchBursts: 1
  },

  default: {
    title: "TERMINAL BOOT // AUTHENTICATION",
    lines: [
      "INITIALIZING SECURE TERMINAL...",
      "VERIFYING BADGE CREDENTIALS...",
      "CONNECTING TO TACTICAL DATABASE...",
      "MOUNTING OFFICER FILE...",
      "SESSION VALIDATED."
    ],
    lineDelay: 150,
    finalDelay: 260,
    glitchBursts: 0
  }
};

function getMissionPresetName(key) {
  var presetName = "mission_" + key;
  return loadingPresets[presetName] ? presetName : "missionDefault";
}

function resetLoading() {
  var bar = document.getElementById("progressBar");
  if (bar) bar.style.width = "0%";

  var ids = ["line1", "line2", "line3", "line4", "line5"];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.classList.remove("visible");
      el.textContent = "";
    }
  }
}

function triggerLoadingGlitch(overlay, bursts) {
  if (!overlay || !bursts) return;

  for (var i = 0; i < bursts; i++) {
    (function(delay) {
      setTimeout(function() {
        overlay.classList.remove("glitch");
        void overlay.offsetWidth;
        overlay.classList.add("glitch");
      }, delay);
    })(180 + (i * 260));
  }
}

function bootTo(index, presetName, options) {
  if (terminalLocked || bootRunning) return;

  var overlay = document.getElementById("loadingOverlay");
  var bar = document.getElementById("progressBar");
  var titleEl = document.getElementById("loadingTitle");
  var opts = options || {};
  var revealVersion = opts.revealVersion !== false;

  if (!overlay || !bar) {
    goTo(index);
    if (index > 0 && revealVersion) showVersionStamp();
    return;
  }

  var preset = loadingPresets[presetName] || loadingPresets.default;
  var lines = preset.lines || [];
  var lineDelay = preset.lineDelay || 90;
  var finalDelay = preset.finalDelay || 180;
  var ids = ["line1", "line2", "line3", "line4", "line5"];
  var progress = [18, 39, 62, 84, 100];
  var currentLine = 0;

  if (titleEl) {
    titleEl.textContent = preset.title || "LOADING...";
  }

  bootRunning = true;
  resetLoading();
  overlay.classList.add("active");

  triggerLoadingGlitch(overlay, preset.glitchBursts || 0);

  function writeNextLine() {
    if (currentLine >= lines.length) {
      setTimeout(function () {
        if (!terminalLocked) {
          goTo(index);
          document.body.classList.remove("startup-lock");

          if (index > 0 && revealVersion) {
            showVersionStamp();
          }
        }

        overlay.classList.remove("active");
        bootRunning = false;
        scrollScreenTop(index);
      }, finalDelay);
      return;
    }

    var el = document.getElementById(ids[currentLine]);
    if (el) {
      el.textContent = lines[currentLine];
      el.classList.add("visible");
    }

    if (bar) {
      bar.style.width = progress[currentLine] + "%";
    }

    currentLine++;
    setTimeout(writeNextLine, lineDelay);
  }

  setTimeout(writeNextLine, 120);
}