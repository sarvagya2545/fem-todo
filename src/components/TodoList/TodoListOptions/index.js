import React from 'react';
import { ClearCompleted, ItemsFilter, ItemsFilterList, ItemsLeft, TodoOptionsContainer } from './TodoListOptions.elements';

const TodoOptions = () => {
    return (
        <TodoOptionsContainer justifyContent="space-between" alignItems="center">
            <ItemsLeft>5 items left</ItemsLeft>
            <ItemsFilterList>
                <ItemsFilter selected>All</ItemsFilter>
                <ItemsFilter>Active</ItemsFilter>
                <ItemsFilter>Completed</ItemsFilter>
            </ItemsFilterList>
            <ClearCompleted>Clear Completed</ClearCompleted>
        </TodoOptionsContainer>
    );
}
 
export default TodoOptions;