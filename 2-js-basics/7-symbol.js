"use strict";
// A “symbol” represents a “primitive unique value” with an optional description.
let id = Symbol();

// we can create them with a description
let id1 = Symbol("id");
let id2 = Symbol("id");

// symbols are guaranteed to be unique, even when they have the same description.

console.log(id1 == id2); // false

// The “hiding symbolic properties” principle
// As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. 
// However, symbols cannot be accessed accidentally. 
// The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.

// Symbols in an object literal
id = Symbol("id"); // If we want to use a symbol in an object literal {...}, we need square brackets around it.

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbols are skipped by for…in

//  Object.assign copies both string and symbol properties

// Global symbols
// read from the global registry
id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( id === idAgain ); // true

// Symbol.keyFor (for global symbols only)

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
