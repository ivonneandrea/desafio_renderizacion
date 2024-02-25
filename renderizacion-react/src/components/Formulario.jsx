import {useState} from "react";

import Button from "react-bootstrap/Button";

const Formulario = ({data, setData, setFilteredData, setAlert}) => {
    const [formData, setFormData] = useState ( {
        nombre:"",
        correo:"",
        edad:"",
        cargo:"",
        telefono:"",
    });

const handleChange = (e) => {
    const formId = {
        formNombre: "nombre",
        formCorreo:"correo",
        formEdad:"edad",
        formCargo:"cargo",
        formTelefono:"telefono",

    };
    const formClone = formId [e.target.id];
    if (formClone) {
        setFormData({...formData,[formClone]: e.target.value});

    }
};

const validateData = (e) => {
    e.preventDefault();

const regexCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regexTelef = /^[0-9]{9}$/;

if (
    formData.nombre.trim() === "" ||
    formData.correo === "" ||
    formData.edad ==="" ||
    formData.cargo.trim() === "" ||
    formData.telefono === ""

)

setAlert ({
    error: true,
     msg: "Completa todos los campos!",
    color:"danger",
});

else if (!regexCorreo.test(formData.correo)){
   setAlert ({
       error: true,
        msg: "Email es invalido",
        color :"danger",
    }); 

} else if (!regexTelef.test (formData.telefono)){
    setAlert({
        error: true,
        msg: "Telefono invalido",
        color: "success",
    })


} else {
    setAlert ({
        error: false,
        msg:"Colaborador agregado!",
        color:"success",

    });


const newId = data.length
? parseInt (data[data.length - 1].id) + 1
: "1";

setData ([...data,{ ...formData, id: newId}]);
setFilteredData([...data, {...formData, id: newId}]);

setFormData({
    nombre: "",
    correo:"",
    edad:"",
    cargo:"",
    telefono:"",
});
}

};

return (
    <>
<form className="collaboratorsForm" onSubmit={validateData}>
                <h3 className="mb-3">Agregar colaborador</h3>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formNombre"
                        placeholder="Nombre del colaborador"
                        onChange={handleChange}
                        value={formData.nombre}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="correo"
                        id="formCorreo"
                        placeholder="Email del colaborador"
                        onChange={handleChange}
                        value={formData.correo}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        id="formEdad"
                        placeholder="Edad del colaborador"
                        onChange={handleChange}
                        value={formData.edad}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formCargo"
                        placeholder="Cargo del colaborador"
                        onChange={handleChange}
                        value={formData.cargo}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formTelefono"
                        placeholder="Teléfono del colaborador"
                        onChange={handleChange}
                        value={formData.telefono}
                    />
                </div>
                <Button
                    variant="warning"
                    size="lg"
                    type="submit"
                    className="m-2 fw-bold submitBtn">
                   Agregar colaborador
                </Button>
            </form>

    </>
)

};

export default Formulario;