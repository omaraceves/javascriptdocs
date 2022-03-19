//Numbers and dates
//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates

//Numbers 1
//In JavaScript, numbers are implemented in double-precision 64-bit binary format IEEE 754 (float64)
//A number between about ±10^−308 to ±10^+308 with a numeric precision of 53 bits.
//Integer values up to ±2^53 − 1 can be represented exactly.

console.log(10 ** 308);

//Decimal numbers 1

var myNumber = 42;
console.log(42); //42

//Decimal numbers 2 
//Note that decimal literals can start with a zero (0) followed by another decimal digit, 
//but if every digit after the leading 0 is smaller than 8, the number gets parsed as an octal number.

console.log(0888);//888
console.log(0777);//511  --parsed as octal in non-strict mode

//Binary Numbers 1
//Syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B)
//If the digits after the 0b are not 0 or 1, 
//the following SyntaxError is thrown: "Missing binary digits after 0b"

var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
var FLT_WRONG = 0b008; //Invalid or unexpected token


//Octal numbers 1
//Octal number syntax uses a leading zero. 
//If the digits after the 0 are outside the range 0 through 7, 
//the number will be interpreted as a decimal number.

var n = 0755; // 493
var m = 0644; // 420

//Octal numbers 2
//Strict mode in ECMAScript 5 forbids octal syntax. 
//Octal syntax isn't part of ECMAScript 5, 
//but it's supported in all browsers by prefixing the octal number with a zero: 0644 === 420 and "\045" === "%". 
//In ECMAScript 2015, octal numbers are supported if they are prefixed with 0o, e.g.:

var a = 0o10; // ES2015: 8
console.log(a); //8

//Hexadecimal numbers 1
//Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X). 
//If the digits after 0x are outside the range (0123456789ABCDEF), 
//the following SyntaxError is thrown: "Identifier starts immediately after numeric literal".

console.log(0xFFFFFFFFFFFFFFFFF);// 295147905179352830000
console.log(0x123456789ABCDEF);// 81985529216486900
console.log(0XA);// 10


//Exponentiation notation 1

console.log(1E3);// 1000
console.log(2e6);// 2000000
console.log(0.1e2);// 10

//Number object 1
//The built-in Number object has properties for numerical constants. 
//You cannot change the values of these properties.

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

console.log(biggestNum); //1.7976931348623157e+308
console.log(smallestNum); //5e-324
console.log(infiniteNum); //Infinity
console.log(negInfiniteNum); //-Infinity
console.log(notANum); //NaN

//Number parseFloat 1
//Number.parseFloat() method parses an argument and returns a floating point number. 
//If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat('4.567abcdefgh')); //4.567
console.log(Number.parseFloat('abcdefgh4.6')); //NaN

//Number parseInt 1
//The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.

console.log(Number.parseInt('10', 10)); //10
console.log(Number.parseInt('0xF', 16)); //15
console.log(Number.parseInt('0001', 2)); //1

//Number isFinite 1
//Number.isFinite() method determines whether the passed value is a finite number.
//It checks that the type of a given value is Number, 
//and the number is neither positive Infinity, negative Infinity, nor NaN.

console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(1 / 0)); // false

console.log(Number.isFinite(0));         // true
console.log(Number.isFinite(2e64));      // true

//Number isFinite 2
//In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. 
//This means only values of the type number and are finite return true.

console.log(Number.isFinite('0'));       // false, would've been true with global isFinite('0') because '0' would've been converted to 0
console.log(Number.isFinite(null));      // false, would've been true with global isFinite(null) because null would've been converted to 0 I believe.

console.log(isFinite('0'));//true
console.log(isFinite(null));//true

//Number isInteger 1
//The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(Infinity));  // false
console.log(Number.isInteger(NaN));       // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger('10')); // false
console.log(Number.isInteger(1 / 0)); // false
console.log(Number.isInteger(999));  // true
console.log(Number.isInteger(-2));       // true

//Number isNan 1
//Due to both equality operators, == and ===, evaluating to false when checking if NaN is NaN, 
//the function Number.isNaN() has become necessary. 
//This situation is unlike all other possible value comparisons in JavaScript.

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

//Number isNan 2
//In comparison to the global isNaN() function, 
//Number.isNaN() doesn't suffer the problem of forcefully converting the parameter to a number. 
//This means it is now safe to pass values that would normally convert to NaN, 
//but aren't actually the same value as NaN. 
//This also means that only values of the type number, that are also NaN, return true.

console.log(Number.isNaN('NaN'));// false
console.log(Number.isNaN(undefined));// false
console.log(Number.isNaN({}));// false
console.log(Number.isNaN('blah'));// false

console.log(isNaN('NaN'));// true  
console.log(isNaN(undefined));// true
console.log(isNaN({}));// true
console.log(isNaN('blah'));// true

//Number isSafeInteger() 1
//isSafeInteger() method determines whether the provided value is a number that is a safe integer.
//A safe integer can be exactly represented as an IEEE-754 double precision number, 
//and whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

console.log(Number.isSafeInteger(3));// true
console.log(Number.isSafeInteger(Math.pow(2, 53)));// false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));// true


//Number toExponential 1
//toExponential() method returns a string representing the Number object in exponential notation.
//optional param fractionDigits - An integer specifying the number of digits after the decimal point.

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77.5.toExponential());     // logs 7.7e+1

//Number toFixed 1
//The toFixed() method formats a number using fixed-point notation.
//Usages toFixed(); toFixed(digits)
//Optional param digits - The number of digits to appear after the decimal point; this may be a value between 0 and 20; Default is 0

let number = 12345.6789

number.toFixed()       // Returns '12346': note rounding, no fractional part
number.toFixed(1)      // Returns '12345.7': note rounding
number.toFixed(6)      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3'

console.log((Math.pow(2, 53) - 1).toFixed()); //9007199254740991
console.log(Math.pow(2, 53).toFixed()); //9007199254740992

//Math object 1
//The built-in Math object has properties and methods for mathematical constants and functions. 
//For example, the Math object's PI

console.log(Math.PI);

//Math object 2
//Similarly, standard mathematical functions are methods of Math. 
//These include trigonometric, logarithmic, exponential, and other functions.
//Unlike many other objects, you never create a Math object of your own. You always use the built-in Math object.

console.log(Math.sin(1.56));

//Date Object 1 : Ways to create a date object
//The Date object has a large number of methods for setting, getting, and manipulating dates. It does not have any properties.
//Javascript stores dates as the number of milliseconds since January 1, 1970, 00:00:00, 
//with a Unix Timestamp being the number of seconds since January 1, 1970, 00:00:00.
//The Date object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.
//To create a Date object: var dateObjectName = new Date([parameters]);
//The parameters in the preceding syntax can be any of the following:



//Nothing: Creates today's date and time.
today = new Date();
console.log(today); //2022-02-09T18:18:12.822Z

//A "Month day, year hours:minutes:seconds." formatted string.
var Xmas95 = new Date("December 25, 1995 13:30:00")
console.log(Xmas95);

//A set of integer values for year, month, and day.
var weddingDate = new Date(2020, 0, 11); //Note that January is represented with 0
console.log(weddingDate);

//Date Object 2: Set Methods
// Use "set" methods, for setting date and time values in Date objects.

var myDate = new Date();
console.log(myDate); //today's date

myDate.setFullYear(2020);
myDate.setMonth(0);
myDate.setDate(11);
myDate.setUTCHours(9); //1 AM PST
myDate.setUTCMinutes(0);
myDate.setUTCSeconds(0);

console.log("My wedding date was: " + myDate); //My wedding date was: Sat Jan 11 2020 01:00:00 GMT-0800 (Pacific Standard Time)

//Date Object 3: Get Methods
//Use "get" methods, for getting date and time values from Date objects. 

var myDate = new Date(2020, 0, 11, 22, 9, 33, 930);

//Seconds and minutes: 0 to 59
console.log(myDate.getMinutes());// 9
console.log(myDate.getSeconds());// 33

//Hours: 0 to 23
console.log(myDate.getHours())// 22

//Day: 0 (Sunday) to 6 (Saturday)
console.log(myDate.getDay()) // 6 - Saturday. 

//getDay is Useful to know the day where important dates happened:
console.log(new Date(1987, 3, 16).getDay())// 4 - I was born on a Thursday. 

//Date: 1 to 31 (day of the month)
console.log(myDate.getDate())// 11

//Months: 0 (January) to 11 (December)
console.log(myDate.getMonth())// 0

//Year: years since 1900
console.log(myDate.getFullYear())// 2020

//Epoch time, milliseconds since 01 January, 1970 UTC
console.log(myDate.getTime())// 1578809373930

//Date Object 3: To Methods
//"to" methods, for returning string values from Date objects.

var myDate = new Date(2020, 0, 11);

console.log(myDate.toDateString()); //Sat Jan 11 2020

console.log(myDate.toISOString()); //2020-01-11T08:00:00.000Z

console.log(myDate.toJSON()); //2020-01-11T08:00:00.000Z

console.log(myDate.toLocaleDateString());//1/11/2020

console.log(myDate.toLocaleString());//1/11/2020, 12:00:00 AM

console.log(myDate.toLocaleTimeString());//12:00:00 AM

console.log(myDate.toTimeString());//00:00:00 GMT-0800 (Pacific Standard Time)

console.log(myDate.toUTCString());//Sat, 11 Jan 2020 08:00:00 GMT

//Date object 3: Days of married
//With the functions above, we will put together some lines of code to 
//calculate the number of days one being married.

let today = new Date();
let marriedDate = new Date(2020, 0, 11);

let msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let msMarried = today.getTime() - marriedDate.getTime();
let daysMarried = msMarried / msPerDay;

console.log("You've been married for " + Math.round(daysMarried) + " days.");

//Date Object 4: Parse method
//The parse method is useful for assigning values from date strings to existing Date objects.
//Parse method return value is in Epoch time. 

const msWeddingDate = Date.parse("January 11, 2020");
const weddingDate = new Date();
weddingDate.setTime(msWeddingDate);

console.log(msWeddingDate);
console.log(weddingDate.toUTCString());











