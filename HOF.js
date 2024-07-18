// Example: Double each number in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled); 

// Example: Filter out even numbers from an array
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); 

// Example: Filter out Odd numbers from an array
const odd = numbers.filter(x => x % 2 !== 0);
console.log(odd); 

// Example: Print each element of an array
numbers.forEach(x => console.log(x));

// Example: Sort an array of numbers
const arr = [5, 2, 8, 1, 4];
arr.sort((a, b) => a - b);
console.log(arr); 
