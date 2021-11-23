//Frontend Functions
// function evaluate(input1, input2, operation) {
//     let ans = 0;

//     switch (operation) {
//       case "+":
//         ans = input1 + input2;
//         break;
//       case "-":
//         ans = input1 - input2;
//         break;
//       case "/":
//         ans = input1 / input2;
//         break;
//       case "*":
//         ans = input1 * input2;
//         break;
//       default:
//         ans = 0;
//     }
//     return ans;
//   }
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
  //   "=": "./CalculatorGameFiles/assets/equals.png",
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
  output.id = "output_field";
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

  let divide_btn = createKey("/");
  //   divide_btn.addEventListener('click',()=>
  //   {
  //       if()
  //   })
  main_container.appendChild(divide_btn);

  main_container.appendChild(createKey("*"));

  main_container.appendChild(createKey("-"));

  main_container.appendChild(createKey("+"));
}

function createKey(ch) {
  let image = "";
  if ("+=-*/".indexOf(ch) > -1) {
    image = imageRemoteLinks[ch];
  }
  let key = document.createElement("button");
  key.classList.add("key");

  key.innerHTML = `<img src = "${image}">`;
  //   key.innerText = ch;
  key.onclick = (e) => {
    e.preventDefault();
    let input1 = parseInt(document.getElementById("input_field_1").value);
    let input2 = parseInt(document.getElementById("input_field_2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
      let ans = evaluate(input1, input2, ch);
      document.getElementById("output_field").value =
        parseInt(ans) !== ans ? ans.toFixed(2) : ans;
    }
  };
  return key;
}

function createInputField() {
  let label = document.createElement("p");
  label.innerText = "Enter 2 Expressions";
  label.style.fontFamily = `'Finger Paint', cursive`;
  label.classList.add("input_label");
  label.style.backgroundColor = themes[currentTheme].secondary_color;
  label.style.color = themes[currentTheme].primary_color;
  let main_container = document.getElementsByClassName("main_container")[0];
  main_container.appendChild(label);
  let inputContainer = document.createElement("div");
  inputContainer.className = "input_section";
  main_container.appendChild(inputContainer);

  let input1 = document.createElement("input");
  input1.type = "numeric";
  input1.classList.add("input_field");
  input1.id = "input_field_1";
  input1.value = inputExpression;
  input1.style.borderColor = themes[currentTheme].secondary_color;
  inputContainer.appendChild(input1);
  let input2 = document.createElement("input");
  input2.type = "numeric";
  input2.classList.add("input_field");
  input2.id = "input_field_2";
  input2.value = inputExpression;
  input2.style.borderColor = themes[currentTheme].secondary_color;
  inputContainer.appendChild(input2);
}
function getInputs() {
  let input1 = document.getElementById("input_field_1");
  let input2 = document.getElementById("input_field_2");
  return [parseInt(input1.innerText), parseInt(input2.innerText)];
}
