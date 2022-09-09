// import logo from './logo.svg';
import './css/App.css';

import React from "react";
import { ToDoCounter } from "./Components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./Components/ToDoSearch/ToDoSearch";
import { ToDoList } from "./Components/ToDoList/ToDoList";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";
import { CreateToDoButton } from "./Components/CreateToDoButton/CreateToDoButton";

/* 
  1.Esto es un componente hecho con un arrow function
  2.También se pueden crear con sintaxis de function de toda la vida
  3.Con clases también se pueden realizar por Herencia con extends
*/

// Por convención el nombre de los componentes debe seguir con el estandar PascalCase
/* Propiedadess nos permite reutilizar código dentro de un elemento o componente */

// Componente = pedazo de código reutilizable de la interfaz, recibe propiedades y retornan elementos.

/* const App = (props) => {
  Debe tener un 'return' para que la función del componente tenga un valor
  return (
    <div className="App">
      <header className="App-header">
        Asignar una propiedad a un elemento del componente
        {props.children}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React with Platzi {props.prop.saludo}
        </a>
      </header>
    </div>
  );
}
 */

const todos = [
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Agregar Fecha al ToDo', completed:false},
  {text:'Agregar boton de modo oscuro', completed:false},
  {text:'Hacer un banner para el todo', completed:false},
  {text:'Llorar con React', completed:true}
];

const App = (props) => {
  return(
    <React.Fragment>
      <ToDoCounter/>

      <ToDoSearch/>

      <ToDoList>
        {todos.map((task) => (
          /* Para una lista debe llevar la propiedad key más un identificador para evitar que se rompa al renderizar */
          <ToDoItem 
            key={task.text}
            text = {task.text}
            completed = {task.completed} 
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>
      
    </React.Fragment>

  );
}


// Exportando el componente para luego ser utilizado en index.js
export { App }
