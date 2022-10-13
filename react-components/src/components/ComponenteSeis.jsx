import React from 'react';
import clientes from '../dados_clientes/dados_clientes';

const ComponenteSeis = (props) => {
  function cliente() {
    return clientes.map((cliente) => {
      return <li key={cliente.id_cliente}>Nome: {cliente.nome} | Email: {cliente.email}</li>
    });
  }

  return (
    <div className="component">
      <h2>Título: {props.title}</h2>
      {/* <ul>{cliente()}</ul> */}
      {clientes.map((item) => {
        return <li key={item.id_cliente}>Nome:{item.nome} | Email: {item.email}</li>
      })}
    </div>
  );
};

export default ComponenteSeis;
