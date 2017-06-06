// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(x, y){
  if (x > y) {
    return x;
  }
  else if (x < y){
    return y;
  }
  else {
    return "Tie";
  }
}
console.log(max());


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(x, y, z){
  var maxnumb = Math.max(x, y, z);
  return maxnumb;
}

console.log(maxOfThree(5, 2, 9));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:
var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
var ans = true;
function isVowel(char){
  var n =vowel.indexOf(char.toLowerCase());
  if (n != -1) {
    ans = true;
  }
  else {
    ans = false;
  }
  return ans;
}


console.log(isVowel('a'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(x, y){
  return x + y;
}
console.log(sum());


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(a, b, c) {
  return (a + b + c) / 3;
}
console.log(sum());


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(x) {
  return x.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(x, y) {
  if ( y > x) {
    return true;
  }
  else {
    return false;
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(x) {

  return "Hello, " + x + "!";
}





// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(x, y, z, a) {
  return "The " + x + " tried to " + y + " but newline was terrible and " + z + " so he broke his computer becuase of it, and " + a;
}

console.log(madlib("man", "study", "broken", "cried"));
