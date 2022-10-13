import React from 'react';

// CSS
import './App.css';

// Componentes
import ComponenteUm from './components/ComponenteUm';
import ComponenteDois from './components/ComponenteDois';
import ComponenteTres from './components/ComponenteTres';

function App(){
  return(
    <>
      <h1>App</h1>
      <ComponenteUm />
      <ComponenteDois />
      <ComponenteTres title='teste'/>
    </>
  )
};

export default App;
