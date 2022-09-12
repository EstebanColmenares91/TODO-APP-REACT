import { React } from "react";
import { useState } from "react";
import './ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue }) {
    // const [searchState, setSearchValue] = useState('');

    const inputValue = (event) => {
        /* console.log(event.target.value); */
        setSearchValue(event.target.value);
    }

    return [
        <input
            className="search"
            placeholder="Buscar ToDo"
            value={searchValue}
            onChange={inputValue}
        />,
    ];
}

export { ToDoSearch };