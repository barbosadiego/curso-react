import React from 'react';
import { v4 as uuid } from 'uuid';

const Nomes = ({ nomes }) => {
  return (
    <>
      {nomes.map((nome) => (
        <p key={uuid()}>{nome} {uuid()}</p>
      ))}
    </>
  );
};

export default Nomes;
