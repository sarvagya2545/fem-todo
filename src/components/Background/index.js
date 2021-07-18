import React, { useState } from 'react';
import { BackgroundCover, BackgroundImage } from './Background.elements';
import backgroundLight from '/images/bg-desktop-light.jpg';
import backgroundDark from '/images/bg-desktop-dark.jpg';

const Background = () => {
    const [theme, setTheme] = useState('light');

    return (
        <>
            <BackgroundImage backImg={theme === 'light' ? backgroundLight : backgroundDark}/>
            <BackgroundCover theme={theme}/>
        </>
    );
}
 
export default Background;