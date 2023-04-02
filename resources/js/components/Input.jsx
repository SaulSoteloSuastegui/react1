import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';


function Input() {
    var [nombre, setNombre]=useState("Saul");

    const cambiarNombre =  (nuevonombre) =>{
        setNombre(nuevonombre);
    }

    return (
        <div>
       <h1>Nombre {nombre}</h1>
       
       <input type="text" onChange={e=>cambiarNombre(e.target.value) }/>
        </div>
        );
}

export default Input;

if (document.getElementById('input')) {
    const Index = ReactDOM.createRoot(document.getElementById("input"));

    Index.render(
        <React.StrictMode>
            <Input/>
        </React.StrictMode>
    )
}