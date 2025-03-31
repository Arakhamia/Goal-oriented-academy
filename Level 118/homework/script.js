// მარტივი მრიცხველი:
// შექმენით HTML-ში div ელემენტი, რომელშიც გამოჩნდება რიცხვი (საწყისი მნიშვნელობა 0).
// შექმენით ორი ღილაკი: "გაზრდა" და "შემცირება".

 
// "გაზრდა"-ზე დაჭერისას:
// წაიკითხეთ რიცხვი div ელემენტიდან.
// გაზარდეთ რიცხვი 1-ით.
// განაახლეთ რიცხვი div ელემენტში.

 
// "შემცირება"-ზე დაჭერისას:
// წაიკითხეთ რიცხვი div ელემენტიდან.
// შეამცირეთ რიცხვი 1-ით.
// განაახლეთ რიცხვი div ელემენტში.

// ასევე შექმენით ღილაკი, სადაც ეწერება გაზრდა და შემცირება 10 - ით, გაზრდის ღილაკზე დაჭერის შედეგად რიცხვი უნდა გაიზარდოს 10 - ით, ხოლო შემცირების ღილაკზე დასაჭერად რიცხვი უნდა შემცირდეს 10 - ით.



const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const increaseByTenButton = document.getElementById('increaseByTenButton');
const decreaseByTenButton = document.getElementById('decreaseByTenButton');

const numberDisplay = document.getElementById('numberDisplay');
let number = 0;
numberDisplay.textContent = number;
increaseButton.addEventListener('click', function() {
    number += 1;
    numberDisplay.textContent = number;
});
decreaseButton.addEventListener('click', function() {
    number -= 1;
    numberDisplay.textContent = number;
});
increaseByTenButton.addEventListener('click', function() {
    number += 10;
    numberDisplay.textContent = number;
});
decreaseByTenButton.addEventListener('click', function() {
    number -= 10;
    numberDisplay.textContent = number;
});