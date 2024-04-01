var pessoa = {
    nome: ["Sérgio", "dos Santos Lima"],
    idade: [33],
    hobbies: ["jogar videogame", "tocar teclado"],

    mostrar_nome: function mostrarNome() {
        console.log('Seu nome é '+ this.nome[0] + " " + this.nome[1]);
    },

    mostrar_idade: function mostrarIdade() {
        console.log('Sua idade é '+ this.idade + " ano(s)");
    },

    mostrar_hobbies: function mostrarHobbies() {
        console.log('Você gosta de '+ this.hobbies[0] + ' e de ' + this.hobbies[1]);
    }
 };

pessoa.mostrar_nome();
pessoa.mostrar_idade();
pessoa.mostrar_hobbies();
