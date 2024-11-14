// const num = 21999
// console.log(num)
// 
// const balance = new Number(100) //now number is a variable.
// console.log(balance)
// 
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // output => 100.00
// 
// 
// const other = 1123.7888
// console.log(other.toPrecision(3)) // to round up the figure.
// 
// 
// const hund = 1000000
// console.log(hund.toLocaleString('en-IN')) // by default it comes in american standard.


// ---------------------- MATHS __________________

//console.log(Math)
//console.log(Math.abs(-4)) // it changes negative into positive.
//
//console.log(Math.round(4.6))
//console.log(Math.ceil(4.2)) //output 5
//console.log(Math.floor(4.2)) //output 4
//console.log(Math.min(3, 5, 67,7))
//console.log(Math.max(55, 77, 23, 7))

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*10 + 1)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)


const min = 10
const max = 20
console.log(Math.random() * (max - min + 1))
console.log(Math.floor (Math.random() * (max - min + 1)) + min)