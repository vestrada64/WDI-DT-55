# Advanced Topics in Ruby 

## File I/O 

* The `IO` class handles all input and output streams 
* `IO` objects are readable and/or writable connections to disk files
* In Ruby this is the way you treat objects: You send them messages and objects execute these messages and send the results back to you 
* Ruby gives you three constants that you can use: 
    - `STDERR` 
    - `STDOUT` 
    - `STDIN` 

## Modules 

Modules don't have instances, instead you specify that you want to add a module's functionality to a class or an object. 

Module's get "mixed-into" classes. The result of mixing in a module is that instances of the class have access to the instance methods defined in the module.

The main difference between inheritence and mixing in a module is that a class can mix in multiple modules but a class can only inherit from one superclass.
