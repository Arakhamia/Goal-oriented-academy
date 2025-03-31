// შექმენით ფუნქცია, რომელიც შეამოწმებს შეტანილი რიცხვი ლუწია თუ კენტი. ამისათვის მომხმარებელს შემოატანინეთ რიცხვი და გადაეცით არგუმენტის სახით. ფუნქცია შექმენით 3 გზით. 1. named function   2. anonymus function    3. arrow function.

function evenOrOddX(x){
    if (x % 2 == 0){
        return "Even"
    } else{
        return "Odd"
    }
}

const evenOrOddY = function(y){
    if (y % 2 == 0){
        return "Even"
    } else{
        return "Odd"
    }    
}

const evenOtOddZ = z => {
    if (z % 2 == 0){
        return "Even"
    } else{
        return "Odd"
    }        
}

console.log(evenOrOddX(10));
console.log(evenOrOddY(10));
console.log(evenOtOddZ(10));
