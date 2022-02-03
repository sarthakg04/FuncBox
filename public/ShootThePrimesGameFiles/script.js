/*
    createBackground();
    createJokers();
    generateBoxes();
    generateRandomPrimes();
*/

Phonex = document.createElement("div");
Phonex.classList.add("Phonex");
document.body.appendChild(Phonex);

function createBackground() {
  // console.log("createBackground");
  Phonex.innerHTML += `
      <div class="Background">
        <img src="./ShootThePrimesGameFiles/assets/Background.png" alt="" width="400px" height="530px" />
      </div>
      `;
}

function createJokers() {
  // console.log("createJokers");
  Phonex.innerHTML += `
        <div class="Jokers">
            <img src="./ShootThePrimesGameFiles/assets/Jokers.png" alt="" width="320px" />
        </div>
        `;
}

function generateBoxes() {
  // console.log("generateBoxes");
  Phonex.innerHTML += `
            <div class="box one" onClick="checkPrime(1)"></div>
            <div class="box two" onClick="checkPrime(2)"></div>
            <div class="box three" onClick="checkPrime(3)"></div>
            <div class="box four" onClick="checkPrime(4)"></div>
            <div class="box five" onClick="checkPrime(5)"></div>
            <div class="box six" onClick="checkPrime(6)"></div>
            <div class="box seven" onClick="checkPrime(7)"></div>
            <div class="box eight" onClick="checkPrime(8)"></div>
            <div class="box nine" onClick="checkPrime(9)"></div>
        `;
}

var allNumbers = [];

var primeNumbers = [];
var nonPrime = [];

var userPrimes = [];

var countPrime = 0;

function checkPrime(idx) {
    // console.log("checkPrime");
    var allBoxes = document.querySelectorAll(".box");
    var clickedBox = allBoxes[idx - 1];
    var clickedNumber = clickedBox.innerHTML;
    userPrimes.push(clickedNumber);
    clickedBox.style.display = "none";
    console.log("userPrimes", userPrimes);
}

// check if a number is prime or not
function isPrime(num) {
    for (var i = 2; i < num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function generateRandomPrimes() {
  for (let i = 0; i < 4; i++) allNumbers.push(getRandomPrime([2, 200]));
  for (let j = 0; j < 5; j++)
    allNumbers.push(Math.floor(Math.random() * 200) + 1);

  console.log(allNumbers);
  allNumbers = shuffleArray(allNumbers);
  console.log("final array is", allNumbers);

  var myBoxes = document.querySelectorAll(".box");
  for (let i = 0; i < myBoxes.length; i++) {
    myBoxes[i].innerHTML = allNumbers[i];
    if (isPrime(allNumbers[i])){
        countPrime++; 
        primeNumbers.push(allNumbers[i]);
    }
    else nonPrime.push(allNumbers[i]);
  }
  console.log("countPrime is", countPrime);
}

// Shuffling the array
function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

// genrating random prime numbers
const range = [100, 1000];
const getPrimes = (min, max) => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 2; i <= Math.sqrt(max + 1); i++) {
    for (let j = i ** 2; j < max + 1; j += i) delete result[j];
  }
  return Object.values(result.slice(min));
};
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getRandomPrime = ([min, max]) => {
  const primes = getPrimes(min, max);
  return primes[getRandomNum(0, primes.length - 1)];
};
