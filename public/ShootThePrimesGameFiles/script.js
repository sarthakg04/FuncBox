/*
    createBackground();
    //default range is 1 to 100
    setRange(500, 1000)  

    createBackground();
    createJokers();
    generateBoxes();
    generateRandomPrimes();

    // default value is 30
    createTimer(40);  

    // check if a number is prime or not
    function isPrime(num) {
    for (var i = 2; i < num / 2; i++) {
        if (num % i === 0) 
        return false;
    }
    return true;
    }
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
var counter = NaN;
var counterCopy = NaN;
var timer;
function createTimer(val) {
  counter = val || 30;
  counterCopy = counter;
  timer = setInterval(function () {
    counter--;
    if (counter < 0) {
      clearInterval(timer);
      viewResults();
      return;
    }
    document.getElementById("timer").innerHTML = counter + " sec";
  }, 1000);

  Phonex.innerHTML += `
        <div class="timer">
            <h1 id="timer">${counter} sec</h1>
        </div>
        `;
}

function printPrimeAndNonPrime() {
  var allPrimes = document.querySelector(".prime");
  for (let i = 0; i < primeNumbers.length; i++) {
    allPrimes.innerHTML += `${primeNumbers[i]}<br />`;
  }

  var allNonPrimes = document.querySelector(".nonprime");
  for (let i = 0; i < nonPrime.length; i++) {
    allNonPrimes.innerHTML += `${nonPrime[i]}<br />`;
  }
}

var wrongAnswers = 0;
var missedAnswers = 0;

function viewResults() {
  document.querySelector(".Jokers").style.display = "none";
  // prime number missed
  for (let i = 0; i < primeNumbers.length; i++)
    if (correctShots.includes(primeNumbers[i]) === false) missedAnswers++;

  // non-prime number clicked
  wrongAnswers = wrongShots.length;

  Phonex.innerHTML += `
        <div class="results">RESULTS</div>
        <div class="oops">OOPS!!!</div>
        <div class="wrong">You clicked ${wrongAnswers} wrong !</div>
        <div class="missed">You missed ${missedAnswers} primes !</div>
        
        <div class="ResultDiv">
            <img src="./ShootThePrimesGameFiles/assets/Result.png" alt="" width="350px" />
        </div>
        <div class = "prime">
            <p>  PRIME NOS: </p>
        </div>
        <div class = "nonprime">
            <p>  NON-PRIME NOS: </p>
        </div>
        <div class="timeTaken">
            <p>Time Taken: ${counterCopy - counter - 1} sec</p>
        </div>

        <div class="playAgain" onClick="window.location.reload()">Play Again</div>

      `;
  clearInterval(timer);
  printPrimeAndNonPrime();
}

function allCorrect() {
  document.querySelector(".Jokers").style.display = "none";
  Phonex.innerHTML += `
        <div class="results">RESULTS</div>
        <div class="congrats">CONGRATS!</div>
        <div class="all_correct">You got all primes correct !</div>
        <div class="celebration">
            <img src="./ShootThePrimesGameFiles/assets/Celebration.png" alt="" width="300px" />
        </div>
        <div class="ResultDiv">
            <img src="./ShootThePrimesGameFiles/assets/Result.png" alt="" width="350px" />
        </div>
        <div class = "prime">
            <p>  PRIME NOS: </p>
        </div>
        <div class = "nonprime">
            <p>  NON-PRIME NOS: </p>
        </div>
        <div class="timeTaken">
            <p>Time Taken: ${counterCopy - counter - 1} sec</p>
        </div>
        <div class="playAgain" onClick="window.location.reload()">Play Again</div>
        `;
  clearInterval(timer);
  printPrimeAndNonPrime();
}

var allNumbers = [];

var primeNumbers = [];
var nonPrime = [];

var correctShots = [];
var wrongShots = [];

var countPrime = 0;

function checkPrime(idx) {
  // console.log("checkPrime");
  var allBoxes = document.querySelectorAll(".box");
  var clickedBox = allBoxes[idx - 1];
  var clickedNumber = clickedBox.innerHTML;

  isPrime(clickedNumber)
    ? correctShots.push(parseInt(clickedNumber))
    : wrongShots.push(parseInt(clickedNumber));

  clickedBox.style.display = "none";
//   console.log("correctShots", correctShots);

  if (correctShots.length === countPrime && wrongShots.length === 0) {
    allCorrect();
    return;
  }

  if (correctShots.length + wrongShots.length === allNumbers.length) {
    // console.log(correctShots);
    // console.log(primeNumbers);
    viewResults();
    return;
  }
}


var range = [NaN, NaN];

function setRange(val1, val2){
    if(val1 > val2){
        range[0] = val2;
        range[1] = val1;
    }
    else{
    range[0] = val1 || 1;
    range[1] = val2 || 100;
}

    
}

function generateRandomPrimes() {
  for (let i = 0; i < 4; i++) allNumbers.push(getRandomPrime(range));
  for (let j = 0; j < 5; j++)
    allNumbers.push(Math.floor(Math.random() * 200) + 1);

  allNumbers = shuffleArray(allNumbers);

  var myBoxes = document.querySelectorAll(".box");
  for (let i = 0; i < myBoxes.length; i++) {
    myBoxes[i].innerHTML = allNumbers[i];
    if (isPrime(allNumbers[i])) {
      countPrime++;
      primeNumbers.push(parseInt(allNumbers[i]));
    } else nonPrime.push(parseInt(allNumbers[i]));
  }
//   console.log("primeNumbers", primeNumbers);
//   console.log("nonPrime", nonPrime);
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
