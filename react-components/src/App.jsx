import React, { useState, useEffect, useMemo } from 'react';

const App = (props) => {
  const [valor, setValor] = useState(() => 0);
  const [numero, setNumero] = useState(() => 1000);
  // const valorCalculado = funcaoDemorada(valor);

  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor)
  }, [valor])

  function funcaoDemorada(num){
    for(let i = 0; i < 1000000000; i++){}
    return num * 2;
  }

  function incrementar() {
    setValor((oldValor) => oldValor + 1);
  }

  function incrementar2() {
    setNumero((oldNum) => oldNum + 1);
  }

  useEffect(() => {
    console.log('ok')
  })

  return (
    <div>
      <h3>React useMemo</h3>
      <hr />
      <p>Valor: {valor}</p>
      <p>Valor calculado: {valorCalculado}</p>
      <p>Número: {numero}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={incrementar2}>Incrementar 2</button>
    </div>
  );
};

export default App;
