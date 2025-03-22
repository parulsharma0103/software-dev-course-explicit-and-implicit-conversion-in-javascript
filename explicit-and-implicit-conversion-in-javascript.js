/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // Use explicit Number() conversion
console.log("The result is: " + result);

let isValid = Boolean("false")=== true;  // Or use a specific condition
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;  // Convert age to a number
console.log("Total Age: " + totalAge); // Now it's 30

// Examples
// Implicit Type Conversion (String + Number)
let implicitConversion = "5" + 2; // JavaScript implicitly converts 2 to a string and concatenates
console.log("Implicit Conversion Result: " + implicitConversion); // Output: "52" (String)

// Explicit Type Conversion (String to Number)
let explicitConversion = Number("5") + 2; // Explicitly convert the string "5" to a number before addition
console.log("Explicit Conversion Result: " + explicitConversion); // Output: 7 (Number)


// Handling Edge Case: NaN and undefined
let invalidConversion = Number("hello"); // "hello" is not a number, so the result is NaN
let undefinedConversion = Number(undefined); // undefined is converted to NaN

console.log("Invalid Conversion Result (NaN): " + invalidConversion); // Output: NaN
console.log("Undefined Conversion Result (NaN): " + undefinedConversion); // Output: NaN

