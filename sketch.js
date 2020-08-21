const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(200,450,40);
	dustbinObj=new Dustbin(1200,650,250,700);
    groundObject=new Ground(width/2,670,width,20);
	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperObject.display();
  dustbinObj.display();
  
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}




