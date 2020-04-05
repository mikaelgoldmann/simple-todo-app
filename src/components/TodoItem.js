import React from "react"

const TodoItem = ({todo, completedChange}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={completedChange} />
            {todo.title}
        </li>
    )
};

export default TodoItem
