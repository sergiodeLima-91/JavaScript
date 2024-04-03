
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

    for (let counter = 0; counter < birdsPerDay.length; counter++) {
        if  (counter %2 == 0) {
            birdsPerDay[counter] += 1;
        } else if (counter == 0) {
            birdsPerDay[counter] += 1; 
        }    
    
    }; 

    return birdsPerDay;
};
