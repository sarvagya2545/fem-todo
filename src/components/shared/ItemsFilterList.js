import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: none;
    @media screen and (max-width: 700px) {
        display: block;
    }

    background: ${({ theme }) => theme.listbg};
    box-shadow: 0 30px 30px ${({ theme }) => theme.shadow};
    padding: 2rem;
    border-radius: 4px;
    margin-top: auto;
`;

export const ItemsFilterList = styled.ul`
    display: ${({ mobileOnly }) => mobileOnly ? 'none' : 'flex'};
    @media screen and (max-width: 700px) {
        display: ${({ mobileOnly }) => mobileOnly ? 'flex' : 'none'};
    }

    list-style-type: none;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
`;

export const ItemsFilter = styled.li`
    color: ${({ theme, selected }) => selected ? theme.primaryColor : theme.footerItem};

    &:hover {
        color: ${({ theme, selected }) => selected ? theme.primaryColor : theme.footerItemHover};
        cursor: ${({ selected }) => selected ? 'inherit' : 'pointer'};
    }

    transition: color var(--transition-time) ease;
`;