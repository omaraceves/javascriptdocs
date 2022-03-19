//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types 

//Grammar 1
//JavaScript is case-sensitive and uses the Unicode character set. 
//For example, the word Niño (which means "Kid" in Spanish) could be used as a variable name.

//Javascript is case sensitive!
var Niño = "Omar";
var niño = "joe";
console.log(Niño); //Omar
console.log(niño); //joe


//Variables 1
//A variable declared using the var or let statement 
//with no assigned value specified has the value of undefined.
var a;
console.log('The value of a is ' + a); // The value of a is undefined

//Variables 2
//You can use undefined to determine whether a variable has a value. 
//In the following code, the variable input is not assigned a value, and the if statement evaluates to true.
var input;
if (input === undefined) {
  console.log('Do this');
} else {
    console.log('Do that');
} //Do this

//Variables 3
//The undefined value behaves as false when used in a boolean context.
var input;
if (input) {
  console.log('Do this');
} else {
    console.log('Do that');
} //Do that

//Variables 4
//The undefined value converts to NaN when used in numeric context.
var input;
console.log(input + 2) //NaN

//Variables 5
//When you evaluate a null variable, 
//the null value behaves as 0 in numeric contexts and as false in boolean contexts.
var input = null;
if (input) {
  console.log('Do this');
} else {
    console.log(2 * input);
} //0

//Variable scope 1
//JavaScript before ECMAScript 2015 does not have block statement scope.
if (true) {
    var x = 5;
    console.log(x); //5
}

//Even when the variable were created within a different block scope, we can access it
console.log(x);  //5

//Variable scope 2
//This behavior changes when using the let declaration (introduced in ECMAScript 2015).
if (true) {
    let x = 5;
    console.log(x); //5
}
console.log(x);  //ReferenceError: x is not defined

//Variable Hoisting 1
//Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. 
//However, variables that are hoisted return a value of undefined. 
//So even if you declare and initialize after you use or refer to this variable, it still returns undefined.

console.log(x === undefined); // true
console.log(y === undefined); // ReferenceError: y is not defined
var x = 3; //The declaration of this variable will be lifted to the beginning of the script. 
           //Since y is never declared on the code, there is no declaration to lift 
           //so when calling y there will be a reference error.

//Variable Hoisting 2
//In the following example we declare the variable myvar.
//Thanks to localized context, when we define myvar inside a function, 
//the context of the function completely ignores the myvar declaration outside the function.
//however thanks to variable hoisting the output will be: undefined.

var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';

console.log(myvar);

//the example above it is similar to have:
var myvar = 'my value';

(function() {
  var myvar; //here myvar is declared.
  console.log(myvar); // undefined
  myvar = 'local value';
})();

console.log(myvar);

//Variable hoisting 3
//In ECMAScript 2015 let and const are hoisted but not initialized
//Calling a variable before declaration results in ReferenceError: Cannot access 'myvar' before initialization
//The variable exists, but it is kind of in a dead zone.

console.log(myvar); //ReferenceError: Cannot access 'myvar' before initialization
let myvar = "I exist";

//Function hoisting 1
//Function declarations are hoisted
//Meaning if you call a function before is being declared, it will work

foo(); //bar

function foo() {
  console.log("bar");
}

//Function hoisting 2
//Function expressioons are NOT hoisted
//Meaning if you call a function expression before is being declared, it WON'T work

foo(); //TypeError: foo is not a function

var foo = function() {
  console.log("bar");
}


//Function hoisting 3
//In the example above, we used var with the function expression
//When we use const or let, the error message is different 
//However the end result is the same

foo2(); //ReferenceError: Cannot access 'foo2' before initialization

const foo2 = function() {
  console.log("bar2");
}

//Constants 1
//You cannot declare a constant with the same name as a function or variable in the same scope. 

// SyntaxError: Identifier 'f' has already been declared
function f() {};
const f = 5;
console.log(f) //error

// SyntaxError: Identifier 'g' has already been declared
function f() {
  const g = 5;
  var g;
  console.log(g);
}

//Constants 2
//You cannot re assign a value to a constant

//TypeError: Assignment to constant variable.
const myvar = 4;
myvar = 3;
console.log(myvar); //TypeError: Assignment to constant variable.

//Constants 3
//The properties of objects assigned to constants are NOT protected.
//You can re-assign values to these properties.

const MY_OBJECT = {'key' : 'value'};
MY_OBJECT.key = 'other value';
console.log(MY_OBJECT); //{ key: 'other value' }

//Constants 4
//The contents of an array declared as a constant are NOT protected.
//You can add or remove content from the array

const MY_ARRAY = ['red', 'white', 'black'];
MY_ARRAY.pop();
MY_ARRAY.push('blue');
console.log(MY_ARRAY); //[ 'red', 'white', 'blue' ]

//Data types 1
//The latest ECMAScript standard defines eight data types

var myUndefined; // A top-level property whose value is not defined.
var myBool = false; //true and false.
var myNumber = 5; //An integer or floating point number. 
var myBigNumber = 9007199254740992n; // An integer with arbitrary precision. 
var myString = "hello" //A sequence of characters that represent a text value.
var myNull = null; //A special keyword denoting a null value. 
var mySumbol = Symbol("Symbol") //(new in ECMAScript 2015). A data type whose instances are unique and immutable.
var myObject = {'key': 'value'}; //In JavaScript, objects can be seen as a collection of properties. 

//Data type conversion 1
//JavaScript is a dynamically typed language. 
//This means you don't have to specify the data type of a variable when you declare it. 
//It also means that data types are automatically converted as-needed during script execution.

var answer = 42;
console.log(answer); //42
answer = "To get to drive a Porsche every day";
console.log(answer); //To get to drive a Porsche every day

//Data type conversion 2
//In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.

var x = 'The answer is ' + 42 
console.log(x); // "The answer is 42"
var y = 42 + ' is the answer' // "42 is the answer"
console.log(y);

//Data type conversion 3
//With all other operators, JavaScript does not convert numeric values to strings.

var x = '37' - 7
console.log(x); //30
var y = '37' + 7
console.log(y); //377

//Converting strings to numbers 1
//In the case that a value representing a number is in memory as a string, there are methods for conversion.
//parseInt()
//parseFloat()
//parseInt only returns whole numbers, so its use is diminished for decimals.

var myString = '4.555';
var myInt = parseInt(myString, 10);
var myDecimal = parseFloat(myString);
console.log(myInt); //4
console.log(myDecimal); //4.555

//Converting strings to numbers 1
//parseInt() supports a second paramater for radix.
//With this parameter you can set the numerical base of the conversion
//In the following example we convert a string to its binary number value.

var myString =  ('0101');
var number = parseInt(myString, 2);
console.log(number); //5

//Array literals 1
//An array literal is a list of zero or more expressions, 
//each of which represents an array element, enclosed in square brackets ([]).

let coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(coffees); //[ 'French Roast', 'Colombian', 'Kona' ]

//Array literals 2
//You do not have to specify all elements in an array literal. 
//If you put two commas in a row, the array fills in the value '<1 empty item>' for the unspecified elements.
//However '<1 empty item>' ultimately represents undefined.
//The following examples represent a similar array value

let fish = ['Lion', , 'Angel'];
let fish2 = ['Lion', undefined, 'Angel'];
console.log(fish); // [ 'Lion', <1 empty item>, 'Angel' ];
console.log(fish2); //[ 'Lion', undefined, 'Angel' ];
console.log(fish.pop()); //Angel
console.log(fish2.pop()); //Angel
console.log(fish.pop()); //undefined
console.log(fish2.pop()); //undefined

//Array literals 3
//Trailing commas will be ignored unless your browser is super old. 
//It is a good practice to pursue the elimination of all trailing commas.

let fish = ['Lion', , 'Angel',]; //theres a trailing comma here
let fish2 = ['Lion', undefined, 'Angel'];
console.log(fish.length); // 3
console.log(fish2.length); // 3

//Boolean literals 1
//Boolean literals are true or false.
//Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.
//Any object of which the value is not undefined or null, 
//including a Boolean object whose value is false, 
//evaluates to true when passed to a conditional statement. 

var x = new Boolean(false);
if (x) {
  console.log('This code is executed'); //This code is executed
}

var x = false;
if (x) {
  console.log('This code is not xecuted'); //This code is not executed
}

//Integer literals 1
//Integer and BigInt literals can be written in decimal (base 10), 
//hexadecimal (base 16), octal (base 8) and binary (base 2).

//A decimal integer literal is a sequence of digits without a leading 0 (zero).
console.log(10); //10

//Leading 0 (zero) on an integer literal, or a leading 0o (or 0O) indicates it is in octal. 
//Octal integer literals can include only the digits 0–7
console.log(0010); //8

//A leading 0x (or 0X) indicates a hexadecimal integer literal. 
//Hexadecimal integers can include digits (0–9) and the letters a–f and A–F.
console.log(0xF); //15

//A leading 0b (or 0B) indicates a binary integer literal. 
//Binary integer literals can only include the digits 0 and 1.
console.log(0b0101); //5

//A trailing n suffix on an integer literal indicates a BigInt literal. 
//The integer literal can use any of the above bases. 
//Note that leading-zero octal syntax like 0123n is not allowed, but 0o123n is fine.
console.log(0010n); //SyntaxError: Invalid or unexpected token
console.log(0o010n); //8n

//Floating point literals 1
//A floating-point literal must have at least one digit, and either a decimal point or "e" (or "E").
//More succinctly, the syntax is: [digits].[digits][(E|e)[(+|-)]digits]

console.log(3.1415926); //3.1415926
console.log(.123456789); //0.123456789
console.log(100e-4); //.01
console.log(100e+4); //1000000

//Object literals 1
//An object literal is a list of zero or more pairs of property names and associated values of an object, 
//enclosed in curly braces ({}).
//You can assign literals, functions or variables to the values of an object properties:

var myVar = 'Toyota';

function myFunction(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we do like " + name + ".";
  }
}

var car = { myCar: 'Porsche', carIDontLike: myFunction('Honda'), carILike: myVar };

console.log(car.myCar);   // Saturn
console.log(car.carIDontLike);  // Honda
console.log(car.carILike); // Toyota

//Object literals 2
//You can use a numeric or string literal for the name of a property or nest an object inside another. 

var car = { myCars: {a: 'Porsche', b: 'Toyota'}, 7: 'Mazda' };
console.log(car.myCars.a) //Porsche
console.log(car.myCars.b) //Toyota
console.log(car[7]) //Mazda

//Enhanced Object literals 1
//In ES2015 Object Literals gained superpowers.
//Simpler syntax to include variables

//Instead of doing
const brand = 'Porsche';
const car = {brand : brand};
console.log(car.brand); //Porsche

//You can do
const brand = 'Porsche';
const car = {brand};
console.log(car.brand); //Porsche

//Enhanced Object literals 2
//In ES2015 Object Literals include a simplified way to add methods.

const myObject = {
  carBrand: 'Porsche',
  getCarBrand() {
    return this.carBrand;
  }
};
console.log(myObject.getCarBrand()); //Porsche


//Enhanced Object literals 3
//ES2015 also added a way to have inheritance in JS objects
//__proto__ is a way to inherit properties from an object in JavaScript.

const myObject = {
  carBrand: 'Porsche',
  getCarBrand: function(){
    return this.carBrand;
  }
};
console.log(myObject.getCarBrand()) //Porsche

const myObjectChild = {
  __proto__: myObject
};
console.log(myObjectChild.getCarBrand()); //Porsche

//Enhanced Object literals 4
//Continuing with ES2015 inheritance addition
//super() allows you call the the parent method when it was overriden
//be aware super is only valid inside methods.

const myObject = {
  carBrand: 'Porsche',
  getCarBrand: function() {
    return this.carBrand;
  }
};
console.log(myObject.getCarBrand()) //Porsche

const mySpecializedObject = {
  __proto__: myObject,
  getCarName() {
    return super.getCarBrand() + ' ' + 'Cayman 718';
  }
};
console.log(mySpecializedObject.getCarName()) //Porsche Cayman 718


//Enhanced Object literals 5
//super word can only being used on a 'method'
//JS considers a method the function inside an object with the syntax:
// functionName() { }

const myObject = {
  carBrand: 'Porsche',
  getCarBrand: function() {
    return this.carBrand;
  }
};
console.log(myObject.getCarBrand()) //Porsche

const mySpecializedObject = {
  __proto__: myObject,
  //The following won't work.
  getCarName: () => {
    return super.getCarBrand() + ' ' + 'Cayman 718';
  } 
};
console.log(mySpecializedObject.getCarName()) //SyntaxError: 'super' keyword unexpected here

const mySpecializedObject2 = {
  __proto__: myObject,
  //This won't work either
  getCarName: function() {
    return super.getCarBrand() + ' ' + 'Cayman 718';
  } 
};
console.log(mySpecializedObject2.getCarName()) //SyntaxError: 'super' keyword unexpected here

//Enhanced Object literals 6
//Note that super will only work within method declarations.
//But it can reference function expressions without problem
//Assigning an arrow function to a property seems to be problematic.

const myObject = {
  carBrand: 'Porsche',
  carModel: 'Cayman 718',
  getCarBrand: function() {
    return this.carBrand;
  },
  getCarModel: () => {
    this.carBrand;
  }
};
console.log(myObject.getCarBrand());
console.log(myObject.getCarModel());

const mySpecializedObject = {
  __proto__: myObject,
  getCarName() {
    return super.getCarBrand() + ' ' + super.getCarModel();
  } 
};
console.log(mySpecializedObject.getCarName()) //SyntaxError: 'super' keyword unexpected here


//Enhanced Object literals 7
//Dynamic properties
//ES2015 introduced the ability to crete object property names dynamically using brackets

const brand = 'Porsche'
var myObject = {
  ['my' + brand] : "Cayman 718"
};
console.log(myObject.myPorsche);//Cayman 718


//RegExp literals 1
//It's a pattern enclosed between slashes
//We'll be covering only literals in this example. 
//Regular expressions will be covered in another file

var re = /ab+c/;
console.log(re); // /ab+c/

//String literals 1
//A string literal is zero or more characters enclosed in double (") or single (') quotation marks.
//A string must be delimited by quotation marks of the same type

var myString1 = 'foo';
var myString2 = "John's cat";
console.log(myString1); //foo
console.log(myString2); //John's cat

//String literals 2
//You can call any of the String object's methods on a string literal value.
//JavaScript automatically converts the string literal to a temporary String object, 
//calls the method, then discards the temporary String object. 
//You can also use the String.length property with a string literal

var myString = "Porsche";
console.log(myString.length); //7
console.log(myString.charAt(0)); //P

//String literals 3
//Template literals are also available. 
//Template literals are enclosed by the back-tick (`) 
//This is similar to string interpolation features in Perl, Python, and more.

// Basic literal string creation
var myString1 = `In JavaScript '\n' is a line-feed.` 
console.log(myString1); //In JavaScript '
                        //' is a line-feed.

// Multiline strings
var myString2 = `In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`
console.log(myString2); //In JavaScript, template strings can run
                        //over multiple lines, but double and single
                        //quoted strings cannot.

// String interpolation
var brand  = 'Toyota'; 
var model = 'Celica';
var myString3 = `My ${brand} ${model} is looking good!`
console.log(myString3); //My Toyota Celica is looking good!

//String literals 3
//Tagged templates are a compact syntax for specifying a template literal 
//along with a call to a “tag” function for parsing it;
//I don't fully understand how this works maybe I require to do another example. But for now I'll leave it there.

let myTag = (str, brand, model) => `${str[0]}${brand} ${model}${str[1]} ${str[2]}`
let [brand, model] = ['Porsche', 'Cayman 718'];
let myString = myTag`My ${brand}${model}is looking good!`;
console.log(myString); //My Porsche Cayman 718 is looking good!

//String literals 4
//Using special characters
//you can also include special characters in strings
//Lets see an example with the backslash char represented as '\\'

//c:\\temp
let path = 'c:\\\\temp';
console.log(path);//c:\\temp













