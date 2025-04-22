// Level 124:
// JavaScript Array Methods - map(), filter(), reduce(), reduceRight()
//    Task Condition:

// You are given an array of product objects, where each object has a name (string) and a price (number) property. Your task is to use the array methods map(), filter(), reduce(), and reduceRight() to analyze and transform this array based on the following criteria.


// Use map() to create a new array called productNames containing only the names of all the products. Log the productNames array to the console.

// Use filter() to create a new array called affordableProducts containing only the products with a price less than $100. Log the affordableProducts array to the console.

// Use reduce() to calculate the total price of all products in the products array. Store the total in a variable called totalPrice. Log the totalPrice to the console.

// Use reduceRight() to concatenate the names of all products into a single string, starting from the last product in the array and separating each name with " - ". Store the resulting string in a variable called productNamesReversed. Log the productNamesReversed string to the console.

let products = [
    {name: "Laptop", price: 2300},
    {name: "Personal Computer", price: 5200},
    {name: "Playstation 5", price: 1400},
    {name: "Keyboard", price: 90},
    {name: "Head Phones", price: 170},
]

let productNames = products.map(product => product.name);
console.log(productNames);

let affordableProducts = products.filter(product => product.price < 100);
console.log(affordableProducts);

let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

let productNamesReversed = products.reduceRight((acc, product) => acc + " - " + product.name, "");
console.log(productNamesReversed);