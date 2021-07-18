import styled from 'styled-components';

export const BackgroundImage = styled.div`
    background: ${({ backImg }) => 'url(' + backImg + ')'} top center / cover no-repeat;
    height: 40vh;
    width: 100vw;
    position: fixed;
    z-index: -1;
`;

export const BackgroundCover = styled.div`
    background: ${({ theme }) => theme.bg};
    height: 60vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: -1;
`;