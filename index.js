let code1;
//declaration
//'LET' allows me to change value later
//'CONST' sets the value forever

code1 = 7 + 3;
// '=' is THE assignment operator

const code2 = (100 - 20) / 2;
//code2 is const because the value stays the same.(JS throws an error is i try to reassign a value to code2)
//code2 = 5 + 4; <--- this throws an error.

let code3;
code3 = 100 % 61;
//modulo is "%" operator

const message = "The vault has been secured. The combination is";
//initialization 'const' the declaration and assignment of value after "="

const codeA = code1 + "-" + code2 + "-" + code3;
//concatenation is joining strings "+", and atleast one string "-"

const codeB = `${code1}-${code2}-${code3}`;
//Template Literal '${}-${}'; ect. inject JS variables into a string. code1 = 10 and it makes the variable into a string.

console.log(message, codeA, codeB);
