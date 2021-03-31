const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup() {
  createCanvas(400,400);
  
  myEngine= Engine.create();

  //myWorld is myEngine's world
  myWorld= myEngine.world;

  var groundOpt = {
    isStatic:true
  }
  
  ground= Bodies.rectangle(200,300,400,10,groundOpt);
  World.add(myWorld,ground);

  //json
  var ballOpt= {
    restitution:1
  }
  
  ball= Bodies.circle(200,150,20,ballOpt);
  World.add(myWorld,ball);

  console.log(ball);
}

function draw() {
  background("blue"); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}