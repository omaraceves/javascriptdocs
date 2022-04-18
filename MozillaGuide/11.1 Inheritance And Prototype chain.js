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




