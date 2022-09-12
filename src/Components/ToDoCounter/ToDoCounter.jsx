import { React } from "react";
import './ToDoCounter.css'

// Destructurando los props que pasamos al componente
function ToDoCounter({ total, completed }) {
    return(
        <div className="counter-container">
            <section className="name-Date">
                <h2>TODOAPP</h2>    
                <p>Fecha: 7/09/2022</p>
            </section>
            <section className="">
                <h2 className="title">You have completed { completed } ToDo's of { total }</h2>
            </section>
        </div>
    )
}

export { ToDoCounter }