import React from 'react';
import "../Estilos/Filtro.css";

const Filtro = ({ filtro, onFiltroChange }) => {
  return (
    <>
      <input className='filtro'
        type="text"
        placeholder="Filtrar por la inicial del nombre"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </>
  );
}

export default Filtro;
