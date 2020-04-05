import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    toggleComplete = i => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === i) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: newTodos});
    };

    delTodo = i => alert("Delete " + i);

    render() {
        const {todos} = this.state;
        return (
            <React.Fragment>
                <Header/>
                <TodoList todos={todos}
                          completedChange={this.toggleComplete}
                          delTodo={this.delTodo}/>
            </React.Fragment>
        )
    }
}

export default TodoContainer
