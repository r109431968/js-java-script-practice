const tinderUser = new Object() // its also a way to declare a object.
//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "som@jdfvnc.com",
    fullname: {
        userfullname:{
            firstname: "Rahul",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: 'b'}
const obj3 = {5: "a", 6: 'b'}

//const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4)

const users = [
    {
        id: 1,
        email: "nm@gmail.com"
    },
    {
        id: 2,
        email: "rt@gmail.com"
    },
    {
        id: 3,
        email: "pt@gmail.com"
    },
]

users[1].email


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // it convert every key value in array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it tells about that this key or property is available or not.
// console.log(tinderUser.hasOwnProperty('isLoggedI'));


const course = {
    coursname: "js in hindi",
    price: 999,
    courseInstrctor: "Rahul"
}
// course.courseInstrctor
// const{courseInstrctor} = course
// console.log(courseInstrctor);

// const{courseInstrctor: instructor} = course
// console.log(instructor);
