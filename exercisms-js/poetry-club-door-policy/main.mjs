// Main Function:
export function frontDoorResponse(line) {
    const poetry = line;
    // Catching the first letter of each word :
    const firstLetters = poetry.map(function(item, index) {
        return item[0];
    });

    // Putting letters togheter to form the password:
    var lettersTogheter = '';
    firstLetters.forEach(function(item){
        return lettersTogheter = item;
    });
    // Captalize the passowrd:
    // const captalizedPassword = firstLetters.charAt(0).toUpperCase() + firstLetters.slice(1).toLowerCase();

    return lettersTogheter;
};

var SUMMER = [
    'Sunshine warming my toes,',
    'Underwater fun with my friends.',
    'Making homemade ice cream on the porch,',
    'Many long nights catching fireflies.',
    'Early morning walks to the creek,',
    'Reveling in the freedom of lazy days.',
];

console.log(frontDoorResponse(SUMMER));