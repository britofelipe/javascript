// Number
const myNumber = 3;
let firstNumber = 1;
let secondNumber = 2;

const operation = firstNumber + secondNumber;

console.log(operation);

// Float
const floatNumber = 3.3;
const afterComma = .5;

const newOperation = floatNumber / afterComma;
console.log(newOperation);

// NaN -> Not a number

const alura = "Alura";
console.log(alura*firstNumber);

// String
const text1 = "Lorem ipsum"; // double quotes
const text2 = 'Lorem ipsum'; // single quotes
const text3 = "12345678";
const citation1 = "This is a 'quote' inside a string";
const citation2 = 'This is a "quote" inside a string';
console.log(citation1);
console.log(citation2);

const nameJohn = "John"
const phrase = "My name is";
console.log(phrase + nameJohn);

concatanation = phrase + nameJohn;
console.log(concatanation);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// toLowerCase
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// stringLength
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

// Bool
firstNumber = 5;
secondNumber = 5;
console.log(firstNumber === secondNumber) 
// === and !== operators are used in situations where the data type of operands is important for the comparison

// Null and undefined
let test = null;

if (test === null) {
 console.log('There is no information');
} else {
 console.log(test);
}

let input2;

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false