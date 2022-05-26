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

//Read through: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_features_into_your_script
