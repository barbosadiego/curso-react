import React, { useState, useRef } from 'react';

const App = () => {
  //states
  const [contato, setContato] = useState({ nome: '', telefone: '' });
  const [listaContatos, setListaContatos] = useState([]);

  //ref
  const nome = useRef();

  //métodos
  function definirNome(e) {
    setContato({ ...contato, nome: e.target.value });
  }

  function definirTelefone(e) {
    setContato({ ...contato, telefone: e.target.value });
  }

  function adicionarContato(){
    setListaContatos(old => [...old, contato]);
    setContato(old => ({nome: '', telefone: ''}));
    nome.current.focus();
  }

  return (
    <>
      <h1>Minha lista de contatos</h1>
      <hr />
      <div>
        <input ref={nome} type="text" onChange={definirNome} value={contato.nome} />
      </div>
      <div>
        <input type="text" onChange={definirTelefone} value={contato.telefone} />
      </div>
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <hr />
      {listaContatos.length > 0 && <h3>Meus contatos:</h3>}
      {listaContatos.map((item, index) => <p key={index}>{item.nome} {item.telefone}</p>)}
    </>
  );
};

export default App;
