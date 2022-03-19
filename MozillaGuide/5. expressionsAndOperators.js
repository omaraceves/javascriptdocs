
//Expressions and Operators
//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

//Binary operator 1
//JavaScript has both binary and unary operators, 
//and one special ternary operator, the conditional operator.
//A binary operator requires two operands, 
//one before the operator and one after the operator

let x;
let y;

x + y; //operand1 operator operand2
y * x; //operand1 operator operand2

//Unary operator 1
///A unary operator requires a single operand, 
//either before or after the operator
let x;

x++; //operand1 operator
--x; //operator operand1 

//Assigment operators 1: =
//An assignment operator assigns a value to 
//its left operand based on the value of its right operand
//The simple assignment operator is equal (=)

let x;
x = 2 + 4;//x = f() is an assignment expression that assigns the value of f() to x

//Assigment operators 2: Logical nullish ??=
//The logical nullish assignment operator (x ??= y)  
//Only assigns if x is nullish (null or undefined).

const a = { duration: 50 };

a.duration ??= 10; //translates to: if a.duration is null, then assign 10 to it.
console.log(a.duration); //50
console.log(a.speed); //undefined

a.speed ??= 25;
console.log(a.speed); //25


//Assigment operators 3: Addition assignment (+=)
//The addition assignment operator (+=) 
//adds the value of the right operand to a variable and assigns the result to the variable
//The types of the two operands determine the behavior of the addition assignment operator. 
//Addition or concatenation is possible.

var myNumber = 718;
var myString = "Porsche ";

console.log(myNumber += 1)//Addition: 719

console.log(myString += "Cayman")//Concatenation: Porsche Cayman 

//Assigment operators 4: Logical AND assignment (&&=)
//The addition assignment operator (&&=)
//The logical AND assignment (x &&= y) operator only assigns if x is truthy.

let a = 1;
let b = 0;


a &&= 2; //a is truthy
console.log(a);//2

b &&= 2; //b is falsy
console.log(b); //0

//Assigment operators 5: Logical OR assignment (||=)
//The addition assignment operator (||=)
//The logical OR assignment (x ||= y) operator only assigns if x is falsy.

let a = 1;
let b = 0;


a ||= 2; //a is truthy
console.log(a);//1

b ||= 2; //b is falsy
console.log(b); //2

//Assignment to object properties 1
//If a variable refers to an object, 
//then the left-hand side of an assignment expression may make assignments to properties of that variable.

let obj = {};

obj.x = 3;
console.log(obj.x); //3
console.log(obj); //{ x: 3 }

//Destructuring 1
//The destructuring assignment syntax is a JavaScript expression
//it makes it possible to extract data from arrays or objects 
//using a syntax that mirrors the construction of array and object literals

var array = ['red', 'white', 'blue'];

//without destructing
var one = array[0];
var two = array[1];
var three = array[2];

console.log(`${one} - ${two} - ${three} `); //red - white - blue

//with destructing
var [color1, color2, color3] = array;
console.log(`${color1} - ${color2} - ${color3} `); //red - white - blue

//Evaluation and nesting 1
//By chaining or nesting an assignment expression, 
//its result can itself be assigned to another variable.

const f = () => 'Hello world!';

let x;
const y = (x = f()); //// Or equivalently: const y = x = f();
console.log(y); // Hello World!

console.log(x += ' right...'); //Hello world! right...
console.log(x = f()); //Hello world!
console.log([ 0, x = f(), 0 ]); //Assignation inside an array. [ 0, 'Hello world!', 0 ]

const s = (myString) => myString + ' ...right';

console.log(s(x = f())); //Assignation occurring as a paramater is being passed in a function call. Hello world! ...right

//NOTE - It is recommended to avoid assignation chaining at all cost!


//Comparison operators 1
//A comparison operator compares its operands 
//and returns a logical value based on whether the comparison is true.

let a, b; //undefined
if(a == b)
    console.log('They have the same value'); //They have the same value

//Comparison operators 2
//The operands can be numerical, string, logical, or object values

//example 1
var myObject1 = { carName: "718 Cayman"};
var myObject2 = { __proto__: myObject1};

if(myObject1 == myObject2.__proto__)
    console.log('They have the same value'); //They have the same value

//example 2    
var a = 2 + 2;
var b = 5 - 1;

if(a == b)
   console.log('They have the same value'); //They have the same value

//Comparison operators 3
//Strings are compared based on standard lexicographical ordering, using Unicode values. 
//In most cases, if the two operands are not of the same type, 
//JavaScript attempts to convert them to an appropriate type for the comparison. 
//This behavior generally results in comparing the operands numerically.

var var1 = 3;

console.log('3' == 3); //true

//Comparison operator 4: === and !==
//The sole exceptions to type conversion within comparisons involve the === and !== operators, 
//which perform strict equality and inequality comparisons. 
//These operators do not attempt to convert the operands to compatible types before checking equality

var var1 = 3

console.log('3' === 3); //false

console.log('3' !== 3); //true

//Logical operators 1: Logical AND (&&)
//Usage: expr1 && expr2
//Returns expr1 if it can be converted to false; otherwise, returns expr2.
//Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log('Cat' && 'Dog');//Dog

//Logical operators 2: Logical OR (||)
//Usage: expr1 || expr2
//Returns expr1 if it can be converted to true; otherwise, returns expr2.
//Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log('Cat' || 'Dog');//Cat

//Logical operators 3: Logical NOT (!)
//Usage: !expr
//Returns false if its single operand that can be converted to true; otherwise, returns true.

console.log(!true);//false
console.log(!false);//true
console.log(!'Cat');//false

//Logical operators 4: Nullish coalescing operator (??)
//Usage: expr1 ?? expr2
//returns its right-hand side operand when its left-hand side operand is null or undefined, 
//and otherwise returns its left-hand side operand.

console.log(null ?? 'hello world')//hello world


//Logical operators 5: ?? vs ||
//Or operator returns the right side operand when the left operans is falsy.
//This behaviour not occurs with ??, which only returns the right when the left is null or undefined.

console.log(0 ?? 42)//0 becuase 0 is not null or undefined
console.log(0 || 42)//42 because 0 evaluates to false
console.log('' ?? '.')//'' because '' is not null or undefined
console.log('' || '.')//. because '' evaluates to false
console.log(undefined ?? '0')//0 //because undefined is actually undefined
console.log(undefined || '0')//0 //because undefined evaluates to false

//Conditional Ternary Operator 1: (? :)
//Usage condition ? val1 : val2
//If condition evaluates to true then operator will take the value of val1. Otherwise val2.
//The conditional operator is the only one that takes 3 operands.

const myAge = (age) => { 
    return (age >= 18) ? 'adult' : 'minor';
}

console.log(myAge(30));//adult
console.log(myAge(7));//minor

//Unary operators 1: Delete
//The delete operator deletes an object's property.
//If the delete operator succeeds, it removes the property from the object.
//Trying to access it afterwards will yield undefined.
//The delete operator returns true if the operation is possible; 

const myObject = {
    name: "718 Cayman",
    brand: "Porsche"
};

console.log(myObject.name); //718 Cayman
console.log(delete myObject.name) // true
console.log(myObject.name); //undefined

//Unary operators 2: Delete
//Delete returns false if the operation is not possible.

console.log(delete Math.PI); // returns false (cannot delete non-configurable properties)

//Unary operators 3: typeof
//ussage: typeof operand; typeof (operand)
//returns a string indicating the type of the unevaluated operand.

const myFunc = () => {'Hello World!'};
var myString = 'this is a string';
var myNumber = 5;
var myArray = ['red', 'white', 'blue'];
var today = new Date();
var myObject = { name: 'Cayman'};
var myNull = null;
var noExisto;
var myBool = true;

console.log(typeof myFunc);//function
console.log(typeof myString);//string
console.log(typeof myNumber);//number
console.log(typeof today);//object
console.log(typeof myObject);//object
console.log(typeof myNull);//object
console.log(typeof noExisto);//undefined
console.log(typeof myArray);//object
console.log(typeof myBool);//boolean

//Unary operators 4: void
//usage: void (expression); void expression
//The void operator specifies an expression to be evaluated without returning a value. 

const myFunc = () => {
    console.log('Function is executing');//Function is executing
    return 'my result';
}

console.log(void(myFunc()));//undefined
                            

//Relational operators 1: in
//usage: propNameOrNumber in objectName
//where propNameOrNumber is a string, numeric, or symbol expression representing a property name or array index, 
//and objectName is the name of an object.

let myArray = ['red', 'white', 'blue'];

console.log('red' in myArray); //false because 'red' does not represent a property name or array index
console.log(2 in myArray); //true because 2 represents an array index
console.log('length' in myArray); //true because length represents an array property

// built-in objects
console.log('PI' in Math);//true
var myString = new String('coral');
console.log('length' in myString);//returns true

// Custom objects
var mycar = { make: 'Porsche', model: 'Cayman', year: 2017 };
console.log('make' in mycar);  // returns true
console.log('model' in mycar); // returns true
console.log('style' in mycar); // returns false

//Relational operators 2: instanceOf
//usage: objectName instanceof objectType
//The instanceof operator returns true if the specified object is of the specified object type.
//Use instanceof when you need to confirm the type of an object at runtime. For example, 
//when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.

var myArray = ['red', 'white', 'blue'];
var myDate = new Date(1995, 12, 17);

if (myArray instanceof Date) {
    console.log(myArray)
  }
else
  console.log(typeof(myArray)); //object

if (myDate instanceof Date) {
    console.log(myDate) //1996-01-17T08:00:00.000Z
};



