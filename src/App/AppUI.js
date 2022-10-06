import React from 'react';
import { TodoContext } from '../Components/context/ToDoContext';
import { ToDoCounter } from "../Components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../Components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../Components/ToDoList/ToDoList";
import { ToDoItem } from "../Components/ToDoItem/ToDoItem";
import { ToDoForm } from "../Components/TodoForm"
import { CreateToDoButton } from "../Components/CreateToDoButton/CreateToDoButton";
import { Modal } from "../Modal"

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)


    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>
                {loading && <p>Estamos cargando. Awanta</p>}
                {error && <p>Estamos cargando. HUYE</p>}
                {(!loading && !searchedTodos.length) && <p>CREA UN TODO</p>}
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

            {/* SI EL MODAL ESTÁ ABIERTO ENTONCES MOSTRARÁ LAS TAREAS */}
            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export { AppUI }