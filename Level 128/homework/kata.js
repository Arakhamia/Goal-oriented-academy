// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript


function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++){
      if(a[i] <= limit){
        continue
      }  else{
        return false
      }
      
    }
    
    return true
  }