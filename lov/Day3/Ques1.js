// Object - A container that stores data in form of "key-value" pairs.

// Difference between object.key and object['key']
// 1- object.key - Notation is used to fetch the value key stored provided key is simple and has no spaces or identifiers.
// 2- object['key'] - Notation is used to fetch the value key stored provided key has spaces or identifiers.

// Example:-

//object.key
const a = {
  name: "Lov",
  age: 25
};
console.log(a.name); 
console.log(a.age);  

//object['key]
const b = {
  name: "Lov",
  "home city": "Delhi",  
  age: 25
};
console.log(b["name"]);      
console.log(b["home city"]); 
