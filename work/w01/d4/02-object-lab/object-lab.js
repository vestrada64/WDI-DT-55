/* Q1 -----------------------------------------------------------------*/

var obj1 = { cat: "cute" };

console.log(obj1.cat)

/* Q2 -----------------------------------------------------------------*/

// Update obj2 below
var obj2 = {boo: "moo"};
console.log(obj2.boo)




/* Q3 -----------------------------------------------------------------*/

var a = {a: "cat"}; // a is really equal to a memory location where the object is stored.
var b = a;
a.soup = "Clam Chowder";

var isEqual = a === b
console.log("isEqual is", isEqual)


/* Q4 -----------------------------------------------------------------*/

var zestyObject = {};
var spicyObject = {};

var bar = 2 + 2;

zestyObject.bar = "four"
spicyObject[bar] = "four"

// Replace /*?*/ with correct values
var dot = zestyObject[4] === undefined
var bracket = spicyObject[4] === "four"
console.log("The value of dot is", dot)
console.log("The value of bracket is", bracket)

/* Q5 -----------------------------------------------------------------*/

function reverseProperties(obj) {
  var reverse = {}
  for (var key in obj) {
    reverse[obj[key]] = key

  }

    return reverse
}

console.log(reverseProperties({my: "name", is: "jon"}))


/* Q6 -----------------------------------------------------------------*/

var fakeCarDealerData = {
  "dealerId": 34,
  "cars": ["Mazda", "Toyota", "Hyundai"],
  "employees": {
    "managers": [
      {
        "name": "Steve",
        "role": "Car Manager"
      },
      {
        "name": "Bill",
        "role": "Floor Manager"
      }
    ],
    "interns": [
      {
        "name": "Sheila",
        "role": "Tech Intern"
      },
      {
        "name": "Barb",
        "role": "Car Intern"
      }
    ]
  }
}

// Replace /*?*/ with correct values
var dealerId = fakeCarDealerData.dealerId === 34
var secondCar = fakeCarDealerData.cars[2] === "Hyundai"
var managerName = fakeCarDealerData.employees.managers[0].name === "Steve"
var numOfInterns = fakeCarDealerData.employees.interns.length === 2
console.log("dealerID is", dealerId)
console.log("second car is", secondCar)
console.log("interns length is", numOfInterns)


/* Q7 -----------------------------------------------------------------*/

// console.log(getCharacterNumbers("fox"))
// { "f": 1, "o": 1, "x": 1}

function getCharacterNumbers(str){
  var freq = {}
  for (var i=0; i<str.length; i++){ 
  freq[str[i]] = 0
  }
// Step 2

for (var f=0; f<str.length; f++) {
  freq[str[f]] = freq[str[f]] + 1
}

 return freq
}

console.log("This should be {a: 2,b: 1, c: 1}" , 
 getCharacterNumbers('aabc'))


/* Q8 -----------------------------------------------------------------*/

var person = {
  name: "Jon"
}
console.log("Hello " + "Jon")

