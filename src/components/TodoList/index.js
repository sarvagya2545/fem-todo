import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoListContainer, TodoListItems } from './TodoList.elements';
import TodoListItem from './TodoListItem';
import TodoOptions from './TodoListOptions';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList = () => {
    const { todos, reorderTodo } = useContext(TodoContext);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if(!destination)
            return;

        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return;
        
        reorderTodo(source.index, destination.index, draggableId);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TodoListContainer>
                    <Droppable droppableId={'1'}>
                        {provided => (
                            <TodoListItems ref={provided.innerRef} {...provided.droppableProps}>
                                {todos.map((todo, index) => 
                                    <TodoListItem 
                                        completed={todo.completed}
                                        text={todo.todo}
                                        id={todo.id}
                                        key={todo.id}
                                        index={index}
                                    />
                                )}
                                {provided.placeholder}
                            </TodoListItems>
                        )}
                    </Droppable>
                <TodoOptions/>
            </TodoListContainer>
        </DragDropContext>
    );
}
 
export default TodoList;