import React, { useState, useCallback } from 'react';
import Lista from './Lista';
import './App.css';

const App = () => {
  const [numero, setNumero] = useState(100);
  const [temaEscuro, setTemaEscuro] = useState(false);

  const calculos = useCallback(() => {
    return [numero * 2, numero * 3, numero * 4];
  }, [numero]);

  const tema = {
    backgroundColor: temaEscuro ? 'black' : 'white',
    color: temaEscuro ? 'white' : 'black',
    height: '100vh',
    padding: '20px',
  };

  return (
    <div style={tema}>
      <h1>React - useCallback</h1>
      <hr />
      <button onClick={() => setTemaEscuro((old) => !old)}>Tema</button>
      <p>Número: {numero}</p>
      <button onClick={() => setNumero((old) => old + 1)}>Incrementar</button>
      <Lista resultados={calculos} />
    </div>
  );
};

export default App;
