import React, {useEffect, useState} from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:5000';

const TodoContainer = props => {
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);

    const fetchData = () => {
        axios.get(`${baseUrl}/todo`)
            .then(response =>
                      setTodos(response.data)
            );
    };

    useEffect(fetchData, []);

    const toggleComplete = i => {
        const found = todos.find(todo => todo['id'] === i);
        if (found) {
            const newCompleted = !found.completed;
            axios.post(`${baseUrl}/todo/${i}`, {completed: newCompleted})
                .then(reply => {
                          const newTodos = todos.map(todo => {
                              if (todo.id === i) {
                                  todo.completed = !todo.completed;
                                  setShow(!show)
                              }
                              return todo;
                          });
                          setTodos(newTodos);
                      }
                )
                .catch(reason => alert("Failed to update complete: " + reason))
        } else {
            alert("Could not find todo with id " + i);
        }
    };

    const delTodo = i =>
        axios.delete(`${baseUrl}/todo/${i}`)
            .then(response =>
                      setTodos([...todos.filter(todo => todo.id !== i)]))
            .catch(reason =>
                       alert("Failed to delete item " + reason));

    const addTodo = title =>
        axios.post(`${baseUrl}/todo`, {title: title, completed: false})
            .then(response => setTodos([...todos, response.data]));

    return (
        <div className="todo-container">
            <Header headerSpan={show}/>
            <InputTodo addTodo={addTodo}/>
            <TodoList todos={todos}
                      completedChange={toggleComplete}
                      delTodo={delTodo}/>
        </div>);
};

export default TodoContainer
