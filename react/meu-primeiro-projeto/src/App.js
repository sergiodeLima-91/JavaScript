import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Click';
import Form from './components/Form';
import OnChange from './components/OnChange';

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
      <List />
      <h1>Testando Eventos</h1>
      <Evento acionador="Sérgio"/>
      <Form />
      <OnChange />
    </div>
  );
}

export default App;
