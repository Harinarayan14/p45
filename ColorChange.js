
 function ColorChange(){
     
    accuracy = Math.round(score*100/bulletS);
    healthP = health/2;

    if(health>200){
      healthColor="purple";
        }
  if(health<150&&health>100){
  healthColor="yellow";
  }
  if(health<100&&health>50){
  healthColor="orange";
  }
  if(health<50&&health>0){
    healthColor="red";
      }
      
    
  if(accuracy>80 && accuracy<98){
    accuracyCol = "green";
  }
  if(accuracy <80 && accuracy>60){
    accuracyCol = "yellow";
  }
  if(accuracy <60&& accuracy>40){
    accuracyCol = "orange";
  }
  if(accuracy <40 && accuracy>0){
    accuracyCol = "red";
  }
   if(accuracy>98){
    accuracyCol="purple"
  }
      if(ammo===200){
        ammoColor="purple"
      }
      if(ammo<200&&ammo>150){
        ammoColor="green";
          }
  if(ammo<150&&ammo>100){
  ammoColor="yellow";
  }
  if(ammo<100&&ammo>50){
  ammoColor="orange";
  }
    if(ammo<50&&ammo>0){
      ammoColor="red";
        }
        if(score>00&&score<50){
          scoreCol="red";
            }
      if(score>50&&score<100){
        scoreCol="orange";
          }
          if(score>100&&score<150){
            scoreCol="yellow";
              }
              if(score>150&&score<190){
                scoreCol="green";
                  }
  if(score>190&&score<200){
  scoreCol="purple";
  }
  }
   