function Usertabla(props) {
const datos = props.datos;
return (
            <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody>     
                            {  datos.map(
                                (datos, indice) =>(<tr key={indice}>
                                    <td>{datos.Firstname}</td>
                                    <td>{datos.Lastname}</td>
                                    <td>{datos.Emai}</td>
                                    <td><button className="button muted-button">Edit</button></td>
                                    <td><button className="button muted-button">Edit</button></td>
                                    </tr>)
                            )}
                        </tbody>
                    </table>
            </div>

        );
}

export default Usertabla;

