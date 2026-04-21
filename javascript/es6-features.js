// 1. var

var city = "London";
var city = "Paris"; // re-declaration allowed - no error (bad!)
city = "Tokyo"; // re-assignment allowed
console.log(city);

// var leaks oout of block scope
if(true) {
    var leaked = "leaked var";
}
console.log(leaked); // accessible - this is the problem with var

// 2. let

let score = 10; 
score = 20; // re-assignment allowed
// let score = 30; // ERROR - re-declaration not allowed in same scope
console.log(score);

if(true){
    let blockvar = "Inside block only";
    console.log(blockvar); // works
}
// console.log(blockvar); // ERROR - not accesible outside block

// 3. coonst

const PI = 3.14159;
// PI = 3; // ERROR - cannot re-assign const
console.log(PI);

// const with objects - reference is fixed, contents can change
const person = {name:"Alice", age: 25};
person.age = 26; // allowed - mutating the object, not re-assigning
// person = {}; // ERROR - re-assigning the reference
console.log(person); 

// const with arrays
const colors = ["red", "green"];
colors.push("blue"); // allowed - mutating the array
console.log(colors); 

// 4. template literals

const firstName = "Sristi";
const age = 25;

// old way - concatenation
console.log("Hello "+ firstName + ", you are " + age + " years old");

// ES6 template literal - cleaner
console.log(`Hello ${firstName}, you are ${age} years old.`);

// expression inside ${}
console.log(`Next year you will be ${age + 1}`);

// multi-line string
const multiline = `Line one
Line two
Line three`;
console.log(multiline);

// 5. Arrow functions

// regular function
function addRegular(a,b) {
    return a+b;
}

// arrorw function - same thing, shorter
const addArrow = (a,b) => a+b; // single expression, return implicit

// arrow with one param - no paranes needed
const double = n => n *2;

// arror with body
const greet = (hello) => {
    const message = `Hello, ${hello}!`;
    return message;
};

console.log(addRegular(3, 4));           
console.log(addArrow(3, 4));             
console.log(double(5));                  
console.log(greet("Sristi"));        

// 6. default parameters

const welcome = (name = "Guet", role = "User") => {
    return `Welcome, ${name}! Role: ${role}`;
};

console.log(welcome("Alice", "Admin"));
console.log(welcome("Bob"));         
console.log(welcome());     

// 7. rest parameters

const sumAll = (...numbers) => {
    return numbers.reduce((total, n) => total + n, 0);
};

console.log(sumAll(1,2,3));
console.log(sumAll(10,20,30,40));

// rest with other params - rest must be last
const logInfo = (label, ...values) => {
    console.log(`${label}:`, values);
};
logInfo("scores", 90,85,92,78);

// 8. spread operator
