var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
  drops.push(0);
}
var str = "JavaScript Hacking Effect & ilosrim"

function drow() {
  context.fillStyle = "rgb(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700 " + fontSize + "px";
  context.fillStyle = "#00cc33";
  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
drow();
setInterval(drow, 35);