//Frontend Functions
// let numOfQuestions=2
// function calculateProfit(price, option) {
//   let diff = option - price;
//   let profit = (diff * 100) / price;
//   showProfit(profit);
// }
// createBackground()
// fillBackground()
// createItemDisplayBox()
// createProfitBox()
// generateItems(numOfQuestions)
// showQuestions()
const imageLinks = {
  bg: "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/bg_ZfPbcwIiNsF.png?updatedAt=1638817367425",
  robo: "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/robo_nMHLLBSC-Mw5.png?updatedAt=1638818049740",
  pallete:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/pallete_g5vDh-AzDCvZ.png?updatedAt=1638818049752",
  shades:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/shades_X96CQAvMengx.png?updatedAt=1638818049736",
  shoes:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/shoes_Vfuw_Y_O5-nH.png?updatedAt=1638818049722",
  suitcase:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/suitcase_nd9rSJGjl5R.png?updatedAt=1638818049704",
  tshirt:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/tshirt_iv4gNYwaNl.png?updatedAt=1638818049771",
  bag: "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/bag_p1Am33pJDA.png?updatedAt=1638818049756",
  socks:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/socks_oj-DCtwFuH.png?updatedAt=1638818049749",
  mickey:
    "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/mickey_HOntJDE8Az.png?updatedAt=1638818049699",
  yoyo: "https://ik.imagekit.io/funcboxImages/PawnShopGame_assets/yoyo_rKO5V2hrF.png?updatedAt=1638818049656",
};
const items = [
  { name: "robo", price: 1500 },
  { name: "tshirt", price: 890 },
  { name: "mickey", price: 648 },
  { name: "bag", price: 5392 },
  { name: "yoyo", price: 466 },
  { name: "shoes", price: 1363 },
  { name: "suitcase", price: 969 },
  { name: "shades", price: 129 },
  { name: "pallete", price: 234 },
  { name: "socks", price: 123 },
];
const pawns = [
  "robo",
  "tshirt",
  "mickey",
  "bag",
  "shoes",
  "yoyo",
  "suitcase",
  "shades",
  "pallete",
  "socks",
];
let qnum = 0;
let questions = [];
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

function createItemDisplayBox() {
  const item_box = document.createElement("div");
  item_box.className = "item_box";
  document.getElementById("container").appendChild(item_box);
}
function createProfitBox() {
  const profitBox = document.createElement("div");
  profitBox.className = "profit_box";
  profitBox.innerHTML = `<p>Profit Percentage</p><div class="profit_box_inner"></div>`;
  document.getElementById("container").appendChild(profitBox);
}
function allOptionsLoss(price, options) {
  for (let i = 0; i < options.length; i++) {
    if (price < options[i]) return false;
  }
  return true;
}
function printQuestion(price, options) {
  const check = allOptionsLoss(price, options);
  const questiondiv = document.createElement("div");
  questiondiv.className = "question_div";
  questiondiv.innerHTML = `<p>Select the selling price which gives ${
    check ? "minimum loss" : "maximum profit"
  }?</p>`;
  document.getElementById("container").appendChild(questiondiv);
}
function generateItems(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    let ind = parseInt(Math.random() * pawns.length);
    console.log("generated ", ind);
    if (!array.includes(ind)) {
      array.push(ind);
      questions.push(items[ind]);
    } else {
      i -= 1;
    }
  }
  console.log(questions);
}
function generateOptions(price) {
  let options = [];
  for (let i = 0; i < 3; i++) {
    const negative = Math.random() > 0.5;
    if (negative) {
      options.push(price - parseInt(Math.random() * 100));
    } else {
      options.push(price + parseInt(Math.random() * 100));
    }
  }
  return options;
}
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function gameEnd() {
  const gameEnd = document.createElement("div");
  gameEnd.className = "game_end_screen";
  gameEnd.innerHTML = "Well Done";

  document.body.appendChild(gameEnd);
}
function wrongAnswer() {
  const gameEnd = document.createElement("div");
  gameEnd.className = "game_end_screen";
  gameEnd.innerHTML = "Try Again";

  document.body.appendChild(gameEnd);
  setTimeout(() => {
    gameEnd.remove();
  }, 1000);
}
function showOptions(options) {
  const options_div = document.createElement("div");
  options_div.className = "options_div";
  options.forEach((option) => {
    const option_btn = document.createElement("button");
    option_btn.innerHTML = option;
    option_btn.onclick = () => {
      calculateProfit(questions[qnum].price, option);

      if (Math.max(...options) === option) {
        qnum += 1;

        setTimeout(() => {
          removeElementsByClass(options_div);
          removeElementsByClass("item_image");
          removeElementsByClass("price_div");
          removeElementsByClass("question_div");
          removeElementsByClass("options_div");
          if (qnum === questions.length) {
            gameEnd();
          } else {
            document.getElementsByClassName("profit_box_inner")[0].innerHTML =
              "";
            showQuestions();
          }
        }, 1000);
      } else {
        wrongAnswer();
        document.getElementsByClassName("profit_box_inner")[0].innerHTML = "";
      }
    };
    option_btn.className = "option_btn";
    options_div.appendChild(option_btn);
  });

  document.getElementById("container").appendChild(options_div);
}
function showQuestions() {
  document.getElementsByClassName("item_box")[0].innerHTML = `<img src="${
    imageLinks[questions[qnum].name]
  }" alt="" class="item_image"/>`;
  let price_div = document.createElement("div");
  price_div.className = "price_div";
  price_div.innerHTML = `<p>CP</p><p>${questions[qnum].price}</p>`;
  document.getElementById("container").appendChild(price_div);
  let options = generateOptions(questions[qnum].price);
  console.log("options", options);
  printQuestion(questions[qnum].price, options);
  showOptions(options);
}
function showProfit(profit) {
  document.getElementsByClassName(
    "profit_box_inner"
  )[0].innerHTML = `${profit.toFixed(1)}%`;
}
