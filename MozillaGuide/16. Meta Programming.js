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

//Continue with examples from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

