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