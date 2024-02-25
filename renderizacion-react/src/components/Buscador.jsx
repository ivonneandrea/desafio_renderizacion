const Buscador = ({data, filteredData}) =>{
    const inputFilter = (e) => {
        const finWord = e.target.value.toLowerCase ();


 const filterResp = data.filter (
 (colaborador) =>
 colaborador.nombre.toLowerCase().includes(finWord) ||
 colaborador.correo.toLowerCase().includes(finWord) ||
 colaborador.edad.includes(finWord)  ||
 colaborador.cargo.toLowerCase().includes(finWord) ||
 colaborador.telefono.includes(finWord)
 
 );

filteredData(filterResp );

    };

    return (
        <>
        <section>
        <input type="text"
        name="finder"
        id = "finder"
        placeholder="Buscar colaborador"
        onChange= {inputFilter}/>

</section>
</>
    );

};

export default Buscador;