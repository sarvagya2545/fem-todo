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
    padding-top: 6rem;

    & ${TodoListContainer} {
        margin-bottom: auto;
        @media screen and (max-width: 700px) {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 5rem 4rem;
    }
`;