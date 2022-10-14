import React, { useState } from 'react';
import './App.css';

const App = () => {

  // const [nome, setNome] = useState(() => {
  //   return 'diego'
  // });

  // function alterar(){
  //   setNome(old => 'joaquim')
  // }

  const [player, setPlayer] = useState({
    name: 'diego',
    score: 0,
  })

  function alterar(){
    setPlayer(player_anterior => {
      return {
        ...player_anterior,
        score: player_anterior.score + 1,
      }
    })
  }

  return (
    <>
      <h1>React Hooks - useState</h1>
      <hr />
      <h3>Nome: {player.name}</h3>
      <h3>Pontos: {player.score}</h3>
      <button onClick={alterar}>Alterar a pontuação</button>
      {/* <p>Nome: {nome}</p>
      <button onClick={alterar}>Alterar</button> */}
    </>
  );
};

export default App;
