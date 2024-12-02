// 1. Write a JavaScript function to calculate the sum of two numbers.

// function Sum(num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// console.log("Sum is:", Sum(33, 55));


// 2. Write a JavaScript program to find the maximum number in an array.

// const arr = [12, 33, 5, 56, 76, 8]
// function MaxNum(max){
//     return Math.max(...max)
// }

// console.log("Maximum number is:",MaxNum(arr));

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function isPalindrome(str){
//     let reverse = ""
//     for(let i = str.length-1; i>=0; i--){
//         reverse += str[i];
//         // console.log(reverse);
//     }
//     if(reverse == str){
//         console.log(`String is Pallindrome ${str}`);
//         return true;
//     }
//     else{
//         console.log(`String is not Pallindrome ${str}`);
//         return false;
//     }
// }

// const user = "aman"

// console.log(isPalindrome(user));


// 4. Write a JavaScript program to reverse a given string.


// let user = "Rahul"

// function isReverse(str){
//     let rev = ""
    
//     for(let i = str.length-1; i>=0; i--){
//         rev += str[i];
//     }
//     return rev

//     // 2nd way
//     // return str.split("").reverse().join("");
// }

// console.log(isReverse(user));


//  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

//const arr = [55, 33, 5, 57, 7]
// const arr = [58, 64, 6, 56, 8]

// function isEvenarray(array){
//     let evenarr = []
    
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] % 2 === 0){
//             evenarr.push(array[i])
//         }
//     }

//     if(evenarr.length > 0){
//         return evenarr
//     }
//     else{
//         return `No even number found in array: [${arr}]`
//     }

// }

// console.log(isEvenarray(arr));



// 6. Write a JavaScript program to calculate the factorial of a given number.

// function findFactorial(num){
    
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     else{
//         return num * findFactorial(num - 1)
//     }
// }

// const fact = 5;
// console.log(findFactorial(fact));



// 7. Write a JavaScript function to check if a given number is prime.

// function isPrime(num){
    
//     if(num <= 1){
//         return `Is not a prime number ${num}`
//     }
    
//     if(num === 2){
//         return `Is prime number ${num}`
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return `Is not a prime number ${num}`;
//         }
//     }
//     return `Is prime number ${num}`;
// }

// console.log(isPrime(11));

// 8. Write a JavaScript program to find the largest element in a nested array.

// const nestedArray = [3, [5, 2], [9, [12, 7], 3], 8, [1, 6]];

// function getLargestEle(arr) {
//     let largest = arr[0]

//     for (let i = 0; i <= arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             let nestedLargest = getLargestEle(arr[i]);
//             if (nestedLargest > largest) {
//                 largest = nestedLargest;
//             }
//         } else {
//             if (arr[i] > largest) {
//                 largest = arr[i];
//             }
//         }
//     }

//     return largest;
// }
// console.log(getLargestEle(nestedArray))


// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// const num = 5

// function fibonacciSeries(usernum){

//     if(usernum <= 0)
//     {
//         return `The number should be greater than zero, Your number is ${usernum}`
//     }

//     let sequence = [0]
//     if (usernum > 1) {
//         sequence.push(1);
//     }

//     for (let i = 2; i <= usernum; i++)
//     {
//         let nextterm = sequence[i - 1] + sequence[i-2]
//         sequence.push(nextterm)
//     }

//     return sequence;
// }

// console.log(fibonacciSeries(10));


// 