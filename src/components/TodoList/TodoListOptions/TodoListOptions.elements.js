import styled from 'styled-components';
import { FlexBox } from '../../../globalStyles';

export const TodoOptionsContainer = styled(FlexBox)`
    padding: 2rem;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.listbg};
    transition: background-color var(--transition-time) ease;
`;

export const ItemsLeft = styled.span`
    color: ${({ theme }) => theme.footerItem};
    transition: color var(--transition-time) ease;
`;

export const ClearCompleted = styled.button`
    all: unset;
    color: ${({ theme }) => theme.footerItem};

    &:hover {
        color: ${({ theme }) => theme.footerItemHover};
        cursor: pointer;
    }

    transition: color var(--transition-time) ease;
`;