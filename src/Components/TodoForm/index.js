import { React, useState } from 'react';
import { useContext } from "react"
import { TodoContext } from '../context/ToDoContext';
import "./TodoForm.css"

function ToDoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')

    const {
        addTodos,
        setOpenModal
    } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false)
        // resetear nuestro formulario
        setNewTodoValue('')
    }


    return (
        <form className='form' onSubmit={onSubmit}>
            <label className='label'>Crea un ToDO</label>
            <textarea
                className='text'
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribe una tarea por hacer'
            />

            <div>
                <button className='button button--cancel' onClick={onCancel} type="button">Cancelar</button>
                <button className='button button--add' type="submit">Añadir</button>
            </div>
        </form>
    )
}

export { ToDoForm }