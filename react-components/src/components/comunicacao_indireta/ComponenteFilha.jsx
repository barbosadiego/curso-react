import React from 'react';

const ComponenteFilha = (props) => {
  return (
    <div className="component">
      <h2>Título: {props.title}</h2>
      <button onClick={props.click}>Clicar</button>
    </div>
  );
};

export default ComponenteFilha;
