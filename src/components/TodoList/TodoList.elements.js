import styled from 'styled-components';

export const TodoListContainer = styled.ul`
    display: flex;
    flex-direction: column;

    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 30px 30px ${({ theme }) => theme.shadow};
    transition: box-shadow var(--transition-time) ease;
`;