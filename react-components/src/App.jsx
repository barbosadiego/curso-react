import React, { useReducer } from 'react';

const App = (props) => {
  // const [valor, setValor] = useState(100);
  // const [mostrar, setMostrar] = useState(false);

  // function incrementar() {
  //   setValor((oldValor) => oldValor + 1);
  // }

  // return (
  //   <div>
  //     <h1>React useReducer</h1>
  //     <p>valor: {valor}</p>
  //     {mostrar && <p>valor visível</p>}
  //     <button onClick={incrementar}>Incrementar</button>
  //     <button onClick={() => setMostrar((old) => !old)}>
  //       Exibir/ocultar valor
  //     </button>
  //   </div>
  // );

  // useReducer
  const [state, dispatch] = useReducer(reducer, {
    valor: 1000,
    mostrar: false,
  });

  function reducer(state, action) {
    switch (action.type) {
      case 'incrementar':
        return {
          valor: state.valor + 1,
          mostrar: state.mostrar,
        };
        break;
      case 'visibilidade':
        return {
          valor: state.valor,
          mostrar: !state.mostrar,
        };
        break;
      default:
        return state;
    }
  }

  return (
    <div>
      <h3>React - useReducer</h3>
      <hr />
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'visibilidade' })}>
        Exibir/Ocultar
      </button>
      <p>Valor: {state.valor}</p>
      {state.mostrar && <p>Valor visível</p>}
    </div>
  );
};

export default App;
