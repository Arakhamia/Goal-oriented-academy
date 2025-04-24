// გააკეთეთ 3 მაგალითი ცვლადებზე strict mode ის გამოყენებით.
// გააკეთეთ 3 მაგალითი ფუნქციებზე strict mode ის გამოყენებით.

'use strict';
// Global Strict Mode Example
// Example 1: ცვლადის შექმნა მისი ტიპის მინიჭების გარეშე, მაგალითად სწორი გზაა:

let x = 10;
console.log(x);


// ხოლო არასწორი იქნება:
y = 20;
console.log(y);

// Example 2: ფუნქციის შექმნა და მასში პარამეტრების გამოყენება, ასევე მასში strict mode-ის გამოყენება ლოკალურად, მაგალითად სწორი გზაა:
function add(a, b) {
    "use strict";
    return a + b;
}

console.log(add(5, 10)); // 15

// ხოლო არასწორი იქნება:
function subtract(a, a, c) {
    "use strict";
    return a - c;
}

console.log(subtract(10, 5, 2));

// აქ შეცდომა იმიტომ დაფიქსირდა, რომ strict mode-ში ფუნქციის პარამეტრებს არ შეიძლება ჰქონდეთ ერთი და იგივე სახელი.