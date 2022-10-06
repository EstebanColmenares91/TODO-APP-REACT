import { React } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";
import './ToDoSearch.css'

function ToDoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext)

    const inputValue = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            className="search"
            placeholder="Buscar ToDo"
            value={searchValue}
            onChange={inputValue}
        />
    );
}

export { ToDoSearch };