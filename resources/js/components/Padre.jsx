import React from 'react';
import ReactDOM from 'react-dom/client';
import Hijo from './Hijo.jsx';

function Padre() {
  const nombre="Laravel";
    return (
        <>
          <h1>Componente padre {nombre}</h1>
          <Hijo Edad='10'/>
        </>
      );
}

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById("root"));

  Index.render(
      <React.StrictMode>
          <Padre/>
      </React.StrictMode>
  )
}
