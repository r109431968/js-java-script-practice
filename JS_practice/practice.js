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

// 10. 1. Display Current Day and Time

// var today = new Date();
// var curdate = today.getDate() + "/" +  (today.getMonth() + 1) + "/" + today.getFullYear()
// var hours = today.getHours()
// var minutes = today.getMinutes()
// var seconds = today.getSeconds()
// var curDay = today.getDay()
// var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// console.log(curdate);
// const ampm = hours >=12 ? "PM" : "AM"
// var hour = hours >= 12 ? hours - 12 : hours;
// // var hour = (hours >= 12) ? hours - 12 : hours;
// console.log(`${hour} : ${minutes} : ${seconds} : ${ampm}`);
// console.log("Today is " +  dayList[curDay]);

// if(hours <= 12)
//     console.log("AM");
// else
//     console.log("PM");

// console.log();

// 11.  Print Current Window Contents
// Write a JavaScript program to print the current window contents.
// function print_current_page() {
//     window.print();
// }

// 12. Calculate Area of Triangle (Sides: 5, 6, 7)

// function AreaTriangle(a, b, c){
//     var semi = (a+b+c)/2
//     var area = Math.sqrt(semi * (semi-a) * (semi-b) * (semi-c))
//     return area;
// }
// console.log(AreaTriangle(5, 6, 7))

// 13. Check Leap Year (Gregorian Calendar)
// function LeapYear(year){
//     if((year % 4 === 0 && year % 100 !==0)  || (year % 400 === 0))
//     {
//         return `${year} is Lear Year`;
//     }
//     else
//     {
//         return `${year} is not Lear Year`;
//     }
// }

// console.log(LeapYear(2020));

// 14. Find Years When Jan 1 is Sunday (2014?2050)
// for (var year = 2014; year <= 2050; year++) {
//     var date = new Date(year, 0, 1);
//     if (date.getDay() === 0) {
//         console.log("1st January is a Sunday in the year " + year);
//     }
// }


// 15. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then
// prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number
// otherwise "Not matched"?

// function GuessNumber(num){
//     const guess =  Math.floor(Math.random() * 10);
//     if(guess == num)
//     {
//         return `Your Number Match, You Won, Guessed Number is ${num} and Random Number was ${guess}`
//     }
//     else{
//         return `Your Number didn't Match, You lost, Guessed Number is ${num} and Random Number was ${guess}`
//     }
// }
// console.log(GuessNumber(7));

// 16. Write a JavaScript program to calculate the days left before Christmas.

// var today = new Date()
// // console.log(today);

// const year = today.getFullYear()
// // console.log(year);

// const christmasDate = new Date(year, 11, 25)

// if(today > christmasDate)
//     console.log(christmasDate.setFullYear(year + 1))

// const differenceInTime = christmasDate - today;
// //console.log(differenceInTime);

// const daysLeft = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

// console.log(daysLeft);


// 17. Write a JavaScript exercise to create a variable using a user-defined name.
// var var_name = "abc"

// var n = 120
// this[var_name] = n
// console.log(this[var_name]);

// 18. Write a JavaScript exercise to get the filename extension.
// function getFileExtension(){
//     const filename = "exmpale.txt"
//     const splitFile = filename.split(".").pop();
    
//     return `Your File Extension .${splitFile}`;
// }
// console.log(getFileExtension())

// 19. Write a JavaScript program to get the difference between a given number and 13, if the number is broader
// than 13 return double the absolute difference.

// function differenceNumber(num){
    
//     if(num <= 13)
//     {
//         return 13 - num;
//     }
//     else
//     {
//         return (num - 13) * 2
//     }
// }
// console.log(differenceNumber(20));



