
//Keyed Collections
//As seen on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections

//Maps
//ECMAScript 2015 introduces a new data structure to map values to values. 
//A Map object is a simple key/value map and can iterate its elements in insertion order.

let cars = new Map();
cars.set('Porsche', '911 and Cayman');
cars.set('Toyota', 'Prius and Camry');
cars.set('Honda', 'Accord and Civic');

for (let [key, value] of cars) {
    console.log(value + ' vehicles are ' + key);
  }

//   911 and Cayman vehicles are Porsche
//   Prius and Camry vehicles are Toyota
//   Accord and Civic vehicles are Honda

//Maps: length
//It's easy to know the size of a map.

let cars = new Map();
cars.set('Porsche', '911 and Cayman');
cars.set('Toyota', 'Prius and Camry');
cars.set('Honda', 'Accord and Civic');

console.log(cars.size)// 3


//Maps: get and set
//You can retrieve a reference to a value stored in a map using get and a key
let cars = new Map();
cars.set('Porsche', '911 and Cayman');
cars.set('Toyota', 'Prius and Camry');
cars.set('Honda', 'Accord and Civic');

console.log(cars.get('Porsche'))// 911 and Cayman

//Maps: has
//You can wether a key exists on a map

let cars = new Map();
cars.set('Porsche', '911 and Cayman');
cars.set('Toyota', 'Prius and Camry');
cars.set('Honda', 'Accord and Civic');

console.log(cars.has('Honda'))// true

//Maps: delete and clear
//You can delete and element of map based on its key or get rid of all the elements within a map with clear

let cars = new Map();
cars.set('Porsche', '911 and Cayman');
cars.set('Toyota', 'Prius and Camry');
cars.set('Honda', 'Accord and Civic');

cars.delete('Honda');
console.log(cars.size)//2

cars.clear();
console.log(cars.size);//0

//WeakMap
//Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
//In a WeakMap, a key object refers strongly to its contents as long as the key is not garbage collected, but weakly from then on. 
//As such, a WeakMap does not prevent garbage collection, which eventually removes references to the key object and
//allows garbage collection of any values if their key objects are not referenced from somewhere other than a WeakMap
//WeakMap can be a particularly useful construct when mapping keys to information about the key that is valuable only if the key has not been garbage collected.
//But because a WeakMap doesn't allow observing the liveness of its keys, its keys are not enumerable. There is no method to obtain a list of the keys.

const privates = new WeakMap();

function Public() {
  const me = {
    name: 'omar'
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;