##Week 8 Mechanical - NAME: _______________ &nbsp;&nbsp;&nbsp;&nbsp; __ / 8

### AJAX

##### 1) Use the `fetch` method to make an AJAX `GET /api/jokes` request and `console.log` the result. (worth 2 points!)
<br><br><br><br>
  

### Arrays

```js
var cats = [
	{name: 'Tabby', age: 6},
	{name: 'Chester', age: 2},
	{name: 'Mr. Whiskers', age: 7},
	{name: 'Boots', age: 3},
	{name: 'Fluffy', age: 6}
];
```

##### 2) Add another cat to the end of the array with a name of _Toby_ and has an age of 5:
<br><br>


##### 3) Using a single line of code, assign a new array that contains cats older than 4 to a variable named `oldCats`:
<br>

##### 4) Assign how many cats are in the `cats` array to a variable named `numCats`:

##### 5) Assign the index of the cat with a name equal to _Boots_ to a variable named `bootsIdx`:
<br><br>

### Mongoose (MongoDB)

##### 6) Define a schema, compile it into a model named `Post`, and ensure it is exported.  The schema should have the two properties:

- `content` which is of type String and is **required**.
- `user` which is of type ObjectId (one bonus point if you include additional information on this property definition that enables `populate` to replace the ObjectId with the actual `User` document it references.

```js
var mongoose = require('mongoose');

// define schema below








// compile schema into a model and export the model below


```

##### 7) Assuming the above 	`Post` model, write the Mongoose code to `console.log` out the array of documents that have `content` equal to the text of "cheers".
<br><br><br><br>


