## More JS Practice 

Below are 6 coding challenges. These coding challenges range in complexity - from easiest to most difficult - in ascending order. Do as many of these as you can in the next 75 minutes.

### add

Write a function called `add` that takes 2 numbers as arguments, computes their sum and returns this sum.

For example,  

`add(1,2)` #=> `3`

### arrayToObj

Write a function called arrayToObj that takes an array that has an *even* number of elements (all elements are strings) and converts each adjacent element into a key-value pair property on an object. 

`arrayToObj(["a", "cat", "b", "dog"]) #=> {a: "cat", b: "dog"}`

### filterEvens 

Write a function called `filterOutEvens` that takes an array of integers as input and returns a new array in which all even integers are removed.

For example, 

`filterOutEvens([1,2,3,4,5,6])` #=> [1,3,5]

### getProductsOfAllIntsExceptAtIndex

Write a function `get_products_of_all_ints_except_at_index` that for each element you want to find the product of every integer except the integer at that index.

`get_products_of_all_ints_except_at_index([1, 7, 3, 4])` #=>   `[84, 12, 28, 21]`

The above output was computed as follows `[7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]`

### permutation_palindrome 

Write a function called `permutation_palindrome` that checks whether any permutation of an input string is a palindrome. Assume that the input string contains only lowercase letters.

For example, 

`permutation_palindrome("ivicc")` #=> true

### recurse_reverse

Write a function called `recurse_reverse` that reverses a string recursively.