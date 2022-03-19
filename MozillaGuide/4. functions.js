//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

//Hello world
function Hello (){
    console.log("Hello world");

}

//execution
Hello();

//Function Expression
//While the function declaration in Hello above is syntactically a statement, 
//functions can also be created by a function expression.
const square = function (number) { return number * number };
var x = square(4);
console.log(x); //16

//Function Expression 2
//A name can be privided with a function expression. 
//Providing the name allows the function to refer to itself and engage in recursion.
const factorial = function fact(n) { return n < 2 ? 1 : n * fact(n - 1) }
console.log(factorial(3)) //6

//Function Expression 3
//Function expressions are convenient when passing a function as an argument to another function.
function map(f, a) {
    let result = []; 
    let i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);

//Calling Functions 1
//Functions must be in scope when they are called, 
//but the function declaration can be hoisted (appear below the call in the code), as in this example:
console.log(square(5));
/* ... */
function square(n) { return n * n }

//Calling Functions 2
//Function hoisting only works with function declarations—not with function expressions.
console.log(square)    // square is hoisted with an initial value undefined.
console.log(square(5)) // Uncaught TypeError: square is not a function
const square = function(n) {
  return n * n;
}

//Recursion
//It is possible to convert any recursive algorithm to a non-recursive one, 
//but the logic is often much more complex, and doing so requires the use of a stack. 
//In fact, recursion itself uses a stack: the function stack. 
//The stack-like behavior can be seen in the following example:
function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
  foo(3);
  
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0
  // end: 1
  // end: 2
  // end: 3

//Function arguments[i] 1
//The arguments of a function are maintained in an array-like object. 
//Note: The arguments variable is "array-like", but not an array. 
//It is array-like in that it has a numbered index and a length property. 
//However, it does not possess all of the array-manipulation methods.

function myConcat(separator) {
    var result = ''; //Initialize list
    var i;
    //Iterate trhough arguments
    for(i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }

    return result;
}

var colors = myConcat('. ', 'red', 'white', 'blue');
console.log(colors); //red. white. blue. 


//Function arguments[i] 2
//arguments seem to be like a function property, it is there, even if you don't define any params.
function printSecondArg() {
    console.log(arguments[1]);
}

printSecondArg("first", "second", "third"); //second

//Default params 1
//In JavaScript, parameters of functions default to undefined
//This is pre-ECMAScript 2015

function printSecondArg(a, b) {
    b = typeof b !== 'undefined' ?  b : "default";

    console.log(b);
}

printSecondArg("a"); //default

//Default params 2
//Post ECMAScript 2015 it is no longer necessary to do the manual check

function printSecondArg(a, b = "default") {
    console.log(b);
}

printSecondArg("a"); //default

//Rest parameters 1
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


function myElementConcat(addition, ...theArgs)
{
    //myElementConcat concats addition param to each element of theArgs
    return theArgs.map(x => x + addition);
}

var result = myElementConcat(".", "red", "white", "blue");
console.log(result); //[ 'red.', 'white.', 'blue.' ]

//Rest parameters 2
//Note that the intention is to pass these params separetly, the function will do the work of allocating these params into "...theArgs" array

function myToArray(...theArgs)
{
    return theArgs;
}

var result = myToArray(1, 2, 3, "cuatro", "cinco");
console.log(result); //[ 1, 2, 3, 'cuatro', 'cinco' ]

//Arrow functions 1
//An arrow function expression has a shorter syntax compared to function expressions.
//It does not have its own this, arguments, super, or new.target. 
//Arrow functions are always anonymous.
var a = [
    'red',
    'white',
    'blue',
  ];

var a2 = a.map( function(s) { 
    return s.length; 
});
console.log(a2); //[ 3, 5, 4 ]

//Shorter functions are welcome: 
var a3 = a.map(s => s.length);
console.log(a3); //[ 3, 5, 4 ]

//Arrow functions 2
//In Arrow functions 1 we can see there's no return in a.map(s => s.length).
//When there's only one line in an arrow function 'return' keyword is not used.
//When an arrow function has more than 1 line, return must be used when needed.

const sum2Numbers = (a, b) => {
    let result = a + b;
    return result;
}

console.log(sum2Numbers(1, 2)); //3

//Arrow functions 3
//No separate this
//Until arrow functions, every new function defined its own 'this' value

function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
    
    const growUp = function(years) {
        // In nonstrict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age+=10;
    }

    growUp(10);
}
  
const p = new Person();
console.log(p.age); //0

//An arrow function does not have its own this; 
//the this value of the enclosing execution context is used. 
//Thus, in the following code, the 'this' within the function growUp
//has the same value as this in the enclosing function:

function Person() {
    this.age = 0;
  
    const growUp = (years) => this.age += years;
    growUp(10);
    
  }
  
const p = new Person();
console.log(p.age); //10








