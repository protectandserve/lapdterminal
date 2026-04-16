var terminalLocked = false;
var versionVisible = false;

function showVersionStamp() {
  var stamp = document.getElementById("versionStamp");
  if (!stamp || versionVisible) return;
  versionVisible = true;
  stamp.classList.add("visible");
}

function hideVersionStamp() {
  var stamp = document.getElementById("versionStamp");
  if (!stamp) return;
  versionVisible = false;
  stamp.classList.remove("visible");
}

window.addEventListener("resize", function () {
  if (!terminalLocked) {
    scrollScreenTop(currentIndex);
  }
});

document.addEventListener("click", function (event) {
  if (!terminalLocked) return;

  var shutdownOverlay = document.getElementById("shutdownOverlay");
  if (shutdownOverlay && shutdownOverlay.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);

document.addEventListener("keydown", function (event) {
  if (!terminalLocked) return;
  event.preventDefault();
}, true);

window.onload = function () {
  document.body.classList.add("startup-lock");

  hideVersionStamp();
  goTo(0);
  scrollScreenTop(0);

  if (typeof initMissionArchive === "function") {
    initMissionArchive();
  }

  setTimeout(function () {
    bootTo(0, "startup", { revealVersion: false });
  }, 40);
};