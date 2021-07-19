import styled from 'styled-components';
import { TodoListContainer } from '../../components/TodoList/TodoList.elements';

export const Container = styled.main`
    width: 100%;
    max-width: 60rem;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 4rem 0;

    & ${TodoListContainer} {
        margin-bottom: auto;
    }
`;