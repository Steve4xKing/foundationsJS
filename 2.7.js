const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = ""



for (i=0; i < friend.length; i++){
    let letter = friend[i];
    let currentIndex = (alphabet.toUpperCase()).indexOf(letter);
    let newIndex = (currentIndex + shiftValue) % alphabet.length;
    encryptedName += alphabet[newIndex].toUpperCase();
}

// console.log(encryptedName);

// question 1 
// loops allow repetitive tasks to be done repetitively and quickly 


// question 2
//  %alphabet.length allows us to look through the alphabet string 
// even if our new index is a value that is longer than alphabet.length 
//  we get the remainder and loop back through the beginning of the string


