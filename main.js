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
  
