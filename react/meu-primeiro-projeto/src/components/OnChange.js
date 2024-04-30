import React, { useState } from 'react';

function OnChange() {
  // Estado para armazenar o valor do campo de entrada
  const [inputValue, setInputValue] = useState('');

  // Função que será chamada quando o evento onChange for acionado
  const handleChange = (event) => {
    setInputValue(event.target.value);
    alert('Opa, o campo foi alterado!')
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Valor digitado: {inputValue}</p>
    </div>
  );
}

export default OnChange;
