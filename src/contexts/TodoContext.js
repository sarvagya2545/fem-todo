import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    const addTodoListItem = (todo) => {
        let newId = uuidv4();

        let todoObj = {
            id: newId,
            todo: todo,
            completed: false
        }

        setTodos(todos => [ ...todos, todoObj ]);
    }

    const completeTodoListItem = (todoId) => {
        setTodos(todos => todos.map(todo => {
            if(todo.id !== todoId) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }));
    }

    const removeTodoListItem = (todoId) => {
        setTodos(todos => todos.filter(todo => todo.id !== todoId));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodoListItem, removeTodoListItem, completeTodoListItem }}>
            {children}
        </TodoContext.Provider>
    );
}