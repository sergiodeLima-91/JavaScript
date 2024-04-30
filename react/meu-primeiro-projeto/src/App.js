import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Click';
import Form from './components/Form';
import OnChange from './components/OnChange';
import Condicional from './components/Condicional';
import Contador from './components/Contador';

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
      <h1>Testando Eventos - Reutilização de Componentes</h1>
      <Evento acionador="Sérgio"/>
      <Form />
      <OnChange />
      <h1>Testando Renderização em Tempo Real</h1>
      <Contador />
      <h1>Testando Renderização Condicional</h1>
      <p>Determinado elemento é renderizado na tela caso a condição seja satisfeita.</p>
      <Condicional />
    </div>
  );
}

export default App;
