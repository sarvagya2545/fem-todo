import React, { useContext } from 'react';
import { BackgroundCover, BackgroundImage } from './Background.elements';
import backgroundLight from '/images/bg-desktop-light.jpg';
import backgroundDark from '/images/bg-desktop-dark.jpg';
import { ThemeContext } from '../../contexts/ThemeContext';

const Background = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <BackgroundImage backImg={theme === 'light' ? backgroundLight : backgroundDark}/>
            <BackgroundCover/>
        </>
    );
}
 
export default Background;