// Ab yahan hm object k bare me dekh rhe hain ki object ko iterate kese kr skte hain.

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     py: "Python"
// }

// for (const key in myObject) {
//     console.log(key);
    
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut if for ${myObject[key]}`);
    
// }

// forin is working in object but it gives only key in array.

const prog = ["js", "py", "c#"]

for (const key in prog) {
    console.log(prog[key]);
    console.log(key);
}