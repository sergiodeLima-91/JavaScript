
export function totalBirdCount(birdsPerDay) {
    let totalBirds = 0;
    for (let counter = 0; counter < birdsPerDay.length; counter++) {
        totalBirds += birdsPerDay[counter];
    };

    return totalBirds;
};

export function birdsInWeek(birdsPerDay, week) {
    let totalBirdsInWeek = 0;
    if (week == 1) {
        for (let counter = 0; counter < 7; counter++) {
            totalBirdsInWeek += birdsPerDay[counter];
        }
    } else if (week == 2) {
        for (let counter = 8; counter < 15; counter++) {
            totalBirdsInWeek += birdsPerDay[counter];
        }
    } else if (week == 3) {
        for (let counter = 16; counter < 22; counter++) {
            totalBirdsInWeek += birdsPerDay[counter];
        }
    } else if (week == 4) {
        for (let counter = 23; counter < 29; counter++) {
            totalBirdsInWeek += birdsPerDay[counter];
        }
    } else if (week > 4) {
        for (let counter = 0; counter < birdsPerDay.length; counter++) {
            totalBirdsInWeek += birdsPerDay[counter];
            
        }
    }

    return totalBirdsInWeek;

};

console.log(birdsInWeek([2, 0, 1, 4, 1, 3, 0], 21));
