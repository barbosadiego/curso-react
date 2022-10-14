import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [valor, setValor] = useState(() => 100);
  const [valor2, setValor2] = useState(() => 10);

  function alterar() {
    setValor((old_valor) => old_valor + 10);
  } 
  
  function alterar2() {
    setValor2((old_valor) => old_valor + 1);
  }

  useEffect(() => {
    console.log('alterado');
  }, [valor]);

  return (
    <>
      <h1>React Hooks - useEffect</h1>
      <p>valor 1{valor}</p>
      <p>valor 2{valor2}</p>
      <button onClick={alterar}>Alterar</button>
      <button onClick={alterar2}>Alterar valor 2</button>
    </>
  );
};

export default App;
