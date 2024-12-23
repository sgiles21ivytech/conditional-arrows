/*
12/23/24
Shanon Giles
Condtional Arrows
*/

//Problem 1: Write an arrow function that checks to see if a user is older than 18.
const checkForAge = (whatsYourAge) =>
     whatsYourAge >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"

console.log(checkForAge(25))
console.log(checkForAge(16))

//Problem 2: Write an arrow function that checks to see if it is currently raining.
const checkForRain = (getCurrentWeather) =>
 getCurrentWeather === 'raining' ? "Get your rain jacket!" : "No rain on today's forecast"

console.log(checkForRain("raining"))
console.log(checkForRain("snow"))

//Problem 3: Write an arrow function that checks to see if a number is even.
const checkForEvenNumbers = (isItEven) =>
     isItEven % 2 === 0 ? "That's an even number!" : "That's an odd number!"

console.log(checkForEvenNumbers(7))
console.log(checkForEvenNumbers(118))

//Problem 4: Write an arrow function that takes in two parameters and checks whether one number is greater than another.
const whichNumIsGreater = (firstNumber, secondNumber) =>
    firstNumber > secondNumber ? `${firstNumber} is more than ${secondNumber}!` 
    : `${firstNumber} is less than ${secondNumber}`
    
console.log(whichNumIsGreater(1, 75))
console.log(whichNumIsGreater(500, 250))






