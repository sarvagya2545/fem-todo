import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoListContainer } from './TodoList.elements';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <TodoListContainer>
            {todos.map(todo => 
                <TodoListItem completed={todo.completed} text={todo.todo} id={todo.id} key={todo.id}/>
            )}
        </TodoListContainer>
    );
}
 
export default TodoList;