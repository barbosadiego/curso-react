import React, { useState, useEffect } from 'react';

const Lista = ({ resultados }) => {
  const [listaItems, setListaItems] = useState([]);

  useEffect(() => {
    setListaItems(resultados());
    console.log('render');
  }, [resultados]);

  return (
    <ul>
      {listaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Lista;
