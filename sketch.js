var roadImage;
var human_running,humanImage;
var hurdleImage;
var ground;
var END=0;
var PLAY=1;
var gameState=PLAY;
var text;
var distance;
var gameOver;

function preload(){
roadImage=loadImage("road.jpg");
humanImage=loadAnimation("human -1.png","human -2.png","human -3.png","human -4.png","human -5.png","human -6.png","human -7.png","human -8.png");
hurdleImage=loadImage("hurdle.png");
gameOverImage=loadImage("gameOver.png");
}
function setup() {
  createCanvas(600,680);
  //createSprite(400, 200, 50, 50);
road=createSprite(40,360);
//road.scale=2.3;
road.addImage("road",roadImage);
ground=createSprite(210,680,720,10);
/*hurdle=createSprite(300,590);
hurdle.addImage("hurdle",hurdleImage);
hurdle.scale=0.9;
hurdle.velocityX= -3*/

gameOver=createSprite(280,360);
gameOver.addImage("gameOver",gameOverImage);

hurdlegroup = new Group();

human=createSprite(200,560);
human.scale=0.3;
human.addAnimation("human_running",humanImage);
//human.velocityX=-2;

hurdlegroup = new Group();

}

function draw() {
 // background(0);
 // background.velocityX=2;
 if(gameState===PLAY){
 road.velocityX=-9;
 if(road.x<0){
  road.x=width/2
  
}
gameOver.visible=false;
    
hurdle();
if(keyDown("j")&& human.y >= 400) {
  human.velocityY = -9;
}
human.velocityY = human.velocityY + 0.2;
human.collide(ground);
ground.visible=false;
if(human.isTouching(hurdlegroup)){
  gameState=END;
 }
 
 }
 if(gameState===END){
  
    road.velocityX=0;
      human.velocityY=0;
      human.visible=false;
      hurdleobstacle.visible=false;
      gameOver.visible=true;
    text.visible=false;
    textSize(0);
  }
 
drawSprites();
textSize(18);
fill("red");
text("Press j to jump",10,20);
 // road.display();

}
function hurdle(){
  if(frameCount%200===0){
  hurdleobstacle=createSprite(900,Math.round(random(580,650)))
  hurdleobstacle.addAnimation("hurd",hurdleImage );
  hurdleobstacle.velocityX=-4;
  hurdleobstacle.scale=0.8;
  hurdlegroup.add(hurdleobstacle);
  hurdleobstacle.setLifetime=50;
  }
  }