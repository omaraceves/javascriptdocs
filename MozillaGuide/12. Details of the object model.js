//Details of the object model
//As seen on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

//**Class based vs prototype based languages**

//Class-based object-oriented languages, such as Java and C++, 
//are founded on the concept of two distinct entities: classes and instances.

//A prototype-based language, such as JavaScript, does not make this distinction: it has objects. 
//Javascript also has the notion of a prototypical object, 
//an object used as a template from which to get the initial properties for a new object. 
//Any object can specify its own properties, either when you create it or at run time. 
//In addition, any object can be associated as the prototype for another object, 
//allowing the second object to share the first object's properties.

//**Defining a class**

//In class-based languages, you define a class in a separate class definition. 
//In that definition you can specify special methods, called constructors, to create instances of the class. 
//A constructor method can specify initial values for the instance's properties 
//and perform other processing appropriate at creation time. 
//You use the new operator in association with the constructor method to create class instances.

//JavaScript follows a similar model, but does not have a class definition separate from the constructor. 
//Instead, you define a constructor function to create objects with a particular initial set of properties and values. 
//Any JavaScript function can be used as a constructor. You use the new operator with a constructor function to create a new object.

//JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over 
//JavaScript's existing prototype-based inheritance. 
//The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

//** Construction of object hierarchy **

//With class based languages you can typically construct an object hierarchy by 
//using class definitions to define subclasses of existing classes.

//In Javascript Construct an object hierarchy by assigning an object as the prototype associated with a constructor function.

//** Inheritance model **

//In Java Inherit properties by following the class chain.

//In Javascript Inherit properties by following the prototype chain.

// ** Extension of properties **

// Class definition specifies all properties of all instances of a class. Cannot add properties dynamically at run time.

//Constructor function or prototype specifies an initial set of properties. 
//Can add or remove properties dynamically to individual objects or to the entire set of objects that share a prototype object.

//The employee example
//See figure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model/figure8.1.png
//Creating the hierarchy

//Employee has the properties name (whose value defaults to the empty string) and dept (whose value defaults to "general").
function Employee() {
    this.name = '';
    this.dept = 'general';
}

//Manager is based on Employee. It adds the reports property (whose value defaults to an empty array, 
//intended to have an array of Employee objects as its value).

function Manager() {
    Employee.call(this);
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

//WorkerBee is also based on Employee. It adds the projects property (whose value defaults to an empty array, 
//intended to have an array of strings as its value).

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
  }
  WorkerBee.prototype = Object.create(Employee.prototype);
  WorkerBee.prototype.constructor = WorkerBee;

//SalesPerson is based on WorkerBee. It adds the quota property (whose value defaults to 100). 
//It also overrides the dept property with the value "sales", indicating that all salespersons are in the same department.

  function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
 }
 SalesPerson.prototype = Object.create(WorkerBee.prototype);
 SalesPerson.prototype.constructor = SalesPerson;

//Engineer is based on WorkerBee. It adds the machine property (whose value defaults to the empty string) and 
//also overrides the dept property with the value "engineering".

 function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering';
    this.machine = '';
 }
 Engineer.prototype = Object.create(WorkerBee.prototype)
 Engineer.prototype.constructor = Engineer;

 //Creating objects with simple definitions

 var jim = new Employee;
// Parentheses can be omitted if the
// constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
// mark.name is ''
// mark.dept is 'general'
// mark.projects is []

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer;
// jane.name is ''
// jane.dept is 'engineering'
// jane.projects is []
// jane.machine is ''

//Inheriting properties 1: new operator
//When JavaScript sees the new operator, 
//it creates a new generic object and implicitly sets the value of the internal property [[Prototype]] 
//to the value of Porsche.prototype
//and passes this new generic object as the value of the this keyword to the Porsche constructor function.
//The internal [[Prototype]] property determines the prototype chain used to return property values. 
//Once these properties are set, JavaScript returns the new object 
//and the assignment statement sets the variable mark to that object.

function Porsche() {
    this.make = 'Porsche';
}
Porsche.prototype.country = 'Germany';

const cayman = new Porsche;
console.log(cayman.make); //Porsche
console.log(cayman.country); //Germany

//Inheriting properties 2: properties from the proto chain
//This process does not explicitly put values in the cayman object (local values) 
//for the properties that cayman inherits from the prototype chain. 

function Porsche() {
    this.make = 'Porsche';
}
Porsche.prototype.country = 'Germany';

const cayman = new Porsche;
console.log(cayman); //Porsche { make: 'Porsche' }

//When you ask for the value of a property, JavaScript first checks to see if the value exists in that object. 
//If it does, that value is returned. If the value is not there locally, 
//JavaScript checks the prototype chain (using the internal [[Prototype]] property). 
//If an object in the prototype chain has a value for the property, that value is returned. 
//If no such property is found, JavaScript says the object does not have the property.

console.log(cayman.country); //Germany
console.log(cayman.seats); //undefined

Porsche.prototype.seats = '4'; //adding seats property to the proto chain
console.log(cayman.seats); //4

cayman.seats = '2' //overriding assigning a local property

console.log(cayman.seats); //2 -  this displays cayman local value, which takes precedence over prototype value
console.log(Object.getPrototypeOf(cayman).seats);//4 - this displays cayman prototype value

