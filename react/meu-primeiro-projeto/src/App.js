import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <Frase />
      <SayMyName nome="Sérgio" />
      <Pessoa
        foto="https://via.placeholder.com/150" 
        nome="Sérgio"
        idade="33"
        profissao="Auxiliar Administrativo"
      />
    </div>
  );
}

export default App;
