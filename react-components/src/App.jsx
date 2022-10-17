import React, { useState, useRef, useEffect } from 'react';
import Contato from './components/Contato';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faList, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const App = () => {
  //states
  const [contato, setContato] = useState({ id: '', nome: '', telefone: '' });
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
    setListaContatos((old) => [...old, { ...contato, id: generateId() }]);

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

  function removerContato(id) {
    const novaLista = JSON.parse(localStorage.getItem('contatos'));
    setListaContatos(novaLista.filter((item) => item.id !== id));
  }

  function generateId() {
    return Date.now().toString();
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
      <div className="container-fluid titulo">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-center ">
              <FontAwesomeIcon icon={faList} className="me-3"/>
              MINHA LISTA DE CONTATOS
            </h1>
          </div>
        </div>
      </div>

      <div className="container-fluid formulario">
        <div className="row">
          <div className="col p-3">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div>
                  <label className="mb-3" htmlFor="nome">
                    Nome
                  </label>
                  <input
                    className="form-control"
                    ref={inputNome}
                    type="text"
                    onChange={definirNome}
                    value={contato.nome}
                    id="nome"
                  />
                </div>
                <div>
                  <label className="mb-3" htmlFor="tel">
                    Telefone
                  </label>
                  <input
                    className="form-control"
                    ref={inputTelefone}
                    type="text"
                    onChange={definirTelefone}
                    onKeyUp={verificaTecla}
                    value={contato.telefone}
                    id="tel"
                  />
                </div>
                <div className="row mt-3">
                  <div className="col text-start">
                    <button className='btn btn-outline-warning' onClick={adicionarContato}>
                      <FontAwesomeIcon icon={faCirclePlus} className="me-2"/>
                      Adicionar Contato
                    </button>
                  </div>
                  <div className="col text-end">
                    <button className='btn btn-outline-warning' onClick={() => setListaContatos([])}>
                      <FontAwesomeIcon icon={faTrash} className="me-2"/>
                      Limpar lista
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* apresentação da lista de contatos */}
      {listaContatos.map((contato, index) => (
        <Contato
          key={index}
          id={contato.id}
          nome={contato.nome}
          telefone={contato.telefone}
          removerContato={removerContato}
        />
      ))}
    </>
  );
};

export default App;
