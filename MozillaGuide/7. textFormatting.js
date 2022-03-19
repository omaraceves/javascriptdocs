//Strings and Text Fomatting
//As see on the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting

//String type 1
//JavaScript's String type is used to represent textual data.
//It is a set of "elements" of 16-bit unsigned integer values  (UTF-16 code units)
//The length of a String is the number of elements in it.
//You can create strings using string literals or string objects.

//You can create simple strings using either single or double quotes:
console.log("Hello world!");
console.log('Hello world!');

//The number after \x is interpreted as a hexadecimal number.
console.log('\xA9');//©

//he Unicode escape sequences require at least four hexadecimal digits following \u
console.log('\u00A9');//©

//Unicode code point 1
//New in ECMAScript 2015. With Unicode code point escapes, 
//any character can be escaped using hexadecimal numbers so that 
//it is possible to use Unicode code points up to 0x10FFFF

console.log('\u{2F804}');//你

//Unicode code point 2: String.fromCodePoint()
//String.fromCodePoint() method returns a string created by using the specified sequence of code points.

console.log(String.fromCodePoint(42));       // "*"
console.log(String.fromCodePoint(65, 90));   // "AZ"
console.log(String.fromCodePoint(0x404));    // Є
console.log(String.fromCodePoint(0x2F804));  // 你
console.log(String.fromCodePoint(194564));   // 你
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307)); //𝌆a𝌇
console.log(String.fromCodePoint(65, 90, 85, 80, 85, 84, 65, 77, 65, 68, 82, 69));   // "AZU"

//Unicode code point 3: String.prototype.codePointAt()
//codePointAt() method returns a non-negative integer 
//that is the Unicode code point value at the given position.

const icons = '☃★♲';
console.log(icons.codePointAt(1));// 9733

//String Objects 1
//The String object is a wrapper around the string primitive data type.

const foo = new String('Cayman'); // Creates a String object
console.log(foo); // [String: 'Cayman']
typeof foo; // Returns 'object'

//String Objects 2
//String objects have counterintuitive behavior
//Use string literals unless you specifically need to use a String object

const firstString = '2 + 2'; 
const secondString = new String('2 + 2'); 
console.log(eval(firstString)); // 4
console.log(eval(secondString)); // [String: '2 + 2']

//String Objects 3
//A String object has one property, length.
//You can access each code unit using an array bracket style.
//You can't change individual characters because strings are immutable array-like objects

const car = 'Cayman 718 GTS';
console.log(car.length);//14

car[0] = 'L'; 
console.log(car[0]); // "C"

//Methods of string 1: charAt, charCodeAt, codePointAt
//Return the character or character code at the specified position in string.

const myString = "ABCDEFGH#";

console.log(myString.charAt(2)); //C
console.log(myString.charCodeAt(2)); //67
console.log(myString.codePointAt(2)); //67

//Methods of string 2: indexOf, lastIndexOf
//Return the position of specified substring in the string or last position of specified substring, respectively.

const myString = "ABCDEFGHA";

console.log(myString.indexOf("A")); //0
console.log(myString.lastIndexOf("A")); //8

//Methods of string 3: startsWith, endsWith, includes
//Returns whether or not the string starts, ends or contains a specified string.

const myString = "ABCDEFGHA";

console.log(myString.startsWith("A")); //true
console.log(myString.endsWith("A")); //true
console.log(myString.includes("FGHA"));//true

//Methods of strings 4: concat
//Combines the text of two or more strings and returns a new string.

const myString1 = "Porsche";
const myString2 = "Panamera";
const myString3 = "Sport Turismo";
const myString4 = "Turbo S";

console.log(myString1.concat(' ', myString2, ' ', myString3, ' ', myString4)); //Porsche Panamera Sport Turismo Turbo S

//Methods of strings 5: fromCharCode, fromCodePoint
//Constructs a string from the specified sequence of Unicode values. 
//This is a method of the String class, not a String instance.

const myString1 = String.fromCharCode(65, 90, 85, 80, 85, 84, 65, 77, 65, 68, 82, 69);
const myString2 = String.fromCodePoint(65, 90, 85, 80, 85, 84, 65, 77, 65, 68, 82, 69);

console.log(myString1.includes(myString2)); //true


//Methods of strings 5: split
//Splits a String object into an array of strings by separating the string into substrings.

const myString1 = "Red,White,Blue";
const myArray = myString1.split(',');

console.log(myArray); //[ 'Red', 'White', 'Blue' ]

//Methods of strings 5: slice
//Extracts a section of a string and returns a new string.

const myCar = "Porsche Panamera Cross Turismo Turbo"
const myCarModel = myCar.slice(myCar.indexOf("Porsche"), myCar.indexOf("Cross") -1);

console.log(myCarModel); //Porsche Panamera

//Methods of strings 6: substring, substr
//Return the specified subset of the string, 
//either by specifying the start and end indexes or the start index and a length.
//substr() is considered a legacy feature in ECMAScript and could be removed from future versions, 
//so it is best to avoid using it if possible.

const myCar = "Porsche Panamera Cross Turismo Turbo"
const myCarModel = myCar.substring(myCar.indexOf("Porsche"), myCar.indexOf("Cross") -1);

console.log(myCarModel); //Porsche Panamera

//Methods of strings 6.1: substring, slice
//Are substring and slice identical?
//Not really, substring swaps its arguements when endIndex > startIndex. Slice don't swap its arguments.

const myCar = "Porsche Panamera Cross Turismo Turbo"
const startIndex = myCar.indexOf("Porsche");
const endIndex = myCar.indexOf("Cross") - 1;

console.log(myCar.substring(endIndex, startIndex)); //Porsche Panamera
console.log(myCar.slice(endIndex, startIndex)); // :Empty string]

//Methods of strings 7: toLowerCase, toUpperCase

let myCar = "718 Cayman";

console.log(myCar.toLowerCase()); //718 cayman
console.log(myCar.toUpperCase()); //718 CAYMAN

//Methods of strings 8: normalize. Describing how unicode works
//Unicode assigns a unique numerical value, called a code point, to each character.
//However, sometimes more than one code point, or sequence of code points, can represent the same abstract character
//the character "ñ" for example can be represented by either of:
//The single code point U+00F1.
//The code point for "n" (U+006E) followed by the code point for the combining tilde (U+0303)

let string1 = '\u00F1';
let string2 = '\u006E\u0303';

console.log(string1);  //  ñ
console.log(string2);  //  ñ

//Methods of strings 8.1: normalize - lenght descripancies with certain characters.
//Since "ñ" the code points are different, string comparison will not treat them as equal. 
//And since the number of code points in each version is different, they even have different lengths.

let string1 = '\u00F1';            // ñ
let string2 = '\u006E\u0303';      // ñ

console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2

//Methods of strings 8.2: normalize
//converting a string into a normalized form common for all sequences of code points that represent the same characters. 
//There are two main normalization forms, one based on canonical equivalence and the other based on compatibility.

let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2

//The argument NFD will normalize to the "Decomposed" version of the unicode representation.
console.log(string1.codePointAt(0).toString(16))//6e
console.log(string1.codePointAt(1).toString(16))//303

//Methods of strings 8.3: normalize NFC
////The argument NFC will normalize to the "Composed" version of the unicode representation.

let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2

console.log(string2.codePointAt(0).toString(16))//f1
console.log(string2.codePointAt(1).toString(16))//undefined

//Methods of strings 9: repeat
//Returns a string consisting of the elements of the object repeated the given times.

let myString = ' Hello World!'
console.log(myString.repeat(3));// Hello World! Hello World! Hello World!

//Methods of strings 10: trim
//Trims whitespace from the beginning and end of the string.

let myString = '   Hello    ';
console.log(myString.trim()) //Hello

//Template literals 1
//Template literals are string literals allowing embedded expressions.
//Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. 
//Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (${expression}).

var myCar = '718 Cayman';

console.log(`Hello my car model is ${myCar}`); //Hello my car model is 718 Cayman

//Template literals 2: Multilines
//Any new line characters inserted in the source are part of the template literal.
//Using normal strings, you would have to use the following syntax in order to get multi-line strings:

console.log('718\n\
Cayman');
// 718
// Cayman

//And with string literals:

console.log(`718
Cayman`);
//718
//Cayman

//And what if we add tthe \n\ to a string literal? It works too.

console.log(`718\n\Cayman`);
//718
//Cayman

//Inernationalization 1: Date and Time formating
//The Intl object is the namespace for the ECMAScript Internationalization API, 
//which provides language sensitive string comparison, number formatting, and date and time formatting. 
//The Intl.DateTimeFormat object is useful for formatting date and time. 

//The following formats a date for English as used in the United States. (The result is different in another time zone.)

const myDate = new Date(2020, 0, 11); //January 11 2020

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };

const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(myDate)); //01/11/20, 12:00 AM PST

//Internationalization 2: Number formating
//The Intl.NumberFormat object is useful for formatting numbers, for example currencies.

const gasPriceFormat = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 2 }).format;

console.log(gasPriceFormat(5.259)); // $5.259

const hanDecimalRMBInChinaFormat = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY',
                          minimumFractionDigits: 2 }).format;

console.log(hanDecimalRMBInChinaFormat(2500.56)); //¥二,五〇〇.五六

//Internationalization 3: Collation
//The Intl.Collator object is useful for comparing and sorting strings.
//For example, there are actually two different sort orders in German, phonebook and dictionary. 
//Phonebook sort emphasizes sound, and it’s as if “ä”, “ö”, and so on were expanded to “ae”, “oe”, and so on prior to sorting.

const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"

//Some German words conjugate with extra umlauts, 
//so in dictionaries it’s sensible to order ignoring umlauts.

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"













