/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
 */
/*function calcAverageScore(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const dolphinScore = calcAverageScore(44, 23, 71);
const kolasScore = calcAverageScore(44, 23, 71);
console.log(dolphinScore, kolasScore);
function calcWinner(team1, team2) {
  if (team1 > team2) {
    console.log(`${team1} is winner`);
  } else if (team1 < team2) {
    console.log(`${team2} is winner`);
  } else if (team1 === team2) {
    console.log(
      `${team1} and ${team2} are the same point. hence draw the match`
    );
  } else {
    console.log("no ones wins the game.");
  }
}
console.log(calcWinner(kolasScore, dolphinScore));
*/
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
*/
/*
function clacTip(bill){
	return  bill >= 50 && bill <= 300  ? bill * 0.15 : bill * 0.2;
}

let bill= [125,555,44];
let tip = [clacTip(bill[0]),clacTip(bill[1]),clacTip(bill[2])]
let total = [bill[0] + tip[0],bill[1] + tip[1],bill[2] + tip[2],]
console.log(`Your bill is ${total[0]}`,`Your bill is ${total[1]}`,`Your bill is ${total[2]}`);

*/
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

/* let Mark = {
	id: 1,
	fullname:'Mark Miller',
	weights: 78,
	height: 1.69,
	calcBMI : function (){
		return this.weights / this.height ** 2
	}
}
let John = {
	id: 2,
	fullname:'John Smith',
	weights: 92,
	height: 1.95,
	calcBMI : function (){
		return this.weights / this.height ** 2;
	}
}
if(Mark.calcBMI > John.calcBMI){
	console.log(`${Mark.fullname} Bmi ${Math.floor(Mark.calcBMI())} is higher than ${John.fullname} ${Math.floor(John.calcBMI())}.`)
} else if(Mark.calcBMI < John.calcBMI){
	console.log(`${John.fullname}  Bmi ${Math.floor(John.calcBMI())} is higher than ${Mark.fullname} ${Math.floor(Mark.calcBMI())}.`)
} */

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]

// let tips = [];
// let total = [];

// for(let i=1; i<bills.length; i++){

// 	let tip = bills[i]<=50 && bills[i]>=300 ? bills[i]* 0.15 : bills[i]* 0.2;
// 	tips.push(tip);
// 	let totals = bills[i] + tip;
// 	total.push(totals)
// 	 console.log(`your total bill is ${totals}.`)
// }
// console.log('bills ',bills)
// console.log('tips ',tips)
// console.log('total ',total)

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
 */
// let temperatures1 = [17, 21, 23];
// let temperatures2 = [12, 5, -5, 0, 4];
// let newTemperatures = [...temperatures1, ...temperatures2];
// let minTemp = 0;
// let maxTemp = 0;
// function printForecast(temperature) {
//   for (let i = 0; i < newTemperatures.length; i++) {
//     let temp = newTemperatures[i];
//     if (temp < minTemp) {
//       minTemp = temp;

//       console.log(`lowest temperature in ${minTemp} in day ${i + 1}`);
//     }
//     if (temp > maxTemp) {
//       maxTemp = temp;

//       console.log(`highest temperature in ${maxTemp} in day ${i + 1}`);
//     }
//     console.log(`${temp}°C in day ${i + 1}`);
//   }
// }
// printForecast(newTemperatures);
// console.log(minTemp);
// console.log(maxTemp);

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//destructing...
const [player1, player2] = game.players;
console.log(player1, player2);
//2.
const [gk, ...felidPlayers] = player1;
console.log("goalKepper ", gk, felidPlayers);
//3/
const allPlayers = [...player1, ...player2];
console.log("all players, ", allPlayers);
//4.
const finalPlayer = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(finalPlayer);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Challenge 1 ->clourse
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:
C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
};
 */

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join("\n")} \n write the options.`
      )
    );

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(this.answers.join(","));
    }
  },
};

const btn2 = document.querySelector(".poll");
btn2.addEventListener("click", poll.registerNewAnswer.bind(poll));
