const user = {
    username: "Rahul",
    price: 999,
    welcomeMessage:  function(){
        console.log(`${this.username}, Welcome to website !!!.`);
        // console.log(this); // it will print all objects userme, price everything,
        // question is why it will print ? so it will print bcoz this refers only current 
        // context means it will refer only what inside user object.
        
    }
}

// console.log(this); // it will give empty {} list bcoz it can only refer to the current context not user, bcoz it is outside the context.


// user.welcomeMessage()
// user.username = "Rahul Tiwari"
// user.welcomeMessage()


// function chai(){
//     const userme = "Rahul"
//     // console.log(this); // it will print only this properties.
//     console.log(this.userme); // it will give undefined.  it is undefined bcoz it will work in only object not in function.
    
// }
// chai() // output undefined

// const chai = function(){
//     const userme = "Rahul"
//     console.log(this);
//     console.log(this.userme);
    
// }

// chai() // undefined


// Arrow Function

// const chai = () => {
//     const userme = "Rahul"
//     //console.log(this);
//     console.log(this.userme);
    
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
//     // let res = num1 + num2
//     // return res

// }

// Below in implicite function or one line function, in the function don't need to write a return bcoz it already one line function.
//const addTwo = (num1, num2) => num1 + num2
             // OR
// const addTwo = (num1, num2) => (num1 + num2)

// return object in this
const addTwo = (num1, num2) => ({username: "Rahul Tiwari"}) //output { username: 'Rahul Tiwari' }

console.log(addTwo(98, 7));
