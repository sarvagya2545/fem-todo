import styled from 'styled-components';
import checkImg from '/images/icon-check.svg';

export const StyledCheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    visibility: hidden;

    &, &::before, &::after {
        transition: background-color var(--transition-time) ease;
    }

    &::before {
        content: '';
        position: absolute;
        visibility: visible;
        inset: 0;
        border: none;
        border-radius: 50%;

        background: ${({ theme }) => theme.deactivated};
    }

    &::after {
        content: '';
        position: absolute;
        visibility: visible;
        inset: 2px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.listbg};
    }

    &:checked::before, 
    &:hover:not(:disabled)::before {
        background: var(--gradient);
    }

    &:checked::after {
        background: url(${checkImg}) center no-repeat;
    }

    &:disabled {
        cursor: initial;
    }
`;