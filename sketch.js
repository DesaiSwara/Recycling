
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

    paper. new Paper(100,200,30,45);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  drawSprites();
}



