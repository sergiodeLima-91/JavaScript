// ============== Arrow Functions ==============
//  Declaração Normal de Função:
// function somaDoisNumeros(n1,n2) {
//     return n1 + n2;
// };
//  Arrow Function:
// const somaDoisNumerosComSeta = (n1,n2) => {
//     return n1 + n2;
// }

//  Arrouw Function mais simplificada:
// const raizQuadrada = numero => numero**2;

// somaDoisNumeros(5,5);
// somaDoisNumerosComSeta(5,10);
// console.log(raizQuadrada(5));

// ============== Funções Integradas em Arrays ==============:
// includes - Retorna verdadeiro ou falso se um array inclui o valor especificado no argumento;
// every - Retorna verdadeiro se todos os elementos do array preenchem a condicional especificada;
// some - Retorna verdadeiro SE PELO MENOS UM dos elementos do array preenche o requisito especificado;
// find - Retorna o valor do primeiro elemento que preenche o requisito especificado no arugmento;
// findIndex - Retorna o ÍNDICE do primeiro elemento que se encaixar no requisito especificado no argumento.

// Task 1:
export function getCardPosition(stack, card) {
    return stack.findIndex((i) => i === card );
};
// Task 2:
export function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
};
// Task 3:
export function isEachCardEven(stack) {
    return stack.every((i) => i %2 === 0);
};
// Task 4:
export function doesStackIncludeOddCard(stack) {
    return stack.some((i) => i %2 !== 0);
};
// Task 5:
export function getFirstOddCard(stack) {
    return stack.find((i) => i %2 !== 0);
};
// Task 5:
export function getFirstEvenCardPosition(stack) {
    return stack.findIndex((i) => i %2 === 0);
};

getFirstEvenCardPosition([8, 2, 3, 1]);
