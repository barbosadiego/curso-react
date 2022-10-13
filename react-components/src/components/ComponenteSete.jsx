import React from 'react';

const ComponenteSete = ({title, valor}) => {
  return (
    <div className="component">
      <h2>{title}</h2>
      {
        valor ? 
          <p>verdadeiro</p> 
          : 
          <p>falso</p>
      }
    </div>
  )
};

export default ComponenteSete;
