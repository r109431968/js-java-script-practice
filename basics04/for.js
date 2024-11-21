// for

// for(let i = 1; i <= 10; i++){
//     const element = i;
//     if(i == 5){
//         console.log(i,"5 is Best Number !!!");
//     }
//     console.log(element);
// }

// console.log(i); // outside the object.



for(let i = 1; i <= 10; i++){
    console.log(`Outer loop ${i}`);
    
    for(let j = 0; j <= 10; j++){
        // console.log(`Inner loop ${j}, Outer loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}