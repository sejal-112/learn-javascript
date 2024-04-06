// Hoisting is thte phenomena in Js by which 
//you can access the variables and functions even before 
//you have initialized it without any error

getName();
console.log(x);
console.log(getName);
var x = 4;
function getName() {
    console.log("Hello");
}