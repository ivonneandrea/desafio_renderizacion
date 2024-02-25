import Table from "react-bootstrap/Table";

const Listado = ({ data, setData, filteredData, setFilteredData}) => {
    const deleteColaborador = (id) => {
        const newData = [...data].filter(
            (colaborador) => colaborador.id !== id
        );

     setData (newData);

     const newDatafilter = [...filteredData].filter (
        (colaborador) => colaborador.id !== id
     );

     setFilteredData(newDatafilter);

    };

    const colaboradores = filteredData.map((colaborador)=> (
        <tr key ={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
                <i
                    onClick = {() => deleteColaborador (colaborador.id)}></i>

            </td>
 </tr>

));

return (
    <>
    <section className="table-responsive listSection">
                <Table
                    className="table table-secondary table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Edad</th>
                            <th>Cargo</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>{colaboradores}</tbody>
                </Table>
            </section>
    </>
);
};

export default Listado;