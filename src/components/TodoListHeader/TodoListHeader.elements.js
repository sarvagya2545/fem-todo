import styled from 'styled-components';

export const Heading = styled.h1`
    color: #fff;
    font-size: 4rem;
    letter-spacing: 10px;
`;

export const ThemeButton = styled.button`
    all: unset;
    cursor: pointer;
    display: grid;
    place-items: center;
    
    & img {
        width: 2.6rem;
        height: 2.6rem;
    }
`;