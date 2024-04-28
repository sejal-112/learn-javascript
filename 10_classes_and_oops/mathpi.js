//  const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//  console.log(descripter)

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 350,
  isAvailable: true,

  orderChai: function () {
    console.log("code is crash now");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, "name", {
  // writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (const [key, value] of chai) { // it is not iteratble yet
//     console.log(`${key}: ${value}`)

// }

for (const [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key}: ${value}`);
  }
}
