import React, { useContext, useState } from 'react';
import { TodoInputContainer, TodoInputTextBox } from './TodoInput.elements';
import { StyledCheckBox } from '../shared';
import { TodoContext } from '../../contexts/TodoContext';

const TodoForm = () => {
    const [todoValue, setTodoValue] = useState('');
    const { addTodoListItem } = useContext(TodoContext);

    const onChange = e => setTodoValue(e.target.value);

    const addTodo = (e) => {
        e.preventDefault();
        if(!todoValue.trim()) {
            return alert('Please write todo item before submitting')
        }

        addTodoListItem(todoValue);
        setTodoValue('');
    }

    return (
        <TodoInputContainer onSubmit={addTodo}>
            <StyledCheckBox disabled checked={false}/>
            <TodoInputTextBox placeholder="Create a new todo..." value={todoValue} onChange={onChange}/>
        </TodoInputContainer>
    );
}
 
export default TodoForm;