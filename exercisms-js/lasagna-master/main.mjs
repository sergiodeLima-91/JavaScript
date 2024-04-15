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
    let newRecipeValues = recipeValues.slice();
    let counter = 0;

    // Normalization for catch the VALUE PER PEOPLE:
    for (let index = 0; index < recipeValues.length; index++) {
        recipeValues[index] = recipeValues[index] / 2
    };
    // If the quantity os ingredients is sufficient for the number of costumers:
    for (let index = 0; index < recipeValues.length; index++) {
        if (newRecipeValues[index] == (recipeValues[index] / 2) * peoplesQuantity) {
            counter += 1;
        } if (counter == recipeValues.length) {
            return recipe;
        }
    };
    // Multiply for people quantity and put on the recipe:
    for (let index = 0; index < recipeKeys.length; index++) {
        recipe[recipeKeys[index]] = recipeValues[index] * peoplesQuantity;
    }; 


    return recipe;
};
