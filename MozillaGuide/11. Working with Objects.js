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

