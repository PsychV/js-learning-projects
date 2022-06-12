// two ways of declaring an empty object
let user = {};
let user2 = new Object(); 

 user = {
    name: "Jhon",
    age: 30   
};

user.isAdmin = true;

delete user.age;

console.log(user);

user = {
    "likes birds": true    
}
//user.likes birds = true, this sintax doesn 't work. Instead:

user = {};

user["likes birds"] = true;

delete user["likes birds"];

user = {};

let key = "likes birds";

user[key] = true;

// Computed properties

let inputFruit = "Apple"
let bag = {};

bag = {
    [inputFruit + "Computers"]:4
};

// Arguments to properties shorthand

function makeUser(name, age){

 return {
    name,
    age
 };   

}

// object properties do not have name limitations

let obj = {
    for: 1,
    return: 2,
    Object: 3
}

// in JS you can access properties that doesn 't exist
user = {};
// two ways of testing if a property exist
user.noSuchProperty === undefined; // true
"noSuchProperty" in user; // false

// the "for ... in" loop
user = {};
user.name = "Jhon";
user.age = 30;
user.isCool = true;

for (propertie in user){
    console.log(user[propertie]);
}

// integer properties are ordered, other properties are ordered by creation time

let phoneCodes = {
    34: "Spain",
    "1": "US"
}
// integer properties can be written as string or integer
for (propertie in phoneCodes){
    console.log(phoneCodes[propertie]);
}

// adding a "+" makes them not integers

phoneCodes = {
    "+34": "Spain",
    "+1": "US"
}
for (propertie in phoneCodes){
    console.log(phoneCodes[propertie]);
}