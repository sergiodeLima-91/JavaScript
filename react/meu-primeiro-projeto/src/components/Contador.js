import React, { useState } from 'react';

function Contador() {
  // Define o estado inicial como 0
  // Primeiro parêmetro (contador) recebe valor atual sem alteração.
  // Segundo parâmetro (setContador) recebe o valor alterado na função incrementar()
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    // Atualiza o estado adicionando 1 ao contador
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Clique no botão para somar um a contagem. A renderização em tempo real é possível porque estamos aplicando uma alteração com a tag _strong_ diretamente na constante contador e o useState retorna o valor alterado.</p>
      <p>Contagem: <strong>{contador}</strong></p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
