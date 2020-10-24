
 function WinGame(){
   
    if(game===3){
      player.destroy();
      wall1.destroy();
      wall2.destroy();
      wall3.destroy();
      wall4.destroy();
      clear();
      fill("yellow");
      textSize(25);
      text("You Win !!!",500,250);
    }
  }