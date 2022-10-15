import React, { useState, useRef } from 'react';

const App = () => {
  //state
  const [listaTarefas, setListaTarefas] = useState(() => []);
  const [tarefa, setTarefa] = useState(() => '');

  //ref
  const idTarefa = useRef(0);
  const inputRef = useRef();

  //metodos
  function adicionarTarefa() {
    setListaTarefas((old) => {
      return [
        ...old,
        {
          id: idTarefa.current,
          texto: tarefa,
        },
      ];
    });
    idTarefa.current++;
    setTarefa('');
    inputRef.current.focus();
  }

  function limparTarefas() {
    setListaTarefas((old) => []);
    idTarefa.current = 0;
  }

  function removerTarefa(id) {
    const tmp = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas((old) => tmp);
  }

  return (
    <>
      <h1>GESTOR DE TAREFAS</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefas}>Limpar tudo</button>
      </div>
      <hr />
      <p>Tarefas: </p>
      {listaTarefas.map((tarefa) => (
        <p key={tarefa.id}>
          {tarefa.texto} -{' '}
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </p>
      ))}
    </>
  );
};

export default App;
