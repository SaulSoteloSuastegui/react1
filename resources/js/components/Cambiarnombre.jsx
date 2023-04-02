import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';


function Cambiarnombre() {
    var [color, setcolor]=useState("Rojo");

    return (
        <div>
       <h1>Cambiar color {color}</h1>
        <button onClick={()=>setcolor("azul")}>Cambiar color</button> 
        </div>
        );
}

export default Cambiarnombre;

if (document.getElementById('cambiarnombre')) {
    const Index = ReactDOM.createRoot(document.getElementById("cambiarnombre"));

    Index.render(
        <React.StrictMode>
            <Cambiarnombre/>
        </React.StrictMode>
    )
}
