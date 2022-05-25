//Meta Programming
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming

const res = require("express/lib/response")

//Starting with ECMAScript 2015, JavaScript gains support for the Proxy and Reflect objects 
//allowing you to intercept and define custom behavior for fundamental language operations 
//(e.g. property lookup, assignment, enumeration, function invocation, etc). 
//With the help of these two objects you are able to program at the meta level of JavaScript.

//Proxy 1
//Introduced in ECMAScript 6, Proxy objects allow you to intercept certain operations and to implement custom behaviors.
//The Proxy object defines a target (an empty object here) and a handler object, in which a get trap is implemented. 
//Here, an object that is proxied will not return undefined when getting undefined properties, but will instead return the number 42.

let handler = {
    get: function(target, name) {
      return name in target ? target[name] : '[Not Defined]' ///aproxied object will not return undefined when properties are undefined, it will instead return [Not Defined].
    }
  }
  
  //The Proxy object defines a target (an empty object here) and a handler object
  //in which a get trap is implemented. 
  let myCar = new Proxy({}, handler)
  myCar.model= '911'
  console.log('My Car is a:', myCar.model, 'and has', myCar.miles, 'miles.') //My Car is a: 911 and has [Not Defined] miles.

//Proxy 2: Terminologies
//handler - With lowercase. Placeholder object which contains traps.
//traps - The methods that provide property access.
//target - tObject which the proxy virtualizes. 
//It is often used as storage backend for the proxy. 
//Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.
//invariants - Semantics that remain unchanged when implementing custom operations are called invariants. If you violate the invariants of a handler, a TypeError will be thrown.

//handlers 1: handler.getPrototypeOf()
//The handler.getPrototypeOf() method is a trap for the [[GetPrototypeOf]] internal method.

//Porsche911 constructor
function Porsche911 (){
  this.name = '911'
};

//We set the prototype for Porsche911 type
Porsche911.prototype = { make: 'Porsche' };

//This is a ToyotaPrototype object instance
const toyotaPrototype = {
  make: 'Toyota'
};

//We set the handler to intercept the method getPrototypeOf
const handler = {
  getPrototypeOf(target) {
    return toyotaPrototype;
  }
};

//new instance of Porsche911
const my911 = new Porsche911();

//We built a new instance of proxy
const proxy1 = new Proxy(my911, handler);

//Here we print the Porsche911's prototype make and the instance name
console.log(`My car is a ${my911.make} ${my911.name}`); // My car is a Porsche 911

//Here we print the Porsche911's prototype make and the instance name using the proxy object, the proxy does nothing.
console.log(`My car is a ${proxy1.make} ${proxy1.name}`); // My car is a Porsche 911

//When calling Object.getPrototypeOf and passing proxy, his handler intrercepts the call and it returns the toyota prototype
console.log(`My car is a ${Object.getPrototypeOf(proxy1).make} ${proxy1.name}`); //My car is a Toyota 911

// Proxy 3: handler.apply()
// The handler.apply() method is a trap for a function call.
// The target must be a callable itself. That is, it must be a function object.

function printMessage(message) {
  console.log(message);
}

const handler = {
  apply: function(target, thisArg, argumentList) {
    console.log('This was added before printing your message');

    target(argumentList[0]);
  }
}

const proxyFunction = new Proxy(printMessage, handler);


proxyFunction('This is my message'); //This was added before printing your message
                                     //This is my message

// Proxy 4: handler.construct()
// The handler.construct() method is a trap for the new operator. 
// In order for the new operation to be valid on the resulting Proxy object, 
// the target used to initialize the proxy must itself have a [[Construct]] internal method
// On The following example, we'll use a handler to intercept the new Car constructor and make it a Porsche!

function Car(model) {
  this.model = model;
}

const handler1 = {
  construct(target, args) {
    let myResult = new target(...args);
    myResult.make = 'Porsche';

    return myResult;
  }
};

const proxyCar = new Proxy(Car, handler1);

const my911 = new Car('911');
const myPorsche911 = new proxyCar('911');

console.log(my911.make, my911.model); // undefined 911
console.log(myPorsche911.make, myPorsche911.model); //Porsche 911

//Revocable Proxy
//The Proxy.revocable() method is used to create a revocable Proxy object. 
//This means that the proxy can be revoked via the function revoke and switches the proxy off.
//Afterwards, any operation on the proxy leads to a TypeError.

let revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return 'Property Name: ' + name;
  }
});

let proxy = revocable.proxy;
console.log(proxy.carModelName)  // Property Name: carModelName

revocable.revoke();

console.log(proxy.carModelName);  // TypeError is thrown
proxy.carModelName = 'Cayman';  // TypeError again
delete proxy.foo;        // still TypeError
typeof proxy;            // "object", typeof doesn't trigger any trap


//Reflection: Intro
//Reflect is a built-in object that provides methods for interceptable JavaScript operations. T
//he methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.
//Unlike most global objects, Reflect is not a constructor. 
//You cannot use it with a new operator or invoke the Reflect object as a function. 
//All properties and methods of Reflect are static (just like the Math object).
//Reflect static functions have the same names as the proxy handler methods.
//Some of these methods are also the same as corresponding methods on Object, although they do have some subtle differences between them.

//Reflection 1: has method
//Detecting whether an object contains certain properties

const porsche911 = {
  make: 'Porsche',
  name: '911',
  displayName: function() {
    console.log(`${this.make} ${this.name}`);
  }
}

let hasMake = Reflect.has(porsche911, 'make'); 
let hasCylinders = Reflect.has(porsche911, 'cylinders');

console.log(hasMake); //true
console.log(hasCylinders); //false

//Reflection 2: ownKeys method
//Returning the object's own keys

const porsche911 = {
  make: 'Porsche',
  name: '911',
  displayName: function() {
    console.log(`${this.make} ${this.name}`);
  }
}

let keys = Reflect.ownKeys(porsche911);
console.log(keys); //[ 'make', 'name', 'displayName' ]

//Reflection 3: set method
//Adding a new property to the object

const porsche911 = {
  make: 'Porsche',
  name: '911',
  displayName: function() {
    console.log(`${this.make} ${this.name}`);
  }
}

Reflect.set(porsche911, 'cylinders', 6);
console.log(porsche911);

// {
//   make: 'Porsche',
//   name: '911',
//   displayName: [Function: displayName],
//   cylinders: 6
// }

//Reflection 4: apply method
//calls a target function with arguments as specified.

const porsche911 = {
  make: 'Porsche',
  name: '911',
  displayName: function(modelType) {
    console.log(`${this.make} ${this.name} ${modelType}`);
  }
}

//args of apply should be: pointer to a function, the value of "this" used by the function, the arguments passed to a function in the form of an array 
Reflect.apply(porsche911.displayName, porsche911, ['GT2RS']); //Porsche 911 GT2RS

//Reflect 5: construct method
//Creating a new object and overriding its prototype by passing the 'newTarget' argument.

function car(name) {
  this.name = name;
}

function sportsCar(name) {
  this.name = name;
}

const porscheProto = {
  make: 'Porsche'
}
sportsCar.prototype = porscheProto;

let myCar1 = new car('Tacoma');
console.log(myCar1); //car { name: 'Tacoma' }
console.log(Object.getPrototypeOf(myCar1)); //{}

let myCar2 = Reflect.construct(car, ['Cayman GT4'], sportsCar);
console.log(myCar2); //{ name: 'Cayman GT4' }
console.log(Object.getPrototypeOf(myCar2)); //{ make: 'Porsche' }
console.log(myCar2.make, myCar2.name); //Porsche Cayman GT4

//Reflect 6: defineProperty()
//The static Reflect.defineProperty() method is like Object.defineProperty() but returns a Boolean.
//Note: Object.defineProperty returns the object or throws a TypeError if the property has not been successfully defined. 
//Reflect.defineProperty, however, returns a Boolean indicating whether or not the property was successfully defined.

let myPorsche = {
  name: '911'
}
var result = Reflect.defineProperty(myPorsche, 'make', {value: 'Porsche'});

console.log(result); //true
console.log(myPorsche);  //{ name: '911' } I'm not sure why the object doesn't print make as well, only the original name.
console.log(myPorsche.make);  //Porsche
console.log(Reflect.ownKeys(myPorsche)); //[ 'name', 'make' ]

//Reflect 7: deleteProperty()
//The static Reflect.deleteProperty() method allows to delete properties. 
//It is like the delete operator as a function.

let myPorsche = {
  name: 'Cayman',
  make: 'Porsche',
  numberOfSeats: '4'
}

let result = Reflect.deleteProperty(myPorsche, 'numberOfSeats');
console.log(result); //true
console.log(myPorsche); //{ name: 'Cayman', make: 'Porsche' }

//Reflect 8: The static Reflect.get() method works like 
//getting a property from an object (target[propertyKey]) as a function.

const myPorsche = {
  name: 'Cayman',
  make: 'Porsche'
};

let result = console.log(Reflect.get(myPorsche, 'make')); //Porsche

//Reflect 9: Reflect.getOwnPropertyDescriptor()
//Similar to Object.getOwnPropertyDescriptor(). 
//It returns a property descriptor of the given property if it exists on the object, undefined otherwise.

const object1 = {
  make: 'Porsche'
};

console.log(Reflect.getOwnPropertyDescriptor(object1, 'make'));
// {
//   value: 'Porsche',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//Reflect 10: Reflect.isExtensible()
//The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). 
//It is similar to Object.isExtensible(), but with some differences.

const object1 = {};

console.log(Reflect.isExtensible(object1)); //true

Reflect.preventExtensions(object1); //Prevents the addition of new properties to an object.

console.log(Reflect.isExtensible(object1)); //false

const object2 = Object.seal({}); //Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

console.log(Reflect.isExtensible(object2)); //false








