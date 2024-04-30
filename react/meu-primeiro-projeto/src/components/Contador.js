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
      <p>Contagem: <strong>{contador}</strong></p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
