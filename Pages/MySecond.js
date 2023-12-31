// mySecond.js



// Part a: Add another function called "myMultiplier"
function myMultiplier(number) {
    return number * 3;
  }
  
  // Part b and c: Execute the function and log the result
  const result = myMultiplier(4);
  console.log("Result of myMultiplier(4) in mySecond module:", result);
  
  // Part d: Export the myMultiplier function
  exports.myMultiplier = myMultiplier;