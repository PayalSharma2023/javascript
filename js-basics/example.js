console.log('hello world')
// alert("hello world")
// document.write("hello world")


const num1 = 5;
const num2 = 3;

// // add two numbers
const sum = num1 + num2;

// // display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// // store input numbers
// const num1 =1 // parseInt(prompt('Enter the first number '));
// const num2 = 3// parseInt(prompt('Enter the second number '));

// take the input from the user
const number = 90;

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);
// If 0 or a positive number is passed in the Math.sqrt() method, then the square root of that number is returned.
// If a negative number is passed, NaN is returned.
// If a string is passed, NaN is returned.