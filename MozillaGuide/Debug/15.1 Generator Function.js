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
//for a generator was the generator was iterated, instead it will return value = null.
//It is important to store the last value retuned by the generator just like we're doing it in our while block above.
console.log(generator.next()); //{ value: undefined, done: true } //why this is like this? Debug this part.

//result hold the last value returned by the generator when its done status was returned as true for the first time:
console.log("Iterated over sequence of size: ", result); //Iterated over sequence of size:  5