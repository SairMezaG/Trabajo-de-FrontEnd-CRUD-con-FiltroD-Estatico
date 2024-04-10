import React, { useState } from 'react';

const FormularioEditar = ({ persona, onGuardar }) => {
  const [nombre, setNombre] = useState(persona.nombre);
  const [rol, setRol] = useState(persona.rol);

  const handleGuardar = () => {
    onGuardar(persona.id, nombre, rol);
  };

  return (
    <div>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label>Rol:</label>
      <input
        type="text"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      />
      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );
};

export default FormularioEditar;
