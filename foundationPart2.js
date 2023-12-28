// // # Requirements 📋

// 1. **Implementing the Encryption Algorithm of Caesar's Cipher**
// - Step 1: Take a plaintext message and a shift value and return an encrypted string. 
//      If the message includes a character out of the alphabet, pass it as is to the encrypted string.
// - Step 2: After every two letters, insert a random letter from the alphabet.
// 2. **Implementing the Decryption Algorithms of Caesar's Cipher**
// - Take in the encrypted message and a shift value and return the original plaintext message.
// - Accurately reverse the encryption process to retrieve the original message.
// 3. **Decrypting the Secret Message**
// - Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.
// - Decrypt the above secret message using 42 as the shift value and complete the quest.
// 4. **Using Comments**: As you build your functions, document your thought process, the purpose of each section of your code, and any challenges you come across. Good commenting not only helps others understand your code but also aids you in tracking your logic.
// 5. **Attributing Help**:
// - If you incorporate code or inspiration from online resources, attribute the source. At a minimum, provide the URL.
// - If you get help from mentors or TAs, describe the help given and attribute the name.

const alphabet = "abcdefghijklmnopqrstuvwxyz";



function encrypt (message, shiftValue){
    // validate if character is in alphabet or not
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++){
        if (alphabet.indexOf(message[i].toLowerCase()) === -1){
            encryptedMessage += message[i].toLowerCase();
        } else {
            // new index which allows for shift value to roll over if larger than the alphabets length
            let newIndex = (alphabet.indexOf(message[i].toLowerCase()) + shiftValue) % alphabet.length
            let newLetter = alphabet[newIndex];
            encryptedMessage += (newLetter);
        }
        if((i + 1) % 2 === 0){
            let randomLetterNum = Math.floor(Math.random() * alphabet.length);
            encryptedMessage += alphabet[randomLetterNum];
        }

    }
  return encryptedMessage;
}



function decrypt (encryptedMessage, shiftValue){
    if (shiftValue > 26){
    shiftValue -= 26;
    }
    let decryptedMessage = "";
    for(let i = 0; i < encryptedMessage.length; i++){
        // the line below took a while to figure out 
        if((i + 1) % 3 !== 0){
            // pass non-alphabet characters as they are
            if(alphabet.indexOf(encryptedMessage[i].toLowerCase()) === -1){
                decryptedMessage += encryptedMessage[i];
            }
            else {
                // convert letters back to their orginal one
            let currentIndex = alphabet.indexOf(encryptedMessage[i].toLowerCase());
            let originalIndex = (Math.abs(currentIndex - shiftValue + alphabet.length)) % alphabet.length;
            let originalLetter = alphabet[originalIndex];
            decryptedMessage += originalLetter;
            }
        }
    }

  return decryptedMessage;
}   







// decrypt without random letters added 
// function decrypt (encryptedMessage, shiftValue){
//     if (shiftValue > 26){
//         shiftValue -= 26;
//     }
//     let decryptedMessage = "";
//     for(let i = 0; i < encryptedMessage.length; i++){
//             // pass non-alphabet characters as they are
//             if(alphabet.indexOf(encryptedMessage[i].toLowerCase()) === -1){
//                 decryptedMessage += encryptedMessage[i];
//             }
//             else {
//                 // convert letters back to their orginal one
//             let currentIndex = alphabet.indexOf(encryptedMessage[i].toLowerCase());
//             let originalIndex = Math.abs((currentIndex - shiftValue + alphabet.length) % alphabet.length);
//             let originalLetter = alphabet[originalIndex];
//             decryptedMessage += originalLetter;
//             }
//         }


//   console.log(decryptedMessage);
//   return decryptedMessage;
// }   




console.log(decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42));
// Output is:
// seek the midnight shadow of romulus and remus. there, whisper the word 'aurelius' to the winds. the first to unveil it in our slack channel earns the key to the next quest.

