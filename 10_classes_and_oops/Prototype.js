// goal --> iski length 10 hai but hume bas utni hi chahiye bas jitne mein naam hai
let myname = "Sejal     ";

console.log(myname.trim().length); // but we want a method jisse direct likhe or true length dede

let myHeroes = ["thor", "spiderman", "Sejal"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  Sejal: "coding",

getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Sejal = function () {
  console.log("Sejal is present in all objects");
};

Array.prototype.HiSejal = function () {
  console.log("Sejal says hello");
};

myHeroes.Sejal();

myHeroes.HiSejal();

// inheritance

const User = {
  name: "jayash",
  email: "jayash@google.com",
};

const Teacher = {
  makeVideo: true
};

const TeachingSupport = {
  isavailable: false
};

const TASupport = {
  makeAssignment: `JS Assignment`,
  fulltime: true,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User;

// new approach
// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode          ";

String.prototype.truelength = function () {
  console.log(`${this}`);
//   console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.truelength()

"Sejal          ".truelength()


