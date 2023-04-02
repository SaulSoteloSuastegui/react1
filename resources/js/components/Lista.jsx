import React from 'react';
import ReactDOM from 'react-dom/client';


function Lista() {
    const coches = ['For','BMW','Audi'];

    
    return(
        <div>
            <h1>Componente lista</h1>
            {
            coches.map((coches, indice)=><li key={indice}>{coches}</li>)
            }
        </div>
    );
}

if (document.getElementById('lista')) {
  const Index = ReactDOM.createRoot(document.getElementById("lista"));

  Index.render(
      <React.StrictMode>
          <Lista/>
      </React.StrictMode>
  )
}
