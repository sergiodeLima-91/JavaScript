import React, { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0)

  const contador = () => {
    setNumero(alert('Olá!'));
  };

  return (
    <div className='App'>
        <h1>Testando Hook useState até Aprender!</h1>        
        <p>Mudando Número: <strong>{numero}</strong></p>
        <button onClick={contador}>Mudar Número</button>
    </div>
  )
}

export default App
