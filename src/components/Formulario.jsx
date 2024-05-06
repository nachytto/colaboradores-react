import React, { useState } from "react";
export const Formulario = ({ handleAlert, agregarColaborador }) => {
  const [values, setValues] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleForm = (event) => {
    event.preventDefault();

    if (!values.nombre || !values.correo || !values.edad || !values.cargo || !values.telefono) {
      handleAlert("¡Completa todos los campos!", "danger");
    } else {
      agregarColaborador(values);
      handleAlert("Colaborador agregado!", "success");
      setValues({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
      });
    }
  };
  return (
    <div className="contenedor-formulario">
      <h1>Agregar Colaborador</h1>
      <form onSubmit={handleForm}>
        <input
            type="text"
            name="nombre"
            value={values.nombre}
            placeholder="Nombre del colaborador"
            onChange={inputChange}
          />
          {/* Correo del colaborador */}
          <input
            type="text"
            name="correo"
            value={values.correo}
            placeholder="Correo del colaborador"
            onChange={inputChange}
          />
          {/* Edad del colaborador */}
          <input
            type="number"
            name="edad"
            value={values.edad}
            placeholder="Edad del colaborador"
            onChange={inputChange}
          />
          {/* Cargo del colaborador */}
          <input
            type="text"
            name="cargo"
            value={values.cargo}
            placeholder="Cargo del colaborador"
            onChange={inputChange}
          />
          {/* Teléfono del colaborador */}
          <input
            type="number"
            name="telefono"
            value={values.telefono}
            placeholder="Teléfono del colaborador"
            onChange={inputChange}
          />
        {/* Boton para enviar el formulario */}
        <button type="submit">Agregar colaborador</button>
      </form>
    </div>
  );
};
