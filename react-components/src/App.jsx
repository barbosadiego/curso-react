import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [texto, setTexto] = useState('');
  const total = useRef(1);

  // console.log(total);

  useEffect(() => {
    total.current++;
  });

  return (
    <>
      <h1>useRef</h1>
      <hr />
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <hr />
      <p>
        O texto é: <strong>{texto}</strong>
      </p>
      <hr />
      <p>Total: {total.current}</p>
    </>
  );
};

export default App;
