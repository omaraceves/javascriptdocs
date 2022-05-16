//Iterators and generators
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators

//Iterators and Generators bring the concept of iteration directly into the core language 
//and provide a mechanism for customizing the behavior of for...of loops.

//Iterators 1
//An iterator is an object which defines a sequence and potentially a return value upon its termination.
//An iterator is any object which implements the Iterator protocol 
//by having a next() method that returns an object with two properties: 
//value - The next value in the iteration sequence
//done- This is true if the last value in the sequence has already been consumed. 
//If value is present alongside done, it is the iterator's return value.
//An iterator object can be iterated explicitly by repeatedly calling next()
//After a terminating value has been yielded additional calls to next() should continue to return {done: true}
//The most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.
//Iterators can express sequences of unlimited size, such as the range of integers between 0 and Infinity
//Contrary to arrays that must be allocated in their entirety.
//The following example we'll be manually created an iterator object just like its described above
//the object will define a sequence of integers from start (inclusive) 
//to end (exclusive) spaced step apart. 
//Its final return value is the size of the sequence it created, tracked by the variable iterationCount.

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = { //rangeIterator will contain a next() function
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false } //result is an object, and it has value and done properties
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true } //If value is present when done is true, it is the iterator's return value.
       }
    };
    return rangeIterator;
}

const iterator = makeRangeIterator(2, 12, 2);

let result = iterator.next();
while (!result.done) {
 console.log(result); 
 result = iterator.next();
}

// { value: 2, done: false }
// { value: 4, done: false }
// { value: 6, done: false }
// { value: 8, done: false }
// { value: 10, done: false }

////After a terminating value has been yielded additional calls to next() should continue to return {done: true}
console.log(iterator.next()); //{ value: 5, done: true }

//Value is 5 because that is the lenght of the sequence it created
console.log("Iterated over sequence of size: ", result.value); //Iterated over sequence of size:  5

//Generator Functions
//Generator functions allow you to define an iterative algorithm by writing a single function whose execution is not continuous.
//Generator functions are written using the function* syntax.
//When called, generator functions do not initially execute their code. 
//Instead, they return a special type of iterator, called a Generator.
//When a value is consumed by calling the generator's next method, 
//the Generator function executes until it encounters the yield keyword.
//The function can be called as many times as desired, and returns a new Generator each time.
//Each Generator may only be iterated once.

function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const generator = makeRangeIterator(2, 12, 2);

let result = generator.next();
while (!result.done) {
 console.log(result); 
 result = generator.next();
}

// { value: 2, done: false }
// { value: 4, done: false }
// { value: 6, done: false }
// { value: 8, done: false }
// { value: 10, done: false }

//After a terminating value has been yielded additional calls to next() should continue to return {done: true}
//Something to notice with generators functions is that subsequent calls to next() will not give you the last value
//for a generator was the generator was iterated, instead it will return value = undefined.
//It is important to store the last value retuned by the generator just like we're doing it in our while block above.
console.log(generator.next()); //{ value: undefined, done: true } //why this is like this? Debug this part.

//result hold the last value returned by the generator when its done status was returned as true for the first time:
console.log("Iterated over sequence of size: ", result); //Iterated over sequence of size:  5

//Iterables
//An object is iterable if it defines its iteration behavior, such as what values are looped over in a for...of construct.
//Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.
//In order to be iterable, an object must implement the @@iterator method. 
//This means that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.
//It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case.
//Iterables which can iterate only once (such as Generators) customarily return this from their @@iterator method, 
//whereas iterables which can be iterated many times must return a new iterator on each invocation of @@iterator.

function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) {
    console.log(itItem);
}

console.log(it[Symbol.iterator]() === it) // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times 

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};


//User defined Iterables
//You can make your own iterables:

const porscheIterable = {
    *[Symbol.iterator]() {
        yield '911';
        yield 'Cayman';
        yield 'Panamera';
    }
}

for (let value of porscheIterable) {
    console.log(value);
}
// 911
// Cayman
// Panamera

let porsches = [...porscheIterable]; 
console.log(porsches); //[ '911', 'Cayman', 'Panamera' ]

//Built in iterables 1
//String, Array, TypedArray, Map and Set are all built-in iterables, 
//because their prototype objects all have a Symbol.iterator method.

let myString = new String('Porsche');
let myIterator = myString[Symbol.iterator]();
let myChar = myIterator.next();

console.log(myChar); //{ value: 'P', done: false }

while(myChar.done != true) {
    console.log(myChar.value);
    myChar = myIterator.next();

}




