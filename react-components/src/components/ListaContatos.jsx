import React from 'react';

const ListaContatos = ({ lista }) => {
  return (
    <>
      <h3>Meus contatos:</h3>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <p>
              Nome: {item.nome} - Tel:{item.telefone}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaContatos;
