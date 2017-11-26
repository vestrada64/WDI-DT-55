# Decimal to Binary 

This prompt will test your basic understanding of binary numbers.

## Prompt 

Write a function called `decimal-to-bin` that accepts a decimal number as an argument and returns a string representation of this decimal number in binary form.

Here is a table of the first 12 decimal digits and their corresponding binary representation.

| Decimal | Binary |
|---------|--------|
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |
| 11      | 1011   |
| 12      | 1100   |

## Sample Output 

```rb
decimal-to-bin(10) #=> '1010'
decimal-to-bin(5) #=> '101'
```

## Implementation Notes 

The algorithm to solve this relies on modular arithmetic and floor division. If we think about converting 5 to binary we can do so by doing the following:

1. Is the remainder of 5 divided by 2 a "0" or a "1"?

                            5 % 2 = 1 

2. Now let's divide 5 by 2 and round down to the nearest integer.

                            5 // 2 = 2

3. The result of Step (2) was 2 so let's check to see if that has a remainder when divided by 2.

                            2 % 2 = 0

4. Now let's divide 2 by 2 and round down to the nearest integer.

                            2 // 2 = 1

5. Now that we have divided our number to be below 2 we can create our binary string using steps 1, 3 and 4.

                            "101" (string representation of 5 based-2)
