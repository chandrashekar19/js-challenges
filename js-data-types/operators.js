//  Show the usage of ||, &&, ?? and !! with code examples

// The logical OR (||) operator for a set of operands is true if and only if one or more of its operands is true.

// The logical AND (&&) operator for a set of operands is true if and only if all of its operands are true.

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand .

// The double NOT (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive.

// || Operator (OR) Example Code

const num1 = 10,
  num2 = 20;

true || false; // true
false || false; // false
false || num1; // 10
0 || num2; // 20
"text" || true; // "text"
num1 > 0 || num2 < 0; //

// && Operator (AND) Example Code

const num3 = 10,
  num4 = 20;

true && true; // true
true && false; // false
true && num3; // 10
num3 && num4; // 20
"text" && num3 + num4; // 30
num3 > 0 && num4 < 0; // false

//  examples on Nullish coalescing operator(??)

undefined ?? 10; // 10
null ?? 20; // 20
false ?? num1; // false
0 ?? num2; // 0

//  examples on double NOT (!!)  operator

!!10; // true
!!{}; // true
!!""; // false
!!0; // false

// Notes: It is not possible to combine both the AND (&&) and OR operators (||) directly with ??
