// function statement
function greet(name) {
  console.log('hello ' + name);
}

greet('Jim');

// using a function expression
var greetFunc = function(name) {
  console.log('hello ' + name);
};

greetFunc('Bob');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = (function(name) {
  return 'hello ' + name;
})('Bongo');

console.log(greeting);

var firstname = 'Billy';
(function(name) {
  greeting = 'hello ';
  console.log(greeting + ' ' + name);
})(firstname);
