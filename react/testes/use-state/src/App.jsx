import React, { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();

  const contador = () => {
    // Cada operação é executada uma de cada vez por causa do "prev" (previous, valor anterior)
    setNumero((prevNumero) => prevNumero + 1);
    setNumero((prevNumero) => prevNumero + 1);
    setNumero((prevNumero) => prevNumero + 2);
  };


  return (
    <div className='App'>
        <h1>Testando Hook useState até Aprender!</h1>

        <p>Número: <strong>{numero}</strong></p>
        <button onClick={contador}>Mudar Número</button>

        <p>Meu nome é <strong>{nome}</strong></p>
        <input
        type='text'
        value={nome} 
        onChange={(e) => setNome(e.target.value)}
        placeholder='Digite seu nome'
        />
        <p>Minha idade é <strong>{idade}</strong> anos</p>
        <input 
          type='number'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder='Digite sua idade'
        />
    </div>
  )
}

export default App
