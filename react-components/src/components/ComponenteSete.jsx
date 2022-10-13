import React from 'react';

const ComponenteSete = ({title, valor}) => {
  return (
    <div className="component">
      <h2>{title}</h2>
      {
        valor ? 
          <div>
            <p>Análise do valor</p>
            <p>Verdadeiro</p>
          </div>
          : 
          <div>
            <p>Análise do Valor</p>
            <p>Falso</p>
          </div>
      }
    </div>
  )
};

export default ComponenteSete;
