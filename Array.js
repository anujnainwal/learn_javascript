"use strict";
console.log("-----------Array---------");
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
console.log(currencies);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

/*
Slices Array
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end 
(end not included) 
where start and end represent the index of items in that array. The original array will not be modified.
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(...arr);

/*
Splice
The splice() method changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in plac
*/
// console.log("spilce --");
// console.log(arr.splice(1, 2));
// console.log(arr.splice(-1));

// //Reverse the array
// console.log("reverse--");
// console.log(arr.reverse());
// //concat
// let arr2 = ["a", "v"];
// console.log("concat");
// console.log(arr.concat(arr2));
// //join
// console.log("join");
// console.log(arr.join(arr2));

// // The new Method called at

// let arr3 = [20, 21, 22];
// console.log("at method");

// //last array of number
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);

//Looping array using forEach method.
// console.log("---------For Methods-----------");
// for (let [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} Your deposit amount is ${movement}.`);
//   } else {
//     console.log(
//       `Movement ${i + 1} Your deposit amount is ${Math.abs(movement)}`
//     );
//   }
// }
// console.log("For each method");
// movements.forEach((movement, index, arr) => {
//   if (movement > 0) {
//     console.log(
//       `Movemont ${index + 1}:  Your deposit amount is ${Math.abs(movement)}`
//     );
//   } else {
//     console.log(
//       `Movemont ${index + 1}: Your deposit amount is ${Math.abs(movement)}`
//     );
//   }
// });

//ForEach Method with Maps and Sets
// console.log(currencies);
// currencies.forEach((value, key, map) => {
//   console.log(`key: ${key} value: ${value}`);
// });
// //Set
// console.log("----------Set---------");
// let curreniesUnique = new Set(["USD", "USD", "EUR", "EUR", "IND"]);
// console.log(curreniesUnique);
// curreniesUnique.forEach((value, key, set) =>
//   console.log(`key:${key}  value: ${value} `)
// );

/*
Working With Arrays
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
 */
let data1 = [3, 5, 2, 12, 7];
let data2 = [4, 1, 15, 8, 3];
let data3 = [9, 16, 6, 8, 3];
let data4 = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  const juliaCopy = dogsJulia.slice();
  juliaCopy.splice(0, 1);
  juliaCopy.splice(-2);
  let dogsCorrectAge = juliaCopy.concat(dogsKate);
  dogsCorrectAge.forEach((dogs, index) => {
    let checkAgeDogs =
      dogs > 3
        ? `The dog number ${
            index + 1
          } is adult dog and dogs is ${dogs} years old. 🐕`
        : `The dog number ${index + 1} is puppy. 🐶 `;
    console.log(checkAgeDogs);
  });
  // //old way to create shallow copy of array
  // let shallowCopyJulia = [];++
  // for (let i = 0; i < dogsJulia.length; i++) {
  //   shallowCopyJulia[i] = dogsJulia[i];
  // }
  //  console.log("julia", shallowCopyJulia);
  // shallowCopyJulia.splice(0, 1);
  // shallowCopyJulia.splice(-2);
  // console.log(shallowCopyJulia);
}

// checkDogs(data1, data2);
checkDogs(data3, data4);
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

 */
//using map,filter and reduce method
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(`The human age`, humanAges);
  // for adults
  const adults = humanAges.filter((age) => age >= 18);
  console.log(`The adult age is ${adults}`);
  const average = adults.reduce(
    (acc, crr, index, arr) => acc + crr / arr.length,
    0
  );

  return average;
};
const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(
  `Average human age is ${average1} \n and average human age is ${average2}`
);

//question
// const input = [1, -4, 12, 0, -3, 29, -150];
// let output = 42;

// let array = input.filter((arr) => arr > 0);
// let output2 = array.reduce((acc, curr) => acc + curr);
// console.log(output2);
//question2
const input = [12, 46, 32, 64];
console.log(input.sort((a, b) => a - b));
