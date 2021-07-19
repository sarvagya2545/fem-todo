import React, { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { ClearCompleted, ItemsLeft, TodoOptionsContainer } from './TodoListOptions.elements';
import TodoItemsFilterList from '../../TodoItemsFilterList';

const TodoOptions = () => {
    const { leftItems, clearFinishedItems } = useContext(TodoContext);
    return (
        <TodoOptionsContainer justifyContent="space-between" alignItems="center">
            <ItemsLeft>{leftItems} items left</ItemsLeft>
            <TodoItemsFilterList/>
            <ClearCompleted onClick={clearFinishedItems}>Clear Completed</ClearCompleted>
        </TodoOptionsContainer>
    );
}
 
export default TodoOptions;