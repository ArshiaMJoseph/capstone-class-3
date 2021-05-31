const Bodies = Matter.Bodies;//used for creating object present in the game
const Engine = Matter.Engine;//namespace means giving nickname or small name
const World = Matter.World;

var myengine,myworld;
var ground;
var bob1;
var rope1;

function setup() {
  createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(600,390,1200,20);

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);

box3 = new Box(700,280,70,70);
box4 = new Box(920,280,70,70)


box5 = new Box(810,180,70,70);
box6 = new Box(810,110,70,70);

box7 = new Box(700,150,70,70);
box8 = new Box(920,210,70,70);

box9 = new Box(810,40,70,70);

bob1 = new Bob(600,300,80);

rope1 = new Rope(bob1.body,{x:600,y:100});




}

function draw() {

  background("pink");  

  Engine.update(engine);
  ground.display();

box1.display();
box2.display();

box3.display();
box4.display();

box5.display();
box6.display();

box7.display();
box8.display();

box9.display();

bob1.display();

rope1.display();








 // ellipseMode(RADIUS);
 // ellipse(ball.position.x,ball.position.y,40,40);
}


function keyPressed(){
  if( keyCode === 32){
  
    Matter.Body.applyForce(bob1.body,bob1.body.position,
                          {x:-150,y:-85})
  
  
  
  
  }
  
  
  
  
  }