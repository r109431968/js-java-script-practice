// Dates

//let myDate = new Date()
//console.log(typeof(myDate))
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())

//let myCreatedDate = new Date(2024, 0, 23) // 0 is month 1 means jan. 23 is date.
//console.log(myCreatedDate)
//let myStringDate = new Date(2024, 0, 23, 5, 3)
//console.log(myStringDate.toLocaleString())
//let myCurrentDate = new Date("01-14-2023")
//console.log(myCurrentDate.getTime())
//console.log(myCurrentDate.toLocaleString())\


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))



// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDate())
// console.log(newDate.getDay())


// console.log(`Month is ${newDate.getMonth() + 1} and day is ${newDate.getDay()}`);


let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))