// myCollector.js

// Part a: Import both functions from "myFirst" and "mySecond" modules
const myFirstModule = require('./MyFirst').default;
const mySecondModule = require('./MySecond');

// Part b: Pass the value 5 to both functions
const resultFromFirstModule = myFirstModule.myMultiplier(5);
const resultFromSecondModule = mySecondModule.myMultiplier(5);

// Log the results
console.log("Result of myMultiplier(5) from myFirst module:", resultFromFirstModule);
console.log("Result of myMultiplier(5) from mySecond module:", resultFromSecondModule);
