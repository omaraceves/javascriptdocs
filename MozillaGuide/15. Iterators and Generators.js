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
console.log(iterator.next()); //{ value: 5, done: true }


