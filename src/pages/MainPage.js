import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { Background } from '../components';
import themes from '../themes';

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={themes[theme]}>
            <Background/>
        </ThemeProvider>
    );
}
 
export default MainPage;