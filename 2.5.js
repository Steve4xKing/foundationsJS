const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// step 1
guests.unshift("BRUTUS");

// question 1
console.log(guests[0]);


// step 2
guests.push("AUGUSTUS", "LUCIA");


// step 3
let spartacusIndex = guests.indexOf("SPARTACUS")
console.log(spartacusIndex);


// question 2
// if indexOf does not find what you look for, it returns -1


// step 4
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);

console.log(`CASSIUS WAS AT INDEX ${indexToRemove} and has been removed.  Here is the new guest list: ${guests}`);


// step 5
const specialInvite = guests.slice(0,3);


// step 6
const honoredGuests = guests.slice(0, 2);
const otherGuests = guests.slice(2); 
otherGuests.sort();
const sortedGuests = honoredGuests.concat(otherGuests);
