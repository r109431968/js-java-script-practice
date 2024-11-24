const code = ["js", "py", "rb", "c#", "jq"]

// These are all the way to write or print a object as function using foreach.
// code.forEach(function (val) {
//     console.log(val);
// });


// code.forEach( (item) => {
//     console.log(item);
    
// });


// function printMe(item) {
//     console.log(item);
// }
// code.forEach(printMe)


// code.forEach((item, index, arr) => {
//     console.log(item, index, arr); // it will print an array.
// })


const coding = [
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "C#",
        languagefilename: "c#"
    }
]

coding.forEach((item) => 
{
    console.log(item.languagename);
    
})