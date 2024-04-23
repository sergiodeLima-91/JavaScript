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
// Task 5:
export function insertFaceCards(deck) {
    if (deck[0] == undefined) {
        return [undefined,'jack', 'queen', 'king'];
    } else{
        deck.splice(1,0,'jack', 'queen', 'king');
        return deck;
    };    
};


const deck = [
    undefined,
    'jack',
    'queen',
    'king',
  ];
console.log(insertFaceCards(deck));