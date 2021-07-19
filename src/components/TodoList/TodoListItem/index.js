import React from 'react';
import { StyledCheckBox } from '../../shared';
import { TodoListItemContainer, TodoRemoveButton, TodoText } from './TodoListItem.elements';
import closeBtnIcon from '/images/icon-cross.svg';

const TodoListItem = ({ completed }) => {
    return (
        <TodoListItemContainer>
            <StyledCheckBox checked={completed}/>
            <TodoText completed={completed}>
                Todo List Item
            </TodoText>
            <TodoRemoveButton>
                <img src={closeBtnIcon} alt="delete" />
            </TodoRemoveButton>
        </TodoListItemContainer>
    );
}
 
export default TodoListItem;