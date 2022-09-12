import { React } from "react";
import "./item.css";

function ToDoItem(props) {
    /* const onComplete = () => { alert(`Completaste la tarea: ${props.text}`) }
    const onDelete = () => { alert(`Borraste la tarea: ${props.text}`) }
 */
    return (
        <li className="task" >
            <span
                className={`Icon ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                C
            </span>
            {/* SI RECIBE UNA PROPIEDAD LLAMADA completed Y ES IGUAL A TRUE AGREGARÁ UN NUEVO ESTILO */}
            <p
                className={`task__name ${props.completed && 'task-p--complete'}`}
            >
                {props.text}
            </p>

            <span
                onClick={props.onDelete}
                className="Icon Icon-delete"
            >
                X
            </span>
        </li>
    );
}

export { ToDoItem };