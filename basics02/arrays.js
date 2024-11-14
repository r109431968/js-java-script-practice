// Array

const myArray = [0, 7, 8, 6, true, "Rahul",[7,98]]
//console.log(myArray)
//console.log(myArray[0])

const myHero = ["Iron-man", "Thor", "Captain India"]

const myArr2 = new Array(1, 54, 5, 7, 9) // This is also a way to declare a array.
//console.log(myArr2)

// Array Methods
//console.log(myArray.length)

//myArray.push(999) // it adds the value in last of the array.
//console.log(myArray)

//myArray.pop() // it removes the last value from array.
//console.log(myArray)

//myArray.unshift(999) // it adds the value on index zero or in start of the array.
//console.log(myArray)

//myArray.shift() // it rempoves the unshift and 0 index value.

//console.log(myArray.includes(999)) // it search the value in array it's present or not, nd output comes is boolean true and false.


// const newARR = myArray.join()
// console.log(myArray)
// console.log(newARR) // it changes in to array into string.
// console.log(typeof(newARR))



// SLice and Splice
console.log("A ", myArray)
const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2); // Difference b/w slice and splice, splice manipulate the og array and includes range also and removes the range number from og array.


