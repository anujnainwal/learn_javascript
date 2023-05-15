"use strict";
/* Javascript Data type
Primitive Data types
1. Number 
2.string
3.boolean
4.undefined
5.null
6.Symbol
7.BigInt
Non-primitives data types
1.Object


 */
/* let fun = true;
console.log('value: ',fun,' typeOf: ',typeof(fun))
let b = 'Anuj'
console.log('value: ',b,' typeOf: ',typeof(b))
let c = 10;
console.log('value: ',c,' typeOf: ',typeof(c))
let year
console.log('value: ',year,' typeOf: ',typeof(year))
let curr=null;
console.log('value: ',null,' typeOf: ',typeof(null))
*/
//var let and const
//let name = 'Anuj'
//console.log(name);
//name='Aman';
//console.log(name);
//not change dob
//const birthYear = 2000;
//console.log(birthYear)
//birthYear = 1999;
//console.log(birthYear);
//var job= 'jpb'
//console.log(job)

//Basic operator
/*
- subtract 
+ Addition
* Multiply
/ divide
% modules

comparsion operator
> greater
< less than
>= greater than equal to
<= less than equal to 

*/

// let age =  2023- 1999 ;;
// console.log(age)
// // age ** 3 means = 24 * 24 * 24
// console.log('age : ',age *2,' age2: ', age** 3)
// //full name
// let firstName = 'Aman'
// let lastName = 'Nainwal'
// console.log(firstName+ ' '+ lastName)
// //Addition
// let x = 10;
// console.log('x ', x+10)
// console.log('x ', x +=30)
// x++
// console.log(x)
// x--
// console.log('x-- ',x);

/* if else condition */
// let aliceAge = 17;

// if (aliceAge > 18) console.log(` aliceAge has write to vote`);
// else console.log(`alice do not have to vite`);

/* Type conversion
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans

 */
// let birthYear = "2000";
// let name = "anuj";
// console.log(Number(birthYear) + 18);
// console.log(Number(name) + 18);
// console.log(typeof NaN + 18); //number
// console.log(
//   "string ",
//   String(birthYear),
//   typeof String(birthYear),
//   "number ",
//   birthYear,
//   typeof Number(birthYear)
// );

//type coercion
// console.log("23" - "10" - 3);
// console.log(Number.MAX_VALUE);

//Falsy value
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("anuj"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// let money = 100;
// if (money) {
//   console.log("====================================");
//   console.log("dont spend money");
//   console.log("====================================");
// } else {
//   console.log("get a job bro");
// }

// strict mode
// "use strict";
// let hasDrivingLicence = true;

// if (hasDrivingLicence) {
//   console.log("has driving license.");
// } else {
//   console.log("not has driving license");
// }

/*
Function
 */

// function logger() {
//   console.log("my name is anuj");
// }
// //calling / invoking /running
// logger();

// apple and organe juice
// function fruitProcessor(apple, orange) {
//   console.log(apple, orange);
//   const juice = `juice with ${apple} and ${orange} collection`;
//   return juice;
// }
// console.log(fruitProcessor(5, 0));

/* clculate the age of person according birthYear */

// function ageOfPerson(birthYear) {
//   const personAge = `Your age is ${2023 - birthYear}`;
//   return personAge;
// }
// console.log(ageOfPerson(1999));

//Arrow function
// let ageOfPerson = (name, birthYear) => {
//   const personAge = 2023 - birthYear;
//   let details = `Your name is ${name} and your age is ${personAge}`;
//   return details;
// };
// console.log(ageOfPerson("Anuj", 1999));

//function function call
/*
let calcAge = (birthYear) => {
  return 2023 - birthYear;
};
let ageOfPerson = (name, birthYear) => {
  let details = `Your name is ${name} and your age is ${calcAge(
    birthYear
  )} old.`;
  return details;
};

console.log(ageOfPerson("Anuj", 1999));
*/
//Basic Array
/*let friends = ['Anuj','Aman','Kailash']
console.log(friends)
//years 
//let year =new Array('1999','2000')
//console.log(year)
//get first array 
console.log(friends[0])
//length of the array 
console.log(friends.length)
//last name of friends
console.log(friends[friends.length - 1])
//change the name of array at specfic position
friends = ['kailash','aman']
console.log(friends)
const firstName = 'Anuj';
const anuj = [firstName, 2023 - 1999, 'web developer', friends];
console.log(anuj)

function calcAge(birthYear){
	return 2023 - birthYear;
}

const year = [2000,1999,1998,1997];
let age1 = calcAge(year[0])
let age2 = calcAge(year[1]);
let age3 = calcAge(year[year.length - 1 ])

let age = [calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length - 1 ])]
console.log(age) */

//Basic operation of Array;
/* let friends = ['aman','anuj','nainwal','kailash'];


console.log(friends)
//push array ->  add an element to the end of an array, you use the push() method:;
friends.push('javed')
console.log(friends)
//unsift method -> To add an element to the beginning of an array, you use the unshift() method:
friends.unshift('Amm');
console.log(friends) 
//remove element from last element -> To remove an element from the end of an array, you use the pop() method:
friends.pop()
console.log(friends)
friends.pop()
console.log(friends)
//shift element from remove -> To remove an element from the beginning of an array, you use the shift() method:
friends.shift()
console.log(friends)
//indexOf -> To find the index of an element, you use the indexOf() method:
console.log(friends.indexOf('was'))
/* includes 
The includes() method determines whether an array includes
 a certain value among its entries, returning true or false as appropriate.
console.log(friends.includes('was'));
console.log(friends.includes('anuj'))
//checking is admin or user
const access_rights = ['admin','user'];
if (access_rights.includes('admin')){
	console.log('Welcome admin')
}else{
	console.log('only admin can access this.');
} /* 
//javascript objects
/* let personInfo = {
	id:1,
	firstname:'anuj',
	lastname:'nainwal',
	fullname:['anuj','nainwal'],
	age: 24,
}
console.log(personInfo)
//access object value
//console.log(personInfo.lastname) //dot notation
personInfo['email'] ='anujsinghnainwa@gmail.com';
console.log(personInfo) //object notation */

//Object methods
/*
let personInfo = {
	id:1,
	name:"Anuj",
	birthYear: 1999,
	email:"anujsingh@gmail.com",
	calcAge: function (){
		console.log(this,this.birthYear);
		return 2023 - this.birthYear;
	},
	gender:'m'
}
console.log(personInfo.calcAge());
*/
//Looping

/* for( let i=0; i<10; i++){
console.log(`weight lifting reps ${i}`)
}
*/
// const anujArray = ["Anuj", "Nainwal", ["amam", "a", "w"], 2037 - 2022];
// let types = [];

/* for(let i=0; i<anujArray.length; i++){
	console.log(anujArray[i], typeof anujArray[i]);
	types.push(typeof anujArray[i])
}
for(let i=0; i<anujArray.length; i++){
	console.log('-----string----');
	if(typeof anujArray[i] !== 'string') continue;
	console.log(anujArray[i], typeof anujArray[i])
}
for(let i=0; i<anujArray.length; i++){
	console.log('-----number----');
	if(typeof anujArray[i] !== 'number') break;
	console.log(anujArray[i], typeof anujArray[i])
}
console.log(types)
*/

//backdward loop;
/* for(let i = anujArray.length - 1; i>=0; i--){
	console.log(anujArray[i])
}
*/
//loop inside a loop;
/* for(let excerise=1; excerise<=5; excerise++){
	console.log(`------start exceroise ${excerise} --------`);
	for( let weightLifiting=1; weightLifiting<=5; weightLifiting++){
		console.log(`weightgain Excerise ${weightLifiting}`);
	}
} 
*/

//dice role
/*let dice = Math.trunc(Math.random() * 6) + 1;

while( dice !== 6){
	console.log(`The role of dice number: ${dice}`);
	dice= Math.trunc(Math.random() * 6) + 1;
	if (dice === 6){
		console.log('Looping is breadking now.');
		
	}
}
*/

//how to find min and max values without math.min
// let arr = [-1, -2, -3, -4, -10, 5, 10, 20, 10, 20, 30, 40, "errors", 50];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   let val = arr[i];
//   if (typeof val !== "number") continue;
//   if (val < min) {
//     min = val;
//   }
//   if (val > max) {
//     max = val;
//   }
// }
// console.log(min);
// console.log(max);

//Array Destructing.
/*
let operations ={
	name:'XYZ Hotel',
	location:'XYZ hotel',
	categories: ['Italin','chinese','russian','japan'],
	starterMenu : ['momo','chicken'],
	lunch : ["butter chicken","noodles"]

}
let [first,second] = operations.lunch;
[second,first] =[first,second] 
console.log(first,second);

//destructing
let num = [2,3,4,5];
let [num1,num2,num3] = num;
console.log(num1,num2,num3);

//nestedt 
let arr = [2,[5,6,7,8],9,10];
let [i,j] = arr;
console.log(i,j)
*/
// let name = "Anuj singh nainwal";
// function calAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     let output = `${name},your current age is ${age} and birthyear is ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1996 && birthYear <= 1999) {
//       var minilmar = true;
//       let name = "Aman ";
//       //Resinging the outer variable
//       output = "New Output";
//       console.log(`old Year. ${name}`);
//     }
//     console.log(output);
//     console.log(minilmar);
//   }

//   printAge();
//   return age;
// }

// calAge(1999);
// // scope is one way bridge;

//Hoisting
// console.log(job);
// console.log(year);

// console.log(name);

// var job = "development";
// let name = "anuj";
// const year = 1999;
// console.log(add(2, 2));

// function add(a, b) {
//   return a + b;
// }
// console.log(addExp);
// var addExp = function add(a, b) {
//   return a + b;
// };

// var x = 1;
// let y = 5;
// const z = 10;

//this keyword

// console.log(this);
// function calcAge(birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// }
// calcAge(1999);
// const anuj = {
//   year: 1999,
//   calAge: function () {
//     console.log(this);
//   },
// };
// console.log(anuj);

//Primtive and Object Type
//Primitive types
// let lastName = "nainwal";
// let oldLastName = lastName;
// lastName = "singh";
// console.log(lastName, oldLastName);
//Object types
// let jessica = {
//   firstName: "Jessica ",
//   lastName: "Willams",
//   age: 27,
// };
// const marriedJessa = jessica;
// marriedJessa.lastName = "constant";
// console.log("Before Merriage ", jessica);
// console.log("After Merriage", marriedJessa);
// marriedJessa = {};
//Copying types
//if you wanna copying original Object using Object.assign
// let jessica2 = {
//   firstName: "Jessica ",
//   lastName: "Willams",
//   age: 27,
//   family: ["john", "juila"],
// };
// const JessicaCopy = Object.assign({}, jessica2);

// JessicaCopy.lastName = "constant";
// JessicaCopy.family.push("David");
// console.log("Before Merriage", jessica2);
// console.log("After Merriage", JessicaCopy);
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// let x = add(2, 2) + sub(4, 2);
// console.log(x);

//Array Destructing ....
// const resturant = {
//   name: "5 star",
//   location: "Gurgoan",
//   categories: ["Itlian", "Pizza", "Momo"],
//   starterMenu: ["Burger", "FrenchFire"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.categories[mainIndex]];
//   },
// };

// console.log(resturant);
// let [first, , second] = resturant.categories;
// console.log(first, second);
// //swaping without array destruting..
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// //swaping with array destructing...
// [first, second] = [second, first];
// console.log("array destruct ", first, second);
// let [starter, mainCourse] = resturant.order(1, 2);
// console.log(starter, mainCourse);

// //nested Array
// // let arr = [2, 3, [4, 5]];
// // console.log(arr);
// // let [i, , [j, k]] = arr;
// // console.log(i, j, k);

// //default value
// let arr = [2, 3];
// let [i = 1, j = 1, k = 1] = arr;
// console.log(i, j, k);

//Destrucnting Object
// const resturant = {
//   name: "5 star",
//   location: "Gurgoan",
//   categories: ["Itlian", "Pizza", "Momo"],
//   starterMenu: ["Burger", "FrenchFire"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.categories[mainIndex]];
//   },
//   openingHours: {
//     thus: {
//       open: 11,
//       close: 23,
//     },
//     fri: {
//       open: 10,
//       close: 22,
//     },
//   },
// };
// console.log(resturant);
// let { name, openingHours } = resturant;
// console.log(name, openingHours);

// let a = 11;
// let b = 2;
// const obj = { a: 10, b: 10 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Object
// let {
//   thus: { open: o, close: c },
//   fri,
// } = openingHours;
// console.log(o, c, fri);

//sperad operator
// let arr = [3, 4, 5];
// console.log("arrary: ", arr);
// //copying first array'
// let copyArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(copyArr);
//implementing secong array;
// let copyArr2 = [1, 2, arr];
// console.log(copyArr2);
// //spread operator;

// let speradOperator = [1, 2, ...arr];
// console.log("speradOperator: ", speradOperator);
let weekends = ["mon", "tue", "wed", "thus", "fri", "sat", "sun"];
let opengingHours = {
  [weekends[3]]: {
    open: 11,
    close: 23,
  },
  [weekends[4]]: {
    open: 10,
    close: 22,
  },
};
const resturant = {
  name: "5 star",
  location: "Gurgoan",
  categories: ["Itlian", "Pizza", "Momo"],
  starterMenu: ["Burger", "FrenchFire", "Itlian", "Pizza"],
  opengingHours,
  //Es6 enHance
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.categories[mainIndex]];
  },

  orderPasta(integrent1, integrent2, integrent3) {
    return console.log(
      `Here is your declious Pasta, ${integrent1}, ${integrent2}, ${integrent3}.`
    );
  },
};
// console.log(resturant.opengingHours?.mon?.open);
// for (let [i, el] of weekends.entries()) {
//   //   console.log(`${i + 1} : ${el}`);
//   //   console.log(el);
//   const open = resturant.opengingHours[el]?.open || "closed.";
//   console.log(`on opening houurs ${open} on this days ${el}`);
// }

//copying array
// let newMenu = [...resturant.starterMenu, "mdskad"];
// console.log(newMenu);
// //join 2 array
// let newStart = [...resturant.starterMenu, ...resturant.categories];
// console.log(newStart);

// let str = "ANuj";
// let letter = [...str, "", ""];
// // console.log(`${...str}`)
// console.log(letter);
// console.log(...str);
// const integrent = [
//   prompt("let's intgrent1. "),
//   prompt("let's intgrent2. "),
//   prompt("let's intgrent3. "),
// ];

// resturant.orderPasta(...integrent);
// let newRestronent = {
//   foundYear: 2023,
//   ...resturant,
//   founder: "Anuj singh Nainwal",
// };
// // console.log(newRestronent);
// let copyRestronent = { ...newRestronent };
// newRestronent.name = "7 Star";
// console.log(copyRestronent.name);
// console.log(newRestronent.name);
//array
// let [pizza, ...others] = [...newRestronent.starterMenu];
// console.log(pizza, others);
// //object
// let { sat, ...weekends } = newRestronent.openingHours;
// console.log(weekends);

// //function using rest operator

// const add = function (...number) {
//   console.log(...number);
// };

// add(1, 2);
// add(3, 4, 5);
// add(6, 7, 8, 9, 10);

//short circuting...
// console.log("--------- OR ---------");
// console.log(3 || "anuj");
// console.log("" || 3);
// console.log(undefined || null);
// console.log(true || 0);
// console.log("" || "anuj");
// console.log("====================================");
// console.log(undefined || "" || 0 || "ANuj" || null || true);
// console.log("====================================");

// // //if exist
// // let guestNumber = resturant.guest ? resturant.guest : 10;
// // console.log("====================================");
// // console.log(guestNumber);
// // console.log("====================================");
// // let guestNumber2 = resturant.guest || 10;
// // console.log("====================================");
// // console.log(guestNumber2);
// // console.log("====================================");
// console.log("--------- AND ---------");
// console.log("Anuj" && 10);
// console.log(0 && "");
// console.log(undefined && null);
// console.log(true && 0);
// console.log(true || 1);
// console.log("Anuj" && true && 1 && null && 23);

// //nullish operator ?? null or undeined
// // resturant.guestName = 0;
// let nameGuest = resturant.guestName ?? 10;
// console.log(nameGuest);
//Looping Array
// let menu = [...resturant.starterMenu, ...resturant.categories];
// for (let item of menu) {
//   console.table(item);
// }
// // console.table(...menu.entries());
// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//Object and key,values and entries
// let obj = {
//   key: "value",
// };
// //Converting object into array
// console.log(Object.entries(obj));
// let properties = Object.keys(opengingHours);
// let values = Object.values(opengingHours);
// console.log(values);
// console.log(properties);
// for (let day of Object.keys(opengingHours)) {
//   console.log(day);
// }

// //entries
// let entriesObj = Object.entries(opengingHours);
// console.log("enteries ", entriesObj);
// for (let [day, { open, close }] of entriesObj) {
//   console.log(`On ${day} we open at ${open} and close at ${close}pm `);
// }

//Sets and Maps in js
// let orderSet = new Set(["array", "pizza", "pizza", "banana"]);
// console.log(orderSet);
// // console.log(typeo);
// console.log(orderSet.has("banana"));
// console.log(orderSet.has("mango"));
// console.log(orderSet);
// for (let x of orderSet) {
//   console.log(x);
// }

//Maps
// let rest = new Map();
// rest.set(1, "Anuj");
// rest.set(2, "asdas");
// console.log(rest);

//String in js
let airplane = "Air India";
let plane = "IND30";
// console.log(airplane[0]);
// console.log(airplane[1]);
// console.log(airplane[2]);
// console.log("IND30"[1]);
// console.log(airplane.indexOf("I"));
// console.log(airplane.indexOf("Zis"));
// console.log(airplane.slice(2, airplane.indexOf(" ")));
// console.log(airplane.slice(airplane.indexOf(" ") + 1));
// console.log(airplane.slice(0));
// function checkMiddleSeat(seat) {
//   let s = seat.slice(-1);
//   console.log("s", s);
//   if (s === "E" || s === "B") {
//     console.log("You got middle seat. :-(");
//   } else {
//     console.log("You got lucky seat :-)");
//   }
// }

// checkMiddleSeat("11B");
// checkMiddleSeat("22E");
// checkMiddleSeat("22A");
// let s = new String("ANuj");

// console.log(s);

//simple string
// let s =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
// console.log(s.toLowerCase());
// //fix name;
// let name = "AnUj";
// let correntName = name.toLowerCase();
// let name2 = correntName[0].toUpperCase() + correntName.slice(1);
// console.log(name2);

// let email = "anujsinghnainwal@gmail.com";
// let correctEmail = email.toLowerCase().trim();
// console.log(email === correctEmail);

//replacing
// let price = "₹ 20,000";
// console.log(price);
// let changecurrency = price.replace("₹", "$");
// console.log(changecurrency);

// let gate = "door door door anf";
// console.log(gate);
// let result = gate.replace(/door/g, "date");
// console.log(result);
// console.log(gate.includes("doors"));
// console.log(gate.startsWith("door"));
// let usersRoles = ["users", "admin", "superAdmin"];

// if (!usersRoles.includes("admin")) {
//   console.log(`you are not allowed to create user`);
// } else {
//   console.log("welcome admin");
// }

// String splits
console.log("a+b+c+d+e+f".split("+"));
//array destrutc
console.log("Anuj singh nainwal".split(" "));
let [firstName, lastName] = "Anuj Singh Nainwal".split(" ");
console.log(firstName, lastName);
let newName = ["Mr.", firstName, lastName.toUpperCase()];
console.log(newName);
function captilazeName(name) {
  const names = name.split(" ");

  const newName = [];
  for (const n of names) {
    // newName.push(n[0].toUpperCase() + n.slice(1));
    //2nd method
    newName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newName);
}
captilazeName("anuj singh");
captilazeName("anuj naiwnal");

//padding start
let go = "Lorem Ipsum is simply dummy text".padStart(4, "+");
console.log(go);
//make credit card
function makeCreditCard(number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}
console.log(makeCreditCard(2343534534534543));

//repeat ;
const gt = "Hello world... \n";
console.log(gt.repeat(5));
//replaceAll ;
const gitm = "door door door door";
console.log(gitm.replaceAll("door", "dog"));
