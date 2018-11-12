## JavaScript Expressions and Statements

### Expressions
    Any unit of code that can be evaluated to a value is an expression.

### Arithmetic Expressions:
    Arithmetic expressions evaluate to a numeric value.
    10;     // Here 10 is an expression that is evaluated to the numeric value 10 by the JS interpreter

### String Expressions:
    String expressions are expressions that evaluate to a string.
    `'hello' + 'world';`  evaluates to the string 'hello world'

### Logical Expressions:
    Expressions that evaluate to the boolean value true or false are considered to be logical expressions.
    10 > 9;   // evaluates to boolean value true
    10 < 20;  // evaluates to boolean value false

## Primary Expressions:
    Primary expressions refer to stand alone expressions such as literal values, certain keywords and variable values. 
    'hello world'; // A string literal
    23;            // A numeric literal
    true;          // Boolean value true
    sum;           // Value of variable sum
    this;          // A keyword that evaluates to the current object

## Statements

    A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

### Declaration Statements:
    Such type of statements create variables and functions by using the var and function statements respectively. Examples include

    var sum;
    var average;