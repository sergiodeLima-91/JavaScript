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

    // TO DO List:
    // 1. Putting the juice names in a separate list
    // 2. Creating a list with the corresponding preparation time for each order
    // 3. Subtracting the preparation time for each juice from the remaining working time
    // 4. Returning the juices that can only be prepared in the next shift

    // 1. Putting the juice names in a separate list
    let juiceNames = orders;

    // 2. Creating a list with the corresponding preparation time for each order
    let timePreparation = [];
    let counter = 0;

      while (counter < orders.length) {
        switch (orders[counter]) {
            case 'Energizer':
                timePreparation.push(1.5)
                break;
            
            case 'Green Garden':
                timePreparation.push(1.5)
                break;
        
            case 'Pure Strawberry Joy':
                timePreparation.push(0.5);            
                break;

            case 'Tropical Island':
                timePreparation.push(3);            
                break;
            
            case 'All or Nothing':
                timePreparation.push(5);            
                break;
            
            default:
                timePreparation.push(2.5);
                break;
        }
    
        counter += 1;
    }
    // 3. Subtracting the preparation time for each juice from the remaining working time
    let sumTimePreparation = timePreparation.reduce((acumulador, currentValue) => acumulador + currentValue, 0);

    let counter2 = 0;
    while (timeLeft > 0) {
        timeLeft -= timePreparation[counter2];
        juiceNames.shift();

        // 4. Returning the juices that can only be prepared in the next shift
        if (timeLeft <= 0) {
            return juiceNames;
        } else if (juiceNames == 0) {
            return orders;
        } 

        counter2 += 1;

    }     

}

  console.log(remainingOrders(12, [
    'Energizer',
    'Green Garden',
    'Ruby Glow',
    'Pure Strawberry Joy',
    'Tropical Island',
    'Limetime',
  ]));

