import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Background, TodoInput, TodoListHeader, TodoList, TodoItemsFilterList, Credits } from '../../components';
import { Container, TargetLink } from './MainPage.elements';
import themes from '../../themes';

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={themes[theme]}>
            <Background/>
            <Container>
                <TodoListHeader/>
                <TodoInput/>
                <TodoList/>
                <TodoItemsFilterList mobileOnly container/>
                <Credits>
                    Challenge By <TargetLink href="https://www.frontendmentor.io/">FrontendMentor</TargetLink>.
                    <br/>
                    Made with ❤️ by <TargetLink href="https://github.com/sarvagya2545">Sarvagya Sharma</TargetLink>
                </Credits>
            </Container>
        </ThemeProvider>
    );
}
 
export default MainPage;