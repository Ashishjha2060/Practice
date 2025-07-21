// Difference between == and ===
// "==" checks if the values are same
// "===" checks if the values and types are same

let a = "5";    
let b = 5;      

console.log(a == b);   // True because values are same ( 5 in both )
console.log(a === b);  // False because even if values are same, Data types are different ( a is string and b is number )