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
    // small lime: 6
    // medium lime: 8
    // large lime: 10

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

        let sumLimesNumbers = limesNumbers.reduce((acumulador, currentValue) => acumulador + currentValue, 0);

        console.log(`Limes Numbers: ${limesNumbers}`);

        for (let index = 0; index < limes.length; index++) {
            if(wedgesNeeded == 0) {
                return 0
            } else if (wedgesNeeded <= limesNumbers[index]) {
                return index;
            } else if (wedgesNeeded > sumLimesNumbers) {
                return limesNumbers.length;
            }
        }
};

  console.log(limesToCut(10, ['small','large','large']));
