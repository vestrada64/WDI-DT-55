# Implement map in Ruby

## Introduction 

To solve this question you must have a basic understanding of [Procs in Ruby](http://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/). A Proc is essentially a way of passing a Ruby method any block of code. 

An an example, let's implement a function like JavaScript's `forEach` in Ruby. Remember that in JS `forEach` is a method on the Array prototype and applies a callback to each element of an array. To apply a block of code to each element in an array in Ruby I would use a Proc: 

```ruby 
def forEach(array, &block)
    for i in array
        block.call(i)
    end 
end

forEach [1,2,3], &Proc.new{ |x| puts x+1 } #=> This would log out 2 then 3 then 4
```

## Prompt 

Implement a function called `map` in Ruby that takes 2 arguments: 

    1. An array 
    2. A Proc

`map` should iterate over the array and apply the Proc to each element in the array in turn. `map` should then return a *mapped* array.

## Example Usage 

```ruby
map([1,2,3], &Proc.new{ |x| x * x }).inspect #=> [1,4,9]
map(["hi", "ho", "lets", "go"], &Proc.new{ |y| y.capitalize }).inspect #=> ["Hi", "Ho", "Lets", "Go"]
```