// Codewars 1

function openOrSenior(data){
    y = []
    
    for(let i = 0; i < data.length; i++){
      let x = data[i]
      if(x[0] >= 55 && x[1] > 7){
        y.push('Senior')
      } else{
        y.push('Open')
      }
    }
    return y
  }