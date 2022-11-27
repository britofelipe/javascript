function myFunction(param){
    // ...
} // listed on top

// Another way to write functions

const sum = function(num1, num2) {return num1 + num2}

// console.log(sum(1,1));

// ARROW FUNCTION
const greetingArrowFunction = name => `My name is ${name}`;
const sumArrowFunction = (num1, num2) => num1 + num2;

// multiple lines
const sumSmallNumers = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return -1;
    } else {
        return num1 + num2;
    }
}

console.log(sumSmallNumers(1,2))