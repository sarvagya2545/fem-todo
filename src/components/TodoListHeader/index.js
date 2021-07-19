import React, { useContext } from 'react';
import { FlexBox } from '../../globalStyles';
import { Heading, ThemeButton } from './TodoListHeader.elements';
import themeToggleLight from '/images/icon-sun.svg';
import themeToggleDark from '/images/icon-moon.svg';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <FlexBox justifyContent="space-between">
            <Heading>TODO</Heading>
            <ThemeButton onClick={toggleTheme}>
                <img src={theme ==='dark' ? themeToggleLight : themeToggleDark} alt="Toggle theme" />
            </ThemeButton>
        </FlexBox>
    );
}
 
export default Header;