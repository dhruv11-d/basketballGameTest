var ball,ground,slingshot;
var score;
var engine,world;
var backgroundIMG;
var basketSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){
  backgroundIMG = loadImage("images/court3.jpeg")
}
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
	world = engine.world;
  ball = new Ball(300,400,50);
  World.add(world,this.ball)
  slingshot = new SlingShot(ball.body,{x:300,y:420})
  score = 0;
  basketSprite =  createSprite(300,169,20,20)
  basketSprite.visible = false;
}
function draw() {
  background(backgroundIMG);  
  Engine.run(engine); 
if(ball.x>300|| ball.y){
}
  ball.display();
  slingshot.display();  
  drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}) 
}
function mouseReleased(){
  slingshot.fly();
}