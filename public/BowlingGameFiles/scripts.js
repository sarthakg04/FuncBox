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
return canvas;
}