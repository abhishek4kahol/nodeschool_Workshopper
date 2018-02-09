# nodeschool_Workshopper
this repository consist of solutions of nodeschool problem packs

Module, Exports and Require
* A module is a discrete program, contained in a single file in Node.js. Modules are therefore tied to files, with one module per file.

* module.exports is an object that the current module returns when it is "required" in another program or module.

* modules allow us to compose bigger programs out of smaller pieces. Modules become the basic building blocks of the larger piece of software that collectively, they define.

* Under the covers, the module keeps track of itself through an object named module. 'module' refers to the object representing the current module. This object holds metadata about the module, such as the filename of the module, as well as the module's id.

* In Node.js, the practice of making a module's code available for other modules to use is called "exporting" values.

**Question #1: How does a module share its code with other modules?**
The module object has a special property, called exports, which is responsible for defining what a module makes available for other modules to use. In Node.js terminology, module.exports defines the values that the module exports. Remember that "exporting" is simply making objects or values available for other modules to import and use.
Therefore, we can export any value or function or other object we would like to export by attaching it as a property of the module.exports object.


* In order to import the module, we need to use a special keyword used to import      things, and it is called require. Where module.exports lets us set things for export, require lets us specify modules to be imported into the current module.

* The functionality for importing modules is provided in a module named require, available on the global scope. This module's main export is a function to which we pass the path of the module we would like to import. For instance, to import a module defined in music.js, we would require('./music'), where we have specified the relative path.
