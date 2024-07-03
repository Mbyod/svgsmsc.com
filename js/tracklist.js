async function getTraksData() {
  const URL = "./json/trackList.json";
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

    json.tracks.forEach((element) => {
      const img = element.img;
      const trackName = element.trackName;
      const artistName = element.artistName;
      const trackContainer = document.createElement("div");
      trackContainer.className = "track-container";

      const trackImg = document.createElement("img");
      trackImg.src = img;
      trackImg.alt = "track cover";
      trackImg.className = "track-cover";

      const h2Artist = document.createElement("h2");
      h2Artist.innerText = artistName;

      const h2Track = document.createElement("h2");
      h2Track.innerText = trackName;

      const button = document.createElement("button");
      button.className = "listen-button";
      button.innerText = "Listen";

      const trackList = document.querySelector(".track-list");
      trackList.append(trackContainer);

      trackContainer.append(trackImg, h2Artist, h2Track, button);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getTraksData();

// const trackContainer = document.createElement("div");
// trackContainer.className = "track-container";

// const trackImg = document.createElement("img");
// trackImg.src = "./img/This8bit.png";
// trackImg.alt = "track cover";
// trackImg.className = "track-cover";

// const h2Artist = document.createElement("h2");
// h2Artist.innerText = "NECXMVTA";

// const h2Track = document.createElement("h2");
// h2Track.innerText = "Shitto";

// const button = document.createElement("button");
// button.className = "listen-button";
// button.innerText = "Listen";

// trackContainer.append(trackImg, h2Artist, h2Track, button);

// const trackList = document.querySelector(".track-list");
// trackList.append(trackContainer);
