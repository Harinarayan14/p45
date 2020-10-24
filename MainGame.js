function MainGame(){
  
    player.visible=true;
    wall1.visible=true;
    wall2.visible=true;
    wall3.visible=true;
    wall4.visible=true;
    enemy1.visible=true;
    enemy2.visible=true;
    enemy3.visible=true;
    enemy4.visible=true;
    
    enemy1.velocityY = random(1,4);
    enemy2.velocityY = random(-1,-4);
    enemy3.velocityX = random(1,4);
    enemy4.velocityX = random(-1,-4);
    speed = speed+0.005;
  
    if(speed>10){
      speed=10;
    }
  
    if(health<=0){
      game=2;
    }
    
  if(score===200){
  game=3;
    }
  
  }