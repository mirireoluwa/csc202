//exercise 1: Printing a string
console.log('testing')

/*exercise 2: Declaration of variables and 
he Assignment of integer values to variables*/
var a;
a = 10;
b = 11;
var c = 12;
console.log(a);
console.log(b);
console.log(c);

//exercise 3: Mutability of variables
a = 13;
console.log(a);

a = "Another value which is a string";
console.log(a);

a = true;
console.log(a);

//exercise 4: Primitive Value types
var d;
console.log(d);
a = null;
console.log(a);

//exercise 5: arithmetic operations
a = 10;
b = 20;
c = a + b;
console.log(c);
console.log(b - a);
console.log(b / a);
console.log(a * b);
console.log(b % a);
console.log(a ** 2);
a++;
console.log(a);
b--;
console.log(b);

//exercise 6: string operations
firstName = "Mirireoluwa";
lastName = "Olukanni";
fullName = firstName + " " + lastName; //concatenation
console.log(fullName)

///exercise 7: comparison operations
a = 10;
a < 11;
console.log(a < 11);
var test = a > 20;
console.log(test);
a >= 10;
a <= 20;
a == 10;
a === "10";

//logical operations
a = 1;
b = 2;
console.log(a < 3 && b < 3);
console.log(a > 3 && b < 3);
console.log(a > 3 || b < 3);
console.log(!(a > 3));
console.log(!(a < 3) || !(b > 3));

//ternary (conditional) operations
var age = 17;
var adult = (age > 20) ? "Yes" : "No";
console.log(adult);

//bitwise operations
5 << 1;
5 << 2;
5 << 3;
40 >> 1;
40 >> 2;
40 >> 3;

//the typeof operator
typeof "Mirireoluwa Olukanni";
typeof false;
typeof (10 + 10);
typeof 33;

//the if/else statement
var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge) {
  console.log("Not eligible to vote");
}
else {
  console.log("Eligible to vote");
}

//the switch statement
var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Sorry, day of the week numbered" + dayOfTheWeekCount + "does not exist")
} //The switch statement prints out Sunday

var ageRange = "below 13";
switch (ageRange) {
  case "below 1":
    console.log("Infant");
    break;

  case "below 13":
    console.log("Pre-teen");
    break;

  case "below 30":
    console.log("Teenager");

  default:
    console.log("Adult");
} //This switch statement should print out Pre-teen

// the for loop
for (var c = 1; c < 11; c++) {
  if (c == 7) continue;
  console.log(c);
}

//the while loop
var n = 0;
while (n != 5) {
  n = Math.random();
  n = n * 10;
  n = Math.floor(n);
  console.log(n);
}

//the do...while loop
var x = 0;
do {
  x += 1;
  console.log(x);
} while (x < 10)

//using readline-sync
/*var readlineSync = require('readline-sync');
var answer;
do {
  answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
  console.log('You asked me to' + answer);
} while (answer != 'exit')*/


/*var readline = require('readline');
var readlineAsync = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

/*function recursiveReadLineAsync() {
  readlineAsync.question('What should I do? [Type "exit" for me to quit]:'),
    function (answer) {
      console.log('You asked me to' + answer)
      if (answer == 'exit')
        return readlineAsync.close();
      recursiveReadLineAsync();
    }
};

recursiveReadLineAsync();

//function declaration
function addTwoNumbersA (number1, number2)
{
  return number1 + number2;
}

/*var addTwoNumbersB = function (number1, number2)
{
  return number1 + number2;
}*/

//console.log(addTwoNumbersA(20, 30));
//console.log(addTwoNumbersB(20, 30));
/*var addTwoNumbersA (number1, number2)
{
  return number1 + number2;
}

function square (number)
{
  number = number**2;
  return number;
}*/

/*var number = 20;
var numberSquared = square(number);
console.log(numberSquared);
console.log(number);*/


function multiplier()
{
  var product = 1;
  for (var x = 0; x < arguments.length; x++)
    {
      product = product * arguments[x];
    }

    return product;
}
console.log(multiplier(10, 30));
console.log(multiplier(10, 30, 10));

var accumulatedTotal = 0;
function sum (number1, number2)
{
  var total = number1 + number2;
  accumulatedTotal = accumulatedTotal + total;
  return total;
}

console.log(sum(2, 3));
console.log(sum(10, 20));
console.log(accumulatedTotal);

//array literal
var vehicles = ["car", "lorry", "trailer"];
console.log(vehicles);

var basket = [];
console.log(basket);

var myExpressions = ["car", 2+3, 10, true];
console.log(myExpressions);
console.log(myExpressions[0]);
console.log(myExpressions[1]);
console.log(myExpressions[2]);
console.log(myExpressions[3]);

myExpressions[3] = false;
console.log(myExpressions[3]);

var myExpressions = ["car",, 10, true];
console.log(myExpressions[1]);

//object literal
var myObject = {
  name: {
    firstName: "Mirireoluwa",
    surname: "Olukanni"
  },
  expertise: "Software Design and Development",
  languages: ["Python", "JavaScript", "Java", "C++"],
  isRetired: false,
  favouriteCombination: 3 + 3
}

console.log(myObject.name);
console.log(myObject['name']);

console.log(myObject.expertise);
console.log(myObject['expertise']);

console.log(myObject.languages);
console.log(myObject['languages']);

console.log(myObject.isRetired);
console.log(myObject['isRetired']);

console.log(myObject.favouriteCombination);
console.log(myObject['favouriteCombination']);

myObject.favouriteCombination = 9 + 9;
console.log(myObject.favouriteCombination);

myObject.newProperty = "another property added";
console.log(myObject);

var phones = {
  make: 'iPhone',
  mode: '11',
  cost: 500
}
console.log('make' in phones);
delete phones.make;
console.log('make' in phones);

function Person(firstName, lastName, height, weight)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;
  this.wieght = weight;

  this.getFullName = function() {return this.firstName + " " + this.lastName}
}

var person1 = new Person("Mirireoluwa", "Olukanni", 1.72, 80);
var person2 = new Person("Rehwa", "Chikere", 1.7, 70);

person1.constructor;
Person.prototype.complexion = "dark brown";

person1.complexion = "light brown";
console.log(person1.firstName);
console.log(person1.getFullName());
console.log(person2.firstName);
console.log(person2.getFullName());
console.log(person1.complexion);
console.log(person2.complexion);

Person.prototype.getComplexion = function ()
{
  return this.complexion
}

Person.prototype.setComplexion = function (complexion)
{
  this.complexion = complexion;
}

person1.setComplexion('black');
console.log(person1.getComplexion());


//Function that calculates present age
function calculateAge(birthday)
{
  var today = new Date();
  var difference = today - birthday;

  var yearEquivalent = new Date(difference).getFullYear();
  return yearEquivalent - 1970;
}

var birthday = new Date (1980,12,30);
console.log(calculateAge(birthday));

//function that simulates thread sleep for a given period of time
function sleep(milliseconds) {
  console.log("Going to sleep for " + milliseconds + "milliseconds...")
  var begin  = new Date().getTime();
  do{
    nextTime = new Date().getTime();
  }while(nextTime - begin < milliseconds)
    console.log("Sleep over");
}
sleep(3000);

//RegExp (Regular Expression)
var re = new RegExp('xyz');
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
console.log(re.test(searchString));

console.log(re.exec(searchString));
console.log(searchString.search(re));

var re = new RegExp('xyz', 'g');
var result;
while((result = re.exec(searchString)) != null)
  {
    //loop until no more match
    //display the index found and the string
    console.log("Index position " + result.index + "contains" + result[0]);
  }

//JSON String
var personJSON1 =' { \
  "firstName" : "Mirireoluwa", \
  "lastName" : "Olukanni", \
  "complexion" : "brown", \
  "heightinMeters" : 1.7, \
  "programmer" : true, \
  "olympicMedal" : null, \
  "degrees" : ["BSc"] \
} '

var personJSON2 =' { \
  "names" : { \
  "firstName" : "Mirireoluwa", \
  "lastName" : "Olukanni" \
  }, \
  "complexion" : "brown", \
  "heightinMeters" : 1.7, \
  "programmer" : true, \
  "olympicMedal" : null, \
  "degrees" : ["BSc"] \
}'

//JSON Object
var p1Object = JSON.parse(personJSON1);
console.log(p1Object);

var p2Object = JSON.parse(personJSON2);
console.log(p2Object);

//conversion of new objects back to the JSON string equivalent using the JSON.stringify() method
var p1JSON = JSON.stringify(p1Object);
var p2JSON = JSON.stringify(p2Object);


//String Object
var x = 'This is a string literal';
var y = new String('This is a String object');
var z  = x + " and " + y;

console.log(x);
console.log(y);
console.log(y.toString());
console.log(z);
console.log(x.length);
console.log(x.constructor);

//search() and indexOf
var x = 'Let us search this text for mirireoluwa. If Mirireoluwa is found, ...';

var searchTerm = 'mirireoluwa';
var matchIndex;
var startIndex = 0;
while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1)
  {
    console.log(matchIndex);
    startIndex = matchIndex + 1;
  }

  var regex = /mirireoluwa/gi;
  var x = 'Let us search this text for mirireoluwa. If Mirireoluwa is found, ...';
  var match;
  while((match = regex.exec(x)) != null)
    {
      console.log("Index position " + match.index + " contains " + match[0])
    }

//replace() method
var x = 'Let us search this text for mirireoluwa. If Mirireoluwa is found, ...';
var regex = /mirireoluwa/gi;
var y = x.replace(regex, 'John');
console.log(y);
console.log(x);

//slice()
var x = 'Let us search this text for mirireoluwa. If Mirireoluwa is found, ...';
var y = x.slice(34)
console.log(y);

var  y = x.slice(28, 32);
console.log(y);

var x = 'Let us search this text for mirireoluwa. If Mirireoluwa is found, ...';
var y = x.slice(-1);
console.log(y);
var y = x.slice(-16, -12);
console.log(y);
var y = x.slice(-16);
console.log(y);

//array object
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
console.log(languages.length);

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
languages.forEach(function(element)
{
  console.log(element);
});

languages.forEach(function(language, index)
{
  var output = index + 1 + '.' + language;
  console.log(output);
});

 
//number object

a = 10;
b = Number('10');

c = new Number(10);
d = a.valueOf();
e = b.valueOf();
f = c.valueOf();

console.log(a);
console.log(b);
console.log(c);

console.log(d);
console.log(e);
console.log(f);

//error object
try{
  console.output('Provoking an error by calling a non-existent function');
}catch(error)
{
  console.log(error.message);
  console.log(error.name);
}

function multiplier()
{
  var product = 1;
  if (arguments.length < 2)
    {
      throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }

    for (var x = 0; x < arguments.length; x++)
      {
        product = product * arguments[x];
      }

      return product;
}

try
{
  console.log(multipler())
}catch(error)
{
  console.log(error.message);
}

try
{
  console.log(multiplier(2, 3));
}catch(error)
{
  console.log(error.message);
}


