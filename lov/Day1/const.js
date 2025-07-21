// const a
// console.log(a); [ *Gives error; Initializing while declaring is compulsary* ]

const a = "Hello";
console.log(a);

// a = "Hello there";
// console.log(a); [ *Gives error; Reassigning a const value cannot be done* ]

// const a = "Hello Hello"
// console.log(a); [ *Gives error; Declared value cannot be re-declared* ]
 
{const b = "Hello again"
 console.log(b);  // accessible inside the block
}

console.log(b); // Not accessible outside the block