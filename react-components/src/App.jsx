import React, { useState, useRef } from 'react';
import ListaContatos from './components/ListaContatos';
import './App.css';

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

  function adicionarContato() {
    if (contato.nome === '' || contato.telefone === '') return false;

    setListaContatos((old) => [...old, contato]);
    setContato((old) => ({ nome: '', telefone: '' }));
    nome.current.focus();
  }

  return (
    <>
      <h1>Minha lista de contatos</h1>
      <hr />
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          ref={nome}
          type="text"
          onChange={definirNome}
          value={contato.nome}
          id="nome"
        />
      </div>
      <div>
        <label htmlFor="tel">Telefone: </label>
        <input
          type="text"
          onChange={definirTelefone}
          value={contato.telefone}
          id="tel"
        />
      </div>
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <hr />
      {listaContatos.length > 0 && <ListaContatos lista={listaContatos} />}
    </>
  );
};

export default App;
