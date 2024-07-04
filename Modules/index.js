// Here's i'm gonna to import the functions from main.js file.
// And exploring how it works.
import { add, subtract, multiply, divide, square, cube } from "./main.js";
let addition = add(15, 3);
console.log(`Result of addition: ${addition}`);
// Here's i'm gonna to declare the functions which are imported from main.js file.
let subtraction = subtract(16, 5);
console.log(`Output of subtraction is: ${subtraction}`);
// Now i'm gonna to call the functions and print the output.
let multiplication = multiply(19, 2);
console.log(`Output of multiplication is: ${multiplication}`);
let division = divide(20, 5);
console.log(`Output of division is: ${division}`);
let squareRoot = square(16);
console.log(`Output of square root is: ${squareRoot}`);
let cubeRoot = cube(64);
console.log(`Output of cube root is: ${cubeRoot}`);
