# nCr Table 

The **combination** of a set of *n* elements is how many sub-selections of size *r* can you make from the set of *n* elements. 

```
         n!
nCr = --------
      r!*(n-r)!
```

For, example let's consider these five letters: A, B, C, D and E. How many 3 letter combinations can we create from these five letters:

* A-B-C
* A-B-D
* A-B-E
* A-C-D
* A-C-E
* A-D-E
* B-C-D
* B-C-E
* B-D-E
* C-D-E

## Prompt

Write an algorithm called `ncr(n,r)` that computes the combination of *r* selections from *n* total things. Essentially your goal is to simply write a function that computes the number of combinations of n things using the equation below: 

```
         n!
nCr = --------
      r!*(n-r)!
```

## Sample Outputs 

```ruby
ncr(5,3) #=> 10
ncr(10,2) #=> 45
```