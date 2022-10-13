import React from 'react';

const ComponenteDez = ({ title, cor }) => {

  const estilo = {
    color: 'white',
    padding: '10px',
    backgroundColor: 'red',
    fontWeight: 'bold',
  };

  return (
    <div className="component">
      <h2>{title}</h2>
      <p style={estilo}>Texto de exemplo</p>
      <p style={{color: cor}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default ComponenteDez;
