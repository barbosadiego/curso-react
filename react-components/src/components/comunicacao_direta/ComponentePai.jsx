import React from 'react';
import ComponenteFilho from './ComponenteFIlho';

const ComponentePai = (props) => {
  return (
    <div className='component'>
      <h2>Título: {props.title}</h2>
      <p>Pai</p>
      <ComponenteFilho title='Componente filho' cargo='Administrador'>
        João Ribeiro
      </ComponenteFilho>
      <ComponenteFilho title='Componente filho' cargo='Front-end'>
        Diego Barbosa
      </ComponenteFilho> <ComponenteFilho title='Componente filho' cargo='Gestão de pessoas'>
        Mariazinha
      </ComponenteFilho>
    </div>
  );
};

export default ComponentePai;
