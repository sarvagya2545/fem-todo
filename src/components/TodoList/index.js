import React from 'react';
import { TodoListContainer } from './TodoList.elements';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <TodoListContainer>
            <TodoListItem completed={true}>Todo List Item</TodoListItem>
            <TodoListItem>Todo List Item</TodoListItem>
            <TodoListItem>Todo List Item</TodoListItem>
            <TodoListItem>Todo List Item</TodoListItem>
            <TodoListItem>Todo List Item</TodoListItem>
        </TodoListContainer>
    );
}
 
export default TodoList;