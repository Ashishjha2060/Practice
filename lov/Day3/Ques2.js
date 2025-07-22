// Array - An array is a list-like structure that can hold .more than one values at a same time.
let fruits = ["apple", "banana","grapes"];
//Array methods available to us-

//1- Push() Add at end
fruits.push("guava");
console.log(fruits); 
//2- Pop() Remove from end
fruits.pop();
console.log(fruits); 
//3- Unshift() Add at start
fruits.unshift("mango");
console.log(fruits); 
//4- Shift() Remove from start
fruits.shift();
console.log(fruits); 
//5- length() Total items
console.log(fruits.length); 
//6- Includes() Check if value exists
console.log(fruits.includes("banana")); 
//7- Index Of() Index of value
console.log(fruits.indexOf("banana")); 
// 8- Join() Turn into string
console.log(fruits.join(", ")); 
// 9- Slice() and Splice() Slice copies array and Splice add/remove items anf changes the array
// 10- Find() Find first match
const fruit = fruits.find(fruits => fruits.startsWith("b"));
console.log(fruit); 
// 11- Reverse() Reverses the order of values
fruits.reverse();
console.log(fruits); 





