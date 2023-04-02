import React from 'react';
import ReactDOM from 'react-dom/client';
import Usertabla from './Usertabla';
function Formulario() {

    const userData =[
        {Firstname:'john',Lastname:'Doe', Emai:'john@example.com'},
        {Firstname:'Mary',Lastname:'Moe', Emai:'mary@example.com'},
        {Firstname:'july',Lastname:'Dooley', Emai:'july@example.com'}
    ]

    return (
        <div>
                <h3>Crud con Hook</h3>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-4">
                        <h3>Agrecar usuario</h3>     
                    </div>

                    <div className="col-sm-4">
                    <h3>Tabla usuario</h3>   
                        <Usertabla datos={userData}/>
                    </div>
                </div>
        
        </div>
    );
}

export default Formulario;

if (document.getElementById('formulario')) {
    const Index = ReactDOM.createRoot(document.getElementById("formulario"));

    Index.render(
        <React.StrictMode>
            <Formulario/>
        </React.StrictMode>
    )
}
