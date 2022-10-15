import React, { useState } from 'react';

const App = () => {
  const [valor, setValor] = useState(1);

  const multiplicar = () => {
    if(isNaN(valor)) return [];
    let produtos = [];
    for (let m = 1; m <= 10; m++) {
      produtos.push(m * valor);
    }
    return produtos;
  };

  return (
    <div>
      <h1>React - Tabuada</h1>
      <hr />
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(parseInt(e.target.value))}
      />
      {multiplicar().map((item, index) => (
        <p key={index}>
          {valor} X {index + 1} = {item}
        </p>
      ))}
    </div>
  );
};

export default App;
