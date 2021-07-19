import React, { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { StyledCheckBox } from '../../shared';
import { TodoListItemContainer, TodoRemoveButton, TodoText } from './TodoListItem.elements';
import closeBtnIcon from '/images/icon-cross.svg';
import { Draggable } from "react-beautiful-dnd";

const TodoListItem = ({ completed, text, id, index }) => {
    const { toggleTodo, removeTodo } = useContext(TodoContext);
    const toggleTodoListItem = () => toggleTodo(id);
    const deleteTodoListItem = () => removeTodo(id);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <TodoListItemContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <StyledCheckBox checked={completed} onChange={toggleTodoListItem}/>
                    <TodoText completed={completed}>
                        <span>{text}</span>
                    </TodoText>
                    <TodoRemoveButton onClick={deleteTodoListItem}>
                        <img src={closeBtnIcon} alt="delete" />
                    </TodoRemoveButton>
                </TodoListItemContainer>
            )}
        </Draggable>
    );
}
 
export default TodoListItem;