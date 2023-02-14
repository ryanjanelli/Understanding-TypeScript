"use strict";
function addBasic(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        return;
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResultBasic = true;
const resulstPhrase = "Result is: ";
addBasic(+number1, +number2, printResultBasic, resulstPhrase);
