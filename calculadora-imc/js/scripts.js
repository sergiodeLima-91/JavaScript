// Seleção de Elementos:
var nome = document.querySelector('#nome');
var altura = document.querySelector("#altura");
var peso = document.querySelector("#peso");
var resultado = document.querySelector("#results")
var botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    resultado.innerHTML = `IMC: ${peso / (altura ** 2)}`
})