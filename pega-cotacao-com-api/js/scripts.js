// Seleção de Elementos:
var radioButton = document.querySelectorAll(".radio");
var botao = document.querySelector('#button');
radioButton[2].attributes['id'].value;


botao.addEventListener("click",  async function pegarCotacaoMoeda(moedaDesejada) {
    const pegandoCotacao = await fetch("https://economia.awesomeapi.com.br/last/" + moedaDesejada);
    const convertendoDadosEmJson = await pegandoCotacao.json(); // Agora estamos esperando a promessa ser resolvida

})



// Moedas selecionadas separado por vírgula (,) 
// Ex.: USD-BRL,EUR-BRL,BTC-BRL
// pegarCotacaoMoeda("BTC-BRL");