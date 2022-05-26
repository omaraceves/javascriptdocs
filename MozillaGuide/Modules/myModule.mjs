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