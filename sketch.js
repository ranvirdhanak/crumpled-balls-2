
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImage;
var dustbingreen,dustbingreenImage
var ground;
var sprite;
var sprite2;
var sprite3;

var options={
  isStatic: false,
  restitution:1.3,
  friction:0.5,
  density:1.2

 }

function preload()
{
  paperImage = loadImage("paper.png");
  dustbingreenImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 500);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = createSprite(200,200,20,20);
   ball.shapeColor="yellow";
   
   ground = createSprite(400,490,800,20);
   ground.shapeColor="blue";

   sprite = createSprite(610,475,150,15);
   sprite.shapeColor="yellow";

   sprite2 = createSprite(529,410,15,140);
   sprite.shapeColor="green";

   sprite3 = createSprite(690,410,15,140);
   sprite.shapeColor="green";

  paper = createSprite(200,200,20,20);
  paper.addImage(paperImage);

  dustbingreen = createSprite(200,150,20,20);
  dustbingreen.addImage(dustbingreenImage);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  keyPressed()
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}

