import React from 'react';

const Contato = ({ id, nome, telefone, removerContato }) => {
  return (
    <div>
      <button onClick={() => removerContato(id)}>Remover</button>
      {nome} - {telefone}
    </div>
  );
};

export default Contato;
