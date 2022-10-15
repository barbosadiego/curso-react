import React from 'react';

const ListaContatos = ({ lista }) => {
  return (
    <>
      <h3>Meus contatos:</h3>
      <ul>
        {lista.map((item, index) => (
          <li key={index+item.nome}>
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
