import React from "react"

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
};

const TodoItem = ({todo, completedChange, delTodo}) => {
    return (
        <li className="todo-item">
            <input type="checkbox" checked={todo.completed}
                   onChange={() => completedChange(todo.id)}/>
            <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
            <button onClick={() => delTodo(todo.id)}>Delete</button>
        </li>
    )
};

export default TodoItem
