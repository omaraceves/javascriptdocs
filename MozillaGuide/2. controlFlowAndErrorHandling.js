//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

//Block Statement 1
//The most basic statement is a block statement, which is used to group statements.
//The block is delimited by a pair of curly brackets { }
//Block statements are commonly used with control flow statements (if, for, while).

var x = 1;
while(x < 10) {
    console.log(x); // 1 2 3 4 5 6 7 8 9 (each in a new line).
    x++;
}

//Block scope note 1
//avaScript before ECMAScript2015 (6th edition) does not have block scope!  
//In older JavaScript, variables introduced within a block are scoped to the containing function or script, 
//and the effects of setting them persist beyond the block itself. 
//In other words, block statements do not define a scope.

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

//Post ECMAScript2015
let x = 1;
{
  let x = 2;
}
console.log(x); // outputs 1

//Falsy values 1
//The following values evaluate to false

var a = false;
var b = undefined;
var c = null;
var d = 0;
var e = NaN;
var f = "";

if(a || b || c || d || e || f) {
    console.log("One of this variables is true!");
} else {
    console.log("All these variables are falsy.");
}

//NOTE - All other values—including all objects—evaluate to true when passed to a conditional statement.

//Throw 1
//Use the throw statement to throw an exception. 
//You can throw types.

function logMyErrors(e) {
    console.log(e.toString());
}

try{
    throw 'Error2';   // String type
    throw 42;         // Number type
    throw true;       // Boolean type
} catch (e) {
    logMyErrors(e);
}


//Throw 2
//And you can throw objects

function logMyErrors(e) {
    console.log(e.toString());
}

try{
    throw { name: 'an object', toString: function() { return `I'm ${this.name}`}};
} catch (e) {
    logMyErrors(e);
}

//Throw 3
//You may throw any expression, not just expressions of a specific type

function logMyErrors(e) {
    console.log(e()); //notice how we're treating the argument e as a function.
}

try{
    throw () => "I'm a function!";
} catch (e) {
    logMyErrors(e);
}

//Catch note 1
//When logging errors to the console inside a catch block, using console.error() 
//rather than console.log() is advised for debugging.
//It formats the message as an error, 
//and adds it to the list of error messages generated by the page.

try {
    throw 'myError';
} catch (err) {
    console.error(err); //Note how we didn't use console.log
}

//Finally block 1
//You can use the finally block to make your script fail gracefully when an exception occurs. 
//For example, you may need to release a resource that your script has tied up.

console.log('OpenMyFile();') //We start using a resource
try {
  throw 'Error ocurred reading the file'; //Using the resource causes an error
} catch(e) {
  console.error(e); // We handle the error
} finally {
    console.log('CloseMyFile();') // Always close the resource
}

//Utilizing error objects 1
//Depending on the type of error, 
//you may be able to use the name and message properties to get a more refined message.


function doSomethingErrorProne() {
    callingAnUnexistingFunction();
  }
  
  try {
    doSomethingErrorProne();
  } catch (e) {               // NOW, we actually use `console.error()`
    console.error(e.name);    // logs 'Error'
    console.error(e.message); // logs 'The message', or a JavaScript error message
  }

//Utilizing error objects 2
//If you are throwing your own exceptions, 
//in order to take advantage of these properties 
//(such as if your catch block doesn't discriminate between your own exceptions and system ones), 
//you can use the Error constructor.

function doSomethingErrorProne() {
    throw new Error('This is my error');
  }
  
  try {
    doSomethingErrorProne();
  } catch (e) {               // NOW, we actually use `console.error()`
    console.error(e.name);    // logs 'Error'
    console.error(e.message); // logs 'The message', or a JavaScript error message
  }