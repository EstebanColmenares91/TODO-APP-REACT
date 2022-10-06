import { React } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";
import './ToDoCounter.css'

const date = new Date();
const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]
// Destructurando los props que pasamos al componente

function ToDoCounter() {

    const { totalTodos, completedTodos } = useContext(TodoContext);

    return(
        <div className="counter-container">
            <section className="name-Date">
                <h2>TODOAPP</h2>    
                <p>Fecha: {day}/{month + 1}/{year}</p> 
            </section>
            <section className="">
                <h2 className="title">You have already completed { completedTodos } ToDo of { totalTodos }</h2>
            </section>
        </div>
    )
}

export { ToDoCounter }