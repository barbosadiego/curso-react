import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhoneVolume,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import './Contato.css';

const Contato = ({ id, nome, telefone, removerContato }) => {
  return (
    <div className='mx-2'>
      <div className="container contato-comp my-4">
        <div className="row">
          <div className="col p-2">
            <h5>
              <FontAwesomeIcon icon={faUser} className="me-3" />
              {nome}
            </h5>
          </div>
          <div className="col p-2">
            <h5>
              <FontAwesomeIcon icon={faPhoneVolume} className="me-3" />
              {telefone}
            </h5>
          </div>
          <div className="col p-2">
            <FontAwesomeIcon
              icon={faTrash}
              className="me-3"
              onClick={() => removerContato(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
