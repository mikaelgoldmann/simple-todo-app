import React, {Component} from "react"

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
};

class TodoItem extends Component {
    componentWillUnmount() {
        alert("Item about to be deleted!");
    }

    render() {
        const {todo, completedChange, delTodo} = this.props;
        const {id, title, completed} = todo;
        return (
            <li className="todo-item">
                <input type="checkbox" checked={completed}
                       onChange={() => completedChange(id)}/>
                <span style={completed ? completedStyle : null}>{title}</span>
                <button onClick={() => delTodo(id)}>Delete</button>
            </li>
        );
    };
}

export default TodoItem
