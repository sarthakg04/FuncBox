//Frontend Functions
// setMaxTime(10)
// setMaxSpawnCount(6)
// createBackground()
// createTree()
// createCar()
// createTimer()
// createOxymeter()
// createSpawners()
let imageLinks = {
  background: "./PollutoGameFiles/assets/bg.png",
  sun: "./PollutoGameFiles/assets/sun.png",
  car: "./PollutoGameFiles/assets/car.png",
  tree: "./PollutoGameFiles/assets/tree.png",
  co2: "./PollutoGameFiles/assets/co2.png",
  o2: "./PollutoGameFiles/assets/o2.png",
  black_hole: "./PollutoGameFiles/assets/black_hole.png",
};
const Co2spawnerLoc = [
  { x: "23%", y: "85%" },
  { x: "25%", y: "70%" },
  { x: "35%", y: "50%" },
  { x: "45%", y: "60%" },
  { x: "65%", y: "60%" },
  { x: "43%", y: "85%" },
];
const O2spawnerLoc = [
  { x: "8%", y: "15%" },
  { x: "18%", y: "26%" },
  { x: "35%", y: "30%" },
  { x: "35%", y: "17%" },
  { x: "50%", y: "25%" },
  { x: "50%", y: "13%" },
];
const O2spawner = [];
let numC = 0;
let counter = 0;
let max_timer_seconds = 10;
let carElement;
let interval = null;
let max_spawn_count = 6;
let timer_seconds = max_timer_seconds;
let timer = null;
function setMaxTime(sec) {
  max_timer_seconds = sec;
  timer_seconds = max_timer_seconds;
}
function setMaxSpawnCount(num) {
  max_spawn_count = num;
}
function createBackground() {
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  let game_container = document.createElement("div");
  game_container.classList.add("main_container");
  container.appendChild(game_container);
  game_container.style.backgroundImage = `url("${imageLinks.background}")`;
  let sun = document.createElement("img");
  sun.src = imageLinks.sun;
  sun.classList.add("sun_img");
  game_container.appendChild(sun);
}
function createCar() {
  carElement = document.createElement("div");
  carElement.innerHTML = `<img src = "${imageLinks.car}" class = "car_img">`;

  carElement.classList.add("car");
  carElement.src = imageLinks.car;
  let container = document.getElementsByClassName("main_container")[0];
  container.appendChild(carElement);
}
function createTree() {
  let tree = document.createElement("div");
  let treeimg = document.createElement("img");
  treeimg.className = "tree_img";
  treeimg.src = imageLinks.tree;
  let blackhole = document.createElement("img");
  blackhole.src = imageLinks.black_hole;
  blackhole.className = "black_hole";
  tree.appendChild(treeimg);
  tree.appendChild(blackhole);
  tree.classList.add("tree_div");
  const droppable = document.createElement("div");
  tree.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  tree.addEventListener("drop", (e) => {
    const gas = document.getElementsByClassName("dragging")[0];
    gas.remove();
    const o2img = document.createElement("div");
    o2img.classList.add("gas_image");
    o2img.style.backgroundImage = `url("${imageLinks.o2}")`;
    O2spawner[counter].appendChild(o2img);
    numC -= 1;
    counter = counter + 1;
    updateOxymeter();
    if (counter === max_spawn_count) {
      gameEnd();
    }
  });
  document.getElementsByClassName("main_container")[0].appendChild(tree);
}
function createCO2Spawner(x, y) {
  let spawner = document.createElement("div");
  const draggable = document.createElement("div");
  draggable.style.backgroundImage = `url("${imageLinks.co2}")`;
  draggable.draggable = true;
  draggable.classList.add("gas_image");
  draggable.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  });
  draggable.addEventListener("dragend", (e) => {
    e.target.classList.remove("hide");
  });

  spawner.appendChild(draggable);
  spawner.classList.add("spawner");
  spawner.style.top = y;
  spawner.style.left = x;
  document.getElementsByClassName("main_container")[0].appendChild(spawner);
}
function createO2Spawner(x, y) {
  let spawner = document.createElement("div");

  spawner.classList.add("spawner");
  spawner.style.top = y;
  spawner.style.left = x;
  spawner.style.pointerEvents = "none";
  document.getElementsByClassName("main_container")[0].appendChild(spawner);
  O2spawner.push(spawner);
}
function updateOxymeter() {
  var fill_percent = (1 - numC / max_spawn_count) * 100;
  const oxymeter = document.getElementsByClassName("oxymeter_fill")[0];
  oxymeter.style.width = `${fill_percent}%`;
  if (fill_percent < 80 && fill_percent > 30) {
    oxymeter.style.backgroundColor = "orange";
  } else if (fill_percent < 30) {
    oxymeter.style.backgroundColor = "red";
    if (fill_percent === 0) {
      gameEnd();
    }
  } else {
    oxymeter.style.backgroundColor = "#59F87C";
  }
}
function createSpawners() {
  Co2spawnerLoc.sort(() => 0.5 - Math.random());
  O2spawnerLoc.forEach((loc, i) => {
    createO2Spawner(loc.x, loc.y);
  });
  O2spawner.sort(() => 0.5 - Math.random());
  Co2spawnerLoc.forEach((loc, i) => {
    setTimeout(() => {
      createCO2Spawner(loc.x, loc.y);
      numC += 1;
      updateOxymeter();
    }, i * 1000 * ((max_timer_seconds - 1) / max_spawn_count));
  });
}
function createOxymeter() {
  const oxymeter_frame = document.createElement("div");
  oxymeter_frame.className = "oxymeter_frame";
  const oxymeter_fill = document.createElement("div");
  oxymeter_fill.className = "oxymeter_fill";
  oxymeter_frame.appendChild(oxymeter_fill);
  document
    .getElementsByClassName("main_container")[0]
    .appendChild(oxymeter_frame);
}
function gameEnd() {
  let end_text = "";
  if (numC === 0) {
    end_text = "Well Done";
  } else {
    end_text = "Oops!!";
  }
  const retry = document.createElement("button");
  retry.innerText = "Retry";

  const element = document.createElement("div");
  element.className = "end_screen";
  document.body.appendChild(element);

  const text_element = document.createElement("p");
  text_element.innerText = end_text;
  element.appendChild(text_element);
  element.appendChild(retry);
  clearInterval(interval);
  retry.addEventListener("click", () => {
    timer_seconds = max_timer_seconds;
    timer.remove();
    numC = 0;
    counter = 0;
    O2spawner.forEach((spawner) => {
      spawner.remove();
    });
    while (O2spawner.length > 0) {
      O2spawner.pop();
    }
    const spawners = document.getElementsByClassName("spawner");
    while (spawners.length > 0) {
      spawners[0].parentNode.removeChild(spawners[0]);
    }
    text_element.remove();
    element.remove();
    createTimer();
    createSpawners();
  });
}
function createTimer() {
  timer = document.createElement("div");
  timer.className = "timer_div";
  timer.innerText = "00 : " + timer_seconds;
  interval = setInterval(() => {
    timer_seconds -= 1;
    timer.innerText = "00 : " + timer_seconds;
    if (timer_seconds === 0) {
      clearInterval(interval);
      gameEnd();
    }
  }, 1000);
  document.getElementsByClassName("main_container")[0].appendChild(timer);
}
