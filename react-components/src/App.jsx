import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [valor, setValor] = useState(() => {
    console.log('aqui')
    return 0
  });

  function incremento(){
    setValor(valor_antigo => valor_antigo + 1);
  };

  function decremento(){
    setValor(valor_antigo => valor_antigo - 1);
  };

  return (
    <>
      <h1>React Hooks - useState</h1>
      <p>{valor}</p>
      <button onClick={incremento}>Aumentar</button>
      <button onClick={decremento}>Diminuir</button>
    </>
  );
};

export default App;
