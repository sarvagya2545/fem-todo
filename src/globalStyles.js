import styled, { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
        user-select: none;
    }

    html {
        font-size: 62.5%;

        --color-gradient-start: hsl(192, 100%, 67%);
        --color-gradient-end: hsl(280, 87%, 65%);
        --gradient: linear-gradient(to right bottom, var(--color-gradient-start), var(--color-gradient-end));

        --transition-time: 0.4s;
    }

    body {
        box-sizing: border-box;
        font-size: 1.8rem;
        font-family: 'Josefin Sans', sans-serif;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
    align-items: ${({ alignItems }) => alignItems || 'initial'};
    flex-direction: ${({ direction }) => direction || 'initial'};
`;

export default globalStyle;