"use strict";
// the main purpose of constructors is to implement 
// reusable object creation code.

//in JS they are technically regular functions, with 2 conventions:
//1. they are named with a capital letter first
//2. they should be executed only with the new operator

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  