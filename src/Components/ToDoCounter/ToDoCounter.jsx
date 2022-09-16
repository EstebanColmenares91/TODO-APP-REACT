import { React } from "react";
import './ToDoCounter.css'

const date = new Date;
const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]
// Destructurando los props que pasamos al componente

function ToDoCounter({ total, completed }) {
    return(
        <div className="counter-container">
            <section className="name-Date">
                <h2>TODOAPP</h2>    
                <p>Fecha: {day}/{month + 1}/{year}</p> 
            </section>
            <section className="">
                <h2 className="title">You have already completed { completed } ToDo of { total }</h2>
            </section>
        </div>
    )
}

export { ToDoCounter }