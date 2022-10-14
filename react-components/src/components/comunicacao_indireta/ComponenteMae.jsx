import React from 'react';
import ComponenteFilha from './ComponenteFilha';

const ComponenteMae = ({title}) => {

  function clicou(){
    alert('Botão foi clicado!');
  }

  return (
    <div className="component">
      <h2>Título: {title}</h2>
      <ComponenteFilha title='Filha' click={clicou}></ComponenteFilha>
    </div>
  )
};

export default ComponenteMae;
