//It has made sense in recent years to start thinking about providing mechanisms for splitting 
//JavaScript programs up into separate modules that can be imported when needed.
//Use of native JavaScript modules is dependent on the import and export statements;

//Since we are using node.js to run our examples it is necessary to use the extension .mjs in our modules.
//this ensures that module files are parsed as a module. Otherwise we wouldn't be able to run our code the way we've been doing it
//the entire guide. Ctrl + Alt + n

//myModule.mjs will include all export examples that we'll be referencing here on main.js

//Importing features into your script
//Once you've exported some features out of your module (see myModule.mjs), you need to import them into your script to be able to use them.

import { makeName, createPorsche } from './myModule.mjs'; //here . represents the path: MozillaGuide/Modules

let myPorsche = createPorsche('Cayman 718'); 
console.log(makeName); //Porsche
console.log(myPorsche); //{ make: 'Porsche', name: 'Cayman 718' }

//Differences between Modules and Standard scripts
//1. You can only use import and export statements inside modules, not regular scripts.

//2. You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a file:// URL), 
//you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.

//3. You might get different behavior from sections of script defined inside modules as opposed to in standard scripts. 
//This is because modules use strict mode automatically.

//4. Modules are only executed once, even if they have been referenced in multiple <script> tags.

//5. Module features are imported into the scope of a single script 
//— they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, 
//and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, 
//but you'll not be able to use some of the debugging techniques you might have expected to use.

//Default exports versus named exports
//The function printPorsche was exported as default from myModule, thus, we can import it without specifying its name since this is
//a default export not a 'named' export.

import myDefaultImportFunction from './myModule.mjs'; //Note the lack of curly braces

//The line above is equivalent to: import {default as myDefaultImportFunction} from './modules/square.js';

myDefaultImportFunction(); //Porsche

//Modules and classes
//You can avoid conflicts in your code by grouping functionality into classes, 
//and is especially useful if you've already got your module code written in an object-oriented style.

import {Porsche} from './myModule.mjs'; 

const myPorsche = new Porsche('Cayman 718', 4);
myPorsche.printPorsche(); //Porsche Cayman 718