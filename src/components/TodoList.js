import React from "react"
import TodoItem from "./TodoItem";

const TodoList = ({todos, completedChange, delTodo}) =>
    (
        <React.Fragment>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}
                                            completedChange={completedChange}
                                            delTodo={delTodo}/>)
            }
        </React.Fragment>
    );

export default TodoList
