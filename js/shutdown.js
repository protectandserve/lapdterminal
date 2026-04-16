function resetShutdown() {
  var ids = ["shutdownLine1", "shutdownLine2", "shutdownLine3", "shutdownLine4", "shutdownLine5"];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.classList.remove("visible");
      el.textContent = "";
    }
  }

  var finalEl = document.getElementById("shutdownFinal");
  if (finalEl) {
    finalEl.classList.remove("visible");
  }
}

function ensureCrtFlash() {
  var viewport = document.querySelector(".viewport");
  if (!viewport) return null;

  var existing = document.getElementById("crtFlash");
  if (existing) return existing;

  var flash = document.createElement("div");
  flash.id = "crtFlash";
  flash.className = "crt-flash";
  viewport.appendChild(flash);
  return flash;
}

function playCrtShutdownEffect() {
  var viewport = document.querySelector(".viewport");
  var flash = ensureCrtFlash();

  if (!viewport || !flash) return;

  flash.classList.remove("active");
  viewport.classList.remove("crt-off");

  void flash.offsetWidth;

  flash.classList.add("active");

  setTimeout(function () {
    viewport.classList.add("crt-off");
  }, 120);
}

function lockTerminalPermanently() {
  terminalLocked = true;
  document.body.classList.add("terminal-dead");

  var app = document.querySelector(".app");
  if (app) {
    app.style.pointerEvents = "none";
  }
}

function terminateSession() {
  if (terminalLocked || bootRunning) return;

  var shutdownOverlay = document.getElementById("shutdownOverlay");
  if (!shutdownOverlay) return;

  lockTerminalPermanently();
  resetShutdown();

  shutdownOverlay.classList.add("active");
  shutdownOverlay.setAttribute("aria-hidden", "false");

  var lines = [
    "CLOSING ACTIVE SESSION...",
    "REVOKING TERMINAL ACCESS...",
    "UNMOUNTING INCIDENT REGISTRY...",
    "SEALING TACTICAL DATABASE...",
    "SYSTEM SHUTDOWN CONFIRMED."
  ];

  var ids = ["shutdownLine1", "shutdownLine2", "shutdownLine3", "shutdownLine4", "shutdownLine5"];
  var currentLine = 0;

  function writeNextShutdownLine() {
    if (currentLine >= lines.length) {
      var finalEl = document.getElementById("shutdownFinal");
      if (finalEl) {
        setTimeout(function () {
          finalEl.classList.add("visible");
        }, 120);
      }

      setTimeout(function () {
        playCrtShutdownEffect();
      }, 1200);

      return;
    }

    var el = document.getElementById(ids[currentLine]);
    if (!el) {
      currentLine++;
      writeNextShutdownLine();
      return;
    }

    el.textContent = lines[currentLine];
    el.classList.add("visible");
    currentLine++;
    setTimeout(writeNextShutdownLine, 180);
  }

  writeNextShutdownLine();
}