// Task 1: Function with Filtering
// Create a function filterAndSum that takes one number argument and any number of additional number arguments.

 
// The first argument is a threshold value.

 
// The function should use the rest operator to collect the additional numbers into an array.

 
// The function should filter the array to include only numbers greater than the threshold.

 
// Finally, the function should return the sum of the filtered numbers.

// Example:

// filterAndSum(5, 1, 6, 2, 8, 3, 9); // Should return 23 (6 + 8 + 9)


function filterAndSum(threshold, ...numbers) {
    const filteredNumbers = numbers.filter(num => num > threshold);
    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
    return sum;
}

console.log(filterAndSum(5, 1, 6, 2, 8, 3, 9));