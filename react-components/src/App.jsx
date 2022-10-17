import React, { useState, useRef, useEffect } from 'react';
import Contato from './components/Contato';
import './App.css';

const App = () => {
  //states
  const [contato, setContato] = useState({ nome: '', telefone: '' });
  const [listaContatos, setListaContatos] = useState([]);

  //ref
  const inputNome = useRef();
  const inputTelefone = useRef();

  //métodos
  function definirNome(e) {
    setContato({ ...contato, nome: e.target.value });
  }

  function definirTelefone(e) {
    setContato({ ...contato, telefone: e.target.value });
  }

  function adicionarContato() {
    //validar campos
    if (contato.nome === '' || contato.telefone === '') return false;

    //verificar se contato já existe
    const duplicado = listaContatos.find(
      (ct) => ct.nome === contato.nome && ct.telefone === contato.telefone,
    );
    if (typeof duplicado !== 'undefined') {
      inputTelefone.current.focus();
      return false;
    }

    //adicionar novo contato
    setListaContatos((old) => [...old, contato]);

    //limpar campos
    setContato((old) => ({ nome: '', telefone: '' }));

    //dar foco no input
    inputNome.current.focus();
  }

  function verificaTecla(e) {
    if (e.code === 'Enter') {
      adicionarContato();
    }
  }

  function removerContato(telefone) {
    const novaLista = JSON.parse(localStorage.getItem('contatos'))
    setListaContatos(novaLista.filter(item => item.telefone !== telefone))
  }

  //local storage
  //carregar do local storage
  useEffect(() => {
    if (localStorage.getItem('contatos') !== null) {
      setListaContatos(JSON.parse(localStorage.getItem('contatos')));
    }
  }, []);

  //salvar no local storage
  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(listaContatos));
  }, [listaContatos]);

  return (
    <>
      <h1>Minha lista de contatos</h1>
      <hr />
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          ref={inputNome}
          type="text"
          onChange={definirNome}
          value={contato.nome}
          id="nome"
        />
      </div>
      <div>
        <label htmlFor="tel">Telefone: </label>
        <input
          ref={inputTelefone}
          type="text"
          onChange={definirTelefone}
          onKeyUp={verificaTecla}
          value={contato.telefone}
          id="tel"
        />
      </div>
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <button onClick={() => setListaContatos([])}>Limpar lista</button>
      <hr />
      {/* apresentação da lista de contatos */}
      {listaContatos.map((contato, index) => (
        <Contato
          key={index}
          index={index}
          nome={contato.nome}
          telefone={contato.telefone}
          removerContato={removerContato}
        />
      ))}
    </>
  );
};

export default App;
