import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';


function Contador() {
    var [conta, setcolor]=useState(0);

  useEffect(() => {
    // Como operacion secundaria actualiza el título del documento usando la API del navegador
    //Peticiones de datos, establecimiento de suscripciones y actualizaciones manuales del DOM 
    //en componentes de React serían ejemplos de efectos secundarios
    //“efectos secundarios” (o simplemente “efectos”) 
    document.title = `You clicked ${conta} times`;
  });
    return (
        <div>
       <h1>Contador {conta}</h1>
        <button onClick={()=>setcolor(conta+1)}>Contador</button> 
        </div>
        );
}

export default Contador;

if (document.getElementById('contador')) {
    const Index = ReactDOM.createRoot(document.getElementById("contador"));

    Index.render(
        <React.StrictMode>
            <Contador/>
        </React.StrictMode>
    )
}