import React from 'react';

// CSS
import './App.css';

// Componentes
import ComponenteUm from './components/ComponenteUm';
import ComponenteDois from './components/ComponenteDois';
import ComponenteTres from './components/ComponenteTres';
import ComponenteQuatro from './components/ComponenteQuatro';

function App(){
  return(
    <>
      <h1>App</h1>
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
    </>
  )
};

export default App;
