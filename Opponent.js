function opponent(){
    for(var i =0;i<laser.length;i++){
      if(laser[i].y<0||laser[i].x<0||laser[i].y>500||laser[i].x>1000){
        laser[i].y=10000;
        laser[i].x =10000;
      }
       if(collide(laser[i],enemy1)){
         laser[i].destroy();
         laser[i].x =10000;
         laser[i].y = 10000;
         enemy1.x = random(50,950);
         enemy1.y = -20;
        
         score =score+1;
         ammo=ammo+1;
         health=health+1
   
       }
       if(collide(laser[i],enemy2)){
        laser[i].destroy();
        laser[i].x =10000;
        laser[i].y = 10000;
        enemy2.x = random(50,950);
        enemy2.y = 520;
       
        score =score+1;
        ammo=ammo+1;
        health=health+1
  
      }
      if(collide(laser[i],enemy3)){
        laser[i].destroy();
        laser[i].x =10000;
        laser[i].y = 10000;
        enemy3.x =-20;
        enemy3.y = random(50,450);
       
        score =score+1;
        ammo=ammo+1;
        health=health+1
  
      }
      if(collide(laser[i],enemy4)){
        laser[i].destroy();
        laser[i].x =10000;
        laser[i].y = 10000;
        enemy4.x =520;
        enemy4.y = random(50,450);
       
        score =score+1;
        ammo=ammo+1;
        health=health+1
  
      }
       if(collide(player,enemy1)){
        health = health- Math.round(random(3,7));
        enemy1.x = random(50,950);
        enemy1.y = -20;
       }
      }
      if(collide(player,enemy3)){
       health = health- Math.round(random(3,7));
       enemy3.x =-20;
       enemy3.y = random(50,450);
      }
      if(collide(player,enemy2)){
       health = health- Math.round(random(3,7));
       enemy2.x = random(50,950);
       enemy2.y = 520;
      }
      if(collide(player,enemy4)){
       health = health- Math.round(random(3,7));
       enemy4.x =520;
       enemy4.y = random(50,450);
      }
      
     }
  