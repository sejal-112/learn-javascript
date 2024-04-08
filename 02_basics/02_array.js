
const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]


// marvel_heroes.push(dc_heroes); // array ke andar array push karta hai
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
// console.log(marvel[superman][1])

// const all_heroes = marvel_heroes.concat(dc_heroes); // return new array by merging two arrays
// console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // same as concat but mostly this prefer
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array)

const real_another_array = another_array.flat(Infinity)// jahan tak spread akrna hai utni value dedo
console.log(real_another_array)

console.log(Array.isArray("Sejal"));

console.log(Array.from("Sejal"));
console.log(Array.from({name: "Sejal"})); // gives empty array done not ocnvert direclt an array  --> interesting for interview

let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3));






