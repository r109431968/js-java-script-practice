const code = ["js", "py", "rb", "c#", "jq"]

// code.forEach( (item) => { // this is returing an item got it, okay !!
//     console.log(item);
    
// })

// Now what if we put this in an variable
                              //   =====> // is place pr jahan hmne arrow bnaya hai vahan hmne kuch nhi likha hai kyu ki 
                                //||      // vo call back function hai agr udhr hm kuch nhi 
                                //||      // likhte to vo call back funtion banta hai or hmne kuch nhi likha.
                                //||
                                //\/
// const values = code.forEach ( (item) => {
//     console.log(item);
    
// })

// console.log(values); // it will print the item output but it gives undefined also 
                     //bcoz foreach doesn't return something.



// We will use return also or we can say will try using return keyword.
// const values = code.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values); // samem output as above code and same reaso, okay.


// now using only return.
// const values = code.forEach( (item) => {
//     return item
// })
// console.log(values); // This it gives only undefined if it can return something so ye hme items print karta but nhi kiya kyu ki foreach loop kuch return nhi karta.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// we are finding here th numbers who islarger than 4.

// const newNum = myNums.filter ((num) => num > 4) // hmne num se pehle kuch nhi likha to vo kya hua ? vo call back function hua.
//console.log(newNum);


// 2nd way to write this above code.
// const newNum = myNums.filter( (num) => { // yahan agre hm curlly 
//     // brackkets lgate hain to scope start ho jata hai means sare variable srf usi
//     // me use ho skte hain ab or hme return bhi krna padega or return likhna hi padega.
//     return num > 4
// })
//console.log(newNum);


// Now using foreach
// const newNum = []
// myNums.forEach((num) => {
//     if(num > 4)
//     {
//         // console.log(num); // itsa first way to print number greater ethan 4.
//         newNum.push(num) // this is 2nd way.
//     }
// })
//console.log(newNum); 2nd way to print
