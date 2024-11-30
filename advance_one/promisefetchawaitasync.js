// const promiseOne = new Promise(function(resolve, reject){
//     // We can do async task.
//     // Dbcall, Cryptography, network
//     setTimeout(() => {
//         console.log("Async task is complete !!!");
//         resolve() // neeche jo promise consumned likha hai uso run krne k liye hme resolve ko current scope k andar ya jahann jrurat ho vahan cl krna hota hai tbhi neeche vala function mtlb Promise consumed run hoga.
//     }, 1000);
// })

// promiseOne.then(function(){ // here .then is directly connected to resolve which is in above function or in promiseOne.
//     console.log("Promise is Consumed");
    
// })


// 2nd way to write above code.
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("aSync task 2");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("aSync 2 is resolved");
// })


// Third Promise
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username: "Rahul", email:"rt@.com"}) // these we can say parameters which will pass in user.
        
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user); // this printing the data which is available in resolve because then is connected to resolve.
    
// })


// Fourth Promise
// const fourthPromise = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false // make it true so you get Error: Something went wrong this come.
//         if(!error){
//             resolve({username: "Rahul", email:"rt@.com"})
//         }else{
//             reject('Error: Something went wrong')
//         }
//     }, 1000);
// })

// fourthPromise.then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => { // we are using this then to handel above then data or value what ever you say.
//     console.log(username);
    
// })
// .catch(function(err){ // this is directly connected to reject.
//     console.log(err);
    
// }).finally(() => {
//     console.log("The Promise ir either resolved or either rejected !!!");
    
// })


// Fifth Promise
// const promiseFifth = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false // make it true so you get Error: Something went wrong this come.
//         if(!error){
//             resolve({username: "Rahul Tiwari", email:"rt@.com"})
//         }else{
//             reject('Error: Something went wrong')
//         }
//     }, 1000);
// })


// we can use then, catch and finally andn we can use async and await also if we use async so we can not use catch, we use async example sometime we dont want to move forward till that one task complete or jb tk usme error ana band na ho jaye.

// it gives error when in above function let error is true.
// async function consumePromisefunction() {
//     const response = await promiseFifth
//     console.log(response);   
// }

// 2nd method to prevent this from error when let error is true in above function
// async function consumePromisefunction() {
//     try{
//         const response = await promiseFifth
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromisefunction()


// Fetch
// async function getAllUsers(params) {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // if we remove this await data will come late or will show in pending.
//         console.log(data);
//     }
//     catch(err){
//         console.log("E: ", err);
//     }
// }

// getAllUsers()

// Now do this in another way using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error))