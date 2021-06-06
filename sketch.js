//namespacing
const E = Matter.Engine
const W = Matter.World
const B = Matter.Bodies

var en, wo 
var g1;

function setup(){
  createCanvas(400,400);

//create the engine
  en = E.create()

 //calling the world from the engine
  wo = en.world

  g1 = new Ground(200,360)
  
}
function draw(){
  background(0);
 E.update(en)
 g1.display()
  
}

//rectangle => rect()
//circle => ellipse()