const ask1 = 'Write code to show the difference between let, const and var in terms of scope, hoisting and re-assignability'

//Difference in terms of scope

{
  let a = 'let is block scoped (cannot be used outside the block it is created in)';
  console.log(a);     //This will print value inside a
}
console.log(a);  // This will give an error since this is  outside the block

{
  const b = 'const is also block scoped';
  console.log(b);
}
console.log(b); // This will give an error

{
  var c = 'var is globally scoped ( if created outside functions )'
  function vartest() {
    var d = 'var is function scoped if created inside a function'
    console.log(d) // Prints the value of d
    console.log(c) // Prints the value of c
  }
  console.log(c) // prints the value of c
  console.log(d) // Gives an error since d is created inside a function
}
console.log(c) // prints the value of c


//Difference in terms of Hoisting

// Hoisting basically means at the time of compiling,only the declarations of the variables moves to the top of the scope of the variable

console.log(e); // Gives an undefined value but throws no error since var is hoisted
var e;

console.log(f); // Gives a reference error since let is not hoisted
let f;  

console.log(g);   // Gives a reference error 
const g = 10;


// Difference in terms of re-assignability

let test1 = 1;
test1 = 2;     // let can be reassigned

const test2 = 1;
test2 = 2;     // const variables cannot be re assigned

var test3 = 1;
test3 = 2; // var can also be reassigned




ask2 = 'Write code to type cast data types and log their values and their differences.'

//Number to string

let num = 42;
let num_in_string = String(42);
console.log(`Value: ${num}, type: ${typeof num}`);
console.log(`Value: ${num_in_string}, type: ${typeof num_in_string}`);


// String to Number
let str = "123";
let str_in_number = Number(str);
console.log(`Value: ${str}, type: ${typeof str}`);
console.log(`Value: ${str_in_number}, type: ${typeof str_in_number}`);


//Boolean to string

let bool = true;
let bool_in_string = String(bool);
console.log(`Value: ${bool}, type: ${typeof bool}`);
console.log(`Value: ${bool_in_string}, type: ${typeof bool_in_string}`);

//String to Boolean


let str2 = "hello";
let str2_in_bool = Boolean(str2);
console.log(`Value: ${str2}, type: ${typeof str2}`);
console.log(`Value: ${str2_in_bool}, type: ${typeof str2_in_bool}`);

//Number to Boolean


let zero = 0;
let zero_in_bool = Boolean(zero);
console.log(`Value: ${zero}, type: ${typeof zero}`);
console.log(`Value: ${zero_in_bool}, type: ${typeof zero_in_bool}`);

//Boolean to Number


let bool2 = false;
let bool2_in_number = Number(bool2);
console.log(`Value: ${bool2}, type: ${typeof bool2}`);
console.log(`Value: ${bool2_in_number}, type: ${typeof bool2_in_number}`);




ask3 = 'Explain Difference between == and ===.'

main_difference = '== checks if the value of 2 things is equal or not but === checks if the values are equal along with their data type'


let abc = 123; let xyz = '123';
console.log(abc == xyz) // This returns true 
console.log(abc === xyz) // This returns false as one is a number and the other is a string 

