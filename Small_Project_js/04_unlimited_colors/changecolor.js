// generate a random color

const randomColor =  function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

// console.log(randomColor());

let intervald;
const starChangingcolor = function() {
    
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    if (!intervald) {
        intervald = setInterval(changeBgcolor, 1000)   
    }
    
}

const startbtn = document.getElementById('start').addEventListener('click', starChangingcolor)


const stopChangingcolor = function() {
    clearInterval(intervald)
    intervald = null;
}

const stopbtn = document.getElementById('stop').addEventListener('click', stopChangingcolor)
