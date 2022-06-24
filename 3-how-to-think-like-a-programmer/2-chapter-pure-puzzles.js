console.log("P R O BL E M : H A L F O F A S Q U A R E");
/*

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

console.log("P R O BL E M : C O U N T D O W N B Y C O U N T I N G U P");
/*
Write a line of code that goes in the designated position in the loop in the listing
below. The program displays the numbers 5 through 1, in that order, with each num-
ber on a separate line.

for (int row = 1; row <= 5; row++) {
cout << expression << "\n";
}
*/

for (let row = 1; row <= 5; row++){
    console.log(6 - row)
}

console.log("P R O B L E M : A S ID E WA Y S T R I A N GL E");
/* 
Write a program that uses only two output statements, cout << "#" and cout << "\n",
to produce a pattern of hash symbols shaped like a sideways triangle:
#
##
###
####
###
##
#
*/
output = "";
for (let i = -3; i <= 3; i++ ){
    console.log(4 - Math.abs(i));
    for(let p = (4 - Math.abs(i)); p > 0; p-- ){
        output += "#";
    }
    output += "\n";
}

console.log(output);

console.log("P R O B L E M : L U H N C H E C K S U M V A LI D A T I O N");
/*
The Luhn formula is a widely used system for validating identification numbers. Using
the original number, double the value of every other digit. Then add the values of the
individual digits together (if a doubled value now has two digits, add the digits indi-
vidually). The identification number is valid if the sum is divisible by 10.
Write a program that takes an identification number of arbitrary length and
determines whether the number is valid under the Luhn formula. The program must
process each character before reading the next one.
*/

let checkSum = 0;
const checkDigit = 3;
let currentDigit = 0;
let doubledDigit = 0;
let isItTimeToDouble = false;

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

//LaunchProblemLuhn(); 

function LaunchProblemLuhn(){
    process.stdin.on('keypress', (key, data) => {
      if (data.ctrl && data.name === 't') {
          console.log("Final checksum is " + checkSum);
          console.log("Checkdigit is " + checkDigit);
          validateWithLuhnFormula(checkSum, checkDigit);
        process.exit();
      } else {
        console.log('key', key);
        //console.log('data', data);
        if ( Number(key) !== NaN){
            processCurrentDigit(Number(key), isItTimeToDouble);
            isItTimeToDouble = !isItTimeToDouble;
        }
      }
    });
    console.log('Press a key');
}

function processCurrentDigit(currentDigit,  isItTimeToDouble){
    if (isItTimeToDouble){
        doubledDigit = currentDigit*2;
        checkSum += sumDigitsOfdoubledDigit(currentDigit, doubledDigit);
    }
    else {
        checkSum += currentDigit;
    }
}

function sumDigitsOfdoubledDigit(currentDigit, doubledDigit){
    let result = 0;
    if (currentDigit <= 4){
        result += doubledDigit;
    }else{
        const stringDoubledDigit = String(doubledDigit);
        const digitOne = Number(stringDoubledDigit[0]);
        const digitTwo = Number(stringDoubledDigit[1]);

        result += digitOne + digitTwo;
    }
    return result;
}

function validateWithLuhnFormula(checkSum, checkDigit){
    let total = checkSum + checkDigit;
    let isValid = false

    if (total % 10 === 0){
        isValid = true;
    }
    return console.log("Is this number Luhn Valid ? " + isValid);
}

console.log("PROBLEM: DECODE A MESSAGE");
/*
A message has been encoded as a text stream that is to be read character by charac-
ter. The stream contains a series of comma-delimited integers, each a positive number
capable of being represented by a C++ int. However, the character represented by
a particular integer depends on the current decoding mode. There are three modes:
uppercase, lowercase, and punctuation.
In uppercase mode, each integer represents an uppercase letter: The integer
modulo 27 indicates the letter of the alphabet (where 1 = A and so on). So an input
value of 143 in uppercase mode would yield the letter H because 143 modulo 27 is
8 and H is the eighth letter in the alphabet.
The lowercase mode works the same but with lowercase letters; the remainder of
dividing the integer by 27 represents the lowercase letter (1 = a and so on). So an
input value of 56 in lowercase mode would yield the letter b because 56 modulo 27
is 2 and b is the second letter in the alphabet.
In punctuation mode, the integer is instead considered modulo 9, with the inter-
pretation given by Table 2-3 below. So 19 would yield an exclamation point because
19 modulo 9 is 1.
At the beginning of each message, the decoding mode is uppercase letters. Each
time the modulo operation (by 27 or 9, depending on mode) results in 0, the decod-
ing mode switches. If the current mode is uppercase, the mode switches to lowercase
letters. If the current mode is lowercase, the mode switches to punctuation, and if it is
punctuation, it switches back to uppercase.
*/
const streamOfText = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!?,. ;\"\'";  
let integerString = "";
let decodingMode = "uppercase"; 
let decodedOutput  = "";

for (let i = 0; i < streamOfText.length; i++){
    readCharacter(streamOfText[i]);
}
console.log("Decoded Message:");
console.log(decodedOutput);

function readCharacter(character){ 
    if (character !== ","){
        integerString += character;
    }else{
        processInteger(Number(integerString));
        integerString = "";
    }
}

function processInteger(integer){
    let remainder = 0;
    switch(decodingMode) {
        case "uppercase":
            remainder = getRemainder(integer, 27);
            if (remainder !== 0){
                uppercaseDecoding(remainder);
            }else if (remainder === 0){
                switchDecodeMode();
            }
        break;
        case "lowercase":
            remainder = getRemainder(integer, 27);
            if (remainder !== 0){
                lowercaseDecoding(remainder);
            }else if (remainder === 0){
                switchDecodeMode();
            }
        break;
        case "punctuation":
            remainder = getRemainder(integer, 9);
            if (remainder !== 0){
                punctuationDecoding(remainder); 
            }else if (remainder === 0){
                switchDecodeMode();
            }
        break;
    }
}
function getRemainder(integer, divisor){
    let remainder = integer % divisor;
    return remainder;
}

function switchDecodeMode(){
    switch(decodingMode) {
        case "uppercase":
            decodingMode = "lowercase";
        break;
        case "lowercase":
            decodingMode = "punctuation";
        break;
        case "punctuation":
            decodingMode = "uppercase";
        break;
    }
}

function getLetter(remainder){
    let position = remainder -1;
    return alphabet[position];
}

function getSymbol(remainder){
    let position = remainder -1;
    return symbols[position];
}


function uppercaseDecoding(remainder){
decodedOutput += getLetter(remainder).toUpperCase();   
}

function lowercaseDecoding(remainder){
decodedOutput += getLetter(remainder).toLowerCase();
}

function punctuationDecoding(remainder){
decodedOutput += getSymbol(remainder)
}

/* Final Chapter 2 exercises
2-1. Using only single-character output statements that output a hash mark, a
space, or an end-of-line, write a program that produces the following shape:
########
 ######
  ####
   ##
*/
console.log("final exercise 2.1");

output = "";
let size = 8;
let spaces = 0;
for (let i = 1; i <= 4; i++){
    addSpaceToOutput(spaces/2);
    addHashToOutput(size - spaces);
    addSpaceToOutput(spaces/2);
    addEndOfLineToOutput();
    spaces += 2;
}
console.log(output); 

function addHashToOutput(times){
    for (let i= 1; i <= times; i++){
        output += "#";
    }
}

function addEndOfLineToOutput(){
    output += "\n";
}

function addSpaceToOutput(times){
    for (let i= 1; i <= times; i++){
        output += " ";
    }
}
/*
2-2. Or how about:
   ##
  ####
 ######
########
########
 ######
  ####
   ##
*/
console.log("final exercise 2.2");

excercise2_2();

function excercise2_2(){
    let localOutput = "";
    for (let i =1; i<= 4; i++){
        let space = 8 - (i*2);
        let addToOutput = "";
        addToOutput += addChar(space/2, " ");
        addToOutput += addChar(i*2, "#");
        addToOutput += addChar(space/2, " ");
        addToOutput += addChar(1, "\n");
        addToOutput += addToOutput;

        localOutput = localOutput.slice(0, localOutput.length/2) + addToOutput + localOutput.slice(localOutput.length/2, localOutput.length);
    }
    console.log(localOutput);
}

function addChar(n, char){
    let output = "";
    for( let i = 1; i <= n; i++){
        output += char;
    }
    return output;
}

console.log("final exercise 2.3");
/*
#            # // <-- 14 -->
 ##        ##
  ###    ###
   ########
   ########
  ###    ###
 ##        ##
#            #
*/

excercise2_3();

function excercise2_3(){
    let localOutput = "";
    for (let i =1; i<= 4; i++){
        let addToOutput = "";
        let firstNspaces = i-1;
        let secondNspaces = 14 -(2*i) -(2*firstNspaces);

        addToOutput += addChar(firstNspaces, " ");
        addToOutput += addChar(i, "#");

        addToOutput += addChar(secondNspaces, " ");

        addToOutput += addChar(i, "#");
        addToOutput += addChar(firstNspaces, " ");

        addToOutput += addChar(1,"\n");

        // double new string
        addToOutput += addToOutput;
        // insert new string in the middle of old string
        localOutput = localOutput.slice(0, localOutput.length/2) + addToOutput + localOutput.slice(localOutput.length/2, localOutput.length);
    }
    console.log(localOutput);
}