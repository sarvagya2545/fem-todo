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
    transition: all 0.4s ease;
    
    & span {
        position: relative;
        word-break: break-all;
    }

    & span::after {
        content: '';
        position: absolute;
        width: ${({ completed }) => completed ? "100%" : "0%"};
        height: 1px;
        background-color: ${({ theme, completed }) => completed ? theme.textCompleted : theme.text};
        left: 0;
        right: 0;
        top: calc(50% - 1px);
        transition: all 0.4s ease;
    }
`;

export const TodoRemoveButton = styled.button`
    border: none;
    background-color: inherit;

    transition: all 0.2s ease;

    /* centering the grid */
    display: grid;
    place-items: center;
    position: relative;

    &:hover {
        cursor: pointer;
    }
    
    &::before {
        content: '';
        position: absolute;
        inset: -1rem;
    }

    &:hover::before {
        background-color: ${({ theme }) => theme.separator};
    }

    & img {
        filter: invert(88%) sepia(17%) saturate(103%) hue-rotate(198deg) brightness(103%) contrast(91%);
    }

    ${TodoListItemContainer} & {
        transform: scale(0);

        @media screen and (max-width: 700px) {
            transform: scale(1);
        }
    }

    ${TodoListItemContainer}:hover & {
        transform: scale(1);
    }
`;