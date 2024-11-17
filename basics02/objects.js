// Singleton objects

// Objects Literals

const mySymbol = Symbol("key1") // using symbol as key.
const Jsuser = {
    name: "Rahul",

    [mySymbol]: "myKey1", // Using symbol as key. and it will show in output like this [Symbol(key1)].

    // mySymbol: "myKey1", // we can write symbol like this also but it not proper way 
    //and if we dont want to show output like this [Symbol(key1)] so we just have to 
    //remove square bracket from it so it will come up in window like string currently 
    // it's coming like this [Symbol(key1)]. okay

    "full name": "Rahul Tiwari", // This also a way to declare a key and value.
    age: 28,
    location: "Bhopal",
    email: "rt@jknd.com",
    isLoggedin: false,
    lastloginDays: ["Monday", "Wednesday"]

}

// console.log(Jsuser); // one way to access
// console.log(Jsuser["email"]); // 2nd way to access
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySymbol]);
// console.log(typeof(Jsuser[mySymbol]));

//Jsuser.email = "rahul@dshbc.com"
//console.log(Jsuser)

//Jsuser.location = "Raisen" // This showing if we use update the value and use freeze so value will not update it will permanently.
//Object.freeze(Jsuser)
//Jsuser.location = "Vidisha" // we can check here value has locked, now it will not change while using freeze.


Jsuser.greeting = function(){
    console.log("Hello JS User !!!")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}`)
}


// console.log(Jsuser.greeting)
// console.log(Jsuser.greeting())

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())