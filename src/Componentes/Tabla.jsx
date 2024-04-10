import React, { useState } from 'react';
import "../Estilos/Tabla.css";
import BotonEliminar from './BotonEliminar';
import BotonEditar from './BotonEditar';
import FormularioEdicion from '../Componentes/FormularioEditar';

const Tabla = ({ datos, eliminarRegistro, editarRegistro }) => {
  const [editandoId, setEditandoId] = useState(null);

  const handleGuardarEdicion = (id, nombre, rol) => {
    editarRegistro(id, nombre, rol);
    setEditandoId(null);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>DESCRIPCIÓN</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((persona) => (
          <tr key={persona.id}>
            <td className='id'>{persona.id}</td>
            <td className='nombre'>{persona.nombre}</td>
            <td className='rol'>{persona.rol}</td>
            <td>
              {editandoId === persona.id ? (
                <FormularioEdicion
                  persona={persona}
                  onGuardar={handleGuardarEdicion}
                />
              ) : (
                <>
                  <BotonEditar onClick={() => setEditandoId(persona.id)} />
                  <BotonEliminar onClick={() => eliminarRegistro(persona.id)} />
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;

