import React from 'react';
import './Comment.css';

function Comment(props){

  function Maiúsculas(texto){
    return texto.toUpperCase();
  }

  return(
    <section className='comment'>
      <p className='title'>{Maiúsculas(props.title)}</p>
      <p className='text'>Texto do comentário</p>
      <p className='author'>Autor: {props.author}</p>
    </section>
  )
};

export default Comment;
