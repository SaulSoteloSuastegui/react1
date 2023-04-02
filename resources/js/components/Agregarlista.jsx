import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';


function Agregarlista() {

    const [arrayNumero, setNumero] = useState([1,2,3])
   const agregarElemento = () => {
    console.log(arrayNumero)

       setNumero([arrayNumero])
   }
    return(
        <div>
            <button onClick={agregarElemento}>Agregar</button>
            {arrayNumero.map((item, indice)=><li key={indice}>{item}</li>)}
        </div>
    );
}

if (document.getElementById('agregarlista')) {
  const Index = ReactDOM.createRoot(document.getElementById("agregarlista"));

  Index.render(
      <React.StrictMode>
          <Agregarlista/>
      </React.StrictMode>
  )
}
