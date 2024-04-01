
export function getItem(cards, position) {
    return cards[position];
};


export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
};


export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
};


export function removeItem(cards, position) {
    cards.splice(position,1); // Read: Remove A value starting from index two (position). The second parameter receives the elements quantity to delete.
    return cards;
};

export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
};

export function insertItemAtBotton(cards, newCard) {
    cards.splice(0,0,newCard)
    return cards;
};

export function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
};

export function checkSizeOfStack(cards, stackSize) {
    return cards.length == stackSize;
};

