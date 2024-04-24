import './App.css';

function App() {
  const mentira = 'Programar é fácil';

  function sum(a,b) {
    return a + b;
  };

  return (
    <div className="App">
      <h1>Mentiras da Vida</h1>
      <p>A mentira de hoje é: {mentira}</p>
      <p>Soma: {sum(10,5)}</p>
    </div>
  );
}

export default App;
