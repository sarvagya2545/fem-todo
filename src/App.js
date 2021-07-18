import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import GlobalStyle from './globalStyles';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <ThemeContextProvider>
            <GlobalStyle/>
            <MainPage/>
        </ThemeContextProvider>
    );
}

export default App;