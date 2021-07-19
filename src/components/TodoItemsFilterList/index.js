import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { ItemsFilter, ItemsFilterList, FilterContainer } from '../shared';

const filters = [
    { filterType: 'all', label: 'All' },
    { filterType: 'active', label: 'Active' },
    { filterType: 'completed', label: 'Completed' }
]

const TodoItemsFilterList = ({ mobileOnly, container }) => {
    const { filter, changeFilter } = useContext(TodoContext);

    if(container) {
        return (
            <FilterContainer>
                <ItemsFilterList mobileOnly={mobileOnly}>
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
            </FilterContainer>
        )
    }

    return (
        <ItemsFilterList mobileOnly={mobileOnly}>
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
    );
}
 
export default TodoItemsFilterList;