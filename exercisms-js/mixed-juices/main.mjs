export function timeToMixJuice(name) {
    switch (name) {
        case 'Energizer':
            return 1.5
            break;
        
        case 'Green Garden':
            return 1.5
            break;

        case 'Pure Strawberry Joy':
            return 0.5            
            break;

        case 'Tropical Island':
            return 3
            break;

        case 'All or Nothing':
            return 5
            break
        
            default:
                return 2.5
    }
  };

  export function limesToCut(wedgesNeeded, limes) {

    // Corresponding numbers and names:
    let limesNumbers = [];
        for (let counter = 0; counter < limes.length; counter++) {
            if  (limes[counter] == 'small'){
                limesNumbers.push(6);
            } else if  (limes[counter] == 'medium'){
                limesNumbers.push(8);
            } else if  (limes[counter] == 'large'){
                limesNumbers.push(10);
            }         
            
        };

        // Add all numbers on list:
        let sumLimesNumbers = limesNumbers.reduce((acumulador, currentValue) => acumulador + currentValue, 0);

        // In case the limes slices is bigger between sum of "sumLimesNumbers":
        // "Caso o número fatias de limão seja maior do que a soma de 'sumLimesNumbers'"
        if (wedgesNeeded > sumLimesNumbers) {
            return limesNumbers.length;
        };

        // In case the number of limes slices is zero:
        // "Para caso o  número de fatias de limão seja zero"
        if (wedgesNeeded == 0) {
            return 0;
        // If the number of available lemons is not provided:
        // "Caso o número de limões disponíveis não seja passado."
        } 
        
        if (limes = undefined) {
            return 0;
        }

        let counter2 = 0;
        while (wedgesNeeded > 0) {
            wedgesNeeded -= limesNumbers[counter2];
            counter2 += 1;
        }

        return counter2;

};

export function remainingOrders(timeLeft, orders) {
    let timePreparationJuices = [];
    switch (orders) {
        case 'Energizer':
            timePreparationJuices.push(1.5);
            break;
        
        case 'Green Garden':
            timePreparationJuices.push(1.5);
            break;

        case 'Pure Strawberry Joy':
            timePreparationJuices.push(0.5);         
            break;

        case 'Tropical Island':
            timePreparationJuices.push(3);
            break;

        case 'All or Nothing':
            timePreparationJuices.push(5);
            break
        
            default:
                timePreparationJuices.push(2.5)
    }

    // TO DO: Sum up the preparation times!
    let timeOfTotalPreparationTime = 0;
    for (let counter = 0; counter < orders.length; counter++) {
        timeOfTotalPreparationTime += timePreparationJuices[counter];
    }
    

    while (timeLeft > timeOfTotalPrepair) {
        
    }
  }

  console.log(limesToCut(5, ['Energizer', 'All or Nothing', 'Green Garden']));

