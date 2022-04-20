//Inhertiance and the prototype chain
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

//JavaScript is dynamic and does not provide a class implementation per se. 
//The class keyword is introduced in ES2015, but is syntactical sugar. 
//JavaScript is and remains prototype-based.
//This can be a bit confusing for class-based languages (C#, Java) developers.

//Inheritance prototype chain
//When it comes to inheritance, JavaScript only has one construct: objects. 
//Each object has a private property which holds a link to another object called its prototype. 
//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 
//By definition, null has no prototype, and acts as the final link in this prototype chain.
//Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.

function Porsche(name) {
    this.name = name;
    this.displayProtoype = function () {
        console.log(Object.getPrototypeOf(this))
    }
    this.displayProtoypeOfPrototype = function () {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getPrototypeOf(proto));
    }
}

const myPorsche = new Porsche('911');

console.log(myPorsche); //Porsche { name: '911', displayProtoype: [Function (anonymous)] }
myPorsche.displayProtoype(); //{} - Prototype of our myPorsche object is an empty object
myPorsche.displayProtoypeOfPrototype(); //[Object: null prototype] {} - The parent of myPorsche object is an empty object and the parent of this empty object is null,
//thus representing the end of the prototype inheritance chain. 

//Inheriting properties
//JavaScript objects are dynamic "bags" of properties. JavaScript objects have a link to a prototype object. 
//When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, 
//the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

const baseCayman = { engine: 'Boxer Engine'};
const gtsCayman = { wheels: '20 "', transmission: 'PDK'};

console.log(gtsCayman.engine); //undefined

Object.setPrototypeOf(gtsCayman, baseCayman); //baseCayman is now the base prototype object

console.log(gtsCayman.engine); //Boxer Engine

//Prototypes and ECMAScript standard
//Since ECMAScript 2015, the [[Prototype]] is accessed using the accessors Object.getPrototypeOf() and Object.setPrototypeOf().
//This is equivalent to the JavaScript property __proto__ which is non-standard but de-facto implemented by many browsers.

const baseCayman = { engine: 'Boxer Engine'};
const gtsCayman = { wheels: '20 "', transmission: 'PDK', __proto__: baseCayman};

console.log(gtsCayman.engine); //Boxer Engine

//Inheriting methods
//JavaScript does not have "methods" in the form that class-based languages define them. 
//In JavaScript, any function can be added to an object in the form of a property. 

const baseCayman = { 
    engine: 'Boxer Engine', 
    displayMake: function () {
        console.log("Porsche");
    }};
const gtsCayman = { wheels: '20 "', transmission: 'PDK'};

Object.setPrototypeOf(gtsCayman, baseCayman); //baseCayman is now the base prototype object

gtsCayman.displayMake(); //Porsche

//Inheriting methods 2: Override
//n inherited function acts just as any other property, 
//including property shadowing (in this case, a form of method overriding).


const baseCayman = { 
    engine: 'Boxer Engine', 
    displayMake: function () {
        console.log("Porsche");
    }};
const gtsCayman = { 
    wheels: '20 "', 
    transmission: 'PDK',
    displayMake: function () {
        console.log("My make is Porsche."); //We are overriding displayMake
    }
};

Object.setPrototypeOf(gtsCayman, baseCayman); //baseCayman is now the base prototype object

gtsCayman.displayMake(); //My make is Porsche.

// Using prototypes in Javascript 1
//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property.

function doSomething() {}
console.log( doSomething.prototype );

//Running the code above in a browser console results in:

// {
//     constructor: ƒ doSomething(),
//     __proto__: {
//       constructor: ƒ Object(),
//       hasOwnProperty: ƒ hasOwnProperty(),
//       isPrototypeOf: ƒ isPrototypeOf(),
//       propertyIsEnumerable: ƒ propertyIsEnumerable(),
//       toLocaleString: ƒ toLocaleString(),
//       toString: ƒ toString(),
//       valueOf: ƒ valueOf()
//     }
// }

const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);


//Running the code above in a browser console results in:

// undefined

//Objects created with syntax constructs 1: Object initializer
// myPorsche has Object.prototype as its [[Prototype]] or __proto__
// myPorsche does not define 'hasOwnProperty'
// hasOwnProperty is a property that belongs to Object.prototype.
// myPorsche inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.

const myPorsche = {name: '718 Cayman'};

console.log(myPorsche.hasOwnProperty); //[Function: hasOwnProperty]
console.log(myPorsche.__proto__); //[Object: null prototype] {}
console.log(myPorsche.__proto__.__proto__); //null

//For this example the prototype chain looks like:
// myPorsche ---> Object.prototype ---> null

//Objects created with syntax constructs 2: Arrays and the prototype chain
// Arrays inherit from Array.prototype which contains methods such as
// indexOf, forEach, etc.

const porsches = ['Cayman', '911', 'Panamera'];

console.log(porsches); //[ 'Cayman', '911', 'Panamera' ]
console.log(porsches.__proto__); //Object(0) []
console.log(porsches.__proto__.__proto__); //[Object: null prototype] {}
console.log(porsches.__proto__.__proto__.__proto__); //null

//For this example the prototype chain looks like:
// porsches ---> Array.prototype ---> Object.prototype ---> null

//Objects created with syntax constructs 2: Functions and the prototype chain
//Functions inherit from Function.prototype which has methods such as call, bind, etc.

function renderPorsche() {
    console.log('A beautiful Porsche 911 appears on the screen');
  }

console.log(renderPorsche); //[Function: renderPorsche]
console.log(renderPorsche.__proto__); //{}
console.log(renderPorsche.__proto__.__proto__); //[Object: null prototype] {}
console.log(renderPorsche.__proto__.__proto__.__proto__); //null

//For this example the prototype chain looks like:
//renderPorsche ---> Function.prototype ---> Object.prototype ---> null

//Objects created with Constructors
//A constructor in JavaScript is just a function that happens to be called with the new operator.

function Cayman() {
    this.Name = 'Cayman';
    this.Make = 'Porsche';
}

const myCayman = new Cayman();

console.log(myCayman); //Cayman { Name: 'Cayman', Make: 'Porsche' }
console.log(myCayman.__proto__); //{}
console.log(myCayman.__proto__.__proto__); //[Object: null prototype] {}
console.log(myCayman.__proto__.__proto__.__proto__); //null

//// myPorsche ---> Cayman.prototype ---> Object.prototype ---> null

//Objects created with Object.create
//ECMAScript 5 introduced a new method: Object.create(). Calling this method creates a new object.
//The prototype of this object is the first argument of the function:

const porcheCar = {make: 'Porsche'}
// porcheCar ---> Object.prototype ---> null

const porsche911 = Object.create(porcheCar);
porsche911.name = '911';

console.log(porsche911); // { name: '911' }
console.log(porsche911.__proto__); // { make: 'Porsche' }
console.log(porsche911.__proto__.__proto__); //[Object: null prototype] {}
console.log(porsche911.__proto__.__proto__.__proto__); //null

//delete Operator with Object.create and new operator
//Using Object.create of another object demonstrates prototypical inheritance with the delete operation

const a = { a: 1 };
const b = Object.create(a);

console.log(a.a); // print 1
console.log(b.a); // print 1
b.a = 5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1 (b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;       // This can also be done via 'delete Object.getPrototypeOf(b).a'
console.log(a.a); // print undefined
console.log(b.a); // print undefined











