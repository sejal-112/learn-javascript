const accountId = 144553
let accountEmail = "sejal@google.com"
var accountpassword = "12345" // not used now 
accountCity = "Orai"

// accountId = 2 // not allowed
console.log(accountId);
accountEmail = "sg@sg.com"
accountpassword = "3452678"
accountCity = "Jahnsi" // not a good idea
let accountState;

console.log(accountEmail);
console.log(accountpassword);
console.log(accountCity);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])



