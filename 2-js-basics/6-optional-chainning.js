"use strict";
// Sometimes we want to acces an object property that might be undefined
// if we try to access an empty property in JS we will get an error by default

// we solve this problem with conditionals, but we will repeat a lot of code
let user = {};

alert(user.address ? user.address.street : undefined);

// if the property is deeply nested, it gets uglier

 user = {}; 

alert(user.address ? user.address.street ? user.address.street.name : null : null);

// with && is a little better

 user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name );


//to solve this readability problem '?.' conditional chaining was introduced. 
// if previous value is null or undefined, it stops evaluation and returns undefined

user = {}; // user has no address

alert( user?.address?.street ); 

// however variable must be declared, or we get an error

// it can be used to call functions that might not exist

let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothig happens, such a method doesn 't exist

  // ?.[] syntax also works
  let user1 = {
    firstName: "John"
  };
 console.log(user1?.["firstName"]);

 //  we can use ?. with delete:
 delete user?.name; // delete user.name if user exists