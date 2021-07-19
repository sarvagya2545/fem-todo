import styled from 'styled-components';

export const TodoListItems = styled.ul`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    max-height: calc(100% - 5.6rem);
`;

export const TodoListContainer = styled.ul`
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 30px 30px ${({ theme }) => theme.shadow};
    transition: box-shadow var(--transition-time) ease;
`;