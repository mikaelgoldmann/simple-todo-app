import React from "react"

class TodoList extends React.Component {
    render() {
        const {todos} = this.props
        return (
            <React.Fragment>
                {
                    todos.map(todo => <li>{todo.title}</li>)
                }
            </React.Fragment>
        )
    }
}

export default TodoList
