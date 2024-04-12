// Task 1:
export function twoSum(array1, array2) {
    // 1 - Eliminating commas:
    array1 = array1.join('');
    array2 = array2.join('');
    //2 - Conterting:
    array1 = Number(array1);
    array2 = Number(array2);
    //3 - Sum numbers:
    let sum = array1 + array2;

    return sum;

};
// Task 2:
export function luckyNumber(value) { 
    //1 - Converting to string:
    let valueString = String(value);
    //2 - Reverting the numbers:
    let valueReverse = [...valueString];
    valueReverse = valueReverse.reverse().join('');
    //3 - Comparing the numbers :
    return valueString === valueReverse;
};
// Task 3:
export function errorMessage(input) {
    let inputConv = Number(input);

    if (Boolean(input) ==  false) {
        return 'Required field';
    } else if (Boolean(inputConv) == false){
        return 'Must be a number besides 0';
    } else {
        return '';
    }
};

  console.log(errorMessage('0'));