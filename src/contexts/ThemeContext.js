import React, { createContext, useEffect, useState } from "react";
import { saveThemePreference, getThemePreference } from '../persistToLocalStorage';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getThemePreference());

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    useEffect(() => {
        saveThemePreference(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}