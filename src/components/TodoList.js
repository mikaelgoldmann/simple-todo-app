import React from "react"
import TodoItem from "./TodoItem";

const TodoList = ({todos, completedChange}) =>
    (
        <React.Fragment>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} completedChange={() => completedChange(todo.id)}/>)
            }
        </React.Fragment>
    );

export default TodoList
