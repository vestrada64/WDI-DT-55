## balancedBraces

**Difficulty**: Medium 

## Prompt 

Write a function called `balancedBraces` that accepts a single string as argument. The input string is composed entirely of parentheses (`(` and `)`), brackets (`[` and `]`) and/or curly braces (`{` and `}`). The `balancedBraces` function should return `true` if the braces are "matched" and `false` if they are not "matched".

Two brackets are considered to be a "matched" pair if the opening bracket (i.e., `(`, `[`, or `{`) occurs to the left of a closing bracket (i.e., `)`, `]`, or `}`) of the exact same type. There are three types of matched pairs of brackets: `[]`, `{}`, and `()`.

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, `{[(])}` is not balanced because the contents in between `{` and `}` are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, `(`, and the pair of parentheses encloses a single, unbalanced closing square bracket, `]`.

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:

* It contains no unmatched brackets.
* The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

## Examples 

```js
balancedBraces("(){}[]")// => true
balancedBraces("([{}])")// => true
balancedBraces("(}")// => false
balancedBraces("[(])")// => false
balancedBraces("[({})](]")// => false
```
