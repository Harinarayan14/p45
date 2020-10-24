
function InfoDisplay(){
    if(game===1){
        
      textSize(25);
      fill(scoreCol);
      text("Score: "+score,75,25);
      fill(255)
      text("Target: 200",75,475);
      fill(healthColor);
      text("Health: "+health,400,25);  
      fill(healthColor);
      text("Health %: "+healthP ,400,475);
      fill(ammoColor);
      text("Bullets: "+ammo,750,25);
      fill(accuracyCol);
      text("Accuracy: "+accuracy + " %",750,475);
    }
}