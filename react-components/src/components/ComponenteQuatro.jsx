import React from 'react';

const ComponenteQuatro = (props) => {
  return (
    <div className='component'>
      <p>Título: {props.title}</p>
      {props.children}
    </div>
  )
};

export default ComponenteQuatro;
