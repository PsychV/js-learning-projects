"use strict";
// A function that is a property of an object is called its method.
let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!

  // these objects do the same

user = {
    sayHi: function() {
      console.log("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      console.log("Hello");
    }
  };

  // It’s common that an object method needs to access the information stored in the object to do its job.

   user = {
    name: "John",
    age: 30,
  
    sayHi() {
      console.log("Hi i'm " + this.name ); 
    }
  
  };
  let admin = user;
user = null; 

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// “this” is not bound
//  It can be used in any function, even if it’s not a method of an object.
// The value of this is evaluated during the run-time, depending on the context.
user = { name: "John" };
admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya


  // TASKS

 // What is "this" ?

 //this keyword refers to an object. Which object depends on how this is being invoked (used or called).

 // In an object method, this refers to the object. (object before method dot)

 const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

 // Alone, this refers to the global object. "Window" in the browser and "module.exports" in node.js
 module.exports.foo = 5;
 let x = this; 
 console.log(" let x = this; ");
 console.log(x);

 // In a function, this refers to the global object.    
 // but in a function, in strict mode, this is undefined.
 function myFunction() {
    return this;
  }
console.log(myFunction);
console.log(myFunction());


console.log("What if \"this\" is inside a property in an object ?")
let object = {
    property: this
};
console.log(object.property); //global object

const sample = {
    a:1, 
    b:2, 
    c:3,
    listObjectProperties(){
        for (const k in sample){
            console.log(sample[k]); // 1, 2, 3
        }
        return 1 // JS functions always return something, if return is not defined -> "undefined"
    }
};
console.log("START sample");
console.log(sample.listObjectProperties());
console.log("END sample")

let calculator = {
    read(prompt1, prompt2){
        this["a"] = prompt1;
        this["b"] = prompt2;
    },
    sum(){
        let totalSum = 0;
        for( let key in calculator){
            if (typeof(calculator[key]) === "number"){
                totalSum += calculator[key];
            }
        }
        return "total sum is " + totalSum;
    },
    multiply(){
        let result = 1;
        for( let key in this){
            if (typeof(calculator[key]) === "number"){
                result *= calculator[key];
            }

        }
        return "total multiplication is " + result;
    }    
};

console.log("trying calculator exercise ...")
calculator.read(1,2); // works as expected
calculator["c"] = 3; // works as expected

for (const k in calculator){
    console.log(calculator[k]); // 1, 2, 3
}


console.log(calculator.sum());
console.log(calculator.multiply());


// Chainning problem
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this
    }
  };


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// do the same with:
 ladder.up().up().down().showStep().down().showStep(); // ladder.up() = ladder (return) .up() = etc ...