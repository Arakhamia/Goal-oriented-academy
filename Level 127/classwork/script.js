// შექმენით 3 ტიპის მასივი. პირველი ტიპის მასივში უნდა შედიოდეს რიცხვითი მნიშვნელობები. მეორე ტიპის მასივში უნდა შედიოდეს ტექსტური მნიშვნელობები, ხოლო მესამე ტიპის მასივში უნდა შედიოდეს boolean მნიშვნელობები. თქვენი დავალებაა, რომ დაშალოთ სამივე ტიპის მასივი და სათითაოდ გამოიტანოთ კონსოლში.

const numericArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry"];
const booleanArray = [true, false, true, false];

numericArray.forEach(num => console.log(num));

stringArray.forEach(str => console.log(str));

booleanArray.forEach(bool => console.log(bool));