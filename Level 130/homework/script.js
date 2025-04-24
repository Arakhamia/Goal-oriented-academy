// Task 1: Arrow Functions
// Rewrite with Arrow Function:
// Rewrite the following function as an arrow function:

// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// -
// Task 2: Arrow Functions
// Write an arrow function called square that takes a number and returns its square using the implicit return feature.
 
// -
// Task 3: Destructuring
// Array Destructuring Basics:
// Given const numbers = [1, 2, 3, 4, 5];, use array destructuring to get the first and last elements into variables first and last.
 
// -
// Task 4: Destructuring

 
// Object Destructuring Renaming:

 
// Given const student = { name: 'Emma', age: 20 };, use object destructuring to extract the name into a variable called studentName and age into studentAge.
// -
// Task 5: Destructuring
// Nested Object Destructuring:
// Given:

// const product = {
//   id: 101,
//   details: {
//     name: "Laptop",
//     price: 1200
//   }
// };

 
// Destructure name and price into variables productName and productPrice.
// -
// Task 6: for...in and for...of
// for...in with Object:
// Use for...in to iterate over the properties of the object:

// const car = { make: 'Toyota', model: 'Camry', year: 2020 };

 
// Print each property name and its value.
// -
// Task 7:  for...in and for...of
// for...of with Array:
// Use for...of to iterate over the array:

// const colors = ['red', 'green', 'blue'];

 
// Print each color.
// -
// Task 8: for...in and for...of
// for...of with String:
// Use for...of to iterate over the string "JavaScript" and print each character.
 
// -
// Task 9: Default Parameters
// Basic Default Parameter:
// Write a function multiply that takes two arguments, a and b, with b defaulting to 2. Return the product of a and b.

// -
// Task 10: Default Parameters
// Default Parameter and Undefined:
// Show how a default parameter works when undefined is passed as an argument.

// -
// Task 11: Default Parameters
// Default Parameter Evaluation:
// Write a function greet with a default parameter that is the result of another function call:
// -
// Task 12:
// კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება arrow function.

// -
// Task 13:
// კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება destructing.

// -
// Task 14:
// კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება for in / for of.

// -
// Task 15:
// კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება object enhancment.

// -
// Task 16:
// კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება default parameter




// Task 1
const getFullName = (firstName, lastName) => firstName + " " + lastName;

// Task 2
const square = num => num * num;

// Task 3
const numbers = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers;

// Task 4
const student = { name: 'Emma', age: 20 };
const { name: studentName, age: studentAge } = student;

// Task 5
const product = {
    id: 101,
    details: {
        name: "Laptop",
        price: 1200
    }
};
const { details: { name: productName, price: productPrice } } = product;

// Task 6
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Task 7
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// Task 8
for (const char of "JavaScript") {
    console.log(char);
}

// Task 9
const multiply = (a, b = 2) => a * b;

// Task 10
console.log(multiply(5, undefined));

// Task 11
const getDefaultGreeting = () => "Hello";
const greet = (message = getDefaultGreeting()) => message;

// Task 12
// Arrow functions are concise syntax for writing functions.

// Task 13
// Destructuring allows unpacking values from arrays or properties from objects into variables.

// Task 14
// for...in iterates over object properties, for...of iterates over iterable objects like arrays or strings.

// Task 15
// Object enhancement allows creating objects with shorthand syntax for properties and methods.

// Task 16
// Default parameters allow setting default values for function arguments.