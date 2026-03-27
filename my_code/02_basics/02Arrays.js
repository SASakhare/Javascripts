
const marvel_heros=['thor','Ironman','Spiderman']

const dc= ['superman','flash','batman']


// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[0]);



// console.log(marvel_heros.concat(dc)); // * not change the original array

// console.log(marvel_heros);


// const all_new_heros=[...marvel_heros,...dc]

// console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

console.log(another_array);

const real_another_array=another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray('hitesh'));
console.log(Array.from('hitesh'));
console.log(Array.from({name:'hitesh'}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));





