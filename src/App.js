import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { TodoContextProvider } from './contexts/TodoContext';
import GlobalStyle from './globalStyles';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <TodoContextProvider>
            <ThemeContextProvider>
                <GlobalStyle/>
                <MainPage/>
            </ThemeContextProvider>
        </TodoContextProvider>
    );
}

export default App;