// Frontend Functions
// createBackground()
// fillBackground()
// createOrbits()
// createSun()
// createPlanetTray()
// fillPlanets()

let imageLinks = {
  background: `./SolarSystemGameFiles/assets/background.png`,
  orbits: `./SolarSystemGameFiles/assets/orbits.png`,
  retry_icon: `./SolarSystemGameFiles/assets/retry_icon.png`,
  endscreenbg: `./SolarSystemGameFiles/assets/endscreenbg.png`,
  endscreenplanet: `./SolarSystemGameFiles/assets/endscreenplanet.png`,
  endscreenship: `./SolarSystemGameFiles/assets/endscreenship.png`,
  sun: `./SolarSystemGameFiles/assets/sun.png`,
  mercury: `./SolarSystemGameFiles/assets/mercury.png`,
  venus: `./SolarSystemGameFiles/assets/venus.png`,
  earth: `./SolarSystemGameFiles/assets/earth.png`,
  mars: `./SolarSystemGameFiles/assets/mars.png`,
  jupiter: `./SolarSystemGameFiles/assets/jupiter.png`,
  saturn: `./SolarSystemGameFiles/assets/saturn.png`,
  uranus: `./SolarSystemGameFiles/assets/uranus.png`,
  neptune: `./SolarSystemGameFiles/assets/neptune.png`,
};

let correctSequence = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];
let planetPositions = [
  { x: "286px", y: "35px" },
  { x: "310px", y: "125px" },
  { x: "330px", y: "210px" },
  { x: "270px", y: "266px" },
  { x: "320px", y: "348px" },
  { x: "300px", y: "427px" },
  { x: "250px", y: "495px" },
  { x: "70px", y: "505px" },
];
let placedPlanets = new Array(8);
placedPlanets.fill("");
let activePos = -1;
function createBackground() {
  let container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
}
function fillBackground() {
  let container = document.getElementById("container");
  container.style.backgroundImage = `url(${imageLinks.background})`;
}
function createOrbits() {
  let orbitlayer = document.createElement("div");
  orbitlayer.className = "orbit_layer";
  orbitlayer.innerHTML = `<img src="${imageLinks.orbits}">`;
  document.getElementById("container").appendChild(orbitlayer);
  getPlanetPositions();
}

function createSun() {
  let sun = document.createElement("div");
  sun.innerHTML = `<img src="${imageLinks.sun}">`;
  sun.className = "sun_layer";
  document.getElementById("container").appendChild(sun);
}

function createPlanetTray() {
  let inventory = document.createElement("div");
  let planetTray = document.createElement("div");
  let submit = document.createElement("button");
  inventory.className = "inventory";
  submit.className = "submit_button";
  planetTray.className = "planet_tray";

  submit.innerText = "Submit";
  submit.onclick = () => {
    let correct = placedPlanets.length === correctSequence.length;

    placedPlanets.forEach((ele, i) => {
      if (ele !== correctSequence[i]) {
        correct = false;
      }
    });
    showGameEnd(correct);
  };
  inventory.appendChild(planetTray);
  inventory.appendChild(submit);
  document.getElementById("container").appendChild(inventory);
}
function fillPlanets() {
  getPlanet("mercury");
  getPlanet("venus");
  getPlanet("earth");
  getPlanet("mars");
  getPlanet("jupiter");
  getPlanet("saturn");
  getPlanet("uranus");
  getPlanet("neptune");
}

function getPlanet(planetName) {
  let planet = `<img id="${planetName}" onClick="planetClick(this)" class="planet thumb" src="${imageLinks[planetName]}" >`;

  let planetTray = document.getElementsByClassName("planet_tray")[0];
  let thumbnail = document.createElement("div");
  thumbnail.classList.add("planet_thumbnail");
  thumbnail.innerHTML = `${planet} <p>${planetName}</p>`;
  planetTray.appendChild(thumbnail);
}
function getPlanetPositions() {
  planetPositions.forEach((pos, i) => {
    let handle = document.createElement("div");
    handle.classList.add("handle");
    handle.id = "handle-" + i;
    handle.onclick = () => {
      if (i === activePos) {
        handle.classList.remove("active_handle");
        activePos = -1;
      } else {
        if (activePos !== -1) {
          document
            .getElementsByClassName("active_handle")[0]
            .classList.remove("active_handle");
        }
        handle.classList.add("active_handle");
        activePos = i;
      }
    };
    handle.style.top = `${pos.y}`;
    handle.style.left = `${pos.x}`;
    document.getElementsByClassName("orbit_layer")[0].appendChild(handle);
  });
}
function planetClick(e) {
  let planetName = e.id;
  if (e.classList.contains("placed")) {
    e.remove();
    document.getElementById(planetName).style.visibility = "unset";
    placedPlanets[activePos] = "";
  } else {
    if (activePos !== -1) {
      let active_handle = document.getElementsByClassName("active_handle")[0];
      let style = `position:absolute;top:${planetPositions[activePos].y};left:${planetPositions[activePos].x};transform:translate(-50%,-50%)`;
      let planet = e.cloneNode(true);
      e.style.visibility = "hidden";

      planet.classList.remove("thumb");
      planet.classList.add("placed");
      planet.style.top = planetPositions[activePos].y;
      planet.style.left = planetPositions[activePos].x;
      planet.style.transform = "translate(-50%,-50%)";
      document.body.appendChild(planet);

      active_handle.classList.remove("active_handle");
      placedPlanets[activePos] = planetName;
      activePos = -1;
    }
  }
}
function showGameEnd(correct) {
  let endScreen = document.createElement("div");
  endScreen.className = "end_screen";

  let text = "";

  text = `<div class = "text"><h1 style="font-family:'Josefin Sans', sans-serif;">${
    correct ? "Well Done" : "Oops!"
  }</h1>
  <p>${correct ? "" : "You did it wrong"}</p>
  <button class="retry_button" onClick="retry()">Retry <img class="retry_icon" src = "${
    imageLinks.retry_icon
  }"></button>
  </div>`;

  let endScreenPlanet = `<img class="endscreen_planet" src = "${imageLinks.endscreenplanet}">`;
  let endScreenShip = `<img class="endscreen_ship" src = "${imageLinks.endscreenship}">`;
  endScreen.innerHTML = text + endScreenPlanet + endScreenShip;
  endScreen.style.backgroundImage = `url(${imageLinks.endscreenbg})`;
  document.body.appendChild(endScreen);
}
function retry() {
  placedPlanets = [];
  document
    .getElementsByClassName("active_handle")[0]
    ?.classList.remove("active_handle");
  removeElementsByClass("placed");
  removeElementsByClass("planet_thumbnail");
  removeElementsByClass("end_screen");
  activePos = -1;

  fillPlanets();
}
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
