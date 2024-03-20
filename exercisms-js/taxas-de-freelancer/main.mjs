// Instruções:
// Neste exercício você escreverá código para ajudar um freelancer a se comunicar com seus clientes sobre os preços de determinados projetos. Você escreverá algumas funções utilitárias para calcular rapidamente os custos para os clientes.

// 1 -  CALCULE O VALOR DIÁRIO COM BASE NO VALOR POR HORA DADO:
// Um cliente entra em contato com o freelancer para perguntar sobre suas taxas. O freelancer explica que trabalham 8 horas por dia. Porém, o freelancer conhece apenas o valor da hora do projeto. Ajude-os a estimar uma taxa diária dada uma taxa horária.

// 2 - CALCULE O NÚMERO DE DIAS ÚTEIS COM UM ORÇAMENTO FIXO:
// Outro dia, um gerente de projeto oferece ao freelancer para trabalhar em um projeto com orçamento fixo. Dado o orçamento fixo e a taxa horária do freelancer, ajude-os a calcular o número de dias que trabalhariam até que o orçamento se esgotasse. O resultado deve ser arredondado para o número inteiro mais próximo.

// 3 - CALCULE A TAXA DE DESCONTOS PARA GRANDES PROJETOS:
// Freqüentemente, os clientes do freelancer os contratam para projetos que duram vários meses. Nestes casos, o freelancer decide oferecer um desconto para cada mês completo, e os dias restantes são cobrados à diária. Cada mês tem 22 dias faturáveis. Ajude-os a estimar o custo desses projetos, considerando uma taxa horária, o número de dias que o projeto dura e uma taxa de desconto mensal. O desconto é sempre passado como um número, onde 42% passa a ser 0.42. O resultado deve ser arredondado para o número inteiro mais próximo.


// // Taxa de Descontos para grandes projetos:
// export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//     // Calculo para Determinar quantidade de meses de 22 dias:
//     var monthNum = Math.round(numDays / 22);
//     // Determinando quanto será o valor pago no mês (sem desconto)
//     var monthValue = (ratePerHour * 8) * 22;
//     // Determinando a porcentagem de desconto com base no montante:
//     var monthValueDiscount = (monthValue * (discount * 100)) / 100;
//     // Aplicando o desconto determinado no montante:
//     var valueMonthly = (monthValue - monthValueDiscount) * monthNum ;
    
//     var restDays = numDays % 22;
//     var daysRemainigValue = (ratePerHour * 8) * restDays;
    
//     return `monthNum: ${monthNum} - monthValue: ${monthValue} - monthValueDiscount: ${monthValueDiscount} - restDays: ${restDays} - daysRemainingValue: ${daysRemainigValue} - total: ${valueMonthly + daysRemainigValue}`; 
// }

// // Chamamento das funções:
// dayRate();
// daysInBudget();
// priceWithMonthlyDiscount(16, 130, 0.15);

//==============================================================

// Valor Diário com Base no Valor Por Hora:
export function dayRate(ratePerHour) {
    return ratePerHour * 8;
};

// Número de Dias Úteis com Orçamento Fixo:
export function daysInBudget(budget, ratePerHour) {
    return Math.floor((budget / ratePerHour) / 8);
};


// Taxa de Descontos para grandes projetos:
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    // Calculo para Determinar quantidade de meses de 22 dias:
    var monthNum = Math.floor(numDays / 22); // Correção: usar Math.floor para arredondar para baixo
    // Determinando quanto será o valor pago no mês (sem desconto)
    var monthValue = (ratePerHour * 8) * 22;
    // Determinando a porcentagem de desconto com base no montante:
    var monthValueDiscount = (monthValue * (discount * 100)) / 100;
    // Aplicando o desconto determinado no montante:
    var valueMonthly = (monthValue - monthValueDiscount) * monthNum;
    
    var restDays = numDays % 22;
    var daysRemainingValue = (ratePerHour * 8) * restDays;


    return Math.ceil(valueMonthly + daysRemainingValue);
}

// Chamamento das funções:
dayRate();
daysInBudget();
console.log(priceWithMonthlyDiscount(29.654321, 155, 0.2547));
