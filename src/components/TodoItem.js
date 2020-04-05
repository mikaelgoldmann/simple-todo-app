import React from "react"

const TodoItem = ({todo}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed}/>
            {todo.title}
        </li>
    )
};

export default TodoItem
