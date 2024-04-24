import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const mentira = 'Programar é fácil';
  const url = 'https://via.placeholder.com/150'

  function sum(a,b) {
    return a + b;
  };

  return (
    <div className="App">
      <h1>Mentiras da Vida</h1>
      <p>A mentira de hoje é: {mentira}</p>
      <p>Soma: {sum(10,5)}</p>
      <img src={url} alt='Minha imagem'></img>
      <HelloWorld />
    </div>
  );
}

export default App;
