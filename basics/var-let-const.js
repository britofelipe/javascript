// Var

var height = 5;
var width = 10;

area = height * width; 
console.log(area);

var area; // Declare later

// Let
let shape = 'rectangle';
let height2 = 5;
let width2 = 10;
let area2;

if (shape === 'rectangle') {
    area2 = height * width; 
}
if (shape === 'triangle') {
    area2 = (height * width) / 2;   
}

console.log(area2);

// Const
const shape3 = 'triangle'
const height3 = 5;
const width3 = 10;

// const area3 = area3 = (height * width) / 2;
// const area3; //error

if (shape === 'rectangle') {
    const area3 = height * width; 
}
if (shape === 'triangle') {
    const area3 = (height * width) / 2;   
}

// console.log(area3); // error

// Truthy or Falsy
console.log(0 == false); //true -> falsy
console.log("" == false); //true -> falsy
console.log(0 === false); //false
console.log("" == false); //false

let number = 3;
let text = "Javascript"

// Null is an object
console.log(typeof number);
console.log(typeof text);
console.log(typeof null);
console.log(typeof undefined);

// Implicit conversion
const numberNumber = 456;
const numberString = "456";

console.log(numberNumber == numberString);
console.log(numberNumber === numberString);

console.log(numberNumber + numberString); // Concatanation

// Explicit conversion
console.log(numberNumber + Number(numberString)); 

// Dynamic typing

var dynamic = 123;
console.log(dynamic);
dynamic = "john";
console.log(dynamic);
dynamic = false;
console.log(dynamic);