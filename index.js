'use strict';

function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    let firstLtr = str.charAt(0).toUpperCase();
    let newStr = str.toLowerCase().slice(1);
    return firstLtr + newStr;
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log('To test, use add7(num), multiply(num1, num2), capitalize(str) or lastLetter(str).');