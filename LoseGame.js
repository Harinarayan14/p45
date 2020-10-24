
 function LoseGame(){

    if(game===2){
      player.destroy();
      wall1.destroy();
      wall2.destroy();
      wall3.destroy();
      wall4.destroy();
      clear();
      fill("yellow");
      textSize(25);
      text("Game Over !!!",500,250);
    }
   }