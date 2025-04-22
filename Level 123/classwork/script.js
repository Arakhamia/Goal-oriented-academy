// Task Condition:
// You are given an array of student objects, where each object has a name (string) and a grade (number between 0 and 100) property. Your task is to use the array methods every(), some(), and forEach() to analyze this array based on the following criteria.


// Check if all students have a passing grade (70 or above) using every(). Store the result in a variable named allPassing.
// Check if at least one student has a grade below 65 using some(). Store the result in a variable named hasFailing.
// Use forEach() to iterate through the students array and log the name of each student to the console. The output for each student should be in the format: "Student: [student's name]".
// Use forEach() to create a new empty array called honorRoll. Iterate through the students array again. If a student's grade is 90 or above, push their name into the honorRoll array.
// Log the allPassing variable to the console.
// Log the hasFailing variable to the console.
// Log the honorRoll array to the console.

const students = [
    { name: 'Arthur', grade: 100 },
    { name: 'Charles', grade: 92 },
    { name: 'Dutch', grade: 78 },
    { name: 'Micah', grade: 54 },
    { name: 'John', grade: 95 },
];

const allPassing = students.every(student => student.grade >= 70);

const hasFailing = students.some(student => student.grade < 65);

students.forEach(student => {
    console.log(`Student: ${student.name}`);
});

const honorRoll = [];
students.forEach(student => {
    if (student.grade >= 90) {
        honorRoll.push(student.name);
    }
});

console.log('All students passing:', allPassing);  
console.log('At least one student failing:', hasFailing);
console.log('Honor Roll:', honorRoll);
