// Higher-order function that takes a function as an argument
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
  }
  
  // Example functions to pass as arguments to operateOnNumbers
  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
console.log(operateOnNumbers(5, 3, add));       
console.log(operateOnNumbers(5, 3, subtract));  
console.log(operateOnNumbers(5, 3, multiply));  
  