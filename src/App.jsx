// import logo from './logo.svg';
import './css/App.css';

import React from "react";
import { useState } from 'react';
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

const todosArray = [
  {text:'Tomar el curso de intro a react', completed:true},
  {text:'Agregar Fecha al ToDo', completed:true},
  {text:'Agregar boton de modo oscuro', completed:false},
  {text:'Hacer un banner para el todo', completed:false},
  {text:'Llorar con React', completed:true}
];

const App = () => {
  // Estado inicial de los TODOS
  const [todos, setTodos] = useState(todosArray);
  //Cantidad de todos completados 
  // filtrar cada todo cuando este sea verdadero (true)
  const completedTodos = todos.filter((todo) => todo.completed).length;
  // Cantidad total de TODOS
  const totalTodos = todos.length;

  // Estado de la barra de busqueda
  const [searchStateValue, setSearchValue] = useState('');

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  // Si la longitud de searchStateValue es cero se muestran todos los TO DO'S
  if (!searchStateValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchStateValue.toLowerCase();
      
      return todoText.includes(searchText);
    })
  }

  /* 
    Completando TODOs
    Creamos la función completeTodo, que recibirá el texto de nuestro TODO, ubicamos el TODO en nuestro arreglo, cambiamos el valor de la propiedad completed de nuestro TODO y muy importante actualizar nuestro estado, para que React pueda re-renderizar nuestros TODOs con los nuevos datos.
  */

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    } */
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }


  /* 
    Eliminando TODOs
    Podemos hacer algo parecido a la función de completar, pero ahora, en lugar de cambiar si está completada o no, solamente la eliminaremos de nuestros TODOs con el método splice, y también regresaremos un nuevo arreglo con los TODOs actualizados.  
  */

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    } */
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return(
    <React.Fragment>
      <ToDoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />

      <ToDoSearch
        searchValue = { searchStateValue }
        setSearchValue = { setSearchValue }
      />

      <ToDoList>
        {/* Recorrer a los todos buscados por la barra de busqueda */}
        {searchedTodos.map((task) => (
          /* Para una lista debe llevar la propiedad key más un identificador para evitar que se rompa al renderizar */
          <ToDoItem 
            key={task.text}
            text = {task.text}
            completed = {task.completed} 
            onComplete ={ () => completeTodos(task.text) }
            onDelete ={ () => deleteTodos(task.text) }
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>
      
    </React.Fragment>

  );
}


// Exportando el componente para luego ser utilizado en index.js
export { App }
