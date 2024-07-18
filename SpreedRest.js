//////////////////////// Spread Operator //////////////////////////
// Combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined);  

//Copying an array
let original = [1, 2, 3];
let copied = [...original];
console.log(copied); 

//Passing elements of an array as arguments to a function
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result);  

////////////////////////////Rest Parameter///////////////////////////////////

// Example: Using rest parameter with destructuring
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); 
console.log(y);  
console.log(z);  
