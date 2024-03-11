// Seleção de Elementos:
var caixaDeSelecao = document.querySelector("#moedas");
var botao = document.querySelector('#button');
radioButton[2].attributes['id'].value;


botao.addEventListener("click",  async function pegarCotacaoMoeda(moedaDesejada) {
    const pegandoCotacao = await fetch("https://economia.awesomeapi.com.br/last/" + moedaDesejada);
    const convertendoDadosEmJson = await pegandoCotacao.json(); // Agora estamos esperando a promessa ser resolvida
    alert(caixaDeSelecao)
})


// Moedas selecionadas separado por vírgula (,) 
// Ex.: USD-BRL,EUR-BRL,BTC-BRL
// pegarCotacaoMoeda("BTC-BRL");