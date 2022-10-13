import React from 'react';
import ComponenteUm from './ComponenteUm';
import ComponenteTres from './ComponenteTres';

const ComponenteCinco = ({title}) => {
  return (
    <div className="component">
      <h2>Título {title}</h2>
      <ComponenteUm />
      <ComponenteUm />
      <ComponenteUm />
      <ComponenteTres title="Componente três" subtitle="Alô mundo!"/>
    </div>
  )
};

export default ComponenteCinco;
