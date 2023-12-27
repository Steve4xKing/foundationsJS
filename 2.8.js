function fizzBuzz(n){
    
    if (n < 1 || n > 100 || typeof n !== 'number'){
        console.log('Error n is not a number or not within the range of 1-100');
    }
    else if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizBuzz");
    }
    else if (n % 3 === 0){
        console.log("Fizz");
    }
    else if (n % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(`Error! Your number is ${n} and it is not divisible by 3 and/or 5`)
    }
}


function letterOccurrence(word){
    if(typeof word !== "string"){
        console.log(`Error! Your input ${word} is not a string`);
        return;
    } 
    else{
        let letterCounts = {}
        for(let i = 0; i < word.length; i++) {
            let letter = word[i].toLowerCase()
            if(letterCounts[letter]) {
                letterCounts[letter]++;
            } else {
                letterCounts[letter] = 1;
            }
        }
        console.log(letterCounts);
        return letterCounts;
    }

}

