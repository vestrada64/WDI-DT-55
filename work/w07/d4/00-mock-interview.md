# Mock Coding Interview 

Here are two coding challenges that are similar to something you might face in a technical interview.

## Question 1: `sumDigits`

Write a function called `sumDigits` that takes a non-negative integer as input and returns the sum of the integers in the number. For example the number 66 would yield 12 when passed to `sumDigits`. 

Here are some examples of how this function should be used: 

```js
sumDigits(123) //=> returns 6
sumDigits(6004) //=> returns 10
sumDigits() //=> returns "Please provide a number
```

The modulo operator (`%`) and `Math.floor` are useful for this project.

```js
198 % 10 //=>  8 
Math.floor(198/10) //=> 19
```

**Bonus**: Do this recursively.

## Question 2: `coins`

Write a function called `coins` that take as input an amount of money in cents and outputs the minimum number of coins necessary to have that value. Assume that the coins available are quarters, dimes, nickels, and pennies.

Here are some examples of how this function should be used: 

```js
coins(25) //=> returns 1
coins(56) //=> returns 4
coins(192) //=> returns 11
```

## Conclusion

Good luck!

