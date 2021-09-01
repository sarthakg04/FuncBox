let mainBody = document.getElementById("main__body");


function createPara(details){
  let para = document.createElement("P");
  para.style.margin = '2px'
  for(let key of Object.keys(details)){
    switch (key) {
      case 'fontSize':
        para.style.fontSize =  details[key]
        break;

        case 'color':
        para.style.color = details[key];
        break;

        case 'content' :
        para.innerText = details[key];
        break;

        case 'fontWeight':
        para.style.fontWeight = details[key];
        break

    }
  }


  return para;


}


function fill(name){
  console.log(name);
  if(name === undefined){
    document.body.style.background = "url(dyteapp/img1.jpeg) no-repeat center center fixed";
  }
  else{
    document.body.style.background = "url(dyteapp/"+name+".jpeg) no-repeat center center fixed";

  }
};

function printer(details){
  let para = createPara(details);
  mainBody.appendChild(para)
}

function createContainer(details){
  let div = document.createElement('DIV');
  div.classList.add('image-container');
  for(let key of Object.keys(details)){
    switch (key) {
      case 'id':
      div.id = 'div'+details[key];
      break;

      case 'width':
        div.style.width =  details[key]
        break;

        case 'height':
        div.style.height = details[key];
        break;

        case 'background' :
        div.style.background = details[key];
        break;
    }

    mainBody.appendChild(div);
}

}


function insertImage(details){
  let img = document.createElement('IMG');
  img.classList.add('image');
  let parentContainer ;
  for(let key of Object.keys(details)){
    switch (key) {
      case 'parentId':
      parentContainer = document.getElementById('div'+details[key]);

      break;

      case 'id':
      img.id = 'img'+ details[key];
      img.classList.add('img'+details[key]);
      break;

      case 'width':
        img.style.width =  details[key]
        break;

        case 'height':
        img.style.height = details[key];
        break;

        case 'src':
        img.src  = 'dyteapp/'+details[key]+'.jpeg';
        break;

        case 'top':
        img.style.top = details[key];
        break;

        case 'left':
        img.style.left = details[key];
        break;


    }

  }

    parentContainer.appendChild(img);

}


function addImageAnimation(details){
  let parent = document.getElementById('div'+details.parentId);
  let img = document.getElementsByClassName('img'+details.imageId)[0];
  img.classList.add('hover-animation');
}

function removeImageAnimation(details){
  let parent = document.getElementById('div'+details.parentId);
  let img = document.getElementsByClassName('img'+details.imageId)[0];
  img.classList.remove('hover-animation');
}

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Hemanth's Code


document.body.style.overflow = "hidden";

function fillBackground(color) {
  color = color || "#c4c4c4";
  document.body.style.backgroundColor = color; 
}


// Function for creating text elements
function text( text, size, color, top, left, fontFamily, fontWeight ) {
    text = text || "Hello"
    size = size || 30;
    color = color || "black";
    top = top || 10;
    left = left || 10;
    fontFamily = fontFamily || "Relaway, sans-serif";
    fontWeight = fontWeight || "normal";

    let para = document.createElement('p');

    para.innerHTML = text;
    para.style.color = color;
    para.style.fontSize  = size+"px";
    para.style.position = "relative";
    para.style.top = top+"px";
    para.style.left = left+"px";
    para.style.fontFamily = fontFamily;
    para.style.fontWeight = fontWeight;
    para.style.padding  = 0;
    para.style.margin  = 0;

    document.body.appendChild(para);

    return para;
}

// Function for creating boxes
function box( height, width, color, border_color, border_width, border_type, top, left ) {
    height = height || 50;
    width = width || 50;
    color = color || "grey";
    border_color = border_color || "transparent";
    border_width = border_width || 0;
    border_type = border_type || "solid";
    top = top || 0;
    left = left || 0;
    
    let box = document.createElement('div');

    box.style.height = height+"px";
    box.style.width = width+"px";
    box.style.backgroundColor = color;
    box.style.border = border_width+"px"+" "+border_type+" "+border_color;
    box.style.position = "absolute";
    box.style.top = top+"px";
    box.style.left = left+"px";

    document.body.appendChild(box);

    return box;
}


// Function for creating circles.
function circle( radius, color, border_color, border_width, border_type, top, left ) {
    height = radius*2 || 50;
    width = radius*2 || 50;
    color = color || "grey";
    border_color = border_color || "transparent";
    border_width = border_width || 0;
    border_type = border_type || "solid";
    top = top || 0;
    left = left || 0;

    let circle = document.createElement('div');

    circle.style.borderRadius = "50%";
    circle.style.height = height+"px";
    circle.style.width = width+"px";
    circle.style.backgroundColor = color;
    circle.style.border = border_width+"px"+" "+border_type+" "+border_color;
    circle.style.position = "absolute";
    circle.style.top = top+"px";
    circle.style.left = left+"px";

    document.body.appendChild(circle);

    return circle;
}

// Function for delay
function delay( func, time ) {
    setTimeout( func, time*1000 )
}

// Function to get distance between two elements in pexles
function distance( element_1, element_2 ) {
    var rect1 = element_1.getBoundingClientRect();
    var rect2 = element_2.getBoundingClientRect();
    x1 = rect1.left;
    x2 = rect2.left;
    y1 = rect1.top;
    y2 = rect2.top;
    
    return Math.sqrt( Math.pow(( x2 - x1 ), 2 ) + Math.pow(( y2 - y1 ), 2)).toString();
}

// Function that creates a line between the cordinates
function line( x1, y1, x2, y2, width, color ) {
    x1 = x1 || 10;
    y1 = y1 || 20;
    x2 = x2 || 65;
    y2 = y2 || 80;
    color = color || "grey";
    width = width || 5;
    let height = Math.sqrt( Math.pow(( x2 - x1 ), 2 ) + Math.pow(( y2 - y1 ), 2));
    let m = ((y2 - y1) / (x2 - x1));
    let top = (x1 + x2)/2;
    let left = (y1 + y2)/2;
    let angleRad = Math.atan(m);
    let angleDeg = angleRad * 180 / Math.PI;
    
    let line = document.createElement('div');

    line.style.transform = `rotate(${angleDeg}deg)`;
    line.style.height = height+"px";
    line.style.width = width+"px";
    line.style.backgroundColor = color;
    line.style.position = "absolute";
    line.style.top = top+"px";
    line.style.left = left+"px";

    document.body.appendChild(line);

    return line;
}

// Function for random int
function randominteger() {
    return Math.floor(Math.random() * 100);
}

// Function for random float with fixed decimal digits
function randomfloat( round ) {
    return Math.random().toFixed(round);
}

// Function for rotating an element
function rotate( element, angle ) {
    element.style.transform = `rotate(${angle}deg)`;
    return element;
}