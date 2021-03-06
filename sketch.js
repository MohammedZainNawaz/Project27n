var bob1
var rope1,roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1490, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(500,300,20,20)
    bob2 = new Bob(570,300,20,20)
    bob3 = new Bob(640,372.5,20,20)
    bob4 = new Bob(710,300,20,20)
    bob5 = new Bob(780,300,20,20)
    roof = new Roof(745,100,400,20)
    rope1 = new Rope(bob1.body,roof.body,-70*2,0)
    rope2 = new Rope(bob2.body,roof.body,-70*2,0)
    rope3 = new Rope(bob3.body,roof.body,-70*2,0)
    rope4 = new Rope(bob4.body,roof.body,-70*2,0)
    rope5 = new Rope(bob5.body,roof.body,-70*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



