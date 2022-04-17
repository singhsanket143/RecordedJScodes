// initializing different data types in javascript
let undefined_variable = undefined;
let number_variable = 1254.87;
let bool_variable = false;
let null_variable = null;
let string_variable = 'THis is a string';

let multi_line_string = `this is 
                          a multiline 
                          string`;
let big_int_variable = 123454232343234n;
let symbol_variable = Symbol("Avenger");

let object_variable = {"name": "Sanket"}

/*
This is 
a multiline
comment
*/

console.log(
    undefined_variable, 
    number_variable, 
    bool_variable, 
    null_variable, 
    string_variable,
    multi_line_string,
    big_int_variable,
    symbol_variable,
    object_variable);

console.log("Type of undefined_variable", typeof undefined_variable);
console.log("Type of number_variable", typeof number_variable);
console.log("Type of bool_variable", typeof bool_variable);
console.log("Type of null_variable", typeof null_variable); // this is a comment
console.log("Type of string_variable", typeof string_variable);
console.log("Type of multi_line_string", typeof multi_line_string);
console.log("Type of big_int_variable", typeof big_int_variable);
console.log("Type of symbol_variable", typeof symbol_variable);
