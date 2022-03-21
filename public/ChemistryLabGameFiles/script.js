// const correctComp = {
//   H2O: "HOH",
//   CO2: "COO",
//   NH3: "NHHH",
//   O2: "OO",
//   NO2: "NOO",
//   HNO3: "HNOOO",
//   CH4: "CHHHH",
//   H2SO4: "HHSOOOO",
// };
// function onSubmit()
// {
//   const isCorrect = checkCorrect()
//   if(isCorrect)
//   {
//     showCorrect()
//   }
//   else
//   {
//     showWrongAndReset()
//   }
// }
// createBackground()
// fillBackground()
// createConicalFlask()
// getRandomCompound()
// showAtoms()
// createSubmitButton()
const imageLinks = {
  bg: "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/bg_Hr0J6LMDD.png?updatedAt=1638969042448",
  flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/flask_Jv671vZKdcf.png?updatedAt=1638969702574",
  CO2_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/co2_flask_r8jyWO0eCae7.png?updatedAt=1638991462954",
  H2SO4_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/h2so4_flask_6brGxG9w72HK.png?updatedAt=1638991462983",
  HNO3_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/hno3_flask_QSkYO7EC-AqA.png?updatedAt=1638991462970",
  NH3_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/nh3_flask_Qect_NxEV4x.png?updatedAt=1638991462932",
  CH4_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/ch4_flask_aomq6ZM1vSpF.png?updatedAt=1638991462945",
  O2_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/o2_flask_FBQqdHQvUlW_.png?updatedAt=1638991463116",
  H2O_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/h2o_end_screen_x7Alum29pxEP.png?updatedAt=1638991463474",
  NO2_flask:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/no2_flask_3ePQIanMh5EO.png?updatedAt=1638991463031",
  CO2_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/co2_end_screen_sOcn0r3YPS2f.png?updatedAt=1638993898682",
  H2SO4_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/h2so4_end_screen_sEW1CLamzcdX.png?updatedAt=1638993898716",
  HNO3_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/hno3_end_screen_K_ED0xOZL0xB.png?updatedAt=1638993898915",
  NH3_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/nh3_end_screen_asdBubZom8u.png?updatedAt=1638993898570",
  CH4_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/ch4_end_screen_sqfSdpcEd-Vx.png?updatedAt=1638993898661",
  O2_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/o2_end_screen_gopn-zBFhmsy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1638993898794",
  H2O_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/h2o_end_screen_x7Alum29pxEP.png?updatedAt=1638991463474",
  NO2_end_screen:
    "https://ik.imagekit.io/funcboxImages/ChemistryLabGame_assets/no2_end_screen_RKj53GhLYFA.png?updatedAt=1638993691963",
};
const spawnPositions = [
  { x: "20%", y: "20%" },
  { x: "70%", y: "30%" },
  { x: "25%", y: "45%" },
  { x: "40%", y: "16%" },
  { x: "70%", y: "16%" },
  { x: "55%", y: "20%" },
  { x: "30%", y: "30%" },
  { x: "40%", y: "40%" },
  { x: "56%", y: "35%" },
];
let compound = "";
let selection = "";
const spawnComb = {
  H2O: "HHHOOO",
  CO2: "CCCOOO",
  NH3: "NNNHHH",
  O2: "HHHOOO",
  NO2: "NNNOOO",
  HNO3: "HHHNNOOO",
  CH4: "CCCHHHH",
  H2SO4: "HHHSSOOOO",
};
const colors = {
  N: "#FC5E68",
  O: "#FF891C",
  H: "#FFFA7A",
  C: "#FC5E68",
  S: "#FC5E68",
};
const compounds = ["H2O", "CO2", "NH3", "O2", "NO2", "HNO3", "CH4", "H2SO4"];

function createBackground() {
  let container = document.createElement("div");
  container.id = "container";
  container.className = "container";
  document.body.appendChild(container);
}
function fillBackground() {
  let container = document.getElementById("container");
  let bg_img = document.createElement("img");
  bg_img.src = imageLinks.bg;
  bg_img.className = "bg_image";
  container.appendChild(bg_img);
}
function createConicalFlask() {
  let flask = document.createElement("img");
  flask.className = "flask_image";
  flask.src = imageLinks.flask;
  document.getElementById("container").appendChild(flask);
}
function getRandomCompound() {
  parseInt(Math.random() * compounds.length);
  compound = compounds[parseInt(Math.random() * compounds.length)];

  //   compound = "H2SO4";
  let submit = document.createElement("h2");
  submit.classList.add("heading");
  submit.innerHTML = compound;
  document.getElementById("container").appendChild(submit);
}
function checkCorrect() {
  const sortedSelection = selection.split("").sort().join("");
  const sortedCorrect = correctComp[compound].split("").sort().join("");
  if (sortedSelection === sortedCorrect) {
    return true;
  } else {
    return false;
  }
}
function showCorrect() {
  const activeElements = document.getElementsByClassName("active");
  selection = "";
  while (activeElements.length > 0) {
    activeElements[0].remove();
  }
  const inside_flask = document.createElement("img");
  inside_flask.src = imageLinks[compound + "_flask"];
  inside_flask.className = "inside_flask";
  document.getElementById("container").appendChild(inside_flask);
  setTimeout(() => {
    const win_screen = document.createElement("img");
    win_screen.src = imageLinks[compound + "_end_screen"];
    win_screen.className = "win_screen";
    document.getElementById("container").appendChild(win_screen);
    const play_again = document.getElementsByClassName("play_again_button")[0];
    play_again.style.display = "unset";
  }, 1000);
}
function showWrongAndReset() {
  let wrongText = document.createElement("h1");
  wrongText.className = "wrong_text";
  wrongText.innerHTML = "Wrong!! Try Again";
  document.getElementById("container").appendChild(wrongText);
  setTimeout(() => {
    wrongText.remove();
    const activeElements = document.getElementsByClassName("active");
    while (activeElements.length > 0) {
      activeElements[0].classList.remove("active");
    }
    selection = "";
    document.getElementsByClassName("submit_btn")[0].disabled = false;
  }, 2000);
}

function createPlayAgainButton() {
  const button_div = document.createElement("div");
  button_div.className = "play_again_button";
  const button = document.createElement("button");
  button.innerText = "Play Again";
  button.onclick = () => {
    playAgain();
  };
  button_div.appendChild(button);
  document.getElementById("container").appendChild(button_div);
}
function playAgain() {
  console.log("play again");
  document.getElementsByClassName("play_again_button")[0].style.display =
    "none";
  document.getElementsByClassName("win_screen")[0].remove();
  const activeElements = document.getElementsByClassName("active");
  while (activeElements.length > 0) {
    activeElements[0].classList.remove("active");
  }
  selection = "";
  document.getElementsByClassName("submit_btn")[0].disabled = false;

  const atoms = document.getElementsByClassName("atom");
  while (atoms.length > 0) {
    atoms[0].remove();
  }
  const flask = document.getElementsByClassName("flask_image")[0];
  flask.remove();

  createConicalFlask();
  getRandomCompound();
  showAtoms();
}

function createAtom(pos, atom) {
  let atom_div = document.createElement("div");
  atom_div.innerHTML = `<p>${atom}</p>`;
  atom_div.style.position = "absolute";
  atom_div.style.transform = "translate(-50%,-50%)";
  atom_div.style.left = pos.x;
  atom_div.style.top = pos.y;
  atom_div.className = "atom";
  atom_div.style.backgroundColor = colors[atom];
  atom_div.onclick = () => {
    if (atom_div.classList.contains("active")) {
      atom_div.classList.remove("active");
      let ind = selection.indexOf(atom);
      selection = selection.slice(0, ind) + selection.slice(ind + 1);
    } else {
      atom_div.classList.add("active");
      selection += atom;
    }

    console.log(selection);
  };
  let container = document.getElementById("container");
  container.appendChild(atom_div);
}
function showAtoms() {
  spawnPositions.sort(() => Math.random() - 0.5);
  for (let i = 0; i < spawnComb[compound].length; i++) {
    createAtom(spawnPositions[i], spawnComb[compound][i]);
  }
}
function createSubmitButton() {
  let submit = document.createElement("button");
  submit.classList.add("submit_btn");
  submit.innerHTML = "Submit";
  document.getElementById("container").appendChild(submit);
  submit.addEventListener("click", () => {
    submit.disabled = true;
    onSubmit();
  });
}
