// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected i is, ${index}`);
//         break
//     }
//     console.log(`Value of i is, ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected i is, ${index}, You can continue !!!`);
        continue
    }
    console.log(`Value of i is, ${index}`);
}