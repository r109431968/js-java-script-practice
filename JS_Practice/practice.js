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

// 20. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same,
// then return triple their sum.

// function tripleifEqual(num1, num2){

//     // if(num1 != num2)
//     // {
//     //     return num1 + num2
//     // }
//     // else
//     // {
//     //     return (num1 + num2) *  3
//     // }
//     return num1 != num2 ? num1 + num2 : (num1 + num2) * 3
// }

// console.log(tripleifEqual(7, 7));

// 21. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple the absolute difference if the specified number is greater than 19.

// function differenceNumber(num){

//     if(num < 19)
//     {
//         return 19 - num
//     }
//     else{
//         return (num - 19) * 3
//     }
// }
// console.log(differenceNumber(17));

// 22. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or
// if their sum is 50.

// function checkFiftySum(num1, num2){

//     if(num1 == 50 || num2 == 50)
//     {
//         return `${num1} or ${num2} one of the number is 50, So, it's ${true}`
//     }

//     var sum = num1 + num2
//     if(sum == 50)
//     {
//         return `Sum of ${num1} and ${num2} is 50, So, it's ${true}`
//     }
//     else
//     {
//         return `Sum of ${num1} and ${num2} is ${num1 + num2}, So, it's ${false}`
//     }
// }

// console.log(checkFiftySum(0, 50));

// 23. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// function checkNumber(num){
//     if(num >= 80 && num <= 120)
//     {
//         return `${num} Number is greater than 80 or equals or less than to 120, So, it's ${true}`
//     }
//     else if(num >= 380 && num <= 420)
//     {
//         return `${num} Number is greater than 380 or equals or less than to 420, So, it's ${true}`
//     }
//     else{
//         return `${num} Number`
//     }
// }

// console.log(checkNumber(70));

// 24. Write a JavaScript program to create another string by adding "Py" in front of a given string.
// If the given string begins with "Py" return the original string

// var name = "Rahul"
// // console.log(name.charAt(0));
// // console.log(name[0]);

// function stringMatch(str){

//     // var p = str[0]
//     // var y = str[1]

//     // if(str[0] == "p" || str[0] == "P" && str[1] == "y" || str[1] == "Y")
//     // {
//     //     return `${str} and it's ${true}`
//     // }
//     // else{
//     //     return `${str} has not PY in there starting ${false}`
//     // }

//     // return (str[0] == "p" || str[0] == "P" && str[1] == "y" || str[1] == "Y") ? `${str} and it's ${true}` :
//     // `${str} has not PY in there starting, updated string is ${`Py${str}`} ${false}`

//     // return (str[0] == "p" || str[0] == "P" && str[1] == "y" || str[1] == "Y") ? `${str} and it's ${true}` :
//     // `${str} has not PY in there starting, updated string is Py${str} ${false}`
// }
// console.log(stringMatch("Rahul"));

// 25. Write a JavaScript program to remove a character at the specified position in a given string and
// return the modified string

// var name = "Rahul";

// function lfSwap(str) {
//     if (str.length >= 1) {
//         if (str.length === 1) {
//             return str;
//         }

//         var f = str[0];
//         var l = str[str.length - 1];
//         var middle = str.slice(1, str.length - 1);
//         console.log(middle);

//         return l + middle + f;
//     }

//     return "String length must be greater than or equal to 1.";
// }

// console.log(lfSwap(name));

// 26. Write a JavaScript program to create another string from a given string with the first character of the
// given string added to the front and back.

// function checkMultiple(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//         return `${num} is a multiple of 3 or 7.`;
//     } else {
//         return `${num} is not a multiple of 3 or 7.`;
//     }
// }

// console.log(checkMultiple(21));
// console.log(checkMultiple(10));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

// function checkJava(str) {
//     if (str.startsWith("Java")) {
//         return "The string starts with 'Java'.";
//     } else {
//         return "The string does not start with 'Java'.";
//     }
// }

// console.log(checkJava("JavaScript"));
// console.log(checkJava("Python"));

// function checkJava(str) {
//     if (str.substring(0, 4) === "Java") {
//         return "The string starts with 'Java'.";
//     } else {
//         return "The string does not start with 'Java'.";
//     }
// }

// console.log(checkJava("JavaScript"));
// console.log(checkJava("Python"));

// 28. Write a JavaScript program to find the largest of three given integers.

// function FindlargestNum(num){
//     var largeNum = num[0]

//     for(let i = 1; i < num.length; i++){
//         if(num[i] > largeNum){
//             largeNum = num[i]
//         }
//     }

//     return largeNum;
// }

// console.log(FindlargestNum([5, 9, 3]));

// function FindlargestNum(x, y, z) {
//     maxval = 0;
    
//     if (x > y) {
//         maxval = x;
//     } else {
//         maxval = y;
//     }
    
//     if (z > maxval) {
//         maxval = z;
//     }
//     return maxval;
// }

// console.log(FindlargestNum(9, 7, 4));

// 29. Write a JavaScript program to find the closest value to 100 from two numerical values.
// function findClosestNum(num1, num2){
    
//     if(num1 < 0  || num2 < 0)
//     {
//         return `${num1} or ${num2} on of the number is Negative, Pass Positive Number`
//     }
//     var first = 100 - num1;
//     var sec = 100 - num2;
    // return first > sec ? `${num2} is close to the 100.` : `${num1} is close to the 100.`

    // if (first < 0 || sec < 0) {
    //     return "Answer is coming; it's negative.";
    // }

//     if (first === sec) {
//         return "Answer is equal.";
//     }

//     if (first < 0 && Math.abs(first) < Math.abs(sec)) {
//         return "First is closer to 100.";
//     }
//     if (sec < 0 && Math.abs(sec) < Math.abs(first)) {
//         return "Second is closer to 100.";
//     }

//     if(first > sec){
//         return `${num2} is close to the 100.`
//     }
//     else{
//         return `${num1} is close to the 100.`
//     }
// }

// console.log(findClosestNum(90, 110));


// 30. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

// function checkCharacterInRange(str, char) {
//     if (str.length < 4) {
//         return "String is too short to check the range.";
//     }
    
//     const substring = str.slice(1, 4);

//     return substring.includes(char);
// }

// console.log(checkCharacterInRange("Hello", "e"));
// console.log(checkCharacterInRange("Hello", "o"));
// console.log(checkCharacterInRange("abcdef", "d"));
// console.log(checkCharacterInRange("Hi", "i"));


// function checkChar(str1, char){
//     let ctr = 0;
//     for(let i = 0; i < str1.length; i++)
//     {
//         if((str1.charAt(i) == char) && (i >= 1 && i <= 3))
//         {
//             ctr = 1
//             break;
//         }
//     }

//     if(ctr == 1)
//         return true;

//     return false;
// }

// console.log(checkChar("Python", "y"));

// console.log(checkChar("JavaScript", "a"));

// console.log(checkChar("Console", "o"));

// console.log(checkChar("Console", "C"));

// console.log(checkChar("Console", "e"));

// console.log(checkChar("JavaScript", "S"));

// 31. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

// function findPositiveInt(num1, num2, num3){

//     if(num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10)
//     {
//         return `${num1}, ${num2}, ${num3} are same ${true}.`
//     }
//     else{
//         return `${num1}, ${num2}, ${num3} are not same ${false}.`
//     }
// }

// console.log(findPositiveInt(27, 37, 57));
// console.log(findPositiveInt(123, 456, 789));

// 32. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given
// string. If the string length is less than 3 convert all the characters to upper case.

// function strCheck(str){
//     //return str[0]
    
//     if(str.length < 3)
//     {
//         return "String length is less than three(3) " + str.toUpperCase()
//     }
//     else{

//         var length = str.length
//         var char = str.slice(0, 3)
//         var char2 = str.slice(3)
//         //console.log("Char:",char2);
        
//         return char.toLowerCase() + char2
//     }
// }

// console.log(strCheck("JAVASCRIPT"));


// 33. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their 
// grade. The grading criteria are as follows:

// 1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// 2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks 
//    are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// 3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

// function FindGrade(totalMarks, isFinalExam = false){
    
//     if(isFinalExam == false){
//         console.log("It's a Regular Exam");
//         if(totalMarks >= 89 && totalMarks <= 100 ){
//             return `Student get ${totalMarks} and Grade A+ ` + true
//         }
//         else{
//             return `Student get ${totalMarks} and failed the Exam. ` + false
//         }
//     }
//     else{
//         console.log("It's a Final Exam");
//         if(totalMarks >= 90 && totalMarks <= 100 ){
//             return `Student get ${totalMarks} and Passed the final exam, Grade A+ ` + true
//         }
//         else{
//             return `Student get ${totalMarks} and Failed the final exam, ` + false
//         }
//     }
// }

// console.log(FindGrade(90));


// 34. Write a JavaScript program to reverse a given string.

// function revStr(str){
    
//     return str.split("").reverse().join("")
// }

// console.log(revStr("Rahul"));


// 35. Write a JavaScript program to replace every character in a given string with the character 
//      following it in the alphabet.

// function replaceStr(str){

//     let result = ""

//     for(i = 0; i < str.length; i++){
//         //console.log(str.charCodeAt(i));
//         let charAscii = str.charCodeAt(i)
//         //console.log("Char Ascii", charAscii);
        
//         let nextAsciiVal = charAscii + 1;
//         //console.log("Next Ascii", nextAsciiVal);

//         //return (String.fromCharCode(nextAsciiVal))
//         //result += String.fromCharCode(nextAsciiVal)

//         if (charAscii === 122) {
//             result += 'a';
//         }else if (charAscii === 90) {
//             result += 'A';
//         } else {
//             result += String.fromCharCode(charAscii + 1);
//         }
        
//     }
//     return result;
    
// }

// console.log(replaceStr("Rahul"));

// const name = "Rahul"
// var afterR = String.fromCharCode(83);
// console.log("After R :",afterR);


// 36. Write a JavaScript program to capitalize the first letter of each word in a given string
// function capitalLet(str){

//     let char = str[0].toUpperCase()
//     //let fulstr = char + str.slice(1)
//     return char + str.slice(1)
// }

// console.log(capitalLet("rahul"));


// 37. Write a JavaScript application that transforms a provided numerical value into hours and minutes

// function Time(num){
//     let hour = Math.floor(num/60)
//     let minutes = num % 60
//     return hour + ":" + minutes
// }

// console.log(Time(1441));\

// 38. Write a JavaScript program to convert letters of a given string alphabetically

// function Alpha(str){
//     let cnvt = str.split("").sort().join("")
//     return cnvt;
// }

// console.log(Alpha("javascript"));


// 39. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places 
//      anywhere (at least once) in a given string

// function checkChar(str) {
//     for (let i = 0; i < str.length - 3; i++) {
//         console.log(str[i]);
        
//         if ((str[i] === 'a' && str[i + 3] === 'b') || (str[i] === 'b' && str[i + 3] === 'a')) {
//             return true;
//         }
//     }
//     return false;

//     //return (/a...b/).test(str) || (/b...a/).test(str);
// }

// // console.log(checkChar("Rahul"));
// // console.log(checkChar("Test"));
// console.log(checkChar("Chainsbreak"));


// 40. Write a JavaScript program to count the number of vowels in a given string.

// function vowelCheck(str){
    
//     // let count = 0
//     // let lower = str.toLowerCase()
//     // for(let i = 0; i < str.length; i++){
//     //     if(lower[i] === "a" || lower[i] === "e" || lower[i] === "i" || lower[i] === "o" || lower[i] === "u"){
//     //         count++
//     //     }
//     // }
//     // return count;

//     // let count = 0
//     // const vowels = "aeiou"
//     // let lower = str.toLowerCase()
//     // for (let char of lower) {
//     //     if (vowels.includes(char)) {
//     //         count++;
//     //     }
//     // }

//     // return count;
// }

// console.log(vowelCheck("RAhul"));


// 41. Write a JavaScript program to check whether a given string contains an equal number of p's and t's

// function ptCount(str){

//     let countP = 0
//     const checkP = "p"
//     let lowerp = str.toLowerCase()
//     for (let char of lowerp) {
//         //console.log("char", char);
//         //console.log("lower", lowerp);
        
//         if (checkP.includes(char)) {
//             countP++;
//         }
//     }

//     let countT = 0
//     const checkT = "t"
//     let lowert = str.toLowerCase()
//     for (let char of lowert) {
//         if (checkT.includes(char)) {
//             countT++;
//         }
//     }

//     return `Count P is : ${countP} and Count T is : ${countT}`;
// }

// console.log(ptCount("Satyam"));
// console.log(ptCount("Pantty"));
// console.log(ptCount("Tarun"));

// 42. Write a JavaScript program to divide two positive numbers and return the result as string with 
//      properly formatted commas. (doubt)


// 43. Write a JavaScript program to create one string of specified copies (positive numbers) of a 
//      given string

// function repeatString(str, num = 3) {
//     if (num < 1) {
//         return "";
//     }
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }

// console.log(repeatString("hello"));

// 44. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a 
//      given original string. The string length must be 3 and above.

// function LastRepeatStr(str, num = 3){

//     if(str.length < 3){
//         return false + `, String length is ${str.length}, it must be Greater or Equal to Three(3).`
//     }

//     let result = ""
//     if(str.length >= 3)
//     {
//         let len = str.slice(str.length - 3)
//         console.log(len);
//         for (let i = 0; i < num; i++)
//         {
//             result += len
//         }
        
//     }
//     return result + `, String length is ${str.length}.`
// }

// console.log(LastRepeatStr("Rahul Tiwari"));


// const str = "Rahul"
// let len = str.slice(str.length - 3)
// console.log(len);


// 45. Write a JavaScript program to extract the first half of a even string.

// function EvenStr(str){

//     if(str.length % 2 === 0){
//         let FirstHalf = str.length / 2
//         let result = "";
//         for(let i = 0; i < FirstHalf; i++){
//             //console.log(str[i]);
//             result += str[i]
            
//         }
//         return true + `, String length is ${str.length}, result is ${result} `
//     }

//     return false + `, String length is ${str.length}`
// }

// console.log(EvenStr("JavaScript"));

// 46. Write a JavaScript program to create a new string without the first and last characters of a given string

// function NewStr(str){

//     let f = str[0];
//     let l = str[str.length - 1];
//     let middle = str.slice(1, str.length - 1);
//     //console.log(middle);
//     return middle
// }

// console.log(NewStr("Rahul"));

// 47. Write a JavaScript program to concatenate two strings except for their first character.

// function ConcatStr(str1, str2){
//     let str1_concat = str1.slice(1) 
//     let str2_concat = str2.slice(1) 
//     return str1_concat + str2_concat
// }

// console.log(ConcatStr("Rahul", "Tiwari"));


// 48. Write a JavaScript program to move the last three characters to the start of a given string. 
//      The string length must be greater than or equal to three

// function updateStr(str){

//     if(str.length >= 3){
//         let len1 = str.slice(0, str.length - 3)
//         let len2 = str.slice(str.length - 3)
//         return len2 + len1
//     }

//     return false
// }

// console.log(updateStr("hello"));


// 49. Write a JavaScript program to create a string using the middle three characters of a 
//      given string of odd length. The string length must be greater than or equal to three.

// function oodStr(str){
//     if(str.length % 2 === 0){
//         return false;
//     }

//     let halfLen = Math.floor(str.length / 2)
//     //console.log(halfLen);
//     //let strInd = str[halfLen]
//     //console.log(str[halfLen]);
//     let f  = str[halfLen-1]
//     let m = str[halfLen]
//     let l = str[halfLen + 1]
//     console.log(f + m + l);
    
    
//     return true + `, It's odd ${str.length} length string.`
// }
// console.log(oodStr("Rahul"));

// 50. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings 
//      does not match, then remove the characters from the longer string.

// function strConcat(str1, str2) {
//     if (str1.length !== str2.length) {
//         if (str1.length > str2.length) {
//         str1 = str1.substring(0, str2.length);
//     } else {
//         str2 = str2.substring(0, str1.length);
//     }
//     }
//     return str1 + str2;
// }

// console.log(strConcat("Hello", "World"));

// console.log(strConcat("Rahul", "Tiwari"));


// 51. Write a JavaScript program to test whether a string ends with "Script". 
//      The string length must be greater than or equal to 6.

// function check(str){

//     let match = "SCRIPT"
//     let lower = match.toLowerCase()
//     let str2 = str.toLowerCase()
//     if(str2.length <= 6){
//         return false + ", The string length must be greater than or equal to 6."
//     }
//     //console.log(str2 + " : " + lower);
//     if(str2.slice(str2.length - 6) === lower){
//         return true + " : " + str2
//     }
// }

// console.log(check("Rahul"));


// 52. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

//const arr = [22, 45, 67]
// function Sum_Arr(arr){
//     let sum = 0
//     if(Array.isArray(arr)){
//         for(let i = 0; i < arr.length; i++){
//             sum += arr[i]
//         }
//     }

//     return sum;
// }

// const arr2 = [22, 45, 67]
// console.log(Sum_Arr(arr2));


// 53. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

// function Rot_Arr(arr){
//     if(arr.length !== 3){
//         return false + ", Array length must be 3."
//     }

//     //return [arr[1], arr[2], arr[0]]

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[(i + 1) % arr.length]);
//     }
    
// }
// const arr2 = [22, 45, 67]
// console.log(Rot_Arr(arr2));


// 54. Write a JavaScript program to check whether 1 appears in the first or last position of a given 
//      array of integers. The array length must be larger than or equal to 1

// function ElementCheck(arr){
//     if(arr.length < 1){
//         return "Array length must be 1."
//     }

//     // if(arr[0] === 1){
//     //     return true;
//     // }
//     // else if(arr[arr.length - 1] === 1){
//     //     return true
//     // }else{
//     //     return false
//     // }

//     return (arr[0] === 1 || arr[arr.length - 1] === 1) ? true : false
// }

// const arr2 = [2, 3, 1]
// console.log(ElementCheck(arr2));


// 55. Write a JavaScript program to check whether the first and last elements are the same in a 
//      given array of integers of length 3

// function Element_Same(arr){
//     if(arr[0] === arr[arr.length - 1]){
//         return true + `, Both Elements are same ${arr[0]} and ${arr[arr.length - 1]}`
//     }

//     return false + `, Elements are not same ${arr[0]} and ${arr[arr.length - 1]}`
// }
// const arr2 = [878, 323, 22656]
// console.log(Element_Same(arr2));


// 56. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

// function Rev_arr(arr){
//     if(arr.length !== 3){
//         return false + `, Array length is not Three, ${arr.length - 1}`
//     }

//     let new_arr = []
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);

//         new_arr.unshift(arr[i])
//     }

//     return true + ", " + [new_arr]
// } 
// const arr2 = [87,65,9]
// console.log(Rev_arr(arr2));

// 57. Write a JavaScript program to find the largest value between the first and last elements and set all the
//      other elements to that value. Display the updated array

// function largeEle(arr){
//     if(arr.length === 1){
//         return arr[0] + " ," + false
//     }

//     let new_arr = []
//     if(arr[0] > arr[arr.length - 1]){
//         for(let i = 0; i < arr.length; i++){
//             new_arr.push(arr[0]) 
//         }
//     }
//     else if(arr[0] < arr[arr.length - 1]){
//         for(let i = 0; i < arr.length; i++){
//             new_arr.push(arr[arr.length - 1]) 
//         }
//     }
//     else {
//         return false
//     }

//     return new_arr
// }
// const arr2 = [87, 598, 98]
// console.log(largeEle(arr2));


// 58. Write a JavaScript program to add two digits to a given positive integer of length two.
// function addDigits(num) {
//     if (num >= 10 && num <= 99) {
//         let tens = Math.floor(num / 10);
//         let ones = num % 10;

//         return tens + ones;
//     } else {
//         return "Please provide a two-digit positive integer.";
//     }
// }

// console.log(addDigits(56));
// console.log(addDigits(99));
// console.log(addDigits(8));

// 59. Write a JavaScript program to add two positive integers without carrying.

// function addWithoutCarrying(num1, num2) {
//     let result = 0;
//     let placeValue = 1;

//     while (num1 > 0 || num2 > 0) {
//         console.log("first: ", num1);
//         console.log("second: ", num2);

//         const digit1 = num1 % 10;
//         const digit2 = num2 % 10;
//         console.log("digit1: ", digit1);
//         console.log("digit2: ", digit2);

//         const sum = (digit1 + digit2) % 10;
//         console.log("Sum: ", sum);

//         result += sum * placeValue;
//         console.log("sum * placeValue",sum * placeValue);
//         console.log("Result: ", result);

//         num1 = Math.floor(num1 / 10);
//         num2 = Math.floor(num2 / 10);
//         console.log("num1: ", num1);
//         console.log("num2: ", num2);

//         placeValue *= 10;
//     }

//     return result;
// }

// console.log(addWithoutCarrying(456, 173));
// console.log(addWithoutCarrying(999, 111));
// console.log(addWithoutCarrying(123, 456));


// 60. Write a JavaScript program to find the longest string from a given array of strings.

// function longestString(arr) {
//     let longest = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {

//             console.log("arrayLength ", arr[i].length);
//             console.log("findArrayLength ",longest.length);

//             longest = arr[i];
//             console.log("Longest Array ",longest);

//         }
//     }
//     console.log("Result ",longest);

//     return longest;
// }

// console.log(longestString(["Rahul", "Tiwari", "Satyam"]));


// 61. Write a JavaScript program to replace each character in a given string with the next in the English 
//      alphabet.  Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// function replaceStr(str){
//     let result = ""
//     for(let i = 0; i < str.length; i++){
//         let charAscii = str.charCodeAt(i)
//         let nextChar = charAscii + 1
//         console.log(nextChar);

//         if (charAscii === 122) {
//             result += 'a';
//         }else if (charAscii === 90) {
//             result += 'A';
//         } else {
//             result += String.fromCharCode(charAscii + 1);
//         }

//     }
//     return result;
// }

// console.log(replaceStr("Tiwari"));


// 62. Write a JavaScript program to divide a given array of positive integers into two parts. 
//      First element belongs to the first part, second element belongs to the second part, and third 
//      element belongs to the first part and so on. Now compute the sum of two parts and store it in an 
//      array of size two.

// function IndexaddArray(arr){

//     let evenarr = 0
//     let oddarr = 0

//     if(arr.length <= 2 )
//     {
//         return arr + ` Array length must be greater than two, Array length is ${arr.length}`
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenarr += arr[i]
//             //console.log("even ",evenarr);
//         }
//         else{
//             oddarr += arr[i]
//             //console.log("odd ", oddarr);

//         }
//     }
//     return `[ ${evenarr} , ${oddarr} ]`
// }
// console.log(IndexaddArray([21, 44, 7]));


// 63. Write a JavaScript program to determine if two arrays of integers of the same length are similar. 
//      The arrays will be similar if one array can be obtained from another array by swapping at most one 
//      pair of elements.

// function areArrayIndexSimilar(arr1, arr2) {
//     let newarr = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let matchFound = false;

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 newarr.push(arr1[i]);
//                 matchFound = true;
//                 break;
//             }
//         }

//         if (!matchFound) {
//             console.log("Unmatched element in arr1:", arr1[i]);
//         }
//     }

//     console.log("Matched elements:", newarr);
// }


// function areArrayIndexSimilar(arr1, arr2){

//     let newarr = []
//     for(let i = 0; i < arr1.length; i++){

//         if(arr2.includes(arr1[i])){
//             newarr.push(arr1[i])
//         }
//         else{
//             `${arr1} and ${arr2} are Mismatched.`
//         }
//     }
//     return newarr
// }

// console.log(areArrayIndexSimilar([22, 44, 66,], [22, 45, 68]));


// 64. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides 
//      both integers and does not divide either, two specified integers are similar. Check whether two 
//      integers are similar or not

// function  CheckSimilarity(num1, num2, num3){
//     let add = num1 + num2
//     let sub = num1 - num2
//     let div = num1 / num2
//     let mult = num1 * num2

//     if(num3 === add){
//         return true + `, Operator Add(+) work ${num3}`
//     }

//     if(num3 === sub){
//         return true + `, Operator Sub(-) work ${num3}`
//     }

//     if(num3 === div){
//         return true + `, Operator Div(/) work ${num3}`
//     }

//     if(num3 === mult){
//         return true + `, Operator Mult(*) work ${num3}`
//     }
// }

// console.log(CheckSimilarity(15, 3, 5));


// 65. Write a JavaScript program to find the kth greatest element in a given array of integers.

// function kthGreatestElement(arr, k) {
//     if (k <= 0 || k > arr.length) {
//         return "Invalid value of k";
//     }

//     let result;

//     for (let i = 0; i < k; i++) {
//         let largest = arr[0];

//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j] > largest) {
//                 largest = arr[j];
//             }
//         }

//         result = largest;

//         const index = arr.indexOf(largest);
//         console.log("large, ", arr.splice(index, 1))
//     }

//     return result;
// }

// console.log(kthGreatestElement([87, 9, 98, 8], 1));
// console.log(kthGreatestElement([87, 9, 98, 8], 2));
// console.log(kthGreatestElement([87, 9, 98, 8], 3));


// function kthGreatestElement(arr, k) {
//     arr.sort((a, b) => b - a);

//     if (k <= 0 || k > arr.length) {
//         return "Invalid value of k";
//     }

//     return arr[k - 1];
// }

// console.log(kthGreatestElement([87, 9, 98, 8], 1));
// console.log(kthGreatestElement([87, 9, 98, 8], 2));
// console.log(kthGreatestElement([87, 9, 98, 8], 3));


// 66. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers 
//      (numbers that follow each other in order) in a given array of positive integers. (doubt)

// function maxArrDif(arr){

//     let maxDiff = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         let diff = Math.abs(arr[i] - arr[i + 1]);
//         console.log(`Difference between arr[${i}] and arr[${i + 1}]: ${diff}`);
//         if (diff > maxDiff) {
//             maxDiff = diff; 
//         }
//     }
//     return maxDiff
// }
// console.log(maxArrDif([2, 9, 3, 15, 8]));

// 67. Write a JavaScript program to find the maximum difference among all possible pairs of a given 
//      array of integers

// function MaxMinArr(arr){
//     let maxx =  Math.max(...arr)
//     let min = Math.min(...arr)
//     return maxx - min
// }
// console.log(MaxMinArr([44, 98, 55]));

// 68. Write a JavaScript program to find the number appearing most frequently in a given array of integers. (doubt)

// 69. Write a JavaScript program to replace all numbers with a specified number in an array of integers

// function RemoveEle(arr, k){
//     return arr.splice(1, k)
// }

// console.log(RemoveEle([4, 2, 4, 6, 2, 4, 6, 6, 6], 7));


// 70. Write a JavaScript program to compute the sum of the absolute differences of consecutive 
//      numbers in a given array of integers

// function maxArrDifAdd(arr){

//     let count = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         let diff = Math.abs(arr[i] - arr[i + 1]);
//         count += diff
//     }
//     return count
// }
// console.log(maxArrDifAdd([2, 9, 3, 15, 8]));

// 71. Write a JavaScript program to find the shortest possible string. This can be converted into a 
//      string and converted into a palindrome by adding characters to the end of it. (doubt)

// 72. Write a JavaScript program to check whether it is possible to rearrange the characters of a 
//      given string. This is in such a way that it will become equal to another given string.

// function canRearrangeToEqual(str1, str2){
//     if(str1.length !== str2.length){
//         return `${str1} ${str2} length is difference.`
//     }

//     let sortstr1 = str1.split('').sort().join('')
//     console.log(sortstr1);
//     let sortstr2 = str2.split('').sort().join('')
//     console.log(sortstr2);

//     return sortstr1 === sortstr2
// }

// console.log(canRearrangeToEqual("listen", "silent"))
// console.log(canRearrangeToEqual("triangle", "integral"));
// console.log(canRearrangeToEqual("apple", "pale"));

// 73. Write a JavaScript program to check if there is at least one element in two given sorted arrays of
//      integers.

// function SameEle(arr1, arr2){

//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return `${arr1[i]} and ${arr2[j]} are same element.`
//             }
//         }
//     }

//     return false + " : " + arr1 + " : " + arr2
// }
// console.log(SameEle( [1, 2, 4, 6], [2, 5, 6, 8]));
// console.log(SameEle( [1, 3, 5], [2, 4, 6]));


// 74. Pallindrome

// function CheckPallindrome(str) {

//     str = str.toLowerCase();
//     const len = str.length
//     for(let i = 0; i < len/2; i++){
//         if(str[i] !== str[len - 1 - i]){
//             console.log(str[i] !== str[len - 1 - i]);
//             return `it's not Pallindrome ${str}`
//         }
//     }
//     return `it's Pallindrome ${str}`
// }

// console.log(CheckPallindrome("Madam"));


// 75. Write a JavaScript program to check whether a given string contains only Latin letters and no
//      two uppercase and no two lowercase letters are in adjacent positions.


function isValidLatinString(input) {
    // Check if the string contains only Latin letters
    const isLatinOnly = /^[a-zA-Z]+$/.test(input);
    if (!isLatinOnly) {
        return false; // Contains non-Latin characters
    }

    // Check for adjacent uppercase or lowercase letters
    for (let i = 0; i < input.length - 1; i++) {
        const currentChar = input[i];
        //console.log("Current Char", currentChar);
        const nextChar = input[i + 1];
        //console.log("Next Char", nextChar);

        // If both are uppercase or both are lowercase
        if (
            (currentChar === currentChar.toUpperCase() && nextChar === nextChar.toUpperCase()) ||
            (currentChar === currentChar.toLowerCase() && nextChar === nextChar.toLowerCase())
        ) {
            return false; // Invalid due to consecutive same-case letters
        }
    }

    return true; // String is valid
}

// Test cases
console.log(isValidLatinString("AbCdEf")); // true
// console.log(isValidLatinString("AaBbCc")); // true
// console.log(isValidLatinString("AaBBcC")); // false
// console.log(isValidLatinString("abcDEF")); // false
// console.log(isValidLatinString("123Ab"));  // false
