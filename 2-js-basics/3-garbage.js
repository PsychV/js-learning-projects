"use strict";
// "reachable” values are those that are accessible or usable (there are two types)
// Type A -> inherently reachable values, because we are using them = root values
// Examples: 
// 1. The currently executing function, its local variables and parameters.
// 2. Other functions on the current chain of nested calls, their local variables and parameters.
// 3. Global variables.
// 4. (there are some other, internal ones as well)

// Type B -> Any other value is considered reachable, if it is reachable by a root value, by reference or multiple chain references

// user has a reference to the object
let user = {
    name: "John"
  }
  user = null;
// Now John becomes unreachable


// more complex example:

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

delete family.father;
delete family.mother.husband;
// Outgoing references (Jhon`s wife = Ann) do not matter. Only incoming ones can make an object reachable. So "Jhon" is garbage collected.
family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
family = null;
// Now withouth the root value family, "Jhon" and "Ann" get garbage collected. Despite both having incoming references."



//  Garbage collection algorithm is called “mark-and-sweep”.
// 1. The garbage collector takes roots and “marks” (remembers) them.
// 2. Then it visits and “marks” all references from them.
// 3. Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
// 4. …And so on until every reachable (from the roots) references are visited.
// 5. All objects except marked ones are removed.