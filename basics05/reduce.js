const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, curval) {

//     console.log(`acc ${acc} and curval ${curval}`);
//     return acc + curval
// }, 0) // this zero is acc means accumulator and curval is current value means myNums values.

// 2nd way to write
const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
// console.log(myTotal);


const shpcrt = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "Mobile development",
        price: 9999
    },
    {
        itemname: "Data Science",
        price: 12999
    },
]

const totalShoppingcart = shpcrt.reduce((acc, item) => acc + item.price,0)
console.log(totalShoppingcart);

