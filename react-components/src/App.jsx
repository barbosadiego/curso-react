import React from 'react';

// CSS
import './App.css';

// Componentes
import ComponenteUm from './components/ComponenteUm';
import ComponenteDois from './components/ComponenteDois';
import ComponenteTres from './components/ComponenteTres';
import ComponenteQuatro from './components/ComponenteQuatro';
import ComponenteCinco from './components/ComponenteCinco';
import ComponenteSeis from './components/ComponenteSeis';

function App(){
  return(
    <>
      <ComponenteUm />

      <ComponenteDois />

      <ComponenteTres title='teste' subtitle='subtítulo de teste'/>

      <ComponenteQuatro title='ola'>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </ComponenteQuatro>

      <ComponenteCinco title='cinco' />

      <ComponenteSeis title='Componente Seis'/>
    </>
  )
};

export default App;
