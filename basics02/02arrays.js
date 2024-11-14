const marvel_heroes = ["Ironman", "Thor", "Captain India"]
const dc_heroes = ["Superman", "Flash", "Batman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const allHeroes = [...marvel_heroes, ...dc_heroes] // its called spread operator to concatenate the array.
//console.log(allHeroes)


const anotherArray = [1, 2, 3, [4, 5, 6], 7 ,[6, 7, [4, 5 ]]]
//const realanotherArray = anotherArray.flat(Infinity)
const realanotherArray = anotherArray.flat(1)
// Basically ye kya karta hai flat jittne bhi array hain array k andar unko ek array bna deta hai or
// agr hm infinity dete hain to jittne bhi array hai andar vo sb ek hi array ban jynge but agr hm
// chate hain ki sb ek array na bane,for example agr me 1 pass krta hu to vo jo upar array me likha hai
// [4, 5] in ko chor kr vo sb ko ek hi array bna dega nd inko esa hi rhene dega.
//console.log(realanotherArray)


console.log(Array.isArray("Hitesh")) // ye array nhi hai.
console.log(Array.from("Hitesh")) // ye array me convert kr dega.
console.log(Array.from({name: "Hitesh"})) // // Empty array dega kyu ki vo nhi smjh paya ket or value, 
// to hme isse btana padega ki key value ab isse array me conver kro.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // it makes the array of variables values.


