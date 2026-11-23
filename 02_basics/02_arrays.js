const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//using concat to merge the arrays
//const All_heros = marvel_heros.concat(dc_heros)
//console.log(All_heros);


// ****More easy way to merge arrays****
const all_new_heros =[...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

// special situation to convert subarrays into single array upto specified depth

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//***important */
console.log(Array.isArray("hitesh"));

// to convert into array
console.log(Array.from("Hitesh"));

// special case when you dont specify then it will just give empty array
console.log(Array.from({name:"hitesh"}));


// to convert multiple variable into array
let score1= 100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3));

//### study more about these







