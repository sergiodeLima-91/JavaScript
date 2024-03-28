// Helping a friend who will develop an RPG game based on a choice system.

// Fast attack if knight sleeping:
export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true) {
        return false;
    } else {
        return true;
    }
};

// Spy if at least one is awake:
export function canSpy(knightIsAwake, archerIsAwake, prisionerIsAwake) {
    if (knightIsAwake ||archerIsAwake ||prisionerIsAwake == true) {
        return true;
    } else {
        return false;
    }
};

// Checking prisioner signaling:
export function canSignalPrisoner(archerIsAwake, prisionerIsAwake) {
    if (archerIsAwake == false && prisionerIsAwake == true) {
        return true;
    } else {
        return false;
    }
};

// Checking prisioner release:
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisionerIsAwake, petDogIsPresent) {
    // 1 - Archer cant´be awake!
    if (archerIsAwake ==  true) {
        return false;
        // 2 - Prisioner cannot be sleeping and dog cannot be absent!
    } else if(prisionerIsAwake ==  false && petDogIsPresent == false){
        return false;
        // 3 - Knight cant´be awake and dog cannot be absent!
    } else if(knightIsAwake == true && petDogIsPresent == false){
        return false;
    } else {
        return true;
    }
};

