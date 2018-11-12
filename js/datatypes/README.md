## Data Types in JS

### Primary Data Types
    * Boolean
    * Number
    * String

### Composite Data Types
    * Array
    * Objects

### Special Data Types(primary only)
    * undefined
    * null

## Numbers
    The simplest number is an integer. If you assign 1 to a variable, and then use the typeof operator, it returns the string number.
```
    var a = 1;
    typeof a;
```
    Numbers can also be floating point (decimals), for example:
```
    var b = 123.45;
    typeof b;
```
### Octal, Hexadecimal and binary
    * When a number starts with a 0, it's considered an octal number. For example, the octal    0377 is the decimal 255.
    * You can put 0x before a hexadecimal value. Example 0xff
    * you can use 0b (or 0B) prefix to represent binary integers.

### Exponent literals
    1e1 (also written as 1e+1 or 1E1 or 1E+1) represents the number 1 with a 0 after it, or in other words, 10.

### Infinity
    There is a special value in JavaScript called Infinity. It represents a number too big for JavaScript to handle.

### NaN
    Not a Number, NaN is a special value that is also a number.
    You get NaN when you try to perform an operation that assumes numbers, but the operation fails. For example, if you try to multiply 10 by the character "f", the result is NaN.


