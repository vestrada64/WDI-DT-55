# The Greatest XOR

The following challenge requires understanding the mechanics of the `XOR` logical operator. Please read below to acquire prerequisite knowledge.

## What Is a Logical Operator 

If you've every used the `OR` or `AND` logical operators then you are already familiar with the basic idea behind all logical operators: they accept one or more operands and perform some operation of them that obeys the laws of [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra). Consider the following JavaScript code:

```js
if (true && true) {
    console.log('Hello World!')
}
```

**Logical operators** typical perform some operation (like `AND`, `OR`, `NOT`) on one or more **operands**. We can write Truth Tables for logical operators. Below is a Truth Table for the `AND` operator:

| AND   | True  | False |
|-------|-------|-------|
| **True**  | True  | False |
| **False** | False | False |

## What is XOR 

`XOR` is one such operator that returns True only when the operands differ. Here is the Truth Table for `XOR`:

| XOR   | True  | False |
|-------|-------|-------|
| True  | False | True  |
| False | True  | False |


### Bitwise XOR

**Bitwise XOR** is a logical operation whose operands are bit strings of equal length. Bitwise `XOR` then performs `XOR` on each individual bit. Consider the following example. Note that the operands are `0101` and `0011` which are both in binary (base-2) format.

```
    0101 (decimal 5)
XOR 0011 (decimal 3)
  = 0110 (decimal 6)
```

The symbol used to represent `XOR` is a circle with a plus sign inside of it (see below).

<img src="./images/xor.png" width="150px" />

## Prompt 

Write a function called `greatestXOR` that accepts an integer as an argument in decimal form. From this point on I will denote this number with *x*. This function should return the number of total possible values of *a* that satisfy **BOTH** the following constraints:

* Constraint 1: *a* `XOR` *x* > *x*
* Constraint 2: 0 < *a* < *x*

Please note the `XOR` above refers to the **bitwise XOR of a and x**. `XOR` is a Boolean logical operator and therefore it's easiest to first convert decimal numbers to binary numbers before `XOR`ing them.

## Examples

```js
greatestXOR(10) //=> 5
```

The 5 values of *a* that pass the constraints are 1,4,5,6 and 7. All of these numbers are between 0 and 10 which makes them pass Constraint 1: 

Constraint 1: *a* `XOR` *x* > *x*

These all pass Constraint 2 as well.

**Note** all numbers below are in binary form:

```
0001 XOR 1010 = 1011
0100 XOR 1010 = 1110
0101 XOR 1010 = 1111
0110 XOR 1010 = 1100
0111 XOR 1010 = 1101
```
Remember that Constraint 2: 0 < *a* < *x*

