//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

//For loop 1
//A for loop repeats until a specified condition evaluates to false
//for ([initialExpression]; [conditionExpression]; [incrementExpression])
//     statement

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

//Walking east one step
//Walking east one step
//Walking east one step
//Walking east one step
//Walking east one step

//Do while 1
//The do...while statement repeats until a specified condition evaluates to false.

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//1
//2
//3
//4
//5

//While 1
//statement executes its statements as long as a specified condition evaluates to true

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n);
  console.log(x);
}

//1
//1
//2
//3
//3
//6

//For in  1
//Iterates a specified variable over all the enumerable property names of an object. 
//For each distinct property, JavaScript executes the specified statements.

let myObj = {
    brand: 'Porsche',
    model: '718 Cayman',
    year: '2017'
}

let result = '';

for (let i in myObj) {
   result += i + ' ';
   console.log(i);
   console.log(myObj[i]);
}

// brand
// Porsche
// model
// 718 Cayman
// year
// 2017

console.log(result); //brand model year

//For in 2: Arrays
//The for...in statement will return the name of your user-defined properties 
//in addition to the numeric indexes.

const arr = [3, 5, 7];
arr.greet = 'hello';
arr.car = 'Cayman';

for (let i in arr) {
  console.log(i); // 0, 1, 2, greet, car
}

//For of 1
//The for...of statement creates a loop Iterating over iterable objects
// for (variable of object)
//   statement

const arr = ['red', 'white', 'blue'];

for (let i of arr) {
  console.log(i); // 3, 5, 7
}

//For of 1
//The for...of statement creates a loop Iterating over iterable objects
// for (variable of object)
//   statement

const arr = ['red', 'white', 'blue'];

for (let i of arr) {
  console.log(i); // 'red', 'white', 'blue'
}

//For of 2: Arrays
//For of doesn't iterate over array's user-defined properties

const arr = ['red', 'white', 'blue'];
arr.green = 'green';
arr.black = 'black';

for (let i of arr) {
  console.log(i); // 'red', 'white', 'blue'
}

