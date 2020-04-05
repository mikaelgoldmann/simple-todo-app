import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
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

    delTodo = i =>
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== i)]});

    addTodo = title => this.setState(
        {todos: [...this.state.todos, {id: uuidv4(), title: title, completed: false}]}
    );

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <Header/>
                <InputTodo addTodo={this.addTodo}/>
                <TodoList todos={todos}
                          completedChange={this.toggleComplete}
                          delTodo={this.delTodo}/>
            </div>
        )
    }
}

export default TodoContainer
