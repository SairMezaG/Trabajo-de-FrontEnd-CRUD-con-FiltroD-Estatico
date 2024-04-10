import React, { useState } from 'react';
import Arreglo from './Componentes/Arreglo';

const datos = [
  { id: 1, nombre: "Sair Meza", rol: "Director" },
  { id: 2, nombre: "Alexander Meza", rol: "Instructor" },
  { id: 3, nombre: "Isabella Meza", rol: "Aprendiz SENA" },
  { id: 4, nombre: "Sandra Tovar", rol: "Instructora" },
  { id: 5, nombre: "Sergio Rodriguez", rol: "Aprendiz SENA" },
  { id: 6, nombre: "Viviana Muñoz", rol: "Aprendiz SENA" },
  { id: 7, nombre: "Camilo Santana", rol: "Aprendiz SENA" },
  { id: 8, nombre: "Libardo Perez", rol: "Aprendiz SENA" },
  { id: 9, nombre: "Fernando Guzman", rol: "Aprendiz SENA" },
  { id: 10, nombre: "Andrea Gomez", rol: "Instructor" },
  { id: 11, nombre: "Camila Ariztizabal", rol: "Aprendiz SENA" },
  { id: 12, nombre: "Dilan Gutierrez", rol: "Aprendiz SENA" },
  { id: 13, nombre: "Manuel Santos", rol: "Aprendiz SENA" },
  { id: 14, nombre: "Jose Herazo", rol: "Instructor" },
  { id: 15, nombre: "Santiago Alarcon", rol: "Aprendiz SENA" },
  { id: 16, nombre: "Maritza Benitez", rol: "Aprendiz SENA" },
  { id: 17, nombre: "Julio Bravo", rol: "Aprendiz SENA" },
  { id: 18, nombre: "Guillermo Pedrozo", rol: "Instructor" },
  { id: 19, nombre: "Alfredo Diaz", rol: "Aprendiz SENA" },
  { id: 20, nombre: "Camilo Guerrero", rol: "Aprendiz SENA" },
  
];

function App() {
  const [data, setData] = useState(datos);

  const eliminarRegistro = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  return (
    <div className="App">
      <Arreglo datos={data} eliminarRegistro={eliminarRegistro} />
    </div>
  );
}

export default App; 