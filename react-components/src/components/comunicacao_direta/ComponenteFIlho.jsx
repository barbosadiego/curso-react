import React from 'react';

const ComponenteFilho = (props) => {
  return (
    <div className='component'>
      <h2>Título: {props.title}</h2>
      <p>Cargo: {props.cargo} | {props.children}</p>
    </div>
  )
};

export default ComponenteFilho;