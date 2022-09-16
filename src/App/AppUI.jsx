import React from 'react';
import { ToDoCounter } from "../Components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../Components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../Components/ToDoList/ToDoList";
import { ToDoItem } from "../Components/ToDoItem/ToDoItem";
import { CreateToDoButton } from "../Components/CreateToDoButton/CreateToDoButton";


function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchStateValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}) {
    return (
        <React.Fragment>
            <ToDoCounter
                total={totalTodos}
                completed={completedTodos}
            />

            <ToDoSearch
                searchValue={searchStateValue}
                setSearchValue={setSearchValue}
            />

            <ToDoList>
                {loading && <p>Estamos cargando. Awanta</p>}
                {error && <p>Estamos cargando. HUYE</p>}
                {(!loading && !searchedTodos.length) && <p>CREA EL PRIMER TODO</p>}
                {/* Recorrer a los todos buscados por la barra de busqueda */}
                {searchedTodos.map((task) => (
                    /* Para una lista debe llevar la propiedad key más un identificador para evitar que se rompa al renderizar */
                    <ToDoItem
                        key={task.text}
                        text={task.text}
                        completed={task.completed}
                        onComplete={() => completeTodos(task.text)}
                        onDelete={() => deleteTodos(task.text)}
                    />
                ))}
            </ToDoList>

            <CreateToDoButton />
        </React.Fragment>
    )
}

export { AppUI }