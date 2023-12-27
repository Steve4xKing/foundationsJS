const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// step 1
function encryptLetter(letter, shiftValue){
    letter = letter.toLowerCase();
    let index = alphabet.indexOf(letter);
    let newIndex = (index + shiftValue) % alphabet.length;
    let newLetter = alphabet[newIndex];
    // console.log(newLetter);
    return newLetter;
}

// step 2

function encryptMessage(word, shift){
    let hiddenMessage = ""
    for(let i = 0; i < word.length; i++){
        hiddenMessage += encryptLetter(word[i], shift)
    }
    return hiddenMessage;
}


// step 3

function decryptLetter(letter, shiftValue){
    letter = letter.toLowerCase();
    let index = alphabet.indexOf(letter);
    let oldIndex = (index - shiftValue + alphabet.length) % alphabet.length;
    let oldLetter = alphabet[oldIndex];
    // console.log(oldLetter);
    return oldLetter;
}


// step 4
function decryptMessage(word, shift){
    let originalMessage = ""
    for(let i = 0; i < word.length; i++){
        originalMessage += decryptLetter(word[i], shift)
    }
    return originalMessage;
}

// still does not work with an extremely large shiftValue I would need to refactor the code more to handle that in the decryption part