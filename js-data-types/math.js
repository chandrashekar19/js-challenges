// frequently and commonly used methods available on Math object with coding examples .

console.log(Math.abs(-5)); // 5
console.log(Math.floor(1.6)); // 1
console.log(Math.ceil(2.4)); // 3
console.log(Math.round(3.8)); // 4
console.log(Math.max(-4, 5, 6)); // 6
console.log(Math.min(-7, -2, 3)); // -7
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(5, 3)); // 125
console.log(Math.trunc(-6.3)); //  -6

// How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where === operator fails

// The addition of 0.1 and 0.2 will result in to 0.30000000000000004 and the comparision with 0.3 fails because of the precision problem.

// Number.epsilon is 2-52, which can be used to verify if this decimal values are matching .

console.log(0.1 + 0.2 - 0.3 < Number.EPSILON); // true
