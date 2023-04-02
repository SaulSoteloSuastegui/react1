import React from 'react';
import ReactDOM from 'react-dom/client';

function Contador() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contador;

if (document.getElementById('ejercicio1')) {
    const Index = ReactDOM.createRoot(document.getElementById("ejercicio1"));

    Index.render(
        <React.StrictMode>
            <Contador/>
        </React.StrictMode>
    )
}
