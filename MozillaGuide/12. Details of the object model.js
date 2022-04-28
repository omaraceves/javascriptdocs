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

//Employee has the properties name (whose value defaults to the empty string) and dept (whose value defaults to "general").

//Manager is based on Employee. It adds the reports property (whose value defaults to an empty array, 
//intended to have an array of Employee objects as its value).

//WorkerBee is also based on Employee. It adds the projects property (whose value defaults to an empty array, 
//intended to have an array of strings as its value).

//SalesPerson is based on WorkerBee. It adds the quota property (whose value defaults to 100). 
//It also overrides the dept property with the value "sales", indicating that all salespersons are in the same department.

//Engineer is based on WorkerBee. It adds the machine property (whose value defaults to the empty string) and 
//also overrides the dept property with the value "engineering".





