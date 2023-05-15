"use strict";
// //create flight booking system
// let book = [];
// const createBooking = function (
//   flightNumber,
//   numPassgener = 1,
//   price = numPassgener * 199
// ) {
//   //before es6 to create default value
//   // numPassgener = numPassgener || 0;
//   // price = price || 0;

//   const booking = {
//     flightNumber,
//     numPassgener,
//     price,
//   };
//   console.log("Booking number: ", booking);
//   book.push(booking);
// };
// createBooking("LH1");
// createBooking("LH2", 2);
// createBooking("LH2", 4);
// console.log(book);

//How passing arguments work vs refrence
// let flight = "AH1";
// const anuj = {
//   name: "anuj",
//   passport: 2324325436,
// };

// let checkIn = function (flightNumber, passenger) {
//   //Ese before
//   flightNumber = "Asj22";
//   passenger.name = "Mr." + passenger.name;
//   if (passenger.passport === 2324325436) {
//     console.log("check in");
//   } else {
//     console.log("Password is invalid");
//   }
// };

// checkIn(flight, anuj);
// console.log(flight);
// console.log(anuj);

//First class function or higher order
//lowercase
// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };
// //uper function
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //Higher order function
// const transformer = (str, fn) => {
//   console.log("Orginal String: ", str);
//   console.log(`Modify string: ${fn(str)}`);
//   console.log(`Transform by ${fn.name}`);
//   console.log(fn);
// };
// transformer("Javascript is cool", upperFirstWord);
// transformer("Javascript is cool", oneWord);

// //high5
// const high5 = function () {
//   console.log("hello ✌️ ");
// };
// document.body.addEventListener("click", high5);
// ["ANuj", 2, 3].forEach(high5);

// //function returning funtion
// let greet = function (greeting) {
//   return function (name) {
//     return console.log(`${greeting} ${name}`);
//   };
// };
// const greetHey = greet("Hey");
// greetHey("Anuj");
// greetHey("Paras");
// greet("Hello")("Aman");

// //Arrow function
// let greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow("sad")("aman");

//Call and Apply
// let booking = [];
// let airIndia = {
//   airLine: "Air India",
//   code: "AI1",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} with flight ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.code} ${flightNum}`, name });
//     // console.log("airIndia ", this);
//   },
// };

// airIndia.book(231, "Anuj singh naiwnal");
// airIndia.book(234, "Aman");
// console.log(airIndia);

//another object
// const newBook = {
//   name: "Sdw",
//   code: "AE1",
//   bookings: [],
// };
// console.log(newBook);
// const book = airIndia.book;
//Does not work
// book(123, "sara");
//call method
// book.call(newBook, 18, "Julia");
// book.call(airIndia, 22, "Marry Cooper");
// console.log("book , ", book);
// console.log(newBook);

/*
A closure is the combination of a function bundled together (enclosed) with references
 to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function. 
 */

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} Passenger c .`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

//more clouser
let f;
const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 30; //clouser
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//Re assign

h();
f();
console.dir(f);
//Example bording passgener
const boardPassgener = function (n, wait) {
  let passGroup = n / 3;
  setTimeout(function () {
    console.log(`We are boarding all ${n} passgener `);
    console.log(`There are 3 groups, with each ${passGroup} passgener`);
  }, wait * 1000);
  console.log(`We are boarding with ${wait} seconds.`);
};
boardPassgener(210, 3);
console.dir(boardPassgener);
