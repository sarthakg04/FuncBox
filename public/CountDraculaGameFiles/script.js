const imageLinks = {
  bg: "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/bg_z7ChJscP2.png?updatedAt=1638850351011",
  dracula:
    "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/dracula_NvQ_0cS_Y5T.png?updatedAt=1638850350794",
  diamond:
    "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/diamond_tmwu5k1T7IHf.png?updatedAt=1638851498213",
  ruby: "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/ruby_DqGIdmGWSl.png?updatedAt=1638851498207",
  sapphire:
    "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/sapphire_efjITQ_z6.png?updatedAt=1638851498181",
  tourmaline:
    "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/tourmaline_aTuSLGhLhE9.png?updatedAt=1638851498272",
  sack: "https://ik.imagekit.io/funcboxImages/CountDraculaGame_assets/sack_fSy_K2Skblh.png?updatedAt=1638852553774",
};
const gems = ["diamond", "ruby", "sapphire", "tourmaline"];
let sack1 = 0;
let sack2 = 0;
let qnum = 0;
let numGemsLeft = 4;

function createBackground() {
  let container = document.createElement("div");
  container.id = "container";
  container.className = "container";
  document.body.appendChild(container);
}
function fillBackground() {
  document.getElementById(
    "container"
  ).style.backgroundImage = `url(${imageLinks.bg})`;
}
function createDracula() {
  let dracula = document.createElement("img");
  dracula.classList.add("dracula_img");
  dracula.src = imageLinks.dracula;
  document.getElementById("container").appendChild(dracula);
}
// function createSacks() {}
function setSackNumbers() {
  sack1 = 0;
  sack2 = 0;
  numGemsLeft = 4;
  let arr = document.getElementsByClassName("sack_div");
  arr[0].innerHTML = questions[qnum];
  arr[1].innerHTML = questions[qnum];
}
function createGems() {
  let ques = questions[qnum];
  let gem_div = document.createElement("div");
  gem_div.className = "gem_div";
  document.getElementById("container").appendChild(gem_div);

  let num1 = parseInt(Math.random() * (ques - 1) + 1);
  let num2 = parseInt(Math.random() * (ques - 1) + 1);
  let options = [num1, ques - num1, num2, ques - num2].sort(
    () => 0.5 - Math.random()
  );

  options.forEach((opt, i) => {
    createDraggable(opt, i, gem_div);
  });
}
function createDraggable(value, gem, gem_div) {
  const draggable = document.createElement("div");
  draggable.value = value;
  draggable.innerHTML = `<img draggable="false"  src="${
    imageLinks[gems[gem]]
  }"/>
  <p draggable="false">${value}</p>`;
  draggable.draggable = true;
  draggable.classList.add("gem_image");
  draggable.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  });
  draggable.addEventListener("dragend", (e) => {
    e.target.classList.remove("hide");
  });
  gem_div.appendChild(draggable);
}
function checkWin() {
  document.getElementsByClassName("gem_div")[0].remove();
  console.log("q num", qnum);
  if (sack1 === sack2 && sack1 === questions[qnum]) {
    if (qnum === questions.length - 1) {
      const win = document.createElement("div");
      win.innerHTML = `<h2>Great Work</h2>`;
      win.classList.add("win_screen");
      document.body.appendChild(win);
    } else {
      qnum += 1;
      showQuestions();
    }
  } else {
    const lost = document.createElement("div");
    lost.innerHTML = `<h2>Try Again</h2>`;
    lost.classList.add("lost_screen");
    document.body.appendChild(lost);
    setTimeout(() => {
      lost.remove();

      showQuestions();
    }, 1000);
  }
}
function createSacks() {
  let width = 157;
  const sack_div1 = document.createElement("div");
  sack_div1.className = "sack_div";
  sack_div1.style.width = width + "px";
  sack_div1.style.height = parseInt(width / 0.94) + "px";
  sack_div1.style.backgroundImage = `url("${imageLinks.sack})`;
  document.getElementById("container").appendChild(sack_div1);
  sack_div1.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  sack_div1.addEventListener("drop", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dropped = document.getElementsByClassName("dragging")[0];
    sack1 += dropped.value;
    console.log("sack1", sack1);
    numGemsLeft--;
    if (numGemsLeft === 0) {
      checkWin();
    }
    dropped.remove();
  });
  const sack_div2 = document.createElement("div");
  sack_div2.className = "sack_div";
  sack_div2.style.width = width + "px";
  sack_div2.style.height = parseInt(width / 0.94) + "px";
  sack_div2.style.backgroundImage = `url("${imageLinks.sack})`;
  document.getElementById("container").appendChild(sack_div2);
  sack_div2.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  sack_div2.addEventListener("drop", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dropped = document.getElementsByClassName("dragging")[0];
    sack2 += dropped.value;
    console.log("sack2", sack2);
    numGemsLeft--;
    if (numGemsLeft === 0) {
      checkWin();
    }
    dropped.remove();
  });
}
