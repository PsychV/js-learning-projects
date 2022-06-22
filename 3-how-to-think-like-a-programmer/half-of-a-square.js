/*
P R O BL E M : H A L F O F A S Q U A R E

Write a program that uses only two output statements, cout << "#" and cout << "\n",
to produce a pattern of hash symbols shaped like half of a perfect 5 x 5 square (or a
right triangle):
#####
####
###
##
#
*/
let output = "";


for (let i = 5; i > 0; i-- ){
    for(let p = i; p > 0; p-- ){
        output += "#";
    }
    output += "\n";
}

console.log(output);