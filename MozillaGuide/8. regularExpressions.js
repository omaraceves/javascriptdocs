//Regular Expressions
//As seen in the official docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


//Regular expressions are patterns used to match character combinations in strings. 
//In JavaScript, regular expressions are also objects.

//Creating Regular expressions 1 
//You can create a RE using a regular expression literal, which consists of a pattern enclosed between slashes.
//Regular expression literals provide compilation of the regular expression when the script is loaded. 
//If the regular expression remains constant, using this can improve performance.

const re = /ab+c/;

console.log(re); // /ab+c/

//Creating regular expressions 2
//You can create a RE using calling the constructor function of the RegExp object
//Using the constructor function provides runtime compilation of the regular expression. 
//Use the constructor function when you know the regular expression pattern will be changing, 
//or you don't know the pattern and are getting it from another source, such as user input.

const re = new RegExp('ab+c');

console.log(re); // /ab+c/

//Writing regular expressions 1: Using Simple patterns
//Simple patterns are constructed of characters for which you want to find a direct match. 
//For example, the pattern /abc/ matches character combinations 
//in strings only when the exact sequence "abc" occurs (all characters together and in that order)

const re = new RegExp('718');
const myCar = "Cayman 718";
const myCar2 = "Cayman 918";

console.log(re.test(myCar)); //true
console.log(re.test(myCar2)); //false

//Writing regular expressions 2: Using Special Characters
//When the search for a match requires something more than a direct match, such as finding one or more b's, 
//or finding white space, you can include special characters in the pattern.
//For example, to match a single "a" followed by zero or more "b"s followed by "c", 
//you'd use the pattern /ab*c/: the * after "b" means "0 or more occurrences of the preceding item."

const re = /ab*c/
const myString1 = "abbbbbbc";
const myString2 = "bbbbca";
const myString3 = "abbbb";
const myString4 = "abc";

console.log(re.test(myString1)); //true
console.log(re.test(myString2)); //false
console.log(re.test(myString3)); //false
console.log(re.test(myString4)); //true

//Regular Expressions Assertions 1
//Assertions include boundaries, which indicate the beginnings and endings of lines and words, 
//and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).

const text = 'A quick fox';

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]

//Regular Expressions Assertions 2 : ^
//Matches the beginning of input. If the multiline flag is set to true, 
//also matches immediately after a line break character. 

const re = /^Ch/
const text1 = "Charlie";
const text2 = "Muri";
const text3 = "The Charlie";
const text4 = " Charlie"

console.log(re.test(text1)); //true
console.log(re.test(text2)); //false
console.log(re.test(text3)); //false
console.log(re.test(text4)); //false

//Regular Expressions Assertions 3: $
//Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. 

const re =/t$/
const text1 = "eat well";
const text2 = "eat";


console.log(re.test(text1)); //true
console.log(re.test(text2)); //false

//Regular Expressions Assertions 4: \b
//Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. 
//Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.

const re1 =/\bm/;
const re2 =/m\b/;

const text1 = "moon";
const text2 ="boom";

console.log(text1.match(re1)); //[ 'm', index: 0, input: 'moon', groups: undefined ]
console.log(text1.match(re2)); //null
console.log(text2.match(re1)); //null
console.log(text2.match(re2)); //[ 'm', index: 3, input: 'boom', groups: undefined ]

//Regular Expressions Assertions 5: \B
//The \B metacharacter matches NOT at the beginning/end of a word.


const re1 =/\Bthe\B/

const text1 = "what the f";
const text2 = "the text";
const text3 = " breathe";
const text4 = "therium";
const text5 = "ether";

console.log(text1.match(re1)); 
console.log(text2.match(re1)); 
console.log(text3.match(re1)); 
console.log(text4.match(re1)); 
console.log(text5.match(re1));

//Regular Expression Assertions 6: x(?=y) Look ahead
//Matches "x" only if "x" is followed by "y"
///Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost". 
//However, neither "Sprat" nor "Frost" is part of the match results.

const re1 = /911(?= Turbo| GT3)/

console.log('911 Turbo'.match(re1)); //[ '911', index: 0, input: '911 Turbo', groups: undefined ]
console.log('911 S'.match(re1)); //null
console.log('911 GT3RS'.match(re1)); //[ '911', index: 0, input: '911 GT3RS', groups: undefined ]

//Regular Expression Assertions 6: x(?!y) Negative Look ahead
//Matches "x" only if "x" is not followed by "y". For example

const re1 = /911(?! Turbo| GT3)/

console.log('911 Turbo'.match(re1)); //null
console.log('911 S'.match(re1)); //[ '911', index: 0, input: '911 S', groups: undefined ]
console.log('911 GT3RS'.match(re1)); //null

//Regular Expressions Character Classes 1: .
//Matches any single character except line terminators: \n, \r, \u2028 or \u2029

var re1 = /.y/g; //We are introducing the flag g so all the matches are returned. Without this flag, only the first match will get returned.
var re2 = /y./g; 

console.log('yes made my day'.match(re1));//[ 'my', 'ay' ] 'yes' is not matched because it is not preceded by any single character.


console.log('yes made my day'.match(re2));//[ 'ye', 'y ' ] 'ye' is from 'yes', 'y ' is from 'my '. 'day' is not followed by any single char so it is not matched.

//Regular Expressions Character Classes 2: \d
//Matches any digit (Arabic numeral). Equivalent to [0-9]

var re1 = /\d/g;
var re2 = /[0-9]/g;

console.log('Cayman 718'.match(re1)); //[ '7', '1', '8' ]
console.log('Cayman 718'.match(re2)); //[ '7', '1', '8' ]

//Regular Expressions Character Classes 3: \D
//Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]

var re1 = /\D/g;
var re2 = /[^0-9]/g;

console.log('Cayman 718'.match(re1)); //['C', 'a', 'y','m', 'a', 'n',' ']
console.log('Cayman 718'.match(re2)); //['C', 'a', 'y','m', 'a', 'n',' ']

//Regular Expressions Character Classes 4: \w
//Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]

var re1 = /\w/g;
var re2 = /[A-Za-z0-9_]/g;

console.log('Cayman_718'.match(re1)); //['C', 'a', 'y', 'm', 'a', 'n', '_', '7', '1', '8']
console.log('Cayman_718'.match(re2)); //['C', 'a', 'y', 'm', 'a', 'n', '_', '7', '1', '8']

//Regular Expressions Character Classes 5: \W
//Matches any character that is not a word character from the basic Latin alphabet.

var re1 = /\W/g;
var re2 = /[^A-Za-z0-9_]/g;

console.log('50%'.match(re1)); //[ '%' ]
console.log('50%'.match(re2)); //[ '%' ]

//Regular Expressions character classes 6: Everything else
//For a complete reference of character classes see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

//Regular Expressions character classes 7: Looking for a series of digits
//In the following example we'll be looking for series of exact 3 digits in a string with many digits

const myData = "123 999 5454 789, 88 09 000 55555";
const regex3Digits = /\b\d{3}\b/g;

// \b indicates a boundary
// \d{3} indicates exact 3 digits
// \b indicates another boundary

console.log(myData.match(regex3Digits)); //[ '123', '999', '789', '000' ]

//Regular Expressions character classes 8: Looking for a words starting with a or A
//In the following example we'll be looking for words that start with A or a in a string

const myData = "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const myRe = /\b[aA]\w+/g;

// \b indicates a boundary (i.e. do not start matching in the middle of a word)
// [aA] indicates the letter a or A
// \w+ indicates any character *from the latin alphabet*, multiple times

console.log(myData.match(myRe)); //[ 'Ada', 'and', 'at', 'all' ]

//Regular Expressions Groups 1: [] and [^]
// [] - Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen
// [^] - A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets.

const re1 = /[aeiou]/g;
const re2 = /[^aeiou]/g;
const myString = "abcdefghijklmnopqrstuvwxyz";

console.log(myString.match(re1)); //[ 'a', 'e', 'i', 'o', 'u' ]
console.log(myString.match(re2)); //['b', 'c', 'd', 'f', 'g','h', 'j', 'k', 'l', 'm','n', 'p', 'q', 'r', 's','t', 'v', 'w', 'x', 'y','z']

//Regular Expressions Groups 2: x|y
//Matches either "x" or "y"

const re1 = /cayman|718/g;

console.log('cayman 718'.match(re1)); //[ 'cayman', '718' ]

//Regular Expressions Quantifiers 1: x*
//Matches the preceding item "x" 0 or more times.

var re1 = /go*/g;
console.log('gol'.match(re1)); //[ 'go' ]
console.log('gooooooool'.match(re1)); //[ 'goooooooo' ]
console.log('green'.match(re1)); //[ 'g' ]
console.log('yellow'.match(re1)); //null

//Regular Expressions Quantifiers 2: x+
//Matches the preceding item "x" 1 or more times. Equivalent to {1,}

var re1 = /go+/g;
console.log('gol'.match(re1)); //[ 'go' ]
console.log('gooooooool'.match(re1)); //[ 'goooooooo' ]
console.log('green'.match(re1)); //null

//Regular Expressions Quantifiers 3: x?
//Matches the preceding item "x" 0 or 1 times.

let str = 'Is this color or colour?';
let result = str.match(/colou?r/g);

console.log(result); //[ 'color', 'colour' ]

//Regular Expressions Quantifiers 3.1: ?
//If used immediately after any of the quantifiers *, +, ?, or {}, 
//makes the quantifier non-greedy (meaning that it will stop as soon as it finds a match)
//as opposed to the default, which is greedy (meaning that they try to match as much of the string as possible).

var re1 = /go*?/g;
console.log('gol'.match(re1)); //[ 'g' ]
console.log('gooooooool'.match(re1)); //[ 'g' ]
console.log('green'.match(re1)); //[ 'g' ]
console.log('yellow'.match(re1)); //null

//Regular expressions quantifiers 4: examples
//Words that end with "aaaa"

var wordEndingWithAs = /\w+a+\b/g;
var delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs));
// ┌─────────┬────────────────┐
// │ (index) │     Values     │
// ├─────────┼────────────────┤
// │    0    │ 'Spartaaaaaaa' │
// └─────────┴────────────────┘

//This examples makes use of console.table which outputs a table formed with characters, pretty impressive.

//Regular expressions quantifiers 4: examples
//counting chars

var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{2,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.log(sentence.match(singleLetterWord)); // ["I"]
console.log(sentence.match(notSoLongWord));    // [ 'Why', 'do', 'have', 'to', 'learn', 'table' ]
console.log(sentence.match(loooongWord));      // ["multiplication"]

//Regular expressions quantifiers 5: examples
//optional chars

var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{2,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.log(sentence.match(singleLetterWord)); // ["I"]
console.log(sentence.match(notSoLongWord));    // [ 'Why', 'do', 'have', 'to', 'learn', 'table' ]
console.log(sentence.match(loooongWord));      // ["multiplication"]


//We covered regular expressions, especial chars in regular expressions and several examples, however we didn't exhausted the documentation like we did on previous sections.
//for more regular expressions ask the web or see the link on top. It is good to know how 
//you can use regular expressions, but in most cases you can cheat asking the web how to put together a RE or translating a RE. You will save a lot of time. This is of couse the case
//when you're working on an isolated examples such as validation. If you decide to study computation and lenguistics or grammar recognition, congratulations, then it is expected for you
//to be a RegEx guru and I think that goes way beyond these notes.








