import React from "react"

const TodoItem = ({todo, completedChange, delTodo}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed}
                   onChange={() => completedChange(todo.id)}/>
            {todo.title}
            <button onClick={() => delTodo(todo.id)}>Delete</button>
        </li>
    )
};

export default TodoItem
