import { React } from "react";
import './ToDoCounter.css'

function ToDoCounter(params) {
    return(
        <div className="counter-container">
            <section className="name-Date">
                <h2>TODOAPP</h2>    
                <p>Fecha: 7/09/2022</p>
            </section>
            <section className="">
                <h2 className="title">You have completed 2/3 ToDo's</h2>
            </section>
        </div>
    )
}

export { ToDoCounter }