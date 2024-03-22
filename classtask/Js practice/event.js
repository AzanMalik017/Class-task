function update () {
console.log ("Event is fired");
}

// I want to create variable
var x=10;
var y =20;

console.log(x*y)

// I want to create function in js

function sum (a,b) {
    return a+b;
}
console.log(sum(x,y));

// if i want to assign function to variable

var mysum = sum;
console.log(mysum)