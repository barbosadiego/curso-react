import React from 'react';

const ComponenteQuatro = (props) => {
  return (
    <div className='component'>
      <h2>Título: {props.title}</h2>
      {props.children}
    </div>
  )
};

export default ComponenteQuatro;
