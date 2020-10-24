function collideWall(){
    if(player.isTouching(wall1)){
      health--;
      }
      if(player.isTouching(wall2)){
        health--;
        }
        if(player.isTouching(wall3)){
          health--;
          }
          if(player.isTouching(wall4)){
            health--;
            }
  
  }