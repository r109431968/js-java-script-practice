// console.log(2>1);
// console.log(2>=3);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);



// Same data type.
// console.log("2" > 1); // Automatically it convert "2" this to in int.
// console.log("02" > 1); // Automatically it convert "2" this to in int.

// console.log(null > 0); // false
// console.log(null == 0); // flase
// console.log(null >= 0); // true bcoz the reason is that an equality check == and comparision
                        // > <> = <= work differently.
                        // Comparisions convert null to a number, treating it as 0.
                        // That's why (3) null >= 0 is true and (1) null > 0  is false.



// console.log(undefined > 0); 
// console.log(undefined == 0);
// console.log(undefined >= 0);



// === strict check.
console.log("2" === 0); // In this it is not converting into int, it checks data types.
