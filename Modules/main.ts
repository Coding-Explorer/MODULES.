///////////////////MODULES////////////////////.
/* Module is a file that contains a collection of related code.
   The code in each module has access to the variables and functions defined in other modules.
   Modules are used to organize and separate code based on functionality.
   Modules can be imported and used by other parts of the code.
   A module is designed with the idea to organize code written in typescript. Modules are divided into internal
   modules and external modules */
   // External modules are modules that are not part of the current typescript file but are imported from another file.
   // Internal modules are modules that are defined within the current typescript file.
   // Typescript modules allow you to organize your code into separate files and modules, making it easier to maintain and reuse code.
   // A module is simply a file that contains a collection of related code, such as functions, classes, interfaces, and enums.
   // By exporting these pieces of code , you can import and use them in other modules, promoting code reusability
   // and modularity.
   // Module is a file that exports functionality to be used in other files , encapsulating related code and 
   // making it easier to maintain and reuse.
   // A module is defined using the export keyword followed by the name of the module.

   export let nameFunc = (value: string):void => {
      console.log("Hello " + value + "!");
   }
   // The export keyword is used to export a function, class, interface, or variable from a module so that it can be used in other modules.
   export function add(a: number, b: number): number {
      return a + b;
   }

   export function subtract(a: number, b: number): number {
      return a - b;
   }

   export function multiply(a: number, b: number): number {
      return a * b;
   }

   export function divide(a: number, b: number): number {
      return a / b;
   }

   export function square(a: number): number {
      return a * a;
   }

   export function cube(a: number): number {
      return a * a * a;
   }








