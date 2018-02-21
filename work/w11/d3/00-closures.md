# Walk-thru of JavaScript Closures

## Roadmap

- Intro
- Review of Scope
- Inner Functions
- BAM! We have Closure
- Definition of a Closure
- Examples of Closures
- Closing

## Intro

This discussion on closures is an important one because they are a key feature of languages with first-class functions such as JavaScript and Python.

More importantly, you will likely be asked about them in technical interviews.

Going in, realize that closures are not explicitly created; code like this<br>`var c = new Closure();`<br>does not exist.

But they come into and out of existence when JavaScript programs execute.

Let's see how...

## Review of Scope

Understanding scope is fundamental to the concept of closures.

**?: What is scope?**

**?: How is a new scope created in JavaScript?**

**?: What happens when a function's code accesses a variable or function that is not in its local scope?**

**?: When is a scope destroyed and marked for garbage collection?**<br>*unless...*

## "Remembering" Scope Using Inner Functions

Let's first look at a very basic function:

```js
function f() {
  var x = 5;
  console.log(x);
}
```

**?: When we invoke this function, what will the lifetime of the variable `x` be?**

Now let's refactor this code by including a _nested_ function inside of function `f()`:

```js
function f() {
  var x = 5;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}
```

**?: Have we changed the functionality of `f()` by adding the nested function?**

**?: What scope is the variable `x` in?**

Now let's look at a way that we can invoke the function `inner()` from the outside:

```js
function f() {
  var x = 5;
  
  function inner() {
    console.log(x);
  }
  
  return inner;
}

var fun = f();  // fun now references the "inner()" function
fun();
```

**?: Since a function's scope is destroyed after a function has finished executing, should the scope of `f()` exist when we invoke `fun()`?**

## BAM! We have Closure

Why does the `console.log(x)` work as expected if the scope that variable `x` lives in has been destroyed?

Because a **closure** has been created by the fact that the nested function, `inner()`, references `x`, and `inner()` is still in existence thanks to the external reference to it by the variable `fun`.

**?: If the variable `fun` went out of scope, or was reassigned so that it did not reference function `inner()` anymore, what do you think would happen to the closure?**

BTW, the closure can link through the scope chain ending with the global scope:

```js
var y = 10;

function f() {
  var x = 5;
  
  function inner() {
    console.log(x);
    console.log(y);
  }
  
  return inner;
}

var fun = f();  // fun is now the inner function
fun();
```

If we modify `y`, we'll see that `fun()` logs the updated value.

## Definition of a Closure

So, when you are asked, "What the heck is a closure?"

Here's a viable answer that's not too technical:

>A closure is a way for JavaScript to "remember" scope.

A follow-up question might be, "How or when is a closure created?"

**?: What is a viable answer?**

A little more terminology: The variables accessible by a function that are not defined locally are called _free variables_.  They are called free variables because the function gets them for free :)

**?: What are the `inner()` function's free variables?**

In summary, closures are created normally when we write JavaScript - they are not explicitly created.

**They come into existence when a function continues to reference its free variable(s)  after its enclosing function has finished execution.**

Closures are being created and destroyed regularly by the JS libraries and frameworks such as jQuery and AngularJS; as well as throughout NodeJS.  

## Examples of Closures

Closures typically are more important to the creators of libraries and frameworks, however, let's take a look at a few examples of how we might create them.

### Example 1

```js
function adderFactory(fixedOperand) {
  
  return function(secondOperand) {
    return fixedOperand + secondOperand;
  };

}

var add5 = adderFactory(5);
add5(2) // returns 7

var addTwenty = adderFactory(20);
addTwenty(100) // returns 120
```

Note here that `adderFactory()` returns an anonymous function expression, there's no need that the inner function be a function definition.

### Example 2

```js
function elapsedTimeFactory() {
  var startTime = Date.now();

  return function() {
    return Date.now() - startTime;
  };
}
```

**?: How many of these timers could we create?**

**?: What is the inner function's free variable(s)?**

### Example 3

Let's run the following function that creates 5 hyperlinks:

```js
function addLinks() {
  for (var i=0; i < 5; i++) {
    var link = document.createElement('a');
    link.innerHTML = 'Link ' + i + '<br>';
    link.onclick = function () {
      alert(i);
    };
    document.body.appendChild(link);
  }
}
```

All looks well, however, click a link and you might be surprised at the number alerted.

**?: Why isn't the expected value of `i` being alerted?**

Here's a version of `addLinks()` that uses closures to achieve the desired results:

```js
function addLinks() {
  for (var i = 0; i < 5; i++) {
    var link = document.createElement('a');
    link.innerHTML = 'Link ' + i + '<br>';
    link.onclick = function(i) {
      return function() {
        alert(i);
      };
    }(i);
    document.body.appendChild(link);
  }
}
```

This is a useful technique for "capturing" the free variables' values when a function will execute later, including asynchronous functions like `setTimeouts`.

Note how the click handler function is now being returned by an IIFE that creates a new scope containing the free variable (parameter `i`) which turns into a closure after the IIFE is done executing.

As a reminder, a function's parameters are local variables within the function.

>Note: Although this is a great demo of closures in action, the `let` keyword of ES2015 provides a more elegant solution to the problem by simply replacing `var` with `let` in the `for` loop!

### Example 4

Now let's see how closures can be used to implement "private" variables in an object or "module":

```js
var fourLetterWord = function() {
  var _fourLetterWord = 'love';
  
  return {
    getWord() {
      return _fourLetterWord;
    },
    setWord(newWord) {
      if (newWord.length === 4) _fourLetterWord = newWord;
    },
    version: 1.0
  }
}();

fourLetterWord.getWord() // love
fourLetterWord.setWord('six');
fourLetterWord.getWord() // love
fourLetterWord.setWord('four');
fourLetterWord.getWord() // four
```

Note that the above code is taking advantage of ES2015's shortcut properties for defining the `getWord()` and `setWord()` methods.  Here is a pre-ES2015 version:

```js
var fourLetterWord = function() {
  var _fourLetterWord = 'love';
  
  return {
    getWord: function() {
      return _fourLetterWord;
    },
    setWord: function(newWord) {
      if (newWord.length === 4) _fourLetterWord = newWord;
    },
    version: 1.0
  }
}();
```

Note that there's no way to access the private variable `_fourLetterWord `.

If `_fourLetterWord` were a regular property, it could be changed to a word of any length, not just four letter words :(

## Closing

Closures are not complicated, however, they are a mystery to many programmers and even those familiar with them have a hard time explaining them.

Be sure to refresh your memory of their definition and use before each tech interview.