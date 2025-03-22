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


function printerError(s) {
    const am = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    let x = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!am.includes(s[i])) {
            x++;
        }
    }
    
    return `${x}/${s.length}`;
}