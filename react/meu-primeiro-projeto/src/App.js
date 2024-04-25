import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
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
