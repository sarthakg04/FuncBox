function canvas(){
var canvas = document.createElement('canvas');
canvas.id = "CursorLayer";
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
cursorLayer = document.getElementById("CursorLayer");
console.log(cursorLayer);
document.getElementById("CursorLayer").style.backgroundImage='url(FuncBoxx/BowlingGameFiles/assets/backgrounds/Frame.png)';
}

function addball(){
var canvas = document.getElementById('CursorLayer');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

let circle = new Path2D();  // <<< Declaration
circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

context.fillStyle = 'blue';
context.fill(circle); //   <<< pass circle to context

context.lineWidth = 10;
context.strokeStyle = '#000066';
context.stroke(circle); 
}
