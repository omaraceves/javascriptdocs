//Exporting module features
//he first thing you do to get access to module features is export them. 
//This is done using the export statement.
//The easiest way to use it is to place it in front of any items you want exported out of the module

export const makeName = 'Porsche';

export function createPorsche(name) {
  return {
    make: makeName,
    name: name,
  };
}

function printPorsche() {
  console.log('Porsche');
}

//Default exports versus named exports
//The functionality we've exported so far has been comprised of named exports — each item (be it a function, const, etc.) has been referred to by its name upon export, 
//and that name has been used to refer to it on import as well.
//Default export this is designed to make it easy to have a default function provided by a module.
//The function printPorsche will be exported as default.

export default printPorsche; //Note the lack of curly braces.