//Working with Objects
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

//Objects: introduction
//An object is a collection of properties, and a property is an association between a name (or key) and a value. 
//A property's value can be a function, in which case the property is known as a method.

//Object Properties
//A JavaScript object has properties associated with it. 
//A property of an object can be explained as a variable that is attached to the object.
//You access the properties of an object with a simple dot-notation

const myCar = new Object();
myCar.make = 'Porsche';
myCar.model = '911';
myCar.year = 1994;

console.log(myCar); //{ make: 'Porsche', model: '911', year: 1994 }

console.log(myCar.model); //911

//Object Initializer
//is a comma-delimited list of zero or more pairs of property names and associated values of an object, 
//enclosed in curly braces ({}):

const myCar = {
    make: 'Porsche',
    model: '911',
    year: 1994
};

console.log(myCar); //{ make: 'Porsche', model: '911', year: 1994 }

console.log(myCar.model); //911

//Object Poeprties 2
//Unassigned properties of an object are undefined (and not null).

const myCar = {
    make: 'Porsche',
    model: '911',
    year: 1994
};

console.log(myCar.color); //undefined
 
//Object Properties 3
//Properties of JavaScript objects can also be accessed or set using a bracket notation 
//Objects are sometimes called associative arrays, 
//since each property is associated with a string value that can be used to access it.

const myCar = {
    make: 'Porsche',
    model: '911',
    year: 1994
};

myCar['color'] = 'Miami Blue';

console.log(myCar['model']); //911
console.log(myCar['color']); //Miami Blue

//Object Properties 4
//An object property name can be any valid JavaScript string
//However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) 
//can only be accessed using the square bracket notation

// four variables are created and assigned in a single go,
// separated by commas
const myObj = new Object(),
      str = 'myString',
      rand = Math.random(),
      obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

// console.log(myObj);
// {
//     type: 'Dot syntax',
//     'date created': 'String with space',
//     myString: 'String value',
//     '0.10668808571269417': 'Random Number',
//     '[object Object]': 'Object',
//     '': 'Even an empty string'
//   }

//Object Properties 5
//You can also access properties by using a string value that is stored in a variable

let myCar = {};
let makeLabel = 'make';
myCar[makeLabel] = 'Porsche';

let modelLabel = 'model';
myCar[modelLabel] = 'Cayman 718';

console.log(myCar); //{ make: 'Porsche', model: 'Cayman 718' }

//Object Properties 6
//You can use the bracket notation with for...in to iterate 
//over all the enumerable properties of an object. 

let myCar = {
    make: 'Porsche',
    model: 'Cayman 718',
    horsePower: '330',
    doors: '2',
    seats: '2'
};

for(let i in myCar)
{
    console.log(i + ' ' + myCar[i]);
}

// make Porsche
// model Cayman 718
// horsePower 330
// doors 2
// seats 2

//Enumerate properties of an object 1
//for...in loops. This method traverses all enumerable properties
//of an object and its prototype chain a typical example of for...in
//is presented on the example above.
//For the example below tho, we'll be also illustrating the use of
//hasOwnProperty(): the inherited properties are not displayed.

const porsche = {name: '911', numberOfDoors: 2, cylinders: 6};

function ColoredPorsche911() {
  this.color = 'Miami Blue';
}

ColoredPorsche911.prototype = porsche;

let obj = new ColoredPorsche911();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
  else {
      console.log(`Inherited property: obj.${prop} = ${obj[prop]}` )
  }
}

// obj.color = Miami Blue
// Inherited property: obj.name = 911
// Inherited property: obj.numberOfDoors = 2
// Inherited property: obj.cylinders = 6

//Enumerate properties of an object 2
//Object.keys() method returns an array of a given object's own enumerable property names, 
//iterated in the same order that a normal loop would.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1)); //["a", "b", "c"]

//Enumerate properties of an object 3
//The Object.getOwnPropertyNames() method returns an array of all properties 
//including non-enumerable properties except for those which use Symbol 
//found directly in a given object.
//According to ES6, the integer keys of the object (both enumerable and non-enumerable) 
//are added in ascending order to the array first, followed by the string keys 
//in the order of insertion.

//In ES5, if the argument to this method is not an object (a primitive), 
//then it will cause a TypeError. 
console.log(Object.getOwnPropertyNames('foo')); 
// TypeError: "foo" is not an object (ES5 code)

//In ES2015, a non-object argument will be coerced to an object.
console.log(Object.getOwnPropertyNames('foo')); 
// ["0", "1", "2", "length"]  (ES2015 code)

const porsche = {name: '911', numberOfDoors: 2, cylinders: 6};
console.log(Object.getOwnPropertyNames(porsche)); 
//[ 'name', 'numberOfDoors', 'cylinders' ]

//Enumerate properties of an object 4: hidden properties
//"hidden" properties are properties in the prototype chain 
//which are not accessible through the object, 
//because another property has the same name earlier in the prototype chain.
//The following function resolves the hidden properties issue:

function listAllProperties(o) {
    let objectToInspect = o;
    let result = [];
  
    while(objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect)
    }
  
    return result;
  }

const porsche = {name: '911', numberOfDoors: 2, cylinders: 6};
  
function Colored911() {
    this.color = 'Miami Blue';
    this.name = "Miami Blue 911"; //This will create a property conflicting with the name property first defined on the proto chain
}

Colored911.prototype = porsche;

let my911 = new Colored911();

console.log(Object.keys(my911)) //[ 'color', 'name' ]

console.log(listAllProperties(my911));

// [
//     'color',                'name',
//     'name',                 'numberOfDoors',
//     'cylinders',            'constructor',
//     '__defineGetter__',     '__defineSetter__',
//     'hasOwnProperty',       '__lookupGetter__',
//     '__lookupSetter__',     'isPrototypeOf',
//     'propertyIsEnumerable', 'toString',
//     'valueOf',              '__proto__',
//     'toLocaleString'
//   ]

//Creating Objects 1 : object initializers
//Using object initializers is sometimes referred to as creating objects with literal notation. 
//"Object initializer" is consistent with the terminology used by C++.
//The syntax for an object using an object initializer is:

const obj = {
  property_1:   'value1',   // property value may be an identifier...
  2:            'value2',   // or a number...
  // ...,
  'property n': 'valuen'    // or a string
};

console.log(obj); //{ '2': 'value2', property_1: 'value1', 'property n': 'valuen' }

//Creating Objects 2 : more object initializers
//Object initializers are expressions, and each object initializer results 
//in a new object being created whenever the statement in which it appears is executed. 
//Identical object initializers create distinct objects that will not compare to 
//each other as equal. Objects are created as if a call to new Object() were made; 
//that is, objects made from object literal expressions are instances of Object.
//The following example creates myPorsche with three properties. 
//Note that the engine property is also an object with its own properties.

const myPorsche = {color: 'miami blue', wheels: 4, engine: {cylinders: 4, size: 2.2}};

console.log(myPorsche); //{ color: 'miami blue', wheels: 4, engine: { cylinders: 4, size: 2.2 } }