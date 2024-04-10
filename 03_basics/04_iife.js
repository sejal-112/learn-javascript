// Immediately Invoked Function Expression (IIFE)
// for immediate function execution and  for removel of global scope pollution(variables .etc)



// named IIFE
( function aurcode() {
    console.log(`DB CONNECTED`)
})(); // for code ending doed not end the code by it own

 // unamed IIFE
( (name) /* argument */ => {
    console.log(`DB CONNECTED TO ${name}`)
})("Sejal"); // parameter



