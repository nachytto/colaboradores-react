import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formulario } from './components/Formulario';
import { Alert } from './components/Alert';
import Listado from './components/Listado';
import Buscador from './components/Buscador'; 
import { BaseColaboradores } from "./components/BaseColaboradores";

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores);
  const handleAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    const colaboradoresFiltradosActualizados = [...colaboradores, nuevoColaborador];
    setColaboradoresFiltrados(colaboradoresFiltradosActualizados);
  };
  return (
    <main>
      <div className='contenedor-agregar'>
        <Formulario handleAlert={handleAlert} agregarColaborador={agregarColaborador} /> 
        <Alert alertMessage={alertMessage} alertType={alertType}/>
      </div>
      <h1>Lista de Colaboradores</h1>
      <Buscador colaboradores={colaboradores} setColaboradoresFiltrados={setColaboradoresFiltrados} />
      <Listado colaboradores={colaboradoresFiltrados} />
    </main>
  );
}
export default App;

