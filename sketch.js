
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var trash1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options={
		isStatic:true
		
	}
	
	//Create the Bodies Here.
paper=new Paper()
fill("brown")
ground=Bodies.rectangle(400,650,800,20,options)
World.add(world,ground)
trash1=new trash(500,500,20,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  trash1.display();
  rectMode(CENTER)
  rect(400,680,800,20)
  
 
}



