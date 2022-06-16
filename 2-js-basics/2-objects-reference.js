"use strict";
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = {
    name: "Jhon"
};

let admin = user;

admin.name = "Chris";

console.log(user.name);

// Cloning an object

let clone = {};

for (let key in user){
    clone[key] = user[key];
}

clone.name = "Jack";

console.log(user.name);

// object.assign copies properties of N Source objects into an object
let permision1 = {
    isAdmin: true
};
let permision2 = {
    name:"Lara"
};

Object.assign(user, permision1, permision2);
// properties with same name are overwritten
console.log(user);

//alternative cloning method with Object.assign
user = {};
user =  {
    name:"Jhon",
    age:30
};

clone = {};
clone = Object.assign({}, user);

console.log(user);

// const objects can be modified

const person = {
    name: "Jhon"
};

person.name = "Peter";

console.log(person);

