import { React } from "react";
import "./item.css";

function ToDoItem(props) {
    const onCompleted = () => { alert(`Completaste la tarea: ${props.text}`) }
    const onDeleted = () => { alert(`Borraste la tarea: ${props.text}`) }

    return (
        <li className="task" >
            <span
                onClick={onCompleted}
                className={`Icon ${props.completed && 'Icon-check--active'}`}
            >
                C
            </span>
            {/* SI RECIBE UNA PROPIEDAD LLAMADA completed Y ES IGUAL A TRUE AGREGARÁ UN NUEVO ESTILO */}
            <p
                onClick={onDeleted}
                className={`task__name ${props.completed && 'task-p--complete'}`}
            >
                {props.text}
            </p>

            <span
                onClick={onDeleted}
                className="Icon Icon-delete"
            >
                X
            </span>
        </li>
    );
}

export { ToDoItem };