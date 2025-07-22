let a
console.log(a); // Undefined

// let a = "Hello";
// console.log(a);  [ *Gives error; cannot be re-declared* ]

let b = "Hello";
console.log(b);

b = "Hello there"
console.log(b); // Can be Reassigned

{let c = "Hello again"
 console.log(c);   // accessible inside the block
}

console.log(c); // Not accessible outside the block