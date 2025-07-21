var a
console.log(a); // Undefined

var a = "Hello";
console.log(a);


a = "Hello Again";
console.log(a); // Can be Re-assigned

var a = "Hello there";
console.log(a); // Can be Re-declared

{ var b = "Hello Hello";
  console.log(b);
}

console.log(b); // Not block scoped