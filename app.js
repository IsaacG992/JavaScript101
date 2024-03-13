/////////////////////////
// Part 1 "Inital Code"//
/////////////////////////


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

/////////////////////////
// Part 2 "Math Problems"//
/////////////////////////

// 1.
const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(divBy5);
// 2.
const lrgrThanLast = n1 > n4;
console.log(lrgrThanLast);
// 3.
const subtractNum = (n2 - n1);
console.log(subtractNum);

// 4.
const multiplyResult = (subtractNum * n3);
console.log(multiplyResult);

// 5.
const fourthRemainer = (multiplyResult / n4)
console.log(multiplyResult)

//6. 
const isOver25Number = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log(isOver25);

////////////////////////////
// Part 3 "Practical Math"//
////////////////////////////

//1. 
let tripDistance = 1500;
let mph55 = 30;
let mph60 = 28;
let mph75 = 23;
let budget = 175;
let avgCost = 3;
// 55 mph
let total55gal = tripDistance / mph55;
console.log(total55gal)

let totalBudget55 = total55gal * avgCost;
console.log(totalBudget55);

let overBudget55 = budget >= totalBudget55;
console.log(overBudget55)

let tripTime55 = tripDistance / 55;
console.log(tripTime55)

// 60 mph
let total60gal = tripDistance / mph60;
console.log(total60gal)

let totalBudget60 = total60gal * avgCost;
console.log(totalBudget60);

let overBudget60 = budget >= totalBudget60;
console.log(overBudget60)

let tripTime60 = tripDistance / 60;
console.log(tripTime60)
// 75 mph
let total75gal = tripDistance / mph75;
console.log(total75gal)

let totalBudget75 = total75gal * avgCost;
console.log(totalBudget75);

let overBudget75 = budget >= totalBudget75;
console.log(overBudget75)

let tripTime75 = tripDistance / 75;
console.log(tripTime75)

// 60 mp would be the best option
