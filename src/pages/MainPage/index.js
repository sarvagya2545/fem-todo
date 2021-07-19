import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Background, TodoInput, TodoListHeader } from '../../components';
import { Container } from './MainPage.elements';
import themes from '../../themes';

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={themes[theme]}>
            <Background/>
            <Container>
                <TodoListHeader/>
                <TodoInput/>
            </Container>
        </ThemeProvider>
    );
}
 
export default MainPage;