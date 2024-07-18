// Basic array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;

console.log(first);  
console.log(second);     

// Skipping elements using array destructuring
let [, , third, , fifth] = numbers;

console.log(third);  
console.log(fifth);  

// Basic object destructuring
let person = {
    name: 'Hishmat',
    age: 24,
    city: 'Mithi'
};
  
let { name, age, city } = person;
  
console.log(name);  
console.log(age);   
console.log(city);  

let { Uni = 'Unknown' } = person;

console.log(Uni)
