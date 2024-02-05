let gif;

function preload (){
gif = loadimage ('assets/Rowan.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('lightgrey');
  stroke ('white');
  strokeWeight (1);
 
}

function draw() {

background ('255,255,255');
 
 

var num = 8 //variable for number of squares
var sideLen = windowWidth

 
var sideLen = windowWidth/num; //var for sidelength each sqaure
 
  for (var y = 0; y < 2 * windowHeight; y = y + sideLen) {   //loop for y direction
   
     for (var x = 0; x < 2 * windowWidth; x = x + sideLen )  { //loop x direction
 
  image (gif,x,y,sideLen, sideLen) ;
  }
   
   
   
   
   
  }
 
 
 

 
   
 
} 
 
  //noLoop();
}
function windowWidth (){
  resizeCanvas (windowWidth,windowHeight);
}
