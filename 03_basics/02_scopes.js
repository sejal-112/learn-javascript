
// var c = 300 // var is avoidable because it is global scope

let a = 300
if(true) {
      let  a = 10
    const b = 6
    //  c = 7

}

//  console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "sejal"

    function two() {
        const website = "github"
        console.log(username);
    }
    // console.log(website)

    two()
    
    
}

one()


if(true) {
    const username = "sejal"
    if(username === "sejal") {
        const website = "github" 
        console.log(username + website)
    }
   
}

// +++++++++++++++++++++ interesting +++++++++++++++++++++++

console.log(addone(5))


function addone(num) {
    return num + 1
}

addTwo(4)

const addTwo = function(num) {
    return num + 2
}



