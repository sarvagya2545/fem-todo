import React, { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { ClearCompleted, ItemsFilter, ItemsFilterList, ItemsLeft, TodoOptionsContainer } from './TodoListOptions.elements';

const filters = [
    { filterType: 'all', label: 'All' },
    { filterType: 'active', label: 'Active' },
    { filterType: 'completed', label: 'Completed' }
]

const TodoOptions = () => {
    const { leftItems, filter, changeFilter, clearFinishedItems } = useContext(TodoContext);
    return (
        <TodoOptionsContainer justifyContent="space-between" alignItems="center">
            <ItemsLeft>{leftItems} items left</ItemsLeft>
            <ItemsFilterList>
                {filters.map(({ filterType, label }, index) => 
                    <ItemsFilter
                        key={index}
                        selected={filter === filterType} 
                        onClick={() => changeFilter(filterType)}
                    >
                        {label}
                    </ItemsFilter>
                )}
            </ItemsFilterList>
            <ClearCompleted onClick={clearFinishedItems}>Clear Completed</ClearCompleted>
        </TodoOptionsContainer>
    );
}
 
export default TodoOptions;