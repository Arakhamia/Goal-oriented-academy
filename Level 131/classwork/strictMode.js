// შექმენით js ფაილი და ჩართეთ strict mode ორი გზით, გლობალურად და ლოკალურად. strict mode ის ჩართვის შემდეგ შექმენით 2 მაგალითი(ცვლადებზე და ფუნქციებზე) სადაც ჩანს strict mode - ის მუშაობა და ასევე ის პროცესი სადაც იჭერს შეცდომებს.
// მაგალითების შექმნის შემდეგ, კომენტარის სახით ახსენით თუ რატომ დაფიქსირდა შეცდომა.

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
