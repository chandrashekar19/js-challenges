//  the frequently and commonly used methods available on Number object with coding examples

/* 

--> isInteger is used to check if the given number is integer or not

--> parseInt is used to convert a given value in to integer

--> parseFloat is used to convert a given value in to floating number

--> isNaN is used to check if the given value is NaN or no

--> toFixed is used to limit the number of digits after the decimal place

--> toPrecision is used to limit the total number of digits to represent the number

*/

console.log(Number.isInteger(1.55555555));
console.log(Number.isInteger(-155));

console.log(Number.parseInt("5.8.5.5"));
console.log(Number.parseInt("123xyz"));

console.log(Number.parseFloat("5.86xyz"));
console.log(Number.parseFloat("-12.69xwew"));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("text" - 10));
console.log(Number.isNaN("text"));

// * NaN is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text
