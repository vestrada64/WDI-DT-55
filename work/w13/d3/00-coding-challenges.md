# Four Coding Challenges 

Below are four coding challenges. Whiteboard your solutions to these out with a partner. 

---

## flatten

**Difficulty**: Medium 

## Prompt 

Write a function called `flatten` that takes a **single** multi-dimensional array as an argument and returns the "flattened" array. A flattened array is an array with no sub-arrays inside of it.

## Examples 

```js
flatten([ 1, [2, [3, [4]], 5] ]); //=> [1, 2, 3, 4, 5]
flatten([ [1,2,3], [4,5,6] ]); //=> [1, 2, 3, 4, 5, 6]
flatten([ [], [4,5,6] ]); //=> [4, 5, 6]
flatten([ [[[5]]], [100, 2]]); //=> [ 5, 100, 2 ]
```

---

## hammingDistance

**Difficulty**: Basic 

## Prompt 

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two strings of equal length is the number of positions in which the two strings are different. Write a function called `hammingDistance` that accepts two non-negative, integers in [decimal](https://en.wikipedia.org/wiki/Decimal) format and returns the Hamming distance of the [binary](https://en.wikipedia.org/wiki/Binary_number) representations of these numbers. When the numbers are converted to binary strings they should be strings of the same length. All strings should be left-padded with zeroes so they equal the length of the longer string. For example, 

```js
hammingDistance(1,4)
/*
    The 1 should be converted "001"
    The 4 should be converted to "100"
*/
```

**Hint**: Look into the `toString` method. Note that the `toString` method takes an optional radix argument. 

```js
(3).toString(2) //=> "11" ('11' is 3 in binary)
(5).toStrign(5) //=> "101" ('101' is 5 in binary) 
``` 

## Examples

```js
hammingDistance(1,4) //=> 2
hammingDistance(5,6) //=> 2
hammingDistance(3,3) //=> 0
```

---

## map

**Difficulty**: Basic 

## Prompt

Write a function called `map` that accepts two parameters: a collection (a **collection** is either an array *or* an object in this context) and a callback function. The callback function should itself accept two parameters: 

    1. The **first** parameter should correspond to each *element* or each *value* in the aforementioned collection
    2. The **second** parameter should correspond to the **index** or **key** of each element, depending on whether the collection passed to `map` is an array or object

Here is a description of `map`s [function signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function) as well as its callback's function signature. 

```js
map(arr, cb) //=> should return an Array

/* AND */

cb(elem or value, index OR key) //=> should return a single value (any data type in JS)
```

The callback function provided to `map` should be *applied* to each element in the array or each value in the object and should return a new array of the resulting "transformed" values.

This function is based off of Underscore's [map](http://underscorejs.org/#map) function.

## Examples

```js 
map([1,2,3], x => x + 1); //=> [2,3,4]
map(["cat", "dog", "bird"], function(animal, index) { //=> ['I like cute cats', 'I like cute dogs', 'I like cute birds']
    return `I like cute ${animal}s`;
});
map({ a: 1, b: 2, c: 4}, function(value, key) { //=> [2, 3, 5]
    return value + 1;
});
```

---

## isogram

**Difficulty**: Medium 

## Prompt 

Write a function called `isogram` that determines if a word or phrase is an isogram. An **isogram** (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

The `isogram` function should return `true` is the string that is passed to it is an isogram and `false` otherwise.

## Examples 

```js
isogram("lumberjacks") //=> true
isogram("background") //=> true
isogram("downstream") //=> true
isogram("six-year-old") //=> true
isogram("isograms") //=> false
```