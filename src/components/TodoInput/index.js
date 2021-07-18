import React, { useState } from 'react';
import { TodoInputContainer, TodoInputTextBox } from './TodoInput.elements';
import { StyledCheckBox } from '../shared';

const TodoForm = () => {

    const [todoValue, setTodoValue] = useState('');

    const onChange = e => setTodoValue(e.target.value);

    const addTodo = (e) => {
        e.preventDefault();
        if(!todoValue.trim()) {
            return alert('Please write todo item before submitting')
        }

        console.log(todoValue);
    }

    return (
        <TodoInputContainer onSubmit={addTodo}>
            <StyledCheckBox disabled checked={false}/>
            <TodoInputTextBox placeholder="Create a new todo..." value={todoValue} onChange={onChange}/>
        </TodoInputContainer>
    );
}
 
export default TodoForm;