// Write a code to iterate over a string

let string = "kalal";

// 1st approach

for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
}

// 2nd approach

for (let val of string) {
  console.log(val);
}

// 3rd approach

for (idx in str) {
  console.log(str[idx]);
}

// 4th approach

[...str].forEach((value) => console.log(value));
