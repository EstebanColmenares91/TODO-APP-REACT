import { React } from "react";
import './ToDoList.css'

function ToDoList(props){
    return(
        <section className="section-list">
            <ul className="list">
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList};
