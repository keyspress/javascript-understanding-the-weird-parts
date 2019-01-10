// by value (primatives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// be reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello';

console.log(c);
console.log(d);

// by reference (parameters)
function changeGreeting(obj) {
  obj.greeting = 'hola';
}

changeGreeting(d);

console.log(c);
console.log(d);

// assignment operator sets up a new memory space
c = { greeting: 'howdy' };

console.log(c);
console.log(d);
