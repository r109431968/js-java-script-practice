function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}


//sayMyName() // it will print, without using console.log()

// function addTwoNum(num1, num2) { // when we are giving a data type or some parameters,its called parameters
//     console.log(num1 + num2)
// }

// const result = addTwoNum(8, 4)
// console.log("result", result) // it's undefined, because function is not returning something.

// addTwoNum(8, 4) // these are arguments 8 and 4 these are not parameters, arguments are passed on behalf of parameters but they are not parameters.
// addTwoNum(8, "4")
// addTwoNum(8, null)

// function addTwoNum(num1, num2) {
//     //let res = num1 + num2
//     console.log("Rahul") // this will work bcoz its written above return.
//     //return res
//     return num1 + num2
//     console.log("Rahul") // its unrechable code bcoz what ever we write after return it will work or print.
// }

// addTwoNum(77, 6) // now it will not print bcoz its not returning.

// const result = addTwoNum(8, 4)
// console.log("result", result) // but now this will work. bcoz it's returning


//function loginUserMsg(username = "sam") { // this line will work only when user empty chor de username ko to default name sam ayega.
// function loginUserMsg(username) {
//     // if(!username) // it means username is not.
//     if(username === undefined){
//         console.log("Please enter username !!")
//         return 
//     }
//     return`${username} just logged in`
// }

// console.log(loginUserMsg("Rahul"))
// console.log(loginUserMsg()) // output "undefined just logged in"


function calculateCartPrice(...num1) { // these ... three dots are rest operator, it's similar like spread operator but itd not spread operator, it depends on use and condition when it used so, we can call it rest or spread operator.
    return num1
}

// console.log(calculateCartPrice(200, 400, 600)) // it will only print 200 if in function ther will be no thhree ... dots like this(function calculateCartPrice(num1)), these three dot denotes rest operator.


const user = {
    username: "Rahul",
    price: 999
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 1000
})

const myNewArray = [200, 400, 500, 1200]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 2000]))
