/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK
*/
let markWeights = 78;
let markHeight = 1.69;
let johnWeights = 92;
let johnHeight = 1.95;

//with function
// let markHeightBGMi = [];
// function getMarkHeightBMI() {
//   let mark__height__bmi = 78 / 1.69 ** 2;
//   let john__height__bmi = 92 / 1.95 ** 2;
//   let higher_bmi = `Mark has higher ${Math.floor(
//     mark__height__bmi
//   )} BMI than john ${Math.floor(john__height__bmi)}`;
//   markHeightBGMi.push(higher_bmi);
// }
// getMarkHeightBMI();
// console.log(markHeightBGMi[0]);

//without function
// let bmiMark = markWeights / markHeight ** 2;
// let bmiJohn = johnHeight / johnHeight ** 2;
// let higher_bmt = bmiMark > bmiJohn ? true : false;
// console.log("mark has higher bmi", higher_bmt);

//with if and else

// let bmiMark = markWeights / markHeight ** 2;
// let bmiJohn = johnHeight / johnHeight ** 2;

// if (bmiMark > bmiJohn) {
//   console.log("mark has higher bmi than john");
// } else {
//   console.log("john bmi is higher than mark");
// }

//coding challenge 3
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
// part 1
// let dolphinsScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;

// if (dolphinsScore > koalasScore) {
//   console.log("dolphins team win");
// } else if (dolphinsScore < koalasScore) {
//   console.log("koalas team win.");
// } else if (dolphinsScore === koalasScore) {
//   console.log("both team has same score. this game is draw.");
// }

//Bonus 1
// let dolphinsScore = (97 + 112 + 101) / 3;
// let koalasScore = (109 + 95 + 123) / 3;
// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("dolphins team win");
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log("koalas team win.");
// } else if (dolphinsScore === koalasScore) {
//   console.log("both team has same score. this game is draw.");
// }

//bonus2
// let dolphinsScore = (97 + 112 + 1) / 3;
// let koalasScore = (109 + 95 + 1) / 3;

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("dolphins team win");
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log("koalas team win.");
// } else if (dolphinsScore === koalasScore) {
//   console.log("both team has same score. this game is draw.");
// } else {
//   console.log("no one wins the trophy.");
// }

/*
//coding challenge 4
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 */

// let bill = 450;
// let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill was ${bill} and tip was ${tip} and total bill is ${bill + tip}`
// );
