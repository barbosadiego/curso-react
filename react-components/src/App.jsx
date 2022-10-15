import React, { useState, useRef } from 'react';
import Nomes from './Nomes';

const App = () => {
  const [nome, setNome] = useState('');
  const [listaNomes, setListaNomes] = useState([]);
  const inputNome = useRef();

  function guardarNome() {
    setListaNomes((tmp) => [...tmp, nome]);
    setNome('');
    inputNome.current.focus();
  }

  return (
    <>
      <h1>React Unique ID</h1>
      <hr />
      <input
        ref={inputNome}
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={guardarNome}>Guardar nome</button>
      {listaNomes.length > 0 && <Nomes nomes={listaNomes}/>}
    </>
  );
};

export default App;
