var game =0;
var speed = 7;
var health = 200;
var healthColor="green";
var ammo =200;
var laser =[];
var score=0;
var scoreCol= "red";
var ammoColor= "purple";
var accuracy = 0;
var accuracyCol = "";
var healthP = 100;
var bulletS = 0;


function setup() {
  createCanvas(1000,500);
  player = createSprite(500,250,50,50);
  player.visible=false;
  wall1 = createSprite(25,250,50,500);
  wall1.visible=false;
  wall2 = createSprite(525,25,950,50);
  wall2.visible=false;
  wall3 = createSprite(975,275,50,450);
  wall3.visible=false;
  wall4 = createSprite(500,475,900,50);
  wall4.visible=false;
  wall1.shapeColor= "black";
  wall2.shapeColor= "black";
  wall3.shapeColor= "black";
  wall4.shapeColor= "black";
  enemy1 = createSprite(random(0,1000),-20,20,20);
  enemy1.visible =false;
  enemy2 = createSprite(random(0,1000),520,20,20);
  enemy2.visible =false;
  enemy3 = createSprite(-20,random(0,500),20,20);
  enemy3.visible =false;
  enemy4 = createSprite(1020,random(0,500),20,20);
  enemy4.visible =false;
}

function draw() {
  background("red");  
  StartGame();
  if(game ===1){
    collideWall();
    ColorChange();
    continuous();
    MainGame();
    opponent();
}
keyPressed();
LoseGame();
WinGame();

drawSprites();
InfoDisplay();
}


function keyPressed(){
  if(keyCode===13){
    game =1;
  }
  if(game===1){
    if(keyCode===37){
      player.velocityX=-1*speed;
      player.velocityY=0;
      }
      if(keyCode===38){
        player.velocityY=-1*speed;
        player.velocityX=0;
        }
        if(keyCode===39){
          player.velocityX=speed;
          player.velocityY=0;
          }
          if(keyCode===40){
            player.velocityY=1*speed;
            player.velocityX=0;
            }
      if(keyCode===32){
        player.velocityX=0;
        player.velocityY=0;
      }
        if(keyCode===87 && ammo>0){
          shoot = createSprite(player.x,player.y,2,10);
            shoot.velocityY = -5;
            shoot.shapeColor = "white";
            laser.push(shoot);
            ammo =ammo -1;
            bulletS = bulletS+1
          
      }
      if(keyCode===65 && ammo>0){
        shoot = createSprite(player.x,player.y,10,2);
          shoot.velocityX = -5;
          shoot.shapeColor = "white";
          laser.push(shoot);
          ammo =ammo -1;
          bulletS = bulletS+1
        
    }
    if(keyCode===68 && ammo>0){
      shoot = createSprite(player.x,player.y,10,2);
        shoot.velocityX = 5;
        shoot.shapeColor = "white";
        laser.push(shoot);
        ammo =ammo -1;
        bulletS = bulletS+1
      
  }
  if(keyCode===83 && ammo>0){
    shoot = createSprite(player.x,player.y,2,10);
      shoot.velocityY = 5;
      shoot.shapeColor = "white";
      laser.push(shoot);
      ammo =ammo -1;
      bulletS = bulletS+1
    
}
  }
  if(game===2||game===3){
    if(keyCode===82){
      location.reload();
    }
  }
}