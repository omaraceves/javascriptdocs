
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
//Weakly Meaning the content cannot be accessed anymore.
//As such, a WeakMap does not prevent garbage collection, which eventually removes references to the key object and
//allows garbage collection of any values if their key objects are not referenced from somewhere other than a WeakMap
//WeakMap can be a particularly useful construct when mapping keys to information about the key that is valuable only if the key has not been garbage collected.
//But because a WeakMap doesn't allow observing the liveness of its keys, its keys are not enumerable. There is no method to obtain a list of the keys.

//WeakMap is useful to hide encapsulate/hide object data from the public.

const privateValues = new WeakMap(); //WeakMap is defined

function PublicObject() { //Here we are defining class PublicObject
  const privateData = {  //private data is defined but not exposed.
    name: 'omar'
  };
  privateValues.set(this, privateData); //using an instance of PublicObject as key, privateData is stored on privateValues
}

PublicObject.prototype.method = function () {    //Here we are defining a function method for class Public
  const privateData = privateValues.get(this);  //Here we are collecting the privateData from privateValues using a PublicObject instance as key.
  console.log('my name is ' + privateData.name); //We print a piece of information from private data
};

let myObj = new Public();

console.log(myObj.privateData); //undefined - me is not exposed
console.log(privateValues); //WeakMap { <items unknown> } - keys within a WeakMap cannot be observed. You need a key so get its values.
myObj.method(); //my name is omar


//Set Object
//Set objects are collections of values. You can iterate its elements in insertion order. 
//A value in a Set may only occur once; it is unique in the Set's collection.

let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

mySet.add(1); //This will be ignored becuase 1 is already included.

for (let item of mySet) console.log(item);
// 1
// "some text"


//Set Object 2: converting set to array
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
var myArray = [...mySet]; //or Array.from(mySet);

console.log(myArray); //[ 1, 'some text' ]

//Set Obbject 3: converting array to set

mySet = new Set([1, 2, 3, 4]);

console.log(mySet); //Set(4) { 1, 2, 3, 4 }

//Set Object 4: Advantages over arrays:

// -Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
// -Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
// -The value NaN cannot be found with indexOf in an array.
// -Set objects store unique values. You don't have to manually keep track of duplicates.

//WeakSet object
//WeakSet objects are collections of objects. An object in the WeakSet may only occur once. 
//It is unique in the WeakSet's collection, and objects are not enumerable.
//In contrast to Sets, WeakSets are collections of objects only, and not of arbitrary values of any type.
//The WeakSet is weak: References to objects in the collection are held weakly. 
//If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection.
//WeakSets are not enumerable.
//The use cases of WeakSet objects are limited. They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example.



