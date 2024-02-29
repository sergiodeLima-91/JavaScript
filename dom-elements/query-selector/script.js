// Testando querySelector:
// O querySelector aplica a modificação NA PRIMEIRA OCORRÊNCIA DO ELEMENTO ESPECIFICADO pelo seletor entre parênteses.
// No caso o primeiro "h1" é que terá seu conteúdo alterado, mas o restante não.
let primeiraOcorrencia = document.querySelector(".frase1");
primeiraOcorrencia.innerHTML = "Mudando texto!";

// E se eu quiser alterar, por exemplo, o "h1" de número quatro? Nesse caso, usaremos o querySelectorAll para poder selecionar qual elemento desejamos alterar.
// Testando querySelectorAll:
let selecionandoElemento = document.querySelectorAll(".frase2");
// A variável selecionandoElemento tornou-se um array a partir do momento em que recebeu o método querySelectorAll().
// Por isso, temos que selecionar entre chaves qual elemento desejamos alterar!
selecionandoElemento[3].innerHTML = "Mudando conteúdo pelo querySelectorAll!";
// É possível fazer outras alterações nos elementos, como mudar a cor, por exemplo:
selecionandoElemento[0].innerHTML = "Mudando cor do primeiro elemento via querySelectorAll!";
selecionandoElemento[0].style.color = "blue";
selecionandoElemento[1].innerHTML = "Colocando itálico na segunda ocorrência da tag h1";
selecionandoElemento[1].style.fontStyle = "italic";