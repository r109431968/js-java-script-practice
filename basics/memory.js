// Stack = Stack memory is primitive type.
// let myName = "Rahul"
// let otherName = myName;
//console.log(otherName);
// otherName = "Lalu"
// console.log(myName);
// console.log(otherName);



// Heap = Heap memory is non-primitive type.

let userOne = {
    email : "google.com",
    upi : "googlepay.in"
}

let userTwo = userOne

userTwo.email = "rt.com"

console.log(userOne);
console.log(userTwo);

