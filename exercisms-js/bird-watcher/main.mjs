
export function totalBirdCount(birdsPerDay) {
    let totalBirds = 0;
    for (let counter = 0; counter < birdsPerDay.length; counter++) {
        totalBirds += birdsPerDay[counter];
    };

    return totalBirds;
};

export function birdsInWeek(birdsPerDay, week) {
    let totalBirdsInWeek = 0;

    for (let counter = (week * 7) - 7; counter < week * 7; counter++) {
        totalBirdsInWeek += birdsPerDay[counter];
    };    

    return totalBirdsInWeek;

};

export function fixBirdCountLog(birdsPerDay) {
    let birdCountFix =  birdsPerDay[0] + 1;
    birdsPerDay[0] = birdCountFix;

    return birdsPerDay;
  }

console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));

