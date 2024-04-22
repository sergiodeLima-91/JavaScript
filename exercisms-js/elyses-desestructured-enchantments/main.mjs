// Task 1:
export function getFirstCard(deck) {
    const cards = deck;
    let [first,...everythingElse] = cards;
    return first;    
};

// Task 2:
export function getSecondCard(deck) {
    const cards = deck;
    let [first,second, ...everythingElse] = cards;
    return second;
 };

 // Task 3:
 export function swapTopTwoCards(deck) {
    const cards = deck;
    let [first,second,...everythingElse] = cards;
    return [second,first,everythingElse];
};

// Task 4:
export function discardTopCard(deck) {
    const cards = deck;
    let [first,...everythingElse] = cards;
    return [first,everythingElse];
};

export function insertFaceCards(deck) {
    const cards = deck;
    let [first, second, third, four,...everythingElse] = deck
    second = 'jack', third = 'queen', four = 'king';
    return [first, second, third,four, everythingElse];
};


const deck = [5, 4, 7, 10];
console.log(insertFaceCards(deck));