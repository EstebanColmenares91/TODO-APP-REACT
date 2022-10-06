import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./localStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        // const [todos, setTodos] = useState([])
        items: todos,
        saveItems: saveTodos,
        loading, //pantalla de carga
        error, //pantalla de error
    } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = useState(false)

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
    if (searchStateValue.length < 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchStateValue.toLowerCase();

            return todoText.includes(searchText);
        })
    }


    const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos)
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchStateValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            addTodos,
            openModal,
            setOpenModal,
        }}>

            {props.children}
        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider }