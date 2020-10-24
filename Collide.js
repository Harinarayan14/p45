
function collide(a,b){
  
    if (((b.x - a.x <= b.width/2 + a.width/2 )
    &&(a.x - b.x <= b.width/2 + a.width/2 ))
   &&((b.y - a.y <= b.height/2 + a.height/2 )
    &&(a.y - b.y <= b.height/2 + a.height/2 )) && a!==null && b!==null){
      return true
  
    }
  }