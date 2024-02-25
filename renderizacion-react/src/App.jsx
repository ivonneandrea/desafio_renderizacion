import {useState} from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import Formulario from "./components/Formulario";

function App () {
  const [data, setData] = useState (BaseColaboradores);
  const [filteredData, setFilteredData] = useState (data);
  const [alert, setAlert] = useState ({
    error :"",
    msg: "",
    color: "",
  });

  return (
    <>
    <header>
    <h1>Lista de Colaboradores</h1>
    <section>
      <Buscador data= {data}
      filteredData = {setFilteredData}
      
      />
    </section>
</header>
    <main>
      <section>
        <Listado
        data = {data}
        setData={setData}
        filteredData  = {filteredData }
        setFilteredData = {setFilteredData}

        />
      </section>

      <section>
        <Formulario
        setAlert={setAlert}
        data={data}
        setData={setData}
        filteredData = {filteredData}
        setFilteredData  = {setFilteredData}
        
        />
        {alert.msg && (
          <Alert color = {alert.color}> {alert.msg}</Alert>
        )}
      </section>
    </main>




    </>
  );
}

export default App;