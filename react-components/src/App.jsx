import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [texto, setTexto] = useState('');
  const inputRef = useRef();
  const inputRef2 = useRef();

  function focus1() {
    inputRef.current.focus();
  }

  function focus2() {
    inputRef2.current.focus();
  }

  return (
    <>
      <h1>useRef</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <input type="text" ref={inputRef2} />
      <hr />
      <button onClick={focus1}>Focus 1</button>
      <button onClick={focus2}>Focus 2</button>
    </>
  );
};

export default App;
