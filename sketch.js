var thickness;
var wall;
var speed;
var weight;
var bullet;

speed=createSprite(50,200,50,50);
weight=createSprite(1500,200,60);

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(32,52)
  thickness=random(22,83)
  bullet.velocityX=speed;

  if(hascollided(bullet,wall))

  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed / ( thickness * thickness * thickness )
    
     if(damage>10)

      {
        wall.shapecolour=color(225,0,0);
      }
      




  }




}



function draw() {
  background(255,255,255);  
  drawSprites();
}















