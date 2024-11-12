//const name = "hitest"
//const repoCount = 50

//console.log(name + repoCount + " Value"); // it's a old way.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //it's a modern way. 
                            //${} this is called string interpollation

// New way to declare string.
const gameName = new String('Lalu') //Lalu is in key value pair example 0: L, 1: a etc.//

//console.log(gameName[0]) // Access Lalu string y key value pair 0: L.
//console.log(gameName[1]) // key value pair 1: A.
//console.log(gameName[2]) // key value pair 2: L.
//console.log(gameName[3]) // key value pair 3: U.//

//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());//

//console.log(gameName.charAt(3)) // to check character at which index.
//console.log(gameName.indexOf('l')) // to check character position.

const newStr = gameName.substring(0, 2) //slicing.
console.log(newStr)


const anotherStr = gameName.slice(0, -1) // this is also slicing. 
// Difference b/w substring and slice that slice can take negative value.
// we can not use negative in substring if we use it ignores negative.
console.log(anotherStr)



const newStrone = " Lalu "
console.log(newStrone)
console.log(newStrone.trim()) // it remove spaces.


const url = "https://hitesh.com/hitest%20choudhary"
console.log(url.replace('%20', '-')) // to replace anything.

console.log(url.includes('rahul')) // to ask or know something it's present or not.


const newName = new String('Rahul-hc-com')
console.log(newName.split('-')) // To split the string.

