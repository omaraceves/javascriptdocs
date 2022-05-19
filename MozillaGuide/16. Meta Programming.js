//Meta Programming
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming

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





