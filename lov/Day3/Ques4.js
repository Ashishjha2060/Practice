let examplearray = [1,2,3,4,5];

// map() Changes every item	
const array1 = examplearray.map(function(num) {
  return num * 2;
});
console.log(array1); 

// filter() Keeps only items that match condition	
const even = examplearray.filter(function(num) {
  return num % 2 === 0;
});
console.log(even); 

// foreach() Just runs code on each item	
examplearray.forEach(function(num) {
  console.log("Number is:", num);
});

// find already written in Ques2.js
