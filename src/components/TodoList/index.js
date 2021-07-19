import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoListContainer } from './TodoList.elements';
import TodoListItem from './TodoListItem';
import TodoOptions from './TodoListOptions';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <TodoListContainer>
            {todos.map(todo => 
                <TodoListItem completed={todo.completed} text={todo.todo} id={todo.id} key={todo.id}/>
            )}
            <TodoOptions/>
        </TodoListContainer>
    );
}
 
export default TodoList;