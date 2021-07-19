import styled from 'styled-components';

export const TodoInputContainer = styled.form`
    background-color: ${({ theme }) => theme.listbg};
    width: 100%;
    height: 6rem;
    border-radius: 6px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    gap: 3rem;
`;

export const TodoInputTextBox = styled.input.attrs({
    type: 'text'
})`
    border: none;
    outline: none;
    height: 3rem;
    flex: 1;
    font: inherit;
    background: inherit;
    caret-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.text};
    
    &::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }
`;