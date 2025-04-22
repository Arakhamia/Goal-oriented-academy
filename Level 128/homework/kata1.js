// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(nums) {
    let min1 = Infinity;
    let min2 = Infinity;
    
    for(let i of nums){
      if(i < min1){
        min2 = min1;
        min1 = i;
      } else if(i < min2){
        min2 = i;
      }
    }
    
    return min1 + min2
  }