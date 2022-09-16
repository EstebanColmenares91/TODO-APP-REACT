import '../css/App.css';

import React from "react";
import { useState } from 'react';
import { AppUI } from "./AppUI"

/* const todosArray = [
  {text:'Tomar el curso de intro a react', completed:true},
  {text:'Agregar Fecha al ToDo', completed:true},
  {text:'Agregar boton de modo oscuro', completed:false},
  {text:'Hacer un banner para el todo', completed:false},
  {text:'Llorar con React', completed:true},
];
 */

function useLocalStorage(itemName, initialValue) {
    // Estado inicial de los Items
    const [items, setItems] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
        setLoading(false)
      } catch (error) {
        setError(error)
      }    
    }, 1000)
  })

  // Guardando Items
  const saveItems = (newItems) => {
    try {
      const ItemsStringified = JSON.stringify(newItems);
      localStorage.setItem(itemName, ItemsStringified);
      setItems(newItems)
    } catch (error) {
      setError(error)
    }
  }

  return {
    items,
    saveItems,
    loading,
    error,
  };
}


const App = () => {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  /* 
    Eliminando TODOs
    Podemos hacer algo parecido a la función de completar, pero ahora, en lugar de cambiar si está completada o no, solamente la eliminaremos de nuestros TODOs con el método splice, y también regresaremos un nuevo arreglo con los TODOs actualizados.  
  */

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchStateValue={searchStateValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}


// Exportando el componente para luego ser utilizado en index.js
export { App }
