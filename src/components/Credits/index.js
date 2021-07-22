import React from 'react';
import styled from 'styled-components';

const CreditText = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin: 3rem;

    transition: color var(--transition-time) ease;
`;

const Credits = ({ children }) => {
    return (
        <CreditText>{children}</CreditText>
    );
}
 
export default Credits;
