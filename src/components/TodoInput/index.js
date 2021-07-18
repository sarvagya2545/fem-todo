import React from 'react';
import { TodoInputContainer, TodoInputTextBox } from './TodoInput.elements';
import { StyledCheckBox } from '../shared';

const TodoForm = () => {
    return (
        <TodoInputContainer>
            <StyledCheckBox disabled checked={false}/>
            <TodoInputTextBox placeholder="Create a new todo..."/>
        </TodoInputContainer>
    );
}
 
export default TodoForm;