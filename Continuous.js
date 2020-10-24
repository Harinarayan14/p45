

function continuous(){
  
    if(player.x<10){
      player.x=980;
    }
    if(player.x>990){
      player.x=20;
    }
    if(player.y<10){
      player.y=480;
    }
    if(player.y>490){
      player.y=20;
    }
    if(enemy1.y>490){
      enemy1.y=-20;
      enemy1.x = random(50,950);
    }
    if(enemy2.y<10){
      enemy2.y=520;
      enemy2.x = random(50,950);
    }
    if(enemy3.x>990){
      enemy3.x=-20;
      enemy3.y = random(50,450);
    }
    
    if(enemy4.x<10){
      enemy4.x=1020;
      enemy4.y = random(50,450);
    }}