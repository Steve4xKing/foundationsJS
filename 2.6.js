const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

//   step 1
  guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };


// step 2
guests.CICERO.pastGifts.push("Golden Lyre");

// step 3
const antonyRegion = guests.ANTONY.region;


// step 4
delete guests.CICERO;


// step 5

const generalProfile = guests.ANTONY;

generalProfile.region = "Egypt";


// question 1:
// they both change values (which I verified with console.log.)  This is because the new object is saved to the same place as the original in memory. Overwriting the new one overwrote the old one because they are stored in the same place. 



