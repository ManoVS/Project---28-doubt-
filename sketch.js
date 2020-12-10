
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload(){
	backgroundImg = loadImage("forest bacground.png");
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	stone = new Stone(200,400,50,50);
  
	band1 = new Band(stone.body,{x : 70, y : 400})
  
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  band1.display();
  stone.display();
  
  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});

}

function mouseReleased(){

    band1.fly();

}

