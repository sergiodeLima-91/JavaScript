// A DELICIOSA LASANHA DE LUCIAN


// A namorada de Lucian está voltando para casa e ele ainda não preparou o jantar de aniversário!

// Neste exercício, você escreverá um código para ajudar Lucian a preparar uma lasanha requintada de seu livro de receitas favorito.

// Você tem quatro tarefas relacionadas ao tempo gasto cozinhando a lasanha:

// 1 - DEFINA A ESPERA NO FORNO EM MINUTOS (EXPECTED_MINUTES_IN_OVEN):
// Defina a constante EXPECTED_MINUTES_IN_OVEN que representa quantos minutos a lasanha deve ficar no forno. Deve ser exportado. De acordo com o livro de culinária, o tempo esperado no forno em minutos é 40.

// 2 - CALCULE O TEMPO RESTANTE NO FORNO EM MINUTOS:
// Implemente a função remainingMinutesInOven() que toma como parâmetro os minutos reais que a lasanha esteve no forno e retorna quantos minutos a lasanha ainda tem para permanecer no forno, com base no tempo de forno esperado em minutos da tarefa anterior.

// 3 - CALCULE O TEMPO DE PREPARAÇÃO EM MINUTOS:
// Implemente a função PreparationTimeInMinutes() que toma como parâmetro o número de camadas que você adicionou à lasanha e retorna quantos minutos você gastou preparando a lasanha, assumindo que cada camada leva 2 minutos para ser preparada.

// 4 - CALCULE O TEMPO TOTAL DE PREPARAÇÃO EM MINUTOS:
// Implemente a função totalTimeInMinutes que usa dois parâmetros: o parâmetro numberOfLayers é o número de camadas que você adicionou à lasanha e o parâmetro actualMinutesInOven é o número de minutos que a lasanha esteve no forno. A função deve retornar quantos minutos no total você trabalhou no cozimento da lasanha, que é a soma do tempo de preparo em minutos, e o tempo em minutos que a lasanha ficou no forno no momento.

// Variables Declaration:
export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

// Calc of remain time in oven:
export function remainingMinutesInOven(actualMinutesInOven) {
        return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;   
    };

// Calc of preparation time per layer:
export function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * 2;
};

// Calc of preparation time total of lasagna:
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return (numberOfLayers * 2) + actualMinutesInOven
};

// Call Functions:
remainingMinutesInOven();
preparationTimeInMinutes();
totalTimeInMinutes();
