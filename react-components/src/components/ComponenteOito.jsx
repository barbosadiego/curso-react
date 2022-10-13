import React from 'react';

const ComponenteOito = ({title, valor}) => {

  function condicao(){
    if(valor >= 10){
      return <p>O valor é igual ou superior a 10.</p>
    } else {
      return <p>O valor é inferior a 10.</p>
    }
  }
  
  return (
    <div className='component'>
      <h2>{title}</h2>
      {condicao()}
    </div>
  )
};

export default ComponenteOito;
