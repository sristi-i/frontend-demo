// ---- 1. Hello world ----

console.log("Hello World"); // prints o DevTools console
console.log("--- Day 3: JavasScript ---");

// ---- 2. Variables ----
// var - old, function-scoped, avoid
var oldVariable = "I am var";
console.log("oldVariable: ", oldVariable);

// let - block-scoped, reassignable
let age = 25;
age = 26; // allowed - let can be reassigned
console.log("age: ", age);

// const - block-scoped, cannot be reassignable
const nameConst = "Sristi";
// name = "Other"       // ERROR - const cannot be reassigned
console.log("nameConst: ", nameConst);

// scope demo
{
    let blockScoped = "only inside here";
    console.log(blockScoped);       // works
}
// console.log(blockScoped);           // ERROR - blcokScoped not accessible here

// ---- 3. Data Types ----
// Primitive types
const str = "Hello"; // String
const num = 42; // Number
const decimal = 3.14; // Number (JS has one number type)
const isTrue = true; // Boolean
let notDefined;
const empty = null; // null - intentionally empty

// typeof - check the type
console.log(typeof str);               // "string"
console.log(typeof num);               // "number"
console.log(typeof isTrue);            // "boolean"
console.log(typeof notDefined);        // "undefined"
console.log(typeof empty);             // "object" — JS bug, null is not object!

// Template literals - backtick strings
const greeting = `Hello, my name is ${nameConst} and I am ${age} years old.`;
console.log(greeting);

// Non-primitive types
const person = {name: "Alice", age: 30}; // Obbject - key-value pairs
const colors = ["red", "green", "blue"]; // Array
console.log(person.name); // "Alice"
console.log(colors[0]); // "red"

// ---- 4. Operators ----

// Arithmetic
console.log(10 + 3);                  // 13
console.log(10 - 3);                  // 7
console.log(10 * 3);                  // 30
console.log(10 / 3);                  // 3.333...
console.log(10 % 3);                  // 1  (remainder)
console.log(2 ** 8);                  // 256 (exponent)

// assignment
let score = 10;
score += 5; // score = score + 5 = 15
score -=2; // score = 13
console.log("score: ", score);

// comparison - always use === not ==
console.log(5 === 5); // true (same value, same type)
console.log("5" === 5); // false (different types - string vs number)
console.log(10 > 5); // true
console.log(10 <= 10); // true

// logical
console.log(true && false); // false - both must be true
console.log(true || false); // true 
console.log(!true);

// ternary - shorthand if/else
const ternary = age >= 18 ? "adult" : "minor";
console.log(ternary); // "adult"

// ---- 5. control statements ----

// if / else if / else
const marks = 75;

if(marks >= 90) {
    console.log("Grade: A");
} else if(marks >= 75) {
    console.log("Grade: B");
} else if(marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
} 

// switch - cleaner for multiple fixed values
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    default:
        console.log("Mid week");
}

// for loop - when you know how many times
for(let i = 1; i <=5; i++) {
    console.log("for loop iteration: ", i);
}

// while loop - when consition-based
let count = 0;
while(count < 3) {
    console.log("while count: ", count);
    count++;
}

// for...of -- loop over array items
const fruits = ["apple", "banana", "mango"];
for(let fruit of fruits) {
    console.log("fruit: ", fruit);
}

// for...in - loop over object keys
const student = {name: "Bob", age: 20, grade: "A"};
for(let key in student) {
    console.log(key, ":", student[key]);
}

// break and continue
for(let i = 0;  i < 5; i++) {
    if(i === 3) break;
    console.log("break demo: ", i);
}

for(let i = 0; i < 5; i++) {
    if(i === 2) continue;
    console.log("continue demo:", i);
}

// ---- 6. functions ----

// function declaration - hoisted, can call before definition
function greet(personName) {
    return `Hello, ${personName}!`;
}
console.log(greet("Alice")); // "Alice" = argument

// function with multiple params and default value
function add(a, b = 0) { // b defaults to 0 if not passed
    return a+b;
}
console.log(add(5,3));
console.log(add(5));

// function expression - stored in variale, NOT hoisted
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4,5));

// arrow function with multiple lines
const divide = (a,b) => {
    if(b === 0) return "Cannot divide by zero";
    return a/b;
}
console.log(divide(10,2)); 
console.log(divide(10, 0));

// functions as aargument (callback - intro concept)
function runTwice(fn, value) {
    fn(value);
    fn(value);
}

runTwice(console.log, "Functions are first-class citizens in JS");
