//From var to const
//From the book: https://exploringjs.com/es6/ch_core-features.html#sec_from-var-to-const

//In ES5, you declare variables via var. Such variables are function-scoped, 
//their scopes are the innermost enclosing functions. The behavior of var is occasionally confusing.

var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}

var y = func(false); 
console.log(y); // undefined

//That func() returns undefined may be surprising. 
//You can see why if you rewrite the code so that it more closely reflects what is actually going on:

var x = 3;
function func(randomize) {
    var x;
    if (randomize) {
        x = Math.random();
        return x;
    }
    return x;
}
var y = func(false); 
console.log(y); // undefined

//In ES6, you can additionally declare variables via let and const. 
//let is roughly a block-scoped version of var. const works like let, but creates variables whose values can’t be changed.
//If you replace var with let in the initial version, you get different behavior:

let x = 3;
function func(randomize) {
    if (randomize) {
        x = Math.random();
        return x;
    }
    return x;
}
const y = func(false); 
console.log(y); // 3

//Because by replacing var with let you get different behavior
//You can’t blindly replace var with let or const in existing code; you have to be careful during refactoring.

//a)Prefer const. You can use it for all variables whose values never change.
//b)Otherwise, use let – for variables whose values do change.
//c)Avoid var.
