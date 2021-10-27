// Frontend functions
// createGamepad()
// fillBackground()
// createInteractionPad()

function createGamepad() {
    let container = document.createElement("DIV");
    container.classList.add("container");
    container.id = "container";
    document.body.appendChild(container);
  }
  
  function fillBackground() {
    document.getElementsByClassName("container")[0].style.backgroundImage =
      "url(https://ik.imagekit.io/funcboxImages/StatesofMatter_assets/sombackground_6uUGV8EAI3W.png?updatedAt=1635364137886)";
    console.log("background created");
  }
  
  function createInteractionPad() {
    container.innerHTML += `
    <p>
    <button onclick="falling()">Click Me</button> 
    </p>
    
    <div id ="myContainer">
    <div id ="myAnimation"></div>
    </div>
    <div id="mychar">
    </div>
    <div class="Interaction_Buttons">
    <button class="left_btn" onclick="moveleft()"></button>
    <button class="right_btn" onclick="moveright()"></button>
    <button class="restart_btn" onclick="Restart()"></button>
    </div>
      `;
  }
  
  var temp=0;
  function moveright() {
    var id = null;
      var elem = document.getElementById("mychar");
      if (temp < 350){ 
          temp+=50;  
          elem.style.left = temp + 'px';
      } 
      console.log(temp);
    }
  function moveleft() {
    var id = null;
      var elem = document.getElementById("mychar");
      if (temp>0){
          temp-=50;   
          elem.style.left =temp + 'px';
      } 
      console.log(temp);
    }

//funtion for movements  
function myMove() {
  var id = null;
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
      }
    }
  }
  async function falling(){
      var i=0;
      // var curr=0;
      // while(i<25){
        
      // }
    while(i<5){
      //myMove();

      setTimeout(myMove(), 3000);
      i+=1;
    }
    }
    
    