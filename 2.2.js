const friend= "BRUTUS";
const shiftValue = 3;
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

let ceaserFriendFirst = friend[0].toLowerCase();

let index = latinAlphabet.indexOf(ceaserFriendFirst);
// this works and 1 is what is logged in my console


// Question 1: JS indexes at 0 which means that the second value will be an index of 1



let newIndex = index + shiftValue;

let encryptedLetter = latinAlphabet[newIndex];

// Question 2: we can use modulo to see if there is a remainder after it goes past the end of the string


const alphabetLength = latinAlphabet.length;

const newIndexWrap = (index + shiftValue) % alphabetLength;
const encryptedLetterWrap = latinAlphabet[newIndexWrap];



const encryptedMessage = "EUXWXV";
const preview = encryptedMessage.slice(0,3);
