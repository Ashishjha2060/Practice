// Spread Operator- The spread operator (...) is used to "spread" or unpack the contents of an array, object, or string into individual elements or properties.

// There are spreads in :-
// 1- Spread in Array-
//     For copying, merging and adding new values along with the given array

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [...nums1];
const combined = [...nums1, ...nums2];
console.log(nums3); 
console.log(combined);


// 2- Spread in Objects-
//     For copying, merging and overwriting the properties

const user = { name: "Lov", age: 22 };
const user2 = { ...user };
console.log(user2); // copying object user
const user3 = { ...user, age: 20 };
console.log(user3); // gives output as age-"20"


// 3- Spread in String
const word = "hello";
const letters = [...word];
console.log(letters);