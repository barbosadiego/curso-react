import React from 'react';
import CondicaoIf from './CondicaoIf'

const ComponenteNove = (props) => {
  return (
    <div className="component">
      <h2>{props.title}</h2>
      <p>nome: {props.valor}</p>
      <CondicaoIf condicao={props.valor === 'joão'}>
        <p>é o meu nome</p>
      </CondicaoIf>
      <CondicaoIf condicao={props.valor === 'ana'}>
        <p>é o nome da tua irmã</p>
      </CondicaoIf>
      <CondicaoIf condicao={props.valor !== 'joão' && props.valor !== 'ana'}>
        <p>desconheço este nome</p>
      </CondicaoIf>
    </div>
  );
};

export default ComponenteNove;
