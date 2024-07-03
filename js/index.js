const satrtDiscoverButton = document.querySelector(".start-discover");

satrtDiscoverButton.addEventListener("click", () => {
  window.location.href = "../src/savages.html";
});

const satrtListenButton = document.querySelector(".start-listen");
satrtListenButton.addEventListener("click", () => {
  window.location.href = "../src/tracklist.html";
});
