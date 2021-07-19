import styled from 'styled-components';

export const TodoListItemContainer = styled.li`
    list-style-type: none;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme }) => theme.listbg};
    border-bottom: 1px solid ${({ theme }) => theme.separator};

    cursor: move;
`;

export const TodoText = styled.p`
    flex: 1;
    margin: 0 2rem;
    color: ${({ theme, completed }) => completed ? theme.textCompleted : theme.text};

    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

export const TodoRemoveButton = styled.button`
    border: none;
    background-color: inherit;

    transition: transform 0.2s ease;

    /* centering the grid */
    display: grid;
    place-items: center;

    &:hover {
        cursor: pointer;
    }

    & img {
        filter: invert(88%) sepia(17%) saturate(103%) hue-rotate(198deg) brightness(103%) contrast(91%);
    }

    ${TodoListItemContainer} & {
        transform: scale(0);
    }

    ${TodoListItemContainer}:hover & {
        transform: scale(1);
    }
`;