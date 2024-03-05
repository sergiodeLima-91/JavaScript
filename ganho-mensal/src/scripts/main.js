// Seleção de Elementos:
var salario = document.querySelector("#renda");
var ganho = document.querySelector("#ganho");

// Calculando renda diária com base na mensal:
function calculoDaRendaDiaria() {
    var calculo = salario.value / 30;
    var arredondarResultado = parseFloat(calculo.toFixed(2));

    return arredondarResultado;
};

// Criando evento de clique para o cálculo:
let button = document.querySelector("#calc").addEventListener("click", function(evento) {
    evento.preventDefault();
    ganho.innerHTML = `Você recebe cerca de <strong>R$ ${calculoDaRendaDiaria()}</strong> por dia!.`
});