function multiplyBy5(num) {
    return num*5;
}

// multiplyBy5(5)
// function is object also
// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);  //--> return an empty parenthesis

function createUser(username, score) {
    this.username = username;
    this.score = score; 
}
createUser.prototype.increament = function() {
    // jisne bulaya hai uska score badha do -->means  this keyword , current context
    this.score++;

}
createUser.prototype.printMe = function() {
    // kiska score dekhna hai, this keyword, jusne bulaya usko bula, jisne matkab this
    console.log(`price is ${this.score}`)

}
const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

// chai.printMe() // ese nhi ayega abhi ye undefined hai, hume add akrna padga means batana padega ke ye properties aai hain
// we use new keyword for this

chai.printMe();