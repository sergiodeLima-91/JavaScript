// Cathching the first letter:
export function frontDoorResponse(line) {
    const poetry = line;
    // Catching the first letter of each word :
    const firstLetters = poetry.map(function(first_letter, index) {
        return first_letter[0];
    });
    // Putting letters togheter to form the password:
    const lettersTogheter = firstLetters.join('');

    return lettersTogheter;
};
// Catching the last letter:
export function backDoorResponse(verse) {
    const poetry = verse;
    const lastLetters = poetry.map(function(last_letter){
        // Remove commas, full points, empty spaces and tabs:
        const cleanedVerse = last_letter.replace(/[,.\s]/g, "");
        // Catch the last letter after clear the verse:
        const last = cleanedVerse.charAt(cleanedVerse.length - 1);

        return last;
    });

    const lettersTogheter = lastLetters.join('');

    return lettersTogheter;
};

// Assembling functions that forma passwords:   
export function frontDoorPassword() {
   // Captalize the passowrd:
   const returnFrontDoorResponse = frontDoorResponse(SUMMER);
   const captalizedPassword = returnFrontDoorResponse.charAt(0).toUpperCase() + returnFrontDoorResponse.slice(1).toLowerCase();

   return captalizedPassword;
}

export function backDoorPassword() {
    // Catching the return of backDoorResponse function:
    const returnBackDoorResponse = backDoorResponse(HORSE);
    // Capitalize the string captured:
    const capitalizedPassword = returnBackDoorResponse.charAt(0).toUpperCase() + returnBackDoorResponse.slice(1).toLowerCase();
    
    return capitalizedPassword;
}

const SUMMER = [
    'Sunshine warming my toes',
    'Underwater fun with my friends.',
    'Making homemade ice cream on the porch,',
    'Many long nights catching fireflies.',
    'Early morning walks to the creek,',
    'Reveling in the freedom of lazy days.',
];

const HORSE = [
"Stands so high",
"Huge hooves too",
"Impatiently waits for",
"Reins and harness",
"Eager to leave",
]
// Call Functions:
frontDoorResponse(SUMMER);
console.log(frontDoorPassword());

backDoorResponse(HORSE);
console.log(backDoorPassword());


