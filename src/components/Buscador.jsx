import React, { useState } from 'react';
export const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [busqueda, setBusqueda] = useState('');
  const handleBusqueda = (event) => {
    const valor = event.target.value.toLowerCase();
    setBusqueda(valor);
    const colaboradoresFiltrados = colaboradores.filter(colaborador => {
      return colaborador.nombre.toLowerCase().includes(valor);
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador"
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
};

export default Buscador;
