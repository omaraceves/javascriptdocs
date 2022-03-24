
//Indexed Collections
//As seen on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections

//This chapter introduces collections of data which are ordered by an index value. 
//This includes arrays and array-like constructs such as Array objects and TypedArray objects.

//Array Object 1: What is an array
//An array is an ordered list of values that you refer to with a name and an index.
//JavaScript does not have an explicit array data type. However, you can use the predefined Array object and its methods to work with arrays in your applications. 
//The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. 
//It has a property for determining the array length and other properties for use with regular expressions.

var myArray = ['red', 'white', 'blue'];

console.log(myArray[0]); //red

//Creating Arrays 1
//The following statements create equivalent arrays

let arr1 = new Array('element0', 'element1', 'elementN')
let arr2 = Array('element0', 'element1',  'elementN')
let arr3 = ['element0', 'element1', 'elementN']

console.log(arr2); //[ 'element0', 'element1', 'elementN' ]
console.log(arr2); //[ 'element0', 'element1', 'elementN' ]
console.log(arr2); //[ 'element0', 'element1', 'elementN' ]

//Creating Arrays 2
//To create an array with non-zero length, but without any items, either of the following can be used

let arrayLength = 5

// This...
let arr1 = new Array(arrayLength)

// ...results in the same array as this
let arr2 = Array(arrayLength)

// This has exactly the same effect
let arr3 = []
arr3.length = arrayLength

console.log(arr1.length); //5
console.log(arr2.length); //5
console.log(arr3.length); //5

//Creating Arrays 3
//If you wish to initialize an array with a single element, and the element happens to be a Number, you must use the bracket syntax. 
//When a single Number value is passed to the Array() constructor or function, it is interpreted as an arrayLength, not as a single element.

let arr1 = [42]       // Creates an array with only one element: the number 42.
let arr2 = Array(42)  // Creates an array with no elements and arr.length set to 42.

console.log(arr1); //[ 42 ]
console.log(arr1.length); //1

console.log(arr2); //[ <42 empty items> ]
console.log(arr2.length); //42

//Referring to Array Elements 1
//Because elements are also properties, you can access the using property accessors.
let arr = ['one', 'two', 'three']
console.log(arr[2]);          // three
console.log(arr['length']);   // 3

//Populating an Array 1
//You can populate an array by assigning values to its elements.

let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'

console.log(emp); //[ 'Casey Jones', 'Phil Lesh' ]

//Populating an Array 2
//You can also populate an array when you create it

let myArray1 = new Array('Hello', 'yeah', 3.14159)
// OR
let myArray2 = ['Mango', 'Apple', 'Orange']

console.log(myArray1); //[ 'Hello', 'yeah', 3.14159 ]
console.log(myArray2); //[ 'Mango', 'Apple', 'Orange' ]

//Arrays and floating point indexes 1
//Calling Array(N) results in a RangeError, if N is a non-whole number whose fractional portion is non-zero.

let arr = Array(9.3)   // RangeError: Invalid array length

//Arrays and floating point indexes 2
//If you supply a non-integer value as index, a property will be created in the object representing the array, instead of an array element.
//On Referring to Array Elements 1 property accessors are exemplified. You can use a propertu accessor to of course, access properties within the array.

let arr = []
arr[991.1] = 'Porsche 911 2013'
arr[991.2] = 'Porsche 911 2018'
arr[992] = 'Porsche 911 2022'
console.log(arr.length)                 // 993 because the first INTEGER index we supplied was 992. Therefore array properties doesn't get counted in length. 
console.log(arr.hasOwnProperty(991.1))    // true
console.log(arr); 
//[
//     <992 empty items>,
//     'Porsche 911 2022',
//     '991.1': 'Porsche 911 2013',
//     '991.2': 'Porsche 911 2018'
//   ]
console.log(arr[991.2])//Porsche 911 2018 - accessed trhrough a property accessor

//Understanding length 1
//The length property is special. It always returns the index of the last element plus one.

let arr = []
arr[991.1] = 'Porsche 911 2013'
arr[991.2] = 'Porsche 911 2018'
arr[992] = 'Porsche 911 2022'
console.log(arr.length) //993 - The last index was 992 + 1 = 993 :D

//Understanding length 2
//You can remove elements or trim elements from the array by reasignning length

let arr = ['red', 'white', 'blue'];
console.log(arr.length); //3
arr.length = 1;
console.log(arr); // ['red']

//Iterating over arrays 1
//A common operation is to iterate over the values of an array, processing each one in some way.

let colors = ['red', 'white', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

// red
// white
// blue

//Iterating over arrays 2
//The forEach() method provides another way of iterating over an array
let colors = ['red', 'white', 'blue']

colors.forEach(x => console.log(x));

// red
// white
// blue


                    
//Iterating over arrays 3
//The function passed to forEach is executed once for every item in the array, with the array item passed as the argument to the function. 
//Unassigned values are not iterated in a forEach loop.
//Note that the elements of an array that are omitted when the array is defined are not listed when iterating by forEach, 
//but are listed when undefined has been manually assigned to the element:

let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined')  // true
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// undefined
// fourth

//Iterating over arrays 4
//Since JavaScript elements are saved as standard object properties, 
//it is not advisable to iterate through JavaScript arrays using for...in loops, 
//because normal elements and all enumerable properties will be listed.

const arr = [3, 5, 7];
arr.greet = 'hello';
arr.car = 'Cayman';

for (let i in arr) {
  console.log(i); // 0, 1, 2, greet, car
}

// 0
// 1
// 2
// greet
// car

//Array Methods: Concat
//concat() joins two or more arrays and returns a new array.

let myArray1 = new Array('1', '2', '3')
let myArray2 = ['c', 'd', 'f'];
let myArray3 = myArray1.concat(myArray2);

console.log(myArray3);

//Array Methods: join
//join(delimiter = ',') joins all elements of an array into a string.

let myArray = new Array('Wind', 'Rain', 'Fire')
let concatString = myArray.join(' - ') // list is "Wind - Rain - Fire"

console.log(concatString); // list is "Wind - Rain - Fire"

//Array methods: push
//Adds one or more elements to the end of an array and returns the resulting length of the array.

let myArray = ['911', 'Cayman'];
var length = myArray.push('Taycan');

console.log(myArray); //[ '911', 'Cayman', 'Taycan' ]
console.log(length); //3

//Array methods: pop
//Removes the last element from an array and returns that element.

let myArray = [ '911', 'Cayman', 'Taycan' ];
var lastElement = myArray.pop();

console.log(myArray); //[ '911', 'Cayman' ]
console.log(lastElement); //Taycan

//Array methods: shift
//shift() removes the first element from an array and returns that element.

let myArray = [ '911', 'Cayman', 'Taycan' ];
var firstElement = myArray.shift();

console.log(myArray); //[ 'Cayman', 'Taycan' ]
console.log(firstElement); //911

//Array methods: unshift
//unshift adds one or more elements to the front of an array and returns the new length of the array.

let myArray = ['Cayman', 'Taycan'];
var newLength = myArray.unshift('911');

console.log(newLength); //3
console.log(myArray); //[ '911', 'Cayman', 'Taycan' ]

//Array methods: slice(start_index, up_to_index)
//extracts a section of an array and returns a new array. But the original array stays intact.

let myArray = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
let shortArray = myArray.slice(0, 2);

console.log(shortArray); //[ 'a', 'b' ]
console.log(myArray); //[
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j', 'k'
// ]

//Array methods: splice(index, count_to_remove, addElement1, addElement2, ...) 1
//removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

let myArray = ['911', 'Cayman', 'Taycan', 'Panamera', 'Macan', 'Cayenne'];
let suvs = myArray.splice(4, 2); //Taking from index 4, 2 elements.

console.log(suvs); //[ 'Macan', 'Cayenne' ]
console.log(myArray); //[ '911', 'Cayman', 'Taycan', 'Panamera' ]

//Array methods: splice(index, count_to_remove, addElement1, addElement2, ...) 2
//removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

let futureVehicles = ['911', 'Cayman', 'Taycan', 'Panamera', 'Macan', 'Cayenne'];
let oldSuvs = futureVehicles.splice(4, 2, ['Macan E', "Cayenne E"]); //Replacing last 2 elements

console.log(`These are the older models replaced: ${oldSuvs}`); //These are the older models replaced: Macan,Cayenne
console.log(`These are Porsche's future vehicles: ${futureVehicles}`); //These are Porsche's future vehicles: 911,Cayman,Taycan,Panamera,Macan E,Cayenne E

//Array Methods: reverse() 
//transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. 
//It returns a reference to the array. The original array is modified.

let myArray = ['a','b', 'c', 'd', 'e'];
myArray.reverse();

console.log(myArray); //[ 'e', 'd', 'c', 'b', 'a' ]

//Array Methods: sort() 
//sorts the elements of an array in place, and returns a reference to the array.

let myArray =[ 'e', 'd', 'c', 'b', 'a' ];
myArray.sort();

console.log(myArray); //[ 'a', 'b', 'c', 'd', 'e' ]

//Array Methods: sort() 2
//Can also take a callback function to determine how array elements are compared.
//The sort method (and others below) that take a callback are known as iterative methods, because they iterate over the entire array in some fashion.
//Each one takes an optional second argument called thisObject. If provided, thisObject becomes the value of the this keyword inside the body of the callback function. 
//If not provided, as with other cases where a function is invoked outside of an explicit object context, 
//this will refer to the global object (window) when using arrow function as callback, or undefined when using normal function as callback.

let myArray = ['c', 'b', 'a']

myArray.sort((a, b) => { 
  if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
});

console.log(myArray); //[ 'a', 'b', 'c' ]

//Note on this, I couldn't test the "this" clause described on this example's notes. I should google and investigate further.

//Array Methods: indexOf(searchElement[, fromIndex])
//searches the array for searchElement and returns the index of the first match.

let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan'];
var caymanIndex = porscheCars.indexOf('Cayman');

console.log(caymanIndex); //1

//Array Methods: lastIndexOf(searchElement[, fromIndex])
//works like indexOf, but starts at the end and searches backwards.

let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan', 'Cayman'];
var caymanIndex = porscheCars.lastIndexOf('Cayman');

console.log(caymanIndex); //4

//Array Methods: forEach(callback[, thisObject])
//executes callback on every array item and returns undefined.

let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan', 'Cayman'];

porscheCars.forEach(x => console.log(`Car Name: Porsche ${x}`));

// Car Name: Porsche 911
// Car Name: Porsche Cayman
// Car Name: Porsche Panamera
// Car Name: Porsche Taycan
// Car Name: Porsche Cayman

//Array Methods: map(callback[, thisObject]) 
//returns a new array of the return value from executing callback on every array item.

let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan', 'Cayman'];

let toUpperArray = porscheCars.map(x => x.toUpperCase());

console.log(toUpperArray); //[ '911', 'CAYMAN', 'PANAMERA', 'TAYCAN', 'CAYMAN' ]

//Array Methods: filter(callback[, thisObject])
//returns a new array containing the items for which callback returned true.
let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan', 'Cayman 718'];

let caymans = porscheCars.filter(x => x.toUpperCase().includes('CAYMAN'));

console.log(caymans); [ 'Cayman', 'Cayman 718' ]

//Array Methods: every(callback[, thisObject])
//returns true if callback returns true for every item in the array.

let porscheCars = ['911', 'Cayman', 'Panamera', 'Taycan', 'Cayman'];

if(porscheCars.every(x => typeof item === 'string'));
  console.log('Array is all strings'); //Array is all strings

//Note, good example of typeof

//Array methods: some(callback[, thisObject])
//returns true if callback returns true for at least one item in the array.
let porscheCars = [911, 'Cayman', 'Panamera', 'Taycan', 718];

if(porscheCars.some(x => typeof x === 'number'));
{
  let porscheNumberedCars = porscheCars.filter(x => typeof x === 'number');
  console.log(porscheNumberedCars); //[ 911, 718 ]
}

//Array methods: reduce(callback[, initialValue])
//applies callback(accumulator, currentValue[, currentIndex[, array]]) 
//for each value in the array for the purpose of reducing the list of items down to a single value. 
//The reduce function returns the final value returned by callback function.

let numbers = [1, 2, 3];

//It will add the array values to an initial value of 5
let fivePlusArrayResult = numbers.reduce((result, x) => result += x, 5);

console.log(fivePlusArrayResult); //11

//Note reduceRight(callback[, initialValue]) works like reduce(), but starts with the last element.

//Using arrays to store other properties 1
//Arrays can also be used like objects, to store related information.

const porscheCars = ['Cayman', '911'];
porscheCars.brand = "Porsche";

porscheCars.forEach(x => console.log(`${porscheCars.brand} ${x}`)); //Porsche Cayman
                                                                    //Porsche 911

//Working with array-like objects 1
//Some JavaScript objects, such as the NodeList returned by document.getElementsByTagName() 
//or the arguments object made available within the body of a function, 
//look and behave like arrays on the surface but do not share all of their methods.
//For example the arguments object provides a length attribute but does not implement the forEach() method.

function printArgumentsLength(a, b, c)
{
  console.log(arguments);
  console.log(arguments.length);
}

printArgumentsLength('Cayman', '911', 3);
//[Arguments] { '0': 'Cayman', '1': '911', '2': 3 }
//3

//Working with array-like objects 2
//Array methods cannot be called directly on array-like objects.

function printArguments(a, b, c) {
  arguments.forEach(function(item) {  // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}

printArguments();

//Working with array-like objects 2
//But you can call them indirectly using Function.prototype.call()

function printArguments(a, b) {
  Array.prototype.forEach.call(arguments, x => console.log(x));
}

printArguments('911', 'Vantage');
//911
//Vantage

//Array prototype methods note on strings
//Array prototype methods can be used on strings as well, since they provide sequential access to their characters in a similar way to arrays

Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})
// a
 
// s
// t
// r
// i
// n
// g

//Typed Arrays
//Typed arrays are array-like objects and provide a mechanism for accessing raw binary data.

//Array Buffer
//is a data type that is used to represent a generic, fixed-length binary data buffer. 
//You can't directly manipulate the contents of an ArrayBuffer; instead, 
//you create a typed array view or a DataView which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

//Typed Array Views
//Typed array views have self descriptive names and provide views for all the usual numeric types like Int8, Uint32, Float64 and so forth.

//We will not cover further Array Buffer and Typed Views on this file, 
//for further information please visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays







