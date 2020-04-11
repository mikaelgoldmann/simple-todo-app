import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:5000';

class TodoContainer extends React.Component {
    state = {
        todos: []
    };

    toggleComplete = i => {
        const found = this.state.todos.find(todo => todo['id'] === i);
        if (found) {
            const newCompleted = !found.completed;
            axios.post(`${baseUrl}/todo/${i}`, {completed: newCompleted})
                .then(reply => {
                          const newTodos = this.state.todos.map(todo => {
                              if (todo.id === i) {
                                  todo.completed = !todo.completed;
                              }
                              return todo;
                          });
                          this.setState({todos: newTodos});
                      }
                )
                .catch(reason => alert("Failed to update complete: " + reason))
        } else {
            alert("Could not find todo with id " + i);
        }
    };

    delTodo = i =>
        axios.delete(`${baseUrl}/todo/${i}`)
            .then(response =>
                      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== i)]}))
            .catch(reason =>
                       alert("Failed to delete item " + reason));

    addTodo = title =>
        axios.post(`${baseUrl}/todo`, {title: title, completed: false})
            .then(response => this.setState({
                                                todos: [...this.state.todos,
                                                        response.data]
                                            }
            ));

    componentDidMount() {
        axios.get(`${baseUrl}/todo`)
            .then(response =>
                      this.setState({todos: response.data})
            );
    }

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
