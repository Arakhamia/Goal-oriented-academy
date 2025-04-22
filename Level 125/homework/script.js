// Task 1: Finding a Specific User by ID
// You are given an array of user objects, where each object has an id (number) and a name (string) property. Use the find() method to locate the user object with an id of 3. Store the found user object in a variable called userWithId3.


let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" }
];

let userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);