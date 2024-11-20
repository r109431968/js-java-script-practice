// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    console.log(`DB Connected 1st !!!`);
}) (); // Ye invoked function hai or ye semicolon is liye lgaya taki dusra invoked function 
       // run ho usme error na aye, is liye semicolon lgana jruri hai.

(function aurCode() {
    console.log(`DB Connected 2nd !!! `);
}) ();

( () => {
    console.log(`DB Connected 3rd !!! `);
}) ();

// Both code are same, pr run krne me error hai, reason ?
// Invoked Function hai dono but jb hm code run kr rhe hain to invoked function kahan stop 
// hona hai ye nhi btaya, us k liye hme invoked function k last me semicolon(;) lgana padega.
// example mene chai code k immediate invoked function k last me semicolon(;) lga diya.

( (name) => {
    console.log(`DB Connected 4th ${name} !!!`);
}) ('Rahul Tiwari')
