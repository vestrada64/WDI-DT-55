# CS Topic: Building a Simple Interpreter 

> *If you don't know how compilers work, then you don't know how computers work* - Steve Yegge

## What is an Interpreter?

The **syntax** of a language is the arrangement of characters to form correct statements or expressions 

The **semantics** is the meaning of those statements 

### Parsing 

A **parser** takes an input program in the form of a string, verifies that this program obeys the syntactic rules of the language and translates the language to an **abstract syntax tree**. The abstract tree closely mirrors the nested structure of statements or epressions in the source program. 

Parsing is typically broken up into two parts: 

1. lexical analysis - the input string is broken up into a sequence of **tokens** 
2. syntactic analysis - the tokens are assembled into an abstract syntax tree 

### Execution 



## What is the Language We are Building an Interpreter For?

We are building a language called Calculator Language or CalcLang. This is a simple language with few syntactic featurues: 


## Sources 

This lecture was based off of Peter Norvig's tutorial where he [built](http://norvig.com/lispy.html) a Lisp interpreter.