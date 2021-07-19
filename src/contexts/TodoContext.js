import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { saveTodoList, getTodoList } from '../persistToLocalStorage';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    // filter -> 'all' for all, 'completed' for completed tasks, 'active' for incomplete tasks
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState(JSON.parse(getTodoList()) || []);

    useEffect(() => {
        saveTodoList(todos);
    }, [todos]);

    const filterMap = {
        all: t => t,
        active: t => !t.completed,
        completed: t => t.completed
    }

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

    const changeFilter = (applied) => {
        if(applied) 
            setFilter(applied);
    }

    const clearFinishedItems = () => {
        setTodos(todos => todos.filter(todo => !todo.completed));
    }

    const reorderTodo = (startIndex, destinationIndex, id) => {
        // console.log(startIndex, destinationIndex, id);
        let reorderTodo = todos.find(todo => todo.id === id);
        let newTodos = Array.from(todos);

        let startId = newTodos.filter(filterMap[filter])[startIndex].id;
        let destinationId = newTodos.filter(filterMap[filter])[destinationIndex].id;

        let actualStartIndex = newTodos.findIndex(todo => todo.id === startId);
        let actualDestinationIndex = newTodos.findIndex(todo => todo.id === destinationId);

        newTodos.splice(actualStartIndex, 1);
        newTodos.splice(actualDestinationIndex, 0, reorderTodo);
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{ 
            todos: todos.filter(filterMap[filter]),
            leftItems: todos.filter(filterMap.active).length,
            addTodoListItem,
            removeTodo,
            toggleTodo,
            filter,
            changeFilter,
            clearFinishedItems,
            reorderTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}