const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
    return a - b;
  };

  const multiply = function(array) {
      return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
  };
  
const divide = function(a,b) {
return a / b;

};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };