import React from 'react';
import Comment from './components/Comment';

function App(){
  return(
    <>
      <h1>Comentários</h1>
      <Comment title='Comentário Um' author='Diego Barbosa'/>
      <Comment title='Comentário Dois' author='João Ribeiro'/>
      <Comment title='Comentário Três' author='Mariazinha'/>
    </>
  )
};

export default App;
