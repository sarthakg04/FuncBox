
let result_time='02:55 AM';
let pathofimg='FuncBoxx/ClockGameFiles/assets/images/02_55_PM.png';
let clock =['02_55_AM','04_00_AM','05_00_AM','10_10_PM','07_10_AM','01_25_PM','07_45_PM','09_35_PM','04_30_PM','11_45_AM'];
function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
}
function fill(background) {
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(FuncBox/ClockGameFiles/assets/backgrounds/kids1.png)';
}
function createInteractionPad(){
  gamePad.innerHTML += `
  <div class="score" id="score">
  Guess the Correct Time!
  </div>
  <div class="game">
  <img class="clock" id="clock" src="FuncBox/ClockGameFiles/assets/images/02_55_AM.png" height="350vh" width="270vw">  
  <input class="inputfield" id="inputfield" type="text" placeholder="10:00 AM" style="outline-width:0;">
  <div class="controllers" id="control">
  <button class="submitbutton" onclick="result()" >Submit</button>
  <button class="reloadbutton" onclick="reload()">Reload</button>
  </div>
  </div>
  `;
}
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
function reload(){
  document.getElementById('inputfield').style.backgroundColor ="#C4C4C4";
  let temp=getRandomItem(clock);
  let mainpath="FuncBox/ClockGameFiles/assets/images/";
  pathofimg=mainpath+temp+'.png';
  document.getElementById("clock").src=pathofimg;
  const myArr = temp.split("_");
  result_time=myArr[0]+':'+myArr[1]+' '+myArr[2];
}
function result(){
  let inputtime=document.getElementById('inputfield').value;
  if (result_time==inputtime){
    console.log('success');
    document.getElementById('inputfield').style.backgroundColor = "green";
  }
  else{
    console.log(inputtime);
    console.log(result_time);
    console.log('Failed');
    document.getElementById('inputfield').style.backgroundColor = "#D93E3E";
  }
}

