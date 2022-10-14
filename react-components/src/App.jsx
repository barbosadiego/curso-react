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
import ComponenteSete from './components/ComponenteSete';
import ComponenteOito from './components/ComponenteOito';
import ComponenteNove from './components/ComponenteNove';
import ComponenteDez from './components/ComponenteDez';
import ComponentePai from './components/comunicacao_direta/ComponentePai';
import ComponenteMae from './components/comunicacao_indireta/ComponenteMae';

function App(){
  return(
    <>
      <ComponenteMae title='Comunicação indireta'/>

      <ComponentePai title='Comunicação direta'/>

      <ComponenteDez title="Componente Dez" cor="red"/>

      <ComponenteNove title="Componente Nove" valor='joão'/>

      <ComponenteOito title="Componente Oito" valor={1}/>

      <ComponenteSete title='Componente Sete' valor={0}/>

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
