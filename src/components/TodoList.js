import React from "react"
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render() {
        const {todos} = this.props;
        return (
            <React.Fragment>
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
                }
            </React.Fragment>
        )
    }
}

export default TodoList
