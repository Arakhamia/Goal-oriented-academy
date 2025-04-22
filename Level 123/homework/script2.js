// Task 3: Doubling Array Elements
// You have an array of numbers. Use the forEach() method to iterate through the array and create a new array called doubledNumbers where each element is double the value of the corresponding element in the original array.

let numbersToDouble = [1, 2, 3, 4, 5];
let doubledNumbers = [];

numbersToDouble.forEach(num => {
    doubledNumbers.push(num * 2);
});
console.log(doubledNumbers);