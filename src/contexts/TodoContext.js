import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: 'Task 1',
            completed: false
        },
        {
            id: 2,
            todo: 'Task 2',
            completed: true
        },
        {
            id: 3,
            todo: 'Task 3',
            completed: false
        },
        {
            id: 4,
            todo: 'Task 4',
            completed: true
        },
        {
            id: 5,
            todo: 'Task 5',
            completed: false
        },
    ]);

    const addTodoListItem = (todo) => {
        let newId = uuidv4();

        let todoObj = {
            id: newId,
            todo: todo,
            completed: false
        }

        setTodos(todos => [ todoObj, ...todos ]);
    }

    const toggleTodo = (todoId) => {
        setTodos(todos => todos.map(todo => {
            if(todo.id !== todoId) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }));
    }

    const removeTodo = (todoId) => {
        setTodos(todos => todos.filter(todo => todo.id !== todoId));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodoListItem, removeTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
}