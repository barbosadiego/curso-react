import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [valor, setValor] = useState(0);

  function aumentar() {
    setValor(valor + 1);
  }

  function diminuir(){
    setValor(valor - 1);
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Valor: {valor}</h3>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </>
  );
};

export default App;
