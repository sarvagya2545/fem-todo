import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoListContainer, TodoListItems } from './TodoList.elements';
import TodoListItem from './TodoListItem';
import TodoOptions from './TodoListOptions';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <TodoListContainer>
            <TodoListItems>
                {todos.map(todo => 
                    <TodoListItem completed={todo.completed} text={todo.todo} id={todo.id} key={todo.id}/>
                )}
            </TodoListItems>
            <TodoOptions/>
        </TodoListContainer>
    );
}
 
export default TodoList;