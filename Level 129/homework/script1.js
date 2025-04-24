// Task 2: Object Destructuring
// Given an object representing a product:
 
// const product = {
//     id: 101,
//     name: "Laptop",
//     price: 1200,
//     brand: "TechCorp",
//     color: "Silver",
//     weight: "2kg"
// };
// Write code that uses object destructuring with the rest operator to:
// Extract the id and name into separate variables.
// Collect the remaining properties (price, brand, color, and weight) into a new object called details.

 
// Print the id, name, and details to the console.

const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

const { id, name, ...details } = product;

console.log(id, name, details);