// Task 1
export function cookingStatus(timer=undefined) {
    if (timer > 0) {
        return 'Not done, please wait.'
    } else if ( timer == 0) {
        return 'Lasagna is done.'
    } else {
        return 'You forgot to set the timer.'
    }
};

// Task 2
export function preparationTime(layers, timePreparate=2) {
    let layersLength = layers.length;
    return layersLength * timePreparate;
};

// Task 3
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
// Task 4
export function addSecretIngredient(friendList, myList) {
    let SpecialIngredient = friendList[friendList.length -1];
    myList.push(SpecialIngredient);

    return undefined;
};

export function scaleRecipe(recipe, peoplesQuantity) {
    let recipeValues = Object.values(recipe);
    const recipeKeys = Object.keys(recipe);
    let recipeNoModification = recipeValues.slice();
    let counter = 0;
    
    for (let index = 0; index < recipeValues.length; index++) {
        if (recipeValues[index] %peoplesQuantity == 0) {
            counter += 1;
        };
    }

    // Normalize the recipe object for obtain the unity value per people:
    for (let index = 0; index < recipeValues.length; index++) {
        recipeValues[index] = recipeValues[index] / 2;
    }    

    // Multiply for people quantity and put on the recipe:
    for (let index = 0; index < recipeKeys.length; index++) {
        recipe[recipeKeys[index]] = recipeValues[index] * peoplesQuantity;
    }

    recipeValues = Object.values(recipe);
    
    

    if (counter == recipeValues.length) {
        return recipe;
    }


    return recipe;
};

// Call functions:

const recipe = {
    sauce: 1,
    noodles: 250,
    meat: 150,
    tomatoes: 3,
    onion: 2,
  };

console.log(scaleRecipe(recipe, 4));