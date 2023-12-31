// myFirst.js

// Part a: Log a simple text
console.log("My first module");

// Part c: Write a function called "myMultiplier"
function myMultiplier(number) {
    return number * 2;
}

// Part d and e: Execute the function and log the result
const result = myMultiplier(4);
console.log("Result of myMultiplier(4):", result);

// Part f: Export the myMultiplier function
export default {
    myMultiplier,
};


