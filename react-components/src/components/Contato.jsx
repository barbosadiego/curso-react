import React from 'react';

const Contato = ({ nome, telefone, removerContato }) => {
  return (
    <div>
      <button onClick={() => removerContato(telefone)}>Remover</button>
      {nome} - {telefone}
    </div>
  );
};

export default Contato;
