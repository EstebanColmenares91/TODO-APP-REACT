import '../css/App.css';

import React from "react";
import { TodoProvider } from "../Components/context/ToDoContext";
import { AppUI } from "./AppUI"

/* const todosArray = [
  {text:'Tomar el curso de intro a react', completed:true},
  {text:'Agregar Fecha al ToDo', completed:true},
  {text:'Agregar boton de modo oscuro', completed:false},
  {text:'Hacer un banner para el todo', completed:false},
  {text:'Llorar con React', completed:true},
];
 */

const App = () => {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}


// Exportando el componente para luego ser utilizado en index.js
export { App }
