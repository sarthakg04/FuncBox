/*
    createBackground();
*/

var arr = [1,2,3,4,5,6,7,8,9];
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

function createJokers(){
    // console.log("createJokers");
    Phonex.innerHTML += `
        <div class="Jokers">
            <img src="./ShootThePrimesGameFiles/assets/Jokers.png" alt="" width="320px" />
        </div>
        `;
}


function generateBoxes(){
    // console.log("generateBoxes");
    Phonex.innerHTML += `
            <div class="box one"></div>
            <div class="box two"></div>
            <div class="box three"></div>
            <div class="box four"></div>
            <div class="box five"></div>
            <div class="box six"></div>
            <div class="box seven"></div>
            <div class="box eight"></div>
            <div class="box nine"></div>
        `;
}

var myPrimeNumbers = [];

function generateRandomPrimes(){
    for(let i = 0; i < 4; i++)
        myPrimeNumbers.push(getRandomPrime([2, 200]));
    for(let j = 0; j < 5; j++)
        myPrimeNumbers.push(Math.floor(Math.random() * 200) + 1);

    console.log(myPrimeNumbers);
    myPrimeNumbers = shuffleArray(myPrimeNumbers);
    console.log("final array is" , myPrimeNumbers);   


    var myBoxes = document.querySelectorAll(".box");
    for(let i = 0; i < myBoxes.length; i++){
        myBoxes[i].innerHTML = myPrimeNumbers[i];
    }
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