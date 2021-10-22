//Frontend Functions
// createBackground()
// setTheme('green')
// fillBackground()
// createOutputField()
// createKeypad()
// createInputField()

let currentTheme = "orange";
const themes = {
  purple: {
    primary_color: "#440E52",
    secondary_color: "#FF9DE9",
  },
  violet: {
    primary_color: "#1F1D72",
    secondary_color: "#C263FC",
  },
  orange: {
    primary_color: "#FE8C23",
    secondary_color: "#FFEC41",
  },
  green: {
    primary_color: "#359233",
    secondary_color: "#FFBE41",
  },
};

const imageLinks = {
  background: "./CalculatorGameFiles/assets/background.png",
  "+": "./CalculatorGameFiles/assets/plus.png",
  "-": "./CalculatorGameFiles/assets/minus.png",
  "*": "./CalculatorGameFiles/assets/multiply.png",
  "/": "./CalculatorGameFiles/assets/divide.png",
  "=": "./CalculatorGameFiles/assets/equals.png",
};
const imageRemoteLinks = {
  background:
    "https://ik.imagekit.io/funcboxImages/Calculator_assets/background_ak9L3a08Za.png?updatedAt=1634455568937",
  "+": "https://ik.imagekit.io/funcboxImages/Calculator_assets/plus_BEPUAwKiAq.png?updatedAt=1634455568721",
  "-": "https://ik.imagekit.io/funcboxImages/Calculator_assets/minus_VN_sFHgDjr_.png?updatedAt=1634455568758",
  "*": "https://ik.imagekit.io/funcboxImages/Calculator_assets/multiply_e3XgD-2Yxw.png?updatedAt=1634455568782",
  "/": "https://ik.imagekit.io/funcboxImages/Calculator_assets/divide_Dkx949na4.png?updatedAt=1634455568723",
  "=": "https://ik.imagekit.io/funcboxImages/Calculator_assets/equals_g3-6cqI-KQvA.png?updatedAt=1634455568723",
};
let inputExpression = "";
function createBackground() {
  let container = document.createElement("div");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("main_container");
  mainContainer.style.backgroundImage = `url("${imageRemoteLinks.background}")`;
  container.appendChild(mainContainer);
}
function setTheme(theme) {
  currentTheme = theme;
}
function fillBackground() {
  let container = document.getElementById("container");
  container.style.backgroundColor = themes[currentTheme].primary_color;
}
function createOutputField() {
  let output = document.createElement("input");
  output.classList.add("output_field");

  document.getElementsByClassName("main_container")[0].appendChild(output);
  output.style.backgroundColor = themes[currentTheme].secondary_color;
  output.disabled = true;
}
function createKeypad() {
  let keypad = document.createElement("div");
  keypad.classList.add("keypad");
  const main_container = document
    .getElementsByClassName("main_container")[0]
    .appendChild(keypad);
  main_container.appendChild(createKey("1"));
  main_container.appendChild(createKey("2"));
  main_container.appendChild(createKey("3"));
  main_container.appendChild(createKey("/"));
  main_container.appendChild(createKey("4"));
  main_container.appendChild(createKey("5"));
  main_container.appendChild(createKey("6"));
  main_container.appendChild(createKey("*"));
  main_container.appendChild(createKey("7"));
  main_container.appendChild(createKey("8"));
  main_container.appendChild(createKey("9"));
  main_container.appendChild(createKey("-"));
  let empty_space = createKey("0");
  empty_space.style.opacity = "0";
  empty_space.disabled = true;
  main_container.appendChild(empty_space);
  main_container.appendChild(createKey("0"));
  let equal_btn = createKey("=");
  equal_btn.onclick = () => {
    let answer = eval(inputExpression);
    if (!Number.isInteger(answer)) {
      answer = answer.toFixed(2);
    }
    inputExpression = "";
    document.getElementsByClassName("input_field")[0].value = inputExpression;
    document.getElementsByClassName("output_field")[0].value = answer;
  };

  main_container.appendChild(equal_btn);
  main_container.appendChild(createKey("+"));
}
function createKey(ch) {
  let image = "";
  if ("+=-*/".indexOf(ch) > -1) {
    image = imageRemoteLinks[ch];
  }
  let key = document.createElement("button");
  key.classList.add("key");

  if (image.length > 0) {
    key.innerHTML = `<img src = "${image}">`;
  } else {
    key.innerText = ch;
  }
  key.onclick = (e) => {
    e.preventDefault();
    if (ch !== "=") inputExpression += ch;
    document.getElementsByClassName("input_field")[0].value = inputExpression;
  };
  return key;
}
function createInputField() {
  let label = document.createElement("p");
  label.innerText = "Enter Expression";
  label.style.fontFamily = `'Finger Paint', cursive`;
  label.classList.add("input_label");
  label.style.backgroundColor = themes[currentTheme].secondary_color;
  label.style.color = themes[currentTheme].primary_color;
  let main_container = document.getElementsByClassName("main_container")[0];
  main_container.appendChild(label);
  let input = document.createElement("input");
  input.classList.add("input_field");
  input.value = inputExpression;
  input.style.borderColor = themes[currentTheme].secondary_color;
  main_container.appendChild(input);
}
