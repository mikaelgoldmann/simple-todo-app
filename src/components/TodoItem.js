import React, {useEffect} from "react"

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
};

const TodoItem = ({todo, completedChange, delTodo}) => {
    const {id, title, completed} = todo;

    useEffect(() => {
        return () => {
            alert("Item about to be deleted!")
        }
    }, []);

    return (
        <li className="todo-item">
            <input type="checkbox" checked={completed}
                   onChange={() => completedChange(id)}/>
            <span style={completed ? completedStyle : null}>{title}</span>
            <button onClick={() => delTodo(id)}>Delete</button>
        </li>
    );
};

export default TodoItem
