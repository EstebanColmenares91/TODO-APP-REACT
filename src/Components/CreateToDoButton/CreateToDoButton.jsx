import { React } from "react";
import './CreateToDoButton.css'

function CreateToDoButton() {
    const msg = () => {alert("Crear una nueva tarea")}
    return(
        <button onClick={msg} className="createToDo">+</button>
    )
}

export { CreateToDoButton }