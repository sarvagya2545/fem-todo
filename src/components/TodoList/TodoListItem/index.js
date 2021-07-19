import React, { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { StyledCheckBox } from '../../shared';
import { TodoListItemContainer, TodoRemoveButton, TodoText } from './TodoListItem.elements';
import closeBtnIcon from '/images/icon-cross.svg';

const TodoListItem = ({ completed, text, id }) => {
    const { toggleTodo, removeTodo } = useContext(TodoContext);
    const toggleTodoListItem = () => toggleTodo(id);
    const deleteTodoListItem = () => removeTodo(id);

    return (
        <TodoListItemContainer>
            <StyledCheckBox checked={completed} onChange={toggleTodoListItem}/>
            <TodoText completed={completed}>
                <span>{text}</span>
            </TodoText>
            <TodoRemoveButton onClick={deleteTodoListItem}>
                <img src={closeBtnIcon} alt="delete" />
            </TodoRemoveButton>
        </TodoListItemContainer>
    );
}
 
export default TodoListItem;