//Using promises
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises


//Promises 1: Passing callbacks into a function vs attaching callbacks to functions
//WARNING - **The code examples shown on this section are for sintax illustration purposes, they don't run.**
//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

//Passing callbacks into a function: Imagine a function, createAudioFileAsync(), 
//which asynchronously generates a sound file given a configuration record and two callback functions, 
//one called if the audio file is successfully created, and the other called if an error occurs.

function successCallback(result) { //this is the success callback function
    console.log("Audio file ready at URL: " + result);
  }
  
  function failureCallback(error) { //this is the failure callback function
    console.error("Error generating audio file: " + error);
  }
  
  createAudioFileAsync(audioSettings, successCallback, failureCallback); //This is how passing callbacks into a function looks like
                                                                         //basically we are passing the callbacks as parameters.

//If createAudioFileAsync() were rewritten to return a promise, you would attach your callbacks to it instead:

createAudioFileAsync(audioSettings).then(successCallback, failureCallback); //then attaches the callbacks to the function execution
                                                                            //one of the callbacks will be executed based on the 
                                                                            //success or failure of the execution of creatueAudioFileAsync.

//Guarantees
//Unlike old fashioned passed-in callbacks, a promise comes with some guarantees:

// - Callbacks added with then() will never be invoked before the completion of the current run of the JavaScript event loop.
// - These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
// - ultiple callbacks may be added by calling then() several times. They will be invoked one after another, in the order in which they were inserted.


//Chaining
//By creating a promise chain, we can execute two or more asynchronous operations back to back, 
//where each subsequent operation starts when the previous operation succeeds, with the result from the previous step
//then() function returns a new promise, different from the original:

//**Warning code that shows sintax and not runs**
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

//or
const promise2 = doSomething().then(successCallback, failureCallback);

//This second promise (promise2) represents the completion not just of doSomething(), 
//but also of the successCallback or failureCallback you passed in, which can be other asynchronous functions returning a promise. 
//When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.

//Chaining 2: The pyramid of doom
//In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

doSomething(function(result) {
        doSomethingElse(result, function(newResult) { 
            doThirdThing(newResult, function(finalResult) { 
                console.log('Got the final result: ' + finalResult);
            }, failureCallback);
    }, failureCallback);
  }, failureCallback);

  // With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

doSomething().then(function(result) { return doSomethingElse(result); })
    .then(function(newResult) {
        return doThirdThing(newResult);
    })
    .then(function(finalResult) {
        console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);

//The arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback)

doSomething().then(function(result) { 
        return doSomethingElse(result); 
    }, failureCallback)
    .then(function(newResult) {
        return doThirdThing(newResult);
    }, failureCallback)
    .then(function(finalResult) {
        console.log('Got the final result: ' + finalResult);
    }, failureCallback);

//You might see this expressed with arrow functions instead. 
//It is Important to  always return results, otherwise callbacks won't catch the result of a previous promise. 
//with arrow functions () => x is short for () => { return x; }) and that's why we don't see an explicit 'return x'.

doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

//Chaining 3: Chaining after a catch
//It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. 
//See the following example:

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do this if something failed');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

// Initial
// Do this if something failed
// Do this, no matter what happened before


//Error propagation
//Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, 
//even thrown exceptions and programming errors. 
//This is essential for functional composition of asynchronous operations.

//You might recall seeing failureCallback three times in the pyramid of doom earlier, 
//compared to only once at the end of the promise chain

doSomething().then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);

//If there's an exception, the browser will look down the chain for .catch() handlers or onRejected. 
//This is very much modeled after how synchronous code works:

try {
    const result = syncDoSomething();
    const newResult = syncDoSomethingElse(result);
    const finalResult = syncDoThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }

  //This symmetry with asynchronous code culminates in the async/await syntactic sugar in ECMAScript 2017

  async function foo() {
    try {
      const result = await doSomething();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
      failureCallback(error);
    }
  }

//Creating promises around an old callback api
//A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.
//Some APIs still expect success and/or failure callbacks to be passed in the old way. 
//The most obvious example is the setTimeout() function that requiers a function to be executed once a timer expires

//First let's do a timeout example
//we'll pass to timeout 2 parameters, 
//the first parameter will be a function call (a callback), 
//the second parameter will be a number of milliseconds.
//the callback will get executed once a timer expires, this timer is defined by the number of milliseconds passed

function printPorsche() {
    console.log("Porsche");
}

setTimeout(printPorsche, 3000); //Porsche *after waiting for 3 seconds*

//Mixing old-style callbacks and promises is problematic. 
//If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this.
//Run the following code, the error won't be handled, the execution will explode:

function printPorsche() {
    throw new Error('Error printing Porsche');
    console.log("Porsche");
}

setTimeout(printPorsche, 3000); //Error: Error printing Porsche

//Luckily we can wrap setTimeout in a promise. 
//The promise constructor takes an executor function that lets us resolve or reject a promise manually.
//Since setTimeout() doesn't really fail, we left out reject in this case.
//Best practice is to wrap problematic functions at the lowest possible level, 
//and then never call them directly again.

function printPorsche() {
    throw new Error('Error printing Porsche');
    console.log("Porsche");
}

//wait is a function that takes one parameter ms, and returns a promise
//the returning promise comes from a constructor function
//the promise constructor is taking setTimeout as executor function
const wait = (ms) => new Promise(resolve => setTimeout(() => console.log(resolve), ms));

 wait(3000).then(() => printPorsche())
.catch(() => console.log('Print this if something failed'))


//Creating a promise from scratch 1
//This is out of the scope of mozilla docs
//I went to youtube and saw this video: https://www.youtube.com/watch?v=OXpZfyVXeI8
//Based on that explanation I created the following example

//The promise constructor takes an executor function that lets us resolve or reject a promise manually.
//Notice that we are using an arrow function to define the executor function.

const myPromiseObject1 = new Promise((resolve, reject) => { //Begins executor function
    let pass = true;  

    if(pass)
      resolve('Promise resoved'); //manually resolve
    else
      reject('Promise rejected');
  } // Ends executor function
);

const myPromiseObject2 = new Promise((resolve, reject) => { //Begins executor function
    let pass = false;  

    if(pass)
      resolve('Promise resoved');
    else
      reject('Promise rejected'); ////manually reject
  });

//The myPromiseObject1 will be manually resolved, 
//when a promise is resolved it can return a value and pass it forward to the "then" callback
//in our case the resolve value that will be passed forward is 'Promise resolved'
//we are defining an arrow function inside 'then' that will be called after myPromiseObject1 resolution
//the arrow function will capture 'Promise resolved' as its result param and then it will print it
myPromiseObject1.then(result => console.log(result)); //'Promise resoved'


//The myPromiseObject2 will be manually rejected, 
//when a promise is rejected it can return a value or error and pass to the "catch" callback
//in our case the rejected value that will be passed is 'Promise rejected'
//we are defining an arrow function inside 'catch' that will be called after myPromiseObject2 rejection
//the arrow function will capture 'Promise resolved' as its errorMessage param and then it will print it
myPromiseObject2.then(result => console.log(result)).catch(errorMessage => console.log(errorMessage)); //'Promise Rejected'

//Creating a promise from scratch 2

function myPromise(pass) {
  return new Promise((resolve, reject) => {
    if(pass)
      resolve('Promise resoved');
    else
      reject('Promise rejected');
  })
};

myPromise(true).then(message => console.log(message));
myPromise(false).then(message => console.log(message)).catch(message => console.log(message));



