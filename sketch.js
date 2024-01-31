

let gif; 

function preload() {
gif = loadImage ('assets/GIFtransparent.gif');
}

function setup () {

createCanvas(windowWidth, windowHeight); 


}

function draw() { 


background ('red');

var num = 50;
varsideLen = windowWidth/num;

for (var y = 0; y < windowHeight; y = y + sideLen) {


for  (var x = 0; x < windowHeight; x = x + sideLen) {
image (gif, x, y, sideLen, sideLen);
}
}
}

function windowResized(){
resizeCanvas (windowWidth, windowHeight); 
}
