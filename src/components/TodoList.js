import React from "react"
import TodoItem from "./TodoItem";

const TodoList = ({todos}) =>
    (
        <React.Fragment>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            }
        </React.Fragment>
    );

export default TodoList
