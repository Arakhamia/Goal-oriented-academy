// Task 1: Extracting and Formatting User Emails
// You are given an array of user objects, where each object has a name (string) and an email (string) property. Use the map() method to create a new array called formattedEmails. Each element in formattedEmails should be the user's email enclosed in angle brackets (e.g., user@example.com).


let users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" }
    ];

let formattedEmails = users.map(user => `<${user.email}>`);
console.log(formattedEmails);