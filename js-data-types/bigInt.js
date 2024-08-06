/*
4. Write a code to operate on integer numbers outside the range of numbers in JavaScript .

BigInt is a datatype in JavaScript which facilitates the mathematical opertions on huge value of integer number
It is represented by a suffix 'n' for number value.

Notes

The big integers cannot be operated directly with normal number datatype. 10n + 20 is not allowed

*/

// assignment of big integers
const bigNum1 = 1526688934595n,
  bigNum2 = 256489246848n,
  num3 = 1562365;

const bigSum = bigNum1 + bigNum2;
const bigDiff = bigNum1 - bigNum2;
const total = bigNum1 + bigNum2 + BigInt(num3);
console.log("TOTAL", total);
