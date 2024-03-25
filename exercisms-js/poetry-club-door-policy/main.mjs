// Main Function:
export function frontDoorResponse(line) {
    const poetry = line;
    // Catching the first letter of each word :
    const firstLetters = poetry.map(function(item) {
        return item[0];
    });
    // Putting letters togheter to form the password:
    var lettersTogheter = firstLetters.join('');

    return lettersTogheter;
};

   
export function frontDoorPassword() {
   // Captalize the passowrd:
   const returnfrontDoorResponse = frontDoorResponse(SUMMER)
   const captalizedPassword = returnfrontDoorResponse.charAt(0).toUpperCase() + returnfrontDoorResponse.slice(1).toLowerCase();

   return captalizedPassword;
}   

var SUMMER = [
    'Sunshine warming my toes',
    'Underwater fun with my friends.',
    'Making homemade ice cream on the porch,',
    'Many long nights catching fireflies.',
    'Early morning walks to the creek,',
    'Reveling in the freedom of lazy days.',
];

console.log(frontDoorResponse(SUMMER));
console.log(frontDoorPassword());
