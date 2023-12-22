const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let locationStart = ""


// step 1

if (emblemClue1 === "Eagle"){
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion"){
    locationStart = "Colosseum";
}
else{
    locationStart = "Villa";
}


//  step 2
let moreLocationInfo = ""

if (emblemClue2 === "Laurel" && locationStart === "Forum"){
    moreLocationInfo = locationStart.append(" of Augustus");
}
else if (emblemClue2 === "Grapes" || locationStart === "Forum"){
    moreLocationInfo = locationStart.append(" of Pompey");
}    


// step 3

switch (emblemClue3){
    case 7:
        moreLocationInfo += " North";
        break;
    case 3:
        moreLocationInfo += " South";
        break;
    case 9:
        moreLocationInfo += " East";
        break;
    case 4:
        moreLocationInfo += " West";
        break;
}

// == is less strict than === so something like 3=="3" is true, but 3==="3" is false because the value and type differ