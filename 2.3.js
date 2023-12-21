const randomNum = Math.random();
const range = 33 - 3 + 1;
const randomInRange = randomNum * range;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3; 

// Question 1: So 3 and 33 will both be in the range


// Question 2: it gives us a random number between 0-1 
// multiplying by range allows our value to be between 0 and 33



// Question 3: Math.floor() prevents the number from going above the range we want




// Question 4: It moved the randomInt value from being anywehre between 0-30 to being anything between 3-33