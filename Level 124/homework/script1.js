// Task 2: Filtering Even Numbers and Squaring
// You have an array of numbers. First, use the filter() method to create a new array containing only the even numbers from the original array. Then, use the map() method on the filtered array to create a new array called squaredEvens where each element is the square of the corresponding even number.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
let squaredEvens = evenNumbers.map(num => num * num);
console.log(squaredEvens);