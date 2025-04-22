// Task 2: Destructuring with Renaming
// Objective: Extract values from an object and assign them to new variable names.

 
// Problem: Given the same object:

// const person = { name: "Alice", age: 30, city: "New York" };

// Write code to extract the name and assign it to a variable called userName, and extract city and assign it to a variable called userCity.

const person = { name: "Alice", age: 30, city: "New York" };

const { name: userName, city: userCity } = person;

console.log(userName); 
console.log(userCity); 