// გააკეთეთ თითო მაგალითი ყველა საკითხზე. (arrow function, destructing, object enhancment, forIn/forOf, defaupt parameter).

// 1. Arrow function
const add = (a, b) => a + b;

console.log(add(5, 15)); 
console.log(add(20, 10)); 


// 2. Destructuring
const person = {
    name: 'John',
    year: 1907,
    city: 'Black water'
};

const { name, year, city } = person;
console.log(name); 
console.log(year); 


// 3. Object enhancement
const x = 10;
const y = 20;
const sumObject = {
    x,
    y,
    sum() {
        return this.x + this.y;
    }
};
console.log(sumObject.sum());


// 4. forIn loop
const car = {
    make: 'Nissan',
    model: 'GT-R',
    year: 2020
};

for (let i in car) {
    console.log(`${i}: ${car[i]}`);
}

// 5. forOf loop
const array = [1, 2, 3, 4, 5];
for (let num of array) {
    console.log(num); 
}

// 6. Default parameter
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));
console.log(multiply(5, 2));