var currentIndex = 0;

function getScreenCount() {
  var track = document.getElementById("track");
  if (track && track.classList.contains("track-5")) return 5;
  return 4;
}

function getScreenWidthPercent() {
  return 100 / getScreenCount();
}

function getScrollBox(index) {
  var screens = document.querySelectorAll(".screen");
  if (!screens[index]) return null;
  return screens[index].querySelector(".screen-scroll");
}

function scrollScreenTop(index) {
  var scrollBox = getScrollBox(index);
  if (!scrollBox) return;

  scrollBox.scrollTop = 0;

  requestAnimationFrame(function () {
    scrollBox.scrollTop = 0;
  });

  setTimeout(function () {
    scrollBox.scrollTop = 0;
  }, 60);
}

function goTo(index) {
  if (terminalLocked) return;

  var track = document.getElementById("track");
  if (!track) return;

  currentIndex = index;
  track.style.transform = "translateX(-" + (index * getScreenWidthPercent()) + "%)";
  scrollScreenTop(index);
}