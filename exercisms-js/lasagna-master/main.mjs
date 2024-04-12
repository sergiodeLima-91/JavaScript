// Task 1 - Determine whether lasagna is done:
export function cookingStatus(timer=undefined) {
    if (timer > 0) {
        return 'Not done, please wait.'
    } else if ( timer == 0) {
        return 'Lasagna is done.'
    } else {
        return 'You forgot to set the timer.'
    }
};

// Task 2 - Estimate the Preparation Time:
export function preparationTime(layers, timePreparate=2) {
    let layersLength = layers.length;
    return layersLength * timePreparate;
};

// Task 3 - Compute the amounts of noodles and sauce needed:
export function quantities(layers) {
    // For Each noodle layer > 50 gm of noodles
    // For Each sauce layer > 0.2 liters of sauce
    let  ingredients = {
        noodles: 0,
        sauce: 0
    }
    layers.forEach(layer => {
        if (layer == 'noodles') {
            ingredients['noodles'] += 50;
        } else if(layer == 'sauce') {
            ingredients['sauce'] += 0.2; 
        }
    });

    return ingredients;
};

// Call functions:
cookingStatus();

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

preparationTime(layers, 3);

quantities(layers);
