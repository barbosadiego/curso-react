import React from 'react';

// export default props => {
//   return(
//     <div className="component">
//       <p>Título: {props.title}</p>
//     </div>
//   )
// }

const ComponenteTres = (props) => {
  return(
    <div className="component">
      <h2>Título: {props.title}</h2>
      <p>Subtítulo: {props.subtitle}</p>
    </div>
  )
}

export default ComponenteTres;
